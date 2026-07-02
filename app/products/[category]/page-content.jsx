'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiChevronRight, FiArrowRight, FiCheck, FiDroplet } from 'react-icons/fi'
import { getCategoryById } from '@/lib/products-data'
import ScrollReveal from '@/components/shared/ScrollReveal'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const allFilters = ['All', 'Fountain Solutions', 'Plate Cleaners', 'Roller & Blanket Washes', 'IPA Replacements']

export default function ProductCategoryContent({ category }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const gridRef = useRef(null)

  const data = getCategoryById(category)

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-ink-800 mb-4">Category Not Found</h1>
          <p className="text-steel-500 mb-6">The category you are looking for does not exist.</p>
          <Link href="/products" className="btn-primary">View All Products</Link>
        </div>
      </div>
    )
  }

  const filteredProducts = activeFilter === 'All'
    ? data.products
    : data.products.filter((p) => p.name.toLowerCase().includes(activeFilter.toLowerCase()))

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll('.product-card')
    if (!cards?.length) return
    gsap.fromTo(cards,
      { opacity: 0, y: 48, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.7,
        stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 88%', once: true },
      },
    )
  }, [activeFilter])

  const catName = data.title

  return (
    <>
      <section className="relative min-h-[45dvh] flex items-center bg-ink-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div className="absolute top-1/3 -left-48 w-80 h-80 bg-copper-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-copper-500/5 rounded-full blur-[100px]" />
        <div className="container-custom relative z-10 pt-28 pb-12">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-sm text-steel-400 mb-6">
              <Link href="/products" className="hover:text-copper-400 transition-colors">Products</Link>
              <FiChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-medium">{catName}</span>
            </nav>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight text-white text-balance mb-4 max-w-3xl">
              {data.title}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              {data.description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <span className="text-sm text-white/30 font-medium">{data.products.length} products</span>
              <span className="w-px h-4 bg-white/10" />
              <div className="flex gap-2">
                {data.products.slice(0, 5).map((p) => (
                  <span key={p.code} className="px-2.5 py-1 rounded-md bg-white/5 text-white/40 text-[11px] font-mono">
                    {p.code}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          
          <div ref={gridRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.code}
                className="product-card bg-white rounded-2xl shadow-sm border border-steel-200 overflow-hidden transition-all duration-500 hover:shadow-lg h-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-4 sm:p-6 bg-white border-b lg:border-b-0 lg:border-r border-steel-100">
                    <div className="relative w-full max-w-[180px]">
                      <div className="w-32 h-44 mx-auto bg-gradient-to-b from-white to-steel-50 rounded-t-2xl rounded-b-xl border border-steel-200 relative flex items-center justify-center shadow-sm">
                        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-8 h-5 border-2 border-steel-200 rounded-t-full bg-white/50" />
                        <div className="absolute top-5 inset-x-3 bg-white border border-steel-200 rounded p-1.5 shadow-sm">
                          <div className="h-0.5 w-full bg-steel-100 rounded mb-1" />
                          <div className="h-0.5 w-2/3 bg-steel-100 rounded" />
                        </div>
                        <div className="relative z-10">
                          <FiDroplet className="w-12 h-12 text-copper-300/40" strokeWidth={1} />
                        </div>
                        <div className="absolute bottom-3 inset-x-0 text-center">
                          <span className="text-[8px] font-bold font-mono text-steel-400 tracking-widest">{p.code}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col justify-center">
                    <h2 className="font-heading font-bold text-base sm:text-lg tracking-tight text-ink-800 mb-2">
                      {p.name}
                    </h2>
                    <p className="text-steel-500 leading-relaxed mb-3 line-clamp-3 text-sm">
                      {p.description}
                    </p>
                    <ul className="space-y-1">
                      {p.features.slice(0, 2).map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-xs text-steel-600">
                          <span className="w-3.5 h-3.5 rounded-full bg-copper-500/10 flex items-center justify-center shrink-0 mt-0.5">
                            <FiCheck className="w-2 h-2 text-copper-500" />
                          </span>
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-steel-50 border-t border-steel-100 px-4 sm:px-6 py-4">
                  <div className="flex items-center justify-around text-sm">
                    <Link
                      href={`/products/${category}/${p.code}`}
                      className="text-copper-600 hover:text-copper-700 font-semibold transition-colors inline-flex items-center justify-center gap-1.5 px-2 py-1.5 flex-1 text-center"
                    >
                      View Details
                    </Link>
                    <span className="text-steel-300">|</span>
                    <Link
                      href="#"
                      className="text-copper-600 hover:text-copper-700 font-semibold transition-colors inline-flex items-center justify-center gap-1.5 px-2 py-1.5 flex-1 text-center"
                    >
                      View Technical Specification
                    </Link>
                    <span className="text-steel-300">|</span>
                    <Link
                      href="#"
                      className="text-copper-600 hover:text-copper-700 font-semibold transition-colors inline-flex items-center justify-center gap-1.5 px-2 py-1.5 flex-1 text-center"
                    >
                      Request a Sample
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-steel-400 text-sm">No products match this filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
