'use client'

import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { api } from '@/lib/api'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
const ASSET_BASE = API_BASE.replace(/\/api\/?$/, '')

const demoItems = [
  { id: 'demo-facility-1', title: 'Manufacturing Facility', category: 'Facility', url: 'https://picsum.photos/seed/falcon-facility/900/700' },
  { id: 'demo-facility-2', title: 'Quality Lab', category: 'Facility', url: 'https://picsum.photos/seed/falcon-quality-lab/900/700' },
  { id: 'demo-team-1', title: 'Falcon Team', category: 'Team', url: 'https://picsum.photos/seed/falcon-team/900/700' },
  { id: 'demo-team-2', title: 'Technical Support', category: 'Team', url: 'https://picsum.photos/seed/falcon-support/900/700' },
  { id: 'demo-products-1', title: 'Product Range', category: 'Products', url: 'https://picsum.photos/seed/falcon-products/900/700' },
  { id: 'demo-products-2', title: 'Pressroom Chemistry', category: 'Products', url: 'https://picsum.photos/seed/falcon-chemistry/900/700' },
  { id: 'demo-events-1', title: 'Trade Exhibition', category: 'Events', url: 'https://picsum.photos/seed/falcon-event/900/700' },
  { id: 'demo-events-2', title: 'Partner Meet', category: 'Events', url: 'https://picsum.photos/seed/falcon-partners/900/700' },
]

const demoTags = ['All', 'Facility', 'Team', 'Products', 'Events']

function getAssetUrl(url) {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${ASSET_BASE}${url}`
}

export default function GalleryPage() {
  const [items, setItems] = useState([])
  const [tags, setTags] = useState([])
  const [activeTag, setActiveTag] = useState('All')
  const [activeImage, setActiveImage] = useState(null)
  const [status, setStatus] = useState('')

  useEffect(() => {
    async function loadGallery() {
      try {
        const [galleryItems, galleryTags] = await Promise.all([
          api.getGalleryItems('type=image'),
          api.getGalleryTags(),
        ])
        if (!galleryItems.length) {
          setItems(demoItems)
          setTags(demoTags)
          setStatus('')
          return
        }

        setItems(galleryItems)
        setTags(['All', ...galleryTags.filter(Boolean)])
        setStatus('')
      } catch {
        setItems(demoItems)
        setTags(demoTags)
        setStatus('')
      }
    }

    loadGallery()
  }, [])

  const filteredItems = useMemo(() => {
    if (activeTag === 'All') return items
    return items.filter((item) => item.category === activeTag)
  }, [activeTag, items])

  return (
    <>
      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-[#00B8D9]/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-24 h-96 w-96 rounded-full bg-[#4B8B2B]/20 blur-[120px]" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Gallery</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Falcon
              <span className="block text-[#00B8D9]">In Focus</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">
              Images organized by departments and tags, from facilities and teams to products and events.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50 to-white px-6 py-12 md:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex gap-3 overflow-x-auto pb-1">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-widest ${activeTag === tag ? 'bg-[#004B8D] text-white shadow-[0_8px_20px_rgba(0,75,141,0.2)]' : 'bg-white text-[#071F3D] shadow-[0_4px_16px_rgba(15,23,42,0.08)]'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {status && <p className="py-12 text-center font-semibold text-slate-500">{status}</p>}

          {!status && filteredItems.length === 0 && (
            <p className="py-12 text-center font-semibold text-slate-500">No images found for this tag.</p>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveImage(item)}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70"
              >
                <img src={getAssetUrl(item.thumbnail || item.url)} alt={item.title || item.category || 'Gallery image'} className="aspect-[4/3] w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#031E37]/95 p-4 backdrop-blur-sm md:p-8" onClick={() => setActiveImage(null)}>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveImage(null)
            }}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#071F3D] shadow-lg"
            aria-label="Close gallery image"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={getAssetUrl(activeImage.thumbnail || activeImage.url)}
            alt={activeImage.title || activeImage.category || 'Gallery image'}
            className="max-h-[86vh] max-w-[92vw] rounded-[1.5rem] object-contain shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
