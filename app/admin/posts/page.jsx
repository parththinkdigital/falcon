'use client'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

export default function AdminPostsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-heading font-bold text-primary-500">Blog Posts</h1>
        <Link href="/admin/posts/new" className="btn-primary text-sm"><FiPlus className="w-4 h-4" /> Add Post</Link>
      </div>
      <div className="bg-white border border-industrial-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-industrial-50">
            <tr><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Title</th><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Category</th><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Author</th><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Date</th><th className="text-right px-4 py-3 text-sm font-medium text-industrial-600">Actions</th></tr>
          </thead>
          <tbody className="divide-y divide-industrial-100">
            <tr><td colSpan={5} className="px-4 py-8 text-center text-industrial-400 text-sm">No posts yet.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
