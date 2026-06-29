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

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      <div className="px-4 pt-4">
        <div
          ref={innerRef}
          className={clsx(
            'mx-auto max-w-7xl rounded-2xl transition-all duration-500',
            scrolled
              ? 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
              : 'bg-white/70 backdrop-blur-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
          )}
        >
          <nav className="flex items-center justify-between h-16 lg:h-18 px-4 lg:px-6 bg-white rounded-xl">
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
                      'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1',
                      pathname === item.href
                        ? 'text-copper-600'
                        : 'text-ink-500 hover:text-ink-800 hover:bg-steel-50'
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
                      <div className="bg-white rounded-2xl shadow-xl border border-steel-100 overflow-hidden">
                        <div className="grid grid-cols-2 min-h-[350px]">
                          {/* Column 1: Categories */}
                          <div className="col-span-1 bg-steel-50 py-4">
                            <div className="px-3">
                              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-400 mb-3 block px-3">Categories</span>
                              {item.mega.map((cat) => {
                                const Icon = iconMap[cat.icon] || FiDroplet
                                return (
                                  <button
                                    key={cat.href}
                                    onMouseEnter={() => setActiveCategory(cat)}
                                    className={clsx(
                                      'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left',
                                      activeCategory?.label === cat.label
                                        ? 'bg-white text-copper-600 shadow-sm'
                                        : 'text-ink-600 hover:bg-white/60 hover:text-copper-600'
                                    )}
                                  >
                                    <span className={clsx(
                                      'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors',
                                      activeCategory?.label === cat.label ? 'bg-copper-100' : 'bg-steel-200/60'
                                    )}>
                                      <Icon className={clsx(
                                        'w-4 h-4',
                                        activeCategory?.label === cat.label ? 'text-copper-600' : 'text-ink-400'
                                      )} />
                                    </span>
                                    {cat.label}
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          {/* Column 2: Products */}
                          <div className="col-span-1 border-l border-steel-100 py-4 px-4">
                            <div className="mb-3">
                              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-400">Products in {displayCategory?.label}</span>
                            </div>
                            <div className="space-y-0.5">
                              {(displayCategory?.products || []).map((p) => (
                                <Link
                                  key={p.href}
                                  href={p.href}
                                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-ink-600 hover:text-copper-600 hover:bg-copper-50/50 transition-colors group"
                                >
                                  <span>{p.label}</span>
                                  <FiArrowRight className="w-3.5 h-3.5 text-steel-300 group-hover:text-copper-500 group-hover:translate-x-0.5 transition-all" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="border-t border-steel-100 px-5 py-3.5 bg-gradient-to-r from-steel-50 to-white">
                          <Link
                            href="/products"
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-ink-800 hover:bg-ink-700 group transition-colors"
                          >
                            <div>
                              <span className="text-sm font-semibold text-white">Browse Complete Catalog</span>
                              <p className="text-xs text-white/40 mt-0.5">24 products across 5 categories</p>
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
                className="contact-btn ml-3 px-5 py-2 rounded-full text-sm font-semibold active:scale-[0.97] relative overflow-hidden group bg-ink-800"
              >
                <span className="relative z-10 text-white">Contact Us</span>
                <span className="absolute inset-0 bg-ink-600 clip-reveal" />
              </Link>
            </div>

            <button
              ref={hamburgerRef}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={clsx(
                'absolute w-5 h-[1.5px] rounded-full transition-all duration-300 bg-ink-800',
                mobileOpen ? 'rotate-45' : '-translate-y-[4px]'
              )} />
              <span className={clsx(
                'absolute w-5 h-[1.5px] rounded-full transition-all duration-300 bg-ink-800',
                mobileOpen ? 'opacity-0' : ''
              )} />
              <span className={clsx(
                'absolute w-5 h-[1.5px] rounded-full transition-all duration-300 bg-ink-800',
                mobileOpen ? '-rotate-45' : 'translate-y-[4px]'
              )} />
            </button>
          </nav>

          {mobileOpen && (
            <div ref={mobileMenuRef} className="lg:hidden border-t border-steel-100 max-h-[70vh] overflow-y-auto">
              <div className="px-4 py-4 space-y-2.5">
                {navItems.map((item) => {
                  const hasSubmenu = item.mega
                  const isSubmenuOpen = mobileProductsOpen && item.label === 'Products'
                  
                  return (
                    <div key={item.href} className="mobile-nav-item border-b border-steel-100/50 last:border-b-0 pb-2">
                      <div className="flex items-center justify-between py-1.5">
                        <Link
                          href={item.href}
                          className="text-sm font-semibold text-ink-800 hover:text-copper-600 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                        {hasSubmenu && (
                          <button
                            type="button"
                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                            className="w-7 h-7 rounded-lg bg-steel-50 flex items-center justify-center text-steel-500 hover:bg-steel-100 hover:text-ink-800 transition-all"
                          >
                            <FiChevronDown className={clsx(
                              'w-3.5 h-3.5 transition-transform duration-200',
                              mobileProductsOpen && 'rotate-180 text-copper-600'
                            )} />
                          </button>
                        )}
                      </div>

                      {hasSubmenu && isSubmenuOpen && (
                        <div className="ml-3 pl-3 border-l-2 border-steel-100 space-y-2 mt-1 pb-3">
                          <Link
                            href={item.href}
                            className="block py-1 text-xs font-bold text-copper-600 uppercase tracking-wider"
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
                                  className="w-full flex items-center justify-between py-1.5 text-xs font-semibold text-ink-600 hover:text-copper-600 transition-colors text-left"
                                >
                                  <span className="flex items-center gap-2">
                                    <Icon className="w-3.5 h-3.5 text-copper-500" />
                                    {cat.label}
                                  </span>
                                  <FiChevronDown className={clsx(
                                    'w-3 h-3 transition-transform duration-200',
                                    isCatOpen && 'rotate-180 text-copper-600'
                                  )} />
                                </button>
                                
                                {isCatOpen && (
                                  <div className="ml-3 pl-3 border-l border-steel-100/50 space-y-1 mt-0.5">
                                    {cat.products.map((p) => (
                                      <Link
                                        key={p.href}
                                        href={p.href}
                                        className="block py-1 text-xs text-steel-500 hover:text-copper-600 transition-colors"
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
                  className="block text-center mt-4 px-5 py-2.5 rounded-full text-sm font-semibold relative overflow-hidden group bg-ink-800"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="relative z-10 text-white">Contact Us</span>
                  <span className="absolute inset-0 bg-ink-600 clip-reveal" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}