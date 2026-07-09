'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FiChevronDown, FiArrowRight, FiDroplet, FiWind, FiSun, FiBox, FiZap } from 'react-icons/fi'
import { clsx } from 'clsx'
import { navCategoryItems } from '@/lib/products-data'

gsap.registerPlugin(useGSAP)

const iconMap = { Droplet: FiDroplet, Wind: FiWind, Sun: FiSun, Box: FiBox, Zap: FiZap }

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    mega: navCategoryItems,
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Knowledge Centre', href: '/knowledge-center' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null)
  const pathname = usePathname()
  const headerRef = useRef(null)
  const innerRef = useRef(null)
  const navWrapRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const hamburgerRef = useRef(null)
  const megaMenuRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 40)

      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY.current) {
          setVisible(false)
        } else {
          setVisible(true)
        }
      } else {
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setActiveCategory(null)
    setMobileProductsOpen(false)
    setMobileCategoryOpen(null)
  }, [pathname])

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2,
    })

    const links = navWrapRef.current?.querySelectorAll('.nav-link')
    if (links?.length) {
      gsap.from(links, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.4,
      })
    }

    const contactBtn = navWrapRef.current?.querySelector('.contact-btn')
    if (contactBtn) {
      gsap.from(contactBtn, {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: 'back.out(1.7)',
        delay: 0.8,
      })
    }
  }, { scope: headerRef })

  useGSAP(() => {
    gsap.to(innerRef.current, {
      y: visible ? 0 : -120,
      opacity: visible ? 1 : 0,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  }, { dependencies: [visible], scope: headerRef })

  useGSAP(() => {
    gsap.fromTo(megaMenuRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0, duration: 0.35, ease: 'power3.out',
        onStart: () => {
          if (megaMenuRef.current) megaMenuRef.current.style.display = 'block'
        }
      }
    )
  }, { dependencies: [activeDropdown], scope: headerRef })

  useGSAP(() => {
    if (!mobileOpen) return
    const items = mobileMenuRef.current?.querySelectorAll('.mobile-nav-item')
    if (!items?.length) return
    gsap.fromTo(items,
      { opacity: 0, y: 20, x: -10 },
      { opacity: 1, y: 0, x: 0, duration: 0.4, stagger: 0.04, ease: 'power3.out' }
    )
  }, { scope: mobileMenuRef, dependencies: [mobileOpen] })

  const displayCategory = activeCategory || (activeDropdown === 'Products' ? navCategoryItems[0] : null)
  const isActiveItem = (href) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header ref={headerRef} className="fixed left-0 right-0 top-0 z-50">
      <div>
        <div
          ref={innerRef}
          className={clsx(
            'w-full border-b transition-all duration-500',
            scrolled
              ? 'border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)]'
              : 'border-white/10 bg-white/95 backdrop-blur-xl shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
          )}
        >
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:h-[76px] lg:px-8">
            <Link href="/" className="flex items-center shrink-0">
              <div className="overflow-hidden flex items-center justify-center">
                <Image
                  src="/LOGO%20WITH%20TL.jpg"
                  alt="Falcon Chemicals"
                  width={50}
                  height={48}
                  className="w-[100px] h-full object-cover"
                />
              </div>
            </Link>

            <div ref={navWrapRef} className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative nav-link"
                  onMouseEnter={() => { setActiveDropdown(item.label); setActiveCategory(navCategoryItems[0]) }}
                  onMouseLeave={() => { setActiveDropdown(null); setActiveCategory(null) }}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      'relative isolate flex items-center gap-1 overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                      isActiveItem(item.href)
                        ? 'bg-gradient-to-r from-[#06294A] via-[#004B8D] to-[#06294A] text-white shadow-[0_12px_28px_rgba(0,75,141,0.24)] ring-1 ring-[#00B8D9]/25 after:absolute after:inset-y-1 after:left-1 after:w-8 after:rounded-full after:bg-white/15 after:blur-[2px] before:absolute before:bottom-1 before:left-1/2 before:h-1 before:w-8 before:-translate-x-1/2 before:rounded-full before:bg-[#9BD36A] before:shadow-[0_0_14px_rgba(155,211,106,0.9)]'
                        : 'text-slate-700 hover:bg-[#EAF6FF] hover:text-[#004B8D]'
                    )}
                  >
                    {item.label}
                    {item.mega && (
                      <FiChevronDown className={clsx(
                        'w-3 h-3 transition-transform duration-200',
                        activeDropdown === item.label && 'rotate-180'
                      )} />
                    )}
                  </Link>

                  {item.mega && activeDropdown === item.label && (
                    <div
                      ref={megaMenuRef}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[500px] z-50"
                      style={{ display: 'none', opacity: 0 }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => { setActiveDropdown(null); setActiveCategory(null) }}
                    >
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                        <div className="grid grid-cols-2 min-h-[350px]">
                          {/* Column 1: Categories */}
                          <div className="col-span-1 bg-slate-50 py-4">
                            <div className="px-3">
                              <span className="mb-3 block px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Categories</span>
                              {item.mega.map((cat) => {
                                const Icon = iconMap[cat.icon] || FiDroplet
                                return (
                                  <button
                                    key={cat.href}
                                    onMouseEnter={() => setActiveCategory(cat)}
                                    className={clsx(
                                      'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-left',
                                      activeCategory?.label === cat.label
                                        ? 'bg-white text-[#004B8D] shadow-sm'
                                        : 'text-slate-700 hover:bg-white/80 hover:text-[#004B8D]'
                                    )}
                                  >
                                    <span className={clsx(
                                      'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors',
                                      activeCategory?.label === cat.label ? 'bg-[#EAF6FF]' : 'bg-slate-200/70'
                                    )}>
                                      <Icon className={clsx(
                                        'w-4 h-4',
                                        activeCategory?.label === cat.label ? 'text-[#004B8D]' : 'text-slate-500'
                                      )} />
                                    </span>
                                    {cat.label}
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          {/* Column 2: Products */}
                          <div className="col-span-1 border-l border-slate-100 px-4 py-4">
                            <div className="mb-3">
                              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Products in {displayCategory?.label}</span>
                            </div>
                            <div className="space-y-0.5">
                              {(displayCategory?.products || []).map((p) => (
                                <Link
                                  key={p.href}
                                  href={p.href}
                                  className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-[#EAF6FF] hover:text-[#004B8D]"
                                >
                                  <span>{p.label}</span>
                                  <FiArrowRight className="h-3.5 w-3.5 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#004B8D]" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-3.5">
                          <Link
                            href="/products"
                            className="group flex items-center justify-between rounded-xl bg-[#06294A] px-4 py-2.5 transition-colors hover:bg-[#004B8D]"
                          >
                            <div>
                              <span className="text-sm font-semibold text-white">Browse Complete Catalog</span>
                              <p className="mt-0.5 text-xs text-white/50">24 products across 5 categories</p>
                            </div>
                            <FiArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="contact-btn ml-3 rounded-full bg-[#4B8B2B] px-5 py-2 text-sm font-bold text-white shadow-[0_8px_18px_rgba(75,139,43,0.18)] active:scale-[0.97]"
              >
                Contact Us
              </Link>
            </div>

            <button
              ref={hamburgerRef}
              className="relative flex h-8 w-8 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={clsx(
                'absolute h-[1.5px] w-5 rounded-full bg-[#06294A] transition-all duration-300',
                mobileOpen ? 'rotate-45' : '-translate-y-[4px]'
              )} />
              <span className={clsx(
                'absolute h-[1.5px] w-5 rounded-full bg-[#06294A] transition-all duration-300',
                mobileOpen ? 'opacity-0' : ''
              )} />
              <span className={clsx(
                'absolute h-[1.5px] w-5 rounded-full bg-[#06294A] transition-all duration-300',
                mobileOpen ? '-rotate-45' : 'translate-y-[4px]'
              )} />
            </button>
          </nav>

          {mobileOpen && (
            <div ref={mobileMenuRef} className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-slate-100 bg-white lg:hidden">
              <div className="mx-auto max-w-7xl space-y-2.5 px-4 py-4">
                {navItems.map((item) => {
                  const hasSubmenu = item.mega
                  const isSubmenuOpen = mobileProductsOpen && item.label === 'Products'
                  
                  return (
                    <div key={item.href} className="mobile-nav-item border-b border-slate-100 last:border-b-0 pb-2">
                      <div className="flex items-center justify-between py-1.5">
                        <Link
                          href={item.href}
                          className="text-sm font-semibold text-[#071F3D] transition-colors hover:text-[#004B8D]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                        {hasSubmenu && (
                          <button
                            type="button"
                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all hover:bg-slate-100 hover:text-[#004B8D]"
                          >
                            <FiChevronDown className={clsx(
                              'w-3.5 h-3.5 transition-transform duration-200',
                              mobileProductsOpen && 'rotate-180 text-[#004B8D]'
                            )} />
                          </button>
                        )}
                      </div>

                      {hasSubmenu && isSubmenuOpen && (
                          <div className="ml-3 mt-1 space-y-2 border-l-2 border-slate-100 pb-3 pl-3">
                          <Link
                            href={item.href}
                            className="block py-1 text-xs font-bold uppercase tracking-wider text-[#4B8B2B]"
                            onClick={() => setMobileOpen(false)}
                          >
                            Browse All Products
                          </Link>
                          
                          {item.mega.map((cat) => {
                            const isCatOpen = mobileCategoryOpen === cat.label
                            const Icon = iconMap[cat.icon] || FiDroplet
                            return (
                              <div key={cat.label} className="space-y-1">
                                <button
                                  type="button"
                                  onClick={() => setMobileCategoryOpen(isCatOpen ? null : cat.label)}
                                  className="flex w-full items-center justify-between py-1.5 text-left text-xs font-semibold text-slate-700 transition-colors hover:text-[#004B8D]"
                                >
                                  <span className="flex items-center gap-2">
                                    <Icon className="h-3.5 w-3.5 text-[#004B8D]" />
                                    {cat.label}
                                  </span>
                                  <FiChevronDown className={clsx(
                                    'w-3 h-3 transition-transform duration-200',
                                    isCatOpen && 'rotate-180 text-[#004B8D]'
                                  )} />
                                </button>
                                
                                {isCatOpen && (
                                  <div className="ml-3 mt-0.5 space-y-1 border-l border-slate-100 pl-3">
                                    {cat.products.map((p) => (
                                      <Link
                                        key={p.href}
                                        href={p.href}
                                        className="block py-1 text-xs text-slate-500 transition-colors hover:text-[#004B8D]"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {p.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
                <Link
                  href="/contact"
                  className="mt-4 block rounded-full bg-[#4B8B2B] px-5 py-2.5 text-center text-sm font-bold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
