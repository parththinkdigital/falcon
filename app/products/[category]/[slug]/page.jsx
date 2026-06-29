'use client'

import { useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiChevronRight, FiCheck, FiFileText, FiDownload, FiDroplet, FiArrowRight } from 'react-icons/fi'
import { getProductByCode, getRelatedProducts } from '@/lib/products-data'
import ScrollReveal from '@/components/shared/ScrollReveal'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ProductDetailPage() {
  const { slug, category } = useParams()
  const specRef = useRef(null)

  const product = getProductByCode(slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-ink-800 mb-4">Product Not Found</h1>
          <p className="text-steel-500 mb-6">The product you are looking for does not exist.</p>
          <Link href="/products" className="btn-primary">View All Products</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product.category.id, product.code, 3)

  useGSAP(() => {
    const rows = specRef.current?.querySelectorAll('.spec-row')
    if (!rows?.length) return
    gsap.fromTo(rows,
      { opacity: 0, x: -20 },
      {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.04, ease: 'power3.out',
        scrollTrigger: { trigger: specRef.current, start: 'top 88%', once: true },
      },
    )
  }, [])

  return (
    <>
      <section className="relative min-h-[40dvh] flex items-center bg-ink-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div className="absolute top-1/4 -left-48 w-80 h-80 bg-copper-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-copper-500/5 rounded-full blur-[100px]" />
        <div className="container-custom relative z-10 pt-28 pb-12">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-sm text-steel-400 mb-6">
              <Link href="/products" className="hover:text-copper-400 transition-colors">Products</Link>
              <FiChevronRight className="w-3.5 h-3.5" />
              <Link href={`/products/${product.category.id}`} className="hover:text-copper-400 transition-colors">{product.category.shortTitle}</Link>
              <FiChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-medium">{product.code}</span>
            </nav>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <ScrollReveal delay={0.1}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper-500/10 text-copper-400 text-[11px] font-bold font-mono tracking-wider mb-3 w-fit">
                  SKU: {product.code}
                </div>
                <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white text-balance">
                  {product.name}
                </h1>
                <p className="text-white/30 text-sm mt-2">{product.category.title}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="btn-accent inline-flex items-center gap-2 shrink-0"
              >
                <FiFileText className="w-4 h-4" /> Request Quote
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-steel-200 overflow-hidden">
              {/* Two-Column Split */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Column - Image */}
                <div className="flex items-center justify-center p-8 lg:p-12 bg-white border-b lg:border-b-0 lg:border-r border-steel-100">
                  <div className="relative w-full max-w-[300px]">
                    {/* Jug container placeholder */}
                    <div className="w-56 h-72 mx-auto bg-gradient-to-b from-white to-steel-50 rounded-t-3xl rounded-b-xl border border-steel-200 relative flex items-center justify-center shadow-sm">
                      {/* Handle */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-8 border-2 border-steel-200 rounded-t-full bg-white/50" />
                      {/* Label */}
                      <div className="absolute top-8 inset-x-4 bg-white border border-steel-200 rounded p-2 shadow-sm">
                        <div className="h-1.5 w-full bg-steel-100 rounded mb-2" />
                        <div className="h-1 w-2/3 bg-steel-100 rounded" />
                      </div>
                      {/* Icon */}
                      <div className="relative z-10">
                        <FiDroplet className="w-24 h-24 text-copper-300/40" strokeWidth={1} />
                      </div>
                      {/* Bottom label */}
                      <div className="absolute bottom-4 inset-x-0 text-center">
                        <span className="text-[9px] font-bold font-mono text-steel-400 tracking-widest">{product.code}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-ink-800 mb-6">
                    {product.name}
                  </h2>
                  <p className="text-steel-500 leading-relaxed mb-6">
                    {product.code === 'AR-7500'
                      ? `AR-7500 is an advanced alcohol substitute that enhances water viscosity in continuous dampening systems. It is free of harmful air pollutants (HAPs) and safe for unbaked CTP plates. When used with Tower fountain solutions, AR-7500 helps achieve optimal ink and water balance, ensuring outstanding press performance.`
                      : product.description}
                  </p>
                  <ul className="space-y-2.5">
                    {product.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-steel-600">
                        <span className="w-5 h-5 rounded-full bg-copper-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <FiCheck className="w-3 h-3 text-copper-500" />
                        </span>
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Action Bar */}
              <div className="bg-steel-50 border-t border-steel-100 px-6 py-4">
                <div className="flex flex-wrap items-center justify-center gap-y-2 text-sm">
                  <Link
                    href="#"
                    className="text-copper-600 hover:text-copper-700 font-semibold transition-colors inline-flex items-center gap-1.5 px-4 py-1"
                  >
                    View Technical Specification
                  </Link>
                  <span className="text-steel-300 hidden sm:inline">|</span>
                  <Link
                    href="#"
                    className="text-copper-600 hover:text-copper-700 font-semibold transition-colors inline-flex items-center gap-1.5 px-4 py-1"
                  >
                    View Safety Datasheet
                  </Link>
                  <span className="text-steel-300 hidden sm:inline">|</span>
                  <Link
                    href="#"
                    className="text-copper-600 hover:text-copper-700 font-semibold transition-colors inline-flex items-center gap-1.5 px-4 py-1"
                  >
                    Request a Sample
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-10">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.18em] text-copper-500 mb-3">Technical Data</span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-ink-800">Specifications</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div ref={specRef} className="max-w-2xl rounded-2xl border border-steel-200 overflow-hidden bg-white">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className={`spec-row ${i % 2 === 0 ? 'bg-white' : 'bg-steel-50'}`}>
                      <td className="py-4 px-6 text-sm font-medium text-ink-800 w-1/2 border-r border-steel-100">{spec.label}</td>
                      <td className="py-4 px-6 text-sm text-steel-500">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <div className="mb-10">
                <span className="inline-block text-[11px] font-medium uppercase tracking-[0.18em] text-copper-500 mb-3">Related</span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-ink-800">Other Products in This Range</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Link
                  key={p.code}
                  href={`/products/${p.category.id}/${p.code}`}
                  className="group"
                >
                  <div className="p-[1.5px] rounded-[1.25rem] bg-gradient-to-b from-white/80 to-steel-200/40 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_8px_32px_rgba(26,42,68,0.06)] h-full">
                    <div className="rounded-[calc(1.25rem-1.5px)] overflow-hidden bg-white h-full flex flex-col">
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-copper-50 text-copper-600 text-[10px] font-bold font-mono tracking-wider">
                            {p.code}
                          </span>
                        </div>
                        <h3 className="font-heading font-semibold text-lg text-ink-800 mb-2 leading-snug group-hover:text-copper-600 transition-colors duration-500">
                          {p.name}
                        </h3>
                        <p className="text-steel-500 text-sm leading-relaxed line-clamp-2 flex-1">
                          {p.description}
                        </p>
                        <div className="flex items-center pt-4 mt-4 border-t border-steel-100">
                          <span className="text-xs font-semibold text-copper-500 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                            View Details <FiArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
