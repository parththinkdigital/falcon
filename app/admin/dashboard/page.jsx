'use client'
import { FiPackage, FiFileText, FiMail, FiEye } from 'react-icons/fi'

const stats = [
  { label: 'Total Products', value: '48', change: '+12%', icon: FiPackage },
  { label: 'Blog Posts', value: '24', change: '+5%', icon: FiFileText },
  { label: 'New Inquiries', value: '12', change: '+8%', icon: FiMail },
  { label: 'Page Views', value: '2,847', change: '+18%', icon: FiEye },
]

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-primary-500 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-white border border-industrial-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-accent-500" />
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-heading font-bold text-primary-500">{stat.value}</div>
              <div className="text-sm text-industrial-500 mt-1">{stat.label}</div>
            </div>
          )
        })}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-industrial-200 p-6"><h2 className="font-heading font-semibold text-lg text-primary-500 mb-4">Recent Inquiries</h2><p className="text-industrial-500 text-sm">No recent inquiries.</p></div>
        <div className="bg-white border border-industrial-200 p-6"><h2 className="font-heading font-semibold text-lg text-primary-500 mb-4">Quick Actions</h2><p className="text-industrial-500 text-sm">Manage your content and products from the sidebar.</p></div>
      </div>
    </div>
  )
}
