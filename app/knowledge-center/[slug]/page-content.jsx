'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useRef } from 'react'
import { FiArrowLeft, FiCalendar, FiUser, FiClock, FiFileText, FiDownload, FiChevronRight, FiCheckCircle } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Hero from '@/components/shared/Hero'
import { knowledgeContent, getFallbackResource } from '@/lib/knowledge-center-data'

export default function KnowledgeResourceContent() {
  const { slug } = useParams()
  const contentRef = useRef(null)

  const resource = knowledgeContent[slug] || getFallbackResource(slug)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.back-link', { x: -15, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo('.resource-meta', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.resource-main', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.resource-sidebar', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.7')
  }, { scope: contentRef })

  return (
    <article className="min-h-screen bg-gradient-to-b from-steel-50 via-white to-steel-50 relative pb-24 overflow-hidden" ref={contentRef}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <div className="absolute inset-y-0 left-1/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-2/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-black" />
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-copper-500/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-copper-500/2 blur-[100px] pointer-events-none" />

      <Hero
        title={resource.title}
        eyebrow={resource.category}
        className="pb-8 md:pb-12"
      >
        <div className="resource-meta flex flex-wrap items-center gap-5 text-steel-500 text-xs mt-3">
          <div className="flex items-center gap-1.5">
            <FiUser className="w-3.5 h-3.5 text-copper-500" />
            <span>{resource.author}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-steel-300" />
          <div className="flex items-center gap-1.5">
            <FiCalendar className="w-3.5 h-3.5 text-copper-500" />
            <span>{resource.date}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-steel-300" />
          <div className="flex items-center gap-1.5">
            <FiClock className="w-3.5 h-3.5 text-copper-500" />
            <span>{resource.readTime}</span>
          </div>
        </div>
      </Hero>

      <div className="container-custom relative z-10 mt-8">
        <div className="mb-8">
          <Link href="/knowledge-center" className="back-link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-500 hover:text-copper-600 transition-colors duration-300">
            <FiArrowLeft className="w-4 h-4" />
            Back to Knowledge Center
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="resource-main lg:col-span-8 flex flex-col gap-8">
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden shadow-[0_12px_40px_rgba(26,42,68,0.04)]">
              <div className="rounded-[calc(2rem-1px)] overflow-hidden aspect-[2/1] relative bg-steel-100">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-[2rem] border border-steel-200/50 bg-white/70 backdrop-blur-md shadow-sm">
              <div 
                className="prose-industrial text-steel-600 space-y-6 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: resource.content }}
              />
            </div>
          </div>

          <div className="resource-sidebar lg:col-span-4 flex flex-col gap-8">
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-copper-500/20 to-transparent overflow-hidden shadow-[0_8px_30px_rgba(180,83,9,0.03)]">
              <div className="p-7 rounded-[calc(2rem-1px)] border border-copper-500/10 bg-white/95 backdrop-blur-md">
                <h4 className="font-heading font-semibold text-ink-900 text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
                  <FiFileText className="w-4 h-4 text-copper-500" />
                  Technical Resource
                </h4>
                <p className="text-xs md:text-sm text-steel-500 leading-relaxed mb-6">
                  Access the full technical specification sheets, material safety sheets (MSDS), and press adjustment sheets.
                </p>
                <button className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold shadow-md active:scale-[0.97] transition-all duration-300">
                  <FiDownload className="w-4 h-4" />
                  <span>{resource.downloadLabel || 'Download Technical PDF'}</span>
                </button>
              </div>
            </div>

            {resource.benefits && (
              <div className="p-7 rounded-[2rem] border border-steel-200/50 bg-white/80 backdrop-blur-md shadow-sm">
                <h4 className="font-heading font-semibold text-ink-900 text-xs tracking-wider uppercase mb-4">Operational Benefits</h4>
                <ul className="space-y-3.5">
                  {resource.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-steel-600 leading-relaxed">
                      <FiCheckCircle className="w-4 h-4 text-copper-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-7 rounded-[2rem] bg-ink-900 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-grid opacity-[0.06]" />
              <div className="absolute -top-1/4 -right-1/4 w-32 h-32 rounded-full bg-copper-500/10 blur-xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[9px] tracking-[0.25em] uppercase text-copper-400 font-semibold block mb-2">Technical Service</span>
                <h5 className="font-heading font-bold text-lg leading-snug mb-3">Custom Formulations</h5>
                <p className="text-white/60 text-xs leading-relaxed mb-5">Falcon engineers can custom blend fountain solutions and cleaners to match your local water hardness and unique ink systems.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md">
                  Request Consultation
                  <FiChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
