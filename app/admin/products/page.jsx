'use client'
import Link from 'next/link'
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi'

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-heading font-bold text-primary-500">Products</h1>
        <Link href="/admin/products/new" className="btn-primary text-sm"><FiPlus className="w-4 h-4" /> Add Product</Link>
      </div>
      <div className="bg-white border border-industrial-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-industrial-50">
            <tr><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Name</th><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Category</th><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">SKU</th><th className="text-right px-4 py-3 text-sm font-medium text-industrial-600">Actions</th></tr>
          </thead>
          <tbody className="divide-y divide-industrial-100">
            <tr><td colSpan={4} className="px-4 py-8 text-center text-industrial-400 text-sm">No products yet. Click "Add Product" to create one.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
