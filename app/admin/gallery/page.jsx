'use client'

import { useEffect, useState } from 'react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
const ASSET_BASE = API_BASE.replace(/\/api\/?$/, '')

function getAssetUrl(url) {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${ASSET_BASE}${url}`
}

export default function AdminGalleryPage() {
  const [items, setItems] = useState([])
  const [tags, setTags] = useState([])
  const [file, setFile] = useState(null)
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')

  const loadGallery = async () => {
    const [itemsRes, tagsRes] = await Promise.all([
      fetch(`${API_BASE}/gallery`),
      fetch(`${API_BASE}/gallery/tags`),
    ])
    setItems(await itemsRes.json())
    setTags(await tagsRes.json())
  }

  useEffect(() => {
    loadGallery().catch(() => setStatus('Unable to load gallery'))
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!file) return setStatus('Select an image first')
    if (!category.trim()) return setStatus('Add a tag or department')

    const token = localStorage.getItem('adminToken')
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title.trim() || file.name)
    formData.append('category', category.trim())
    formData.append('type', file.type.startsWith('video/') ? 'video' : 'image')

    const res = await fetch(`${API_BASE}/gallery`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: formData,
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      return setStatus(data.message || 'Upload failed')
    }

    setFile(null)
    setTitle('')
    setCategory('')
    setStatus('Uploaded')
    await loadGallery()
  }

  const handleDelete = async (id) => {
    const token = localStorage.getItem('adminToken')
    const res = await fetch(`${API_BASE}/gallery/${id}`, {
      method: 'DELETE',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
    if (!res.ok) return setStatus('Delete failed')
    await loadGallery()
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading font-bold text-primary-500">Gallery</h1>

      <form onSubmit={handleSubmit} className="mb-8 grid gap-4 bg-white p-6 shadow-sm md:grid-cols-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-industrial-700">Image</label>
          <input type="file" accept="image/*" onChange={(event) => setFile(event.target.files?.[0] || null)} className="w-full text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-industrial-700">Tag / Department</label>
          <input list="gallery-tags" value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Team, Facility, R&D" className="w-full border border-industrial-200 px-3 py-2 text-sm" />
          <datalist id="gallery-tags">
            {tags.map((tag) => <option key={tag} value={tag} />)}
          </datalist>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-industrial-700">Title</label>
          <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Optional" className="w-full border border-industrial-200 px-3 py-2 text-sm" />
        </div>
        <div className="flex items-end">
          <button type="submit" className="btn-primary w-full justify-center text-sm">Upload</button>
        </div>
        {status && <p className="md:col-span-4 text-sm text-industrial-500">{status}</p>}
      </form>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img src={getAssetUrl(item.thumbnail || item.url)} alt={item.title} className="aspect-[4/3] w-full object-cover" />
            <div className="flex items-center justify-between gap-3 p-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-500">{item.category || 'General'}</p>
                <p className="mt-1 text-sm text-industrial-500">{item.title}</p>
              </div>
              <button type="button" onClick={() => handleDelete(item.id)} className="text-sm font-semibold text-red-600">Delete</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
