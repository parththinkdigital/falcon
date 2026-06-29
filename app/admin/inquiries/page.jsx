'use client'
export default function AdminInquiriesPage() {
  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-primary-500 mb-8">Inquiries</h1>
      <div className="bg-white border border-industrial-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-industrial-50">
            <tr><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Name</th><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Company</th><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Email</th><th className="text-left px-4 py-3 text-sm font-medium text-industrial-600">Date</th><th className="text-right px-4 py-3 text-sm font-medium text-industrial-600">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-industrial-100">
            <tr><td colSpan={5} className="px-4 py-8 text-center text-industrial-400 text-sm">No inquiries yet.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
