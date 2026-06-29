'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Hero from '@/components/shared/Hero'
import SectionHeader from '@/components/shared/SectionHeader'
import ScrollReveal from '@/components/shared/ScrollReveal'

const industries = [
  {
    title: 'Commercial Printing',
    description: 'Complete chemistry solutions for sheetfed and web offset commercial printers producing brochures, catalogs, and marketing materials.',
    gradient: 'from-copper-500/20 to-amber-500/20',
  },
  {
    title: 'Publishing',
    description: 'Specialized formulations for book and magazine printing with precise ink-water balance control for consistent high-volume runs.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Packaging',
    description: 'Advanced fountain solutions and plate cleaners designed for carton, flexible, and corrugated packaging applications.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Newspaper',
    description: 'High-speed coldset chemistry engineered for the demanding pace of newspaper and insert production environments.',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: 'Label Printing',
    description: 'Precision chemistry for narrow-web and wide-web label presses requiring exceptional dot reproduction and fast color changes.',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
  {
    title: 'UV Printing',
    description: 'Specialized pressroom chemicals compatible with UV ink systems, including roller washes and blanket cleaners.',
    gradient: 'from-cyan-500/20 to-sky-500/20',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Industries We Serve"
        subtitle="From commercial sheetfed to high-speed web, we formulate pressroom chemistry that meets the exacting demands of every printing segment."
        dark
      />
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div key={ind.title} className="group bg-white rounded-2xl border border-steel-100 overflow-hidden hover:shadow-xl hover:shadow-ink-900/5 transition-all duration-500">
                  <div className="h-48 relative overflow-hidden">
                    <img src={`https://picsum.photos/seed/${ind.title.toLowerCase().replace(/\s+/g, '-')}/800/400`} alt={ind.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                    <div className="absolute inset-0 bg-grid opacity-[0.15]" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-ink-800 mb-2">{ind.title}</h3>
                    <p className="text-steel-500 text-sm leading-relaxed mb-4">{ind.description}</p>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-500 hover:text-copper-600 group/link">
                      Learn More
                      <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="section-padding bg-ink-900 text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden">
                <img src="https://picsum.photos/seed/publishing-partnership/800/600" alt="Printing press partnership" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                <div className="absolute inset-0 bg-grid opacity-[0.08]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-copper-500/20 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-copper-400">15+</span>
                    </div>
                    <p className="text-white/40 text-sm">Years of Partnership</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-copper-500/10 -z-10" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.18em] text-copper-400 mb-3">Featured Partnership</span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance mb-6">
                Powering Asia-Pacific&apos;s Largest Publishing Network
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                For over a decade, Falcon Chemicals has been the exclusive chemistry partner for one of the region&apos;s most demanding publishing operations. Our custom-blended fountain solutions and plate cleaners helped them achieve a 22% reduction in waste while maintaining sub-1% color variance across millions of impressions.
              </p>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                <div>
                  <span className="block font-heading font-bold text-3xl text-copper-400">22%</span>
                  <span className="text-white/40 text-sm">Waste Reduction</span>
                </div>
                <div>
                  <span className="block font-heading font-bold text-3xl text-copper-400">10+</span>
                  <span className="text-white/40 text-sm">Years Partnership</span>
                </div>
                <div>
                  <span className="block font-heading font-bold text-3xl text-copper-400">50M+</span>
                  <span className="text-white/40 text-sm">Impressions Yearly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom text-center">
          <SectionHeader title="Ready to Optimize Your Pressroom?" subtitle="Let our technical team assess your operation and recommend the ideal chemistry package." center />
          <Link href="/contact" className="btn-accent group inline-flex items-center gap-2">
            Contact Our Team
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
