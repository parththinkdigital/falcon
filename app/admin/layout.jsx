'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiPackage, FiFileText, FiImage, FiMail, FiSettings, FiLogOut } from 'react-icons/fi'
import { clsx } from 'clsx'

const sidebarLinks = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: FiHome },
  { label: 'Products', href: '/admin/products', icon: FiPackage },
  { label: 'Posts', href: '/admin/posts', icon: FiFileText },
  { label: 'Gallery', href: '/admin/gallery', icon: FiImage },
  { label: 'Inquiries', href: '/admin/inquiries', icon: FiMail },
  { label: 'Settings', href: '/admin/settings', icon: FiSettings },
]

export default function AdminLayout({ children }) {
  const pathname = usePathname()

  if (pathname === '/admin/login') return <>{children}</>

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-industrial-900 text-white p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-sm bg-accent-500 flex items-center justify-center font-heading font-bold">F</div>
          <span className="font-heading font-semibold">Admin Panel</span>
        </div>
        <nav className="flex-1 space-y-1">
          {sidebarLinks.map(link => {
            const Icon = link.icon
            return (
              <Link key={link.href} href={link.href} className={clsx('flex items-center gap-3 px-3 py-2.5 text-sm rounded-sm transition-colors', pathname === link.href ? 'bg-white/10 text-white' : 'text-industrial-400 hover:text-white hover:bg-white/5')}>
                <Icon className="w-4 h-4" />{link.label}
              </Link>
            )
          })}
        </nav>
        <Link href="/" className="flex items-center gap-3 text-sm text-industrial-400 hover:text-white transition-colors"><FiLogOut className="w-4 h-4" /> Back to Site</Link>
      </aside>
      <main className="flex-1 bg-industrial-50 p-8">{children}</main>
    </div>
  )
}
