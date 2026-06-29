'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight, FiDroplet, FiWind, FiSun, FiBox, FiZap } from 'react-icons/fi'
import { categories } from '@/lib/products-data'
import ScrollReveal from '@/components/shared/ScrollReveal'
import SectionHeader from '@/components/shared/SectionHeader'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const iconMap = { Droplet: FiDroplet, Wind: FiWind, Sun: FiSun, Box: FiBox, Zap: FiZap }

export default function ProductsPage() {
  const heroRef = useRef(null)
  const ctaRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(heroRef.current?.querySelectorAll('.hero-stagger'),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
    )
  }, { scope: heroRef })

  useGSAP(() => {
    gsap.fromTo(ctaRef.current?.querySelectorAll('.cta-stagger'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
    )
  }, { scope: ctaRef })

  return (
    <>
      <section ref={heroRef} className="relative min-h-[60dvh] flex items-center bg-ink-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-copper-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-copper-500/5 rounded-full blur-[120px]" />
        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="hero-stagger inline-block text-[11px] font-medium uppercase tracking-[0.18em] text-copper-400 mb-5">Product Range</span>
            <h1 className="hero-stagger font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white text-balance mb-6">
              Complete Pressroom Chemistry
            </h1>
            <p className="hero-stagger text-white/50 text-lg leading-relaxed max-w-2xl mb-8">
              Five specialized product families engineered for distinct printing environments and applications. From sheetfed to heatset, we deliver the chemistry that keeps your press running at peak performance.
            </p>
            <Link href="#categories" className="hero-stagger btn-accent inline-flex items-center gap-2">
              Browse Categories <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="categories" className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Product Categories"
              subtitle="Five specialized product families engineered for distinct printing environments and substrates."
              eyebrow="categories"
              center
            />
          </ScrollReveal>
          <div className="space-y-6">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || FiDroplet
              return (
                <ScrollReveal key={cat.id} delay={i * 0.08}>
                  <Link
                    href={`/products/${cat.id}`}
                    className="group relative block rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_8px_32px_rgba(26,42,68,0.06)]"
                  >
                    <div className="p-[1.5px] rounded-[1.25rem] bg-gradient-to-b from-white/80 to-steel-200/40">
                      <div className="rounded-[calc(1.25rem-1.5px)] bg-white p-6 sm:p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-copper-50 flex items-center justify-center shrink-0 group-hover:bg-copper-100 transition-colors duration-500">
                            <Icon className="w-7 h-7 text-copper-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-heading font-bold text-xl text-ink-800 group-hover:text-copper-600 transition-colors duration-500">
                                  {cat.title}
                                </h3>
                                <p className="text-steel-500 text-sm leading-relaxed mt-1.5 max-w-2xl">
                                  {cat.description}
                                </p>
                              </div>
                              <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-copper-500 shrink-0 group-hover:gap-3 transition-all duration-300">
                                {cat.products.length} products <FiArrowRight className="w-3.5 h-3.5" />
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {cat.products.slice(0, 4).map((p) => (
                                <span
                                  key={p.code}
                                  className="inline-block px-2.5 py-1 rounded-md bg-steel-50 text-steel-500 text-[11px] font-medium"
                                >
                                  {p.code}
                                </span>
                              ))}
                              {cat.products.length > 4 && (
                                <span className="inline-block px-2.5 py-1 rounded-md bg-steel-50 text-steel-400 text-[11px] font-medium">
                                  +{cat.products.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* <section className="section-padding bg-ink-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-[11px] font-medium uppercase tracking-[0.18em] text-copper-400 mb-4">Custom Formulations</span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white text-balance mb-6">Need something different? We build custom chemistry.</h2>
                <p className="text-white/50 leading-relaxed mb-8 max-w-lg">Every pressroom is unique. Our R&D team works directly with your production team to develop custom formulations that solve specific challenges from unique substrate requirements to environmental compliance goals.</p>
                <Link href="/contact" className="btn-accent inline-flex items-center gap-2">Contact Us <FiArrowRight className="w-4 h-4" /></Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-ink-800">
                <div className="absolute inset-0 bg-gradient-to-b from-copper-500/5 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-copper-500/10 rounded-full blur-[60px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-copper-500/10 flex items-center justify-center mx-auto mb-4">
                      <FiDroplet className="w-10 h-10 text-copper-400" />
                    </div>
                    <p className="text-white/30 text-sm font-heading font-semibold">Tailored Chemistry</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section> */}
    </>
  )
}
