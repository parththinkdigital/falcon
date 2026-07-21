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
      { opacity: 0, y: 8, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.22, ease: 'power3.out',
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
  const totalProductCount = navCategoryItems.reduce((total, cat) => total + cat.products.length, 0)

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
                      className="absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 pt-2"
                      style={{ display: 'none', opacity: 0 }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => { setActiveDropdown(null); setActiveCategory(null) }}
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_18px_55px_rgba(2,41,74,0.18)] ring-1 ring-[#00B8D9]/10">
                        <div className="relative overflow-hidden bg-[#06294A] px-5 py-4 text-white">
                          <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#00B8D9]/25 blur-2xl" />
                          <div className="absolute bottom-0 right-14 h-16 w-16 rounded-full bg-[#9BD36A]/20 blur-xl" />
                          <div className="relative flex items-center justify-between gap-5">
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#9BD36A]">Product Navigator</span>
                              <h2 className="mt-1 text-xl font-extrabold tracking-tight">Pressroom Chemistry Catalog</h2>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-right backdrop-blur">
                              <span className="block text-xl font-extrabold leading-none">{totalProductCount}</span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Products</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid min-h-[330px] grid-cols-[230px_1fr] bg-white">
                          <div className="bg-gradient-to-b from-slate-50 to-white p-3">
                            <div>
                              <span className="mb-2 block px-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Categories</span>
                              {item.mega.map((cat) => {
                                const Icon = iconMap[cat.icon] || FiDroplet
                                return (
                                  <button
                                    key={cat.href}
                                    onMouseEnter={() => setActiveCategory(cat)}
                                    className={clsx(
                                      'group mb-1 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left text-xs font-bold transition-[background,box-shadow,transform,color] duration-150 active:scale-[0.98]',
                                      activeCategory?.label === cat.label
                                        ? 'translate-x-0.5 bg-white text-[#004B8D] shadow-[0_10px_22px_rgba(15,23,42,0.08)] ring-1 ring-[#00B8D9]/15'
                                        : 'text-slate-700 hover:bg-white/80 hover:text-[#004B8D] hover:shadow-sm'
                                    )}
                                  >
                                    <span className={clsx(
                                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors',
                                      activeCategory?.label === cat.label ? 'bg-[#004B8D] text-white' : 'bg-slate-200/70 text-slate-500 group-hover:bg-[#EAF6FF] group-hover:text-[#004B8D]'
                                    )}>
                                      <Icon className="h-3.5 w-3.5" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className="block truncate">{cat.label}</span>
                                      <span className="mt-0.5 block text-[10px] font-semibold text-slate-400">{cat.products.length} products</span>
                                    </span>
                                    <FiArrowRight className={clsx(
                                      'h-3.5 w-3.5 shrink-0 transition-all',
                                      activeCategory?.label === cat.label ? 'translate-x-0 text-[#4B8B2B]' : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                                    )} />
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          <div className="border-l border-slate-100 p-4">
                            <div className="mb-3 flex items-center justify-between gap-4">
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4B8B2B]">Products in</span>
                                <h3 className="mt-0.5 text-base font-extrabold text-[#071F3D]">{displayCategory?.label}</h3>
                              </div>
                              <Link
                                href={displayCategory?.href || '/products'}
                                className="rounded-full border border-[#004B8D]/15 px-3 py-1.5 text-[11px] font-bold text-[#004B8D] transition hover:bg-[#004B8D] hover:text-white active:scale-[0.97]"
                              >
                                View Range
                              </Link>
                            </div>
                            <div className="grid max-h-[242px] grid-cols-2 gap-1.5 overflow-y-auto pr-1">
                              {(displayCategory?.products || []).map((p) => (
                                <Link
                                  key={p.href}
                                  href={p.href}
                                  className="group rounded-xl border border-slate-100 bg-white p-2.5 transition-[border-color,background,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-[#00B8D9]/35 hover:bg-[#F8FCFF] hover:shadow-[0_8px_18px_rgba(15,23,42,0.07)] active:scale-[0.98]"
                                >
                                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#004B8D]/55">SKU {p.href.split('/').pop()}</span>
                                  <span className="mt-1 line-clamp-2 block text-xs font-bold leading-4 text-slate-700 group-hover:text-[#004B8D]">{p.label}</span>
                                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#4B8B2B] opacity-0 transition-all duration-150 group-hover:opacity-100">
                                    Details
                                    <FiArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-slate-100 bg-gradient-to-r from-[#F6FAFF] via-white to-[#F4FAF0] px-4 py-3">
                          <Link
                            href="/products"
                            className="group flex items-center justify-between rounded-xl bg-[#06294A] px-4 py-2.5 transition-[background,transform] duration-150 hover:bg-[#004B8D] active:scale-[0.98]"
                          >
                            <div>
                              <span className="text-sm font-extrabold text-white">Browse Complete Catalog</span>
                              <p className="mt-0.5 text-xs font-medium text-white/55">{totalProductCount} products across {navCategoryItems.length} categories</p>
                            </div>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white/20">
                              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </span>
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
                        <div className="mt-2 rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
                          <Link
                            href={item.href}
                            className="mb-3 flex items-center justify-between rounded-xl bg-[#06294A] px-4 py-3 text-white"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span>
                              <span className="block text-sm font-extrabold">Browse All Products</span>
                              <span className="mt-0.5 block text-[11px] font-medium text-white/55">{totalProductCount} products across {navCategoryItems.length} ranges</span>
                            </span>
                            <FiArrowRight className="h-4 w-4 text-white/70" />
                          </Link>
                           
                          {item.mega.map((cat) => {
                            const isCatOpen = mobileCategoryOpen === cat.label
                            const Icon = iconMap[cat.icon] || FiDroplet
                            return (
                              <div key={cat.label} className="mb-2 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100 last:mb-0">
                                <button
                                  type="button"
                                  onClick={() => setMobileCategoryOpen(isCatOpen ? null : cat.label)}
                                  className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-xs font-bold text-slate-700 transition-colors hover:text-[#004B8D]"
                                >
                                  <span className="flex min-w-0 items-center gap-2.5">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF6FF] text-[#004B8D]">
                                      <Icon className="h-3.5 w-3.5" />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="block truncate">{cat.label}</span>
                                      <span className="mt-0.5 block text-[10px] font-semibold text-slate-400">{cat.products.length} products</span>
                                    </span>
                                  </span>
                                  <FiChevronDown className={clsx(
                                    'h-3 w-3 shrink-0 transition-transform duration-200',
                                    isCatOpen && 'rotate-180 text-[#004B8D]'
                                  )} />
                                </button>
                                
                                {isCatOpen && (
                                  <div className="grid grid-cols-1 gap-1 border-t border-slate-100 bg-white px-3 py-2">
                                    {cat.products.map((p) => (
                                      <Link
                                        key={p.href}
                                        href={p.href}
                                        className="flex items-center justify-between rounded-lg px-2 py-2 text-xs font-semibold text-slate-500 transition-colors hover:bg-[#EAF6FF] hover:text-[#004B8D]"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        <span>{p.label}</span>
                                        <span className="ml-3 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-extrabold text-slate-400">{p.href.split('/').pop()}</span>
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
