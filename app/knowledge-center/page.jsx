'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { FiArrowRight, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/shared/Hero'
import { clsx } from 'clsx'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const filters = [
  { id: 'all', label: 'All' },
  { id: 'articles', label: 'Articles' },
  { id: 'guides', label: 'Guides' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'videos', label: 'Videos' },
]

const featured = {
  category: 'Guide',
  title: 'The Complete Guide to Fountain Solution Chemistry',
  excerpt: 'A comprehensive deep-dive into pH, conductivity, alcohol substitutes, and how modern fountain solution formulations affect print quality and press efficiency.',
  href: '/knowledge-center/fountain-solution-guide',
}

const articles = [
  {
    category: 'Article',
    title: 'Understanding IPA Reduction in Dampening Systems',
    excerpt: 'Practical approaches to reducing isopropyl alcohol usage without compromising print quality.',
    date: 'Mar 15, 2024',
    author: 'Dr. Wei Chen',
    href: '/knowledge-center/ipa-reduction',
  },
  {
    category: 'Guide',
    title: 'Plate Cleaning Best Practices for Longevity',
    excerpt: 'Extend the life of your printing plates with proper cleaning techniques and the right chemistry.',
    date: 'Feb 28, 2024',
    author: 'Sarah Mitchell',
    href: '/knowledge-center/plate-cleaning-guide',
  },
  {
    category: 'Case Study',
    title: 'How Publisher X Cut Waste by 30% in 6 Months',
    excerpt: 'A detailed case study on chemistry optimization that delivered measurable waste reduction.',
    date: 'Feb 10, 2024',
    author: 'James Tan',
    href: '/knowledge-center/publisher-waste-case-study',
  },
  {
    category: 'Article',
    title: 'The Science of Ink-Water Balance',
    excerpt: 'Technical deep-dive into the chemical principles behind consistent, high-quality print results.',
    date: 'Jan 25, 2024',
    author: 'Dr. Wei Chen',
    href: '/knowledge-center/ink-water-balance',
  },
  {
    category: 'Video',
    title: 'Pressroom Chemistry Troubleshooting Workshop',
    excerpt: 'Watch our technical team diagnose and solve common pressroom chemistry issues in real-time.',
    date: 'Jan 12, 2024',
    author: 'Falcon Technical Team',
    href: '/knowledge-center/troubleshooting-workshop',
  },
  {
    category: 'Guide',
    title: 'Roller & Blanket Wash Selection Guide',
    excerpt: 'Choose the right wash for your press type, ink system, and environmental requirements.',
    date: 'Dec 20, 2023',
    author: 'Michael Koh',
    href: '/knowledge-center/wash-selection-guide',
  },
]

const PER_PAGE = 6

export default function KnowledgeCenterPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const featuredRef = useRef(null)
  const gridRef = useRef(null)

  const filtered = activeFilter === 'all'
    ? articles
    : articles.filter(a =>
        a.category.toLowerCase().replace(' ', '-') === activeFilter ||
        a.category.toLowerCase() === activeFilter
      )

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice(0, page * PER_PAGE)

  useGSAP(() => {
    const cards = featuredRef.current
    if (!cards) return
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: cards, start: 'top 85%', once: true },
      },
    )
  }, { scope: featuredRef })

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll('.article-card')
    if (!cards?.length) return
      gsap.fromTo(cards,
        { opacity: 0, y: 48, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7,
          stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
        },
      )
    }, [activeFilter, page])

  return (
    <>
      <Hero
        title="Knowledge Center"
        subtitle="Technical resources, guides, and insights to help you optimize your pressroom operations with better chemistry."
        eyebrow="Resources"
      />

      <section className="section-padding bg-gradient-to-b from-steel-50 via-white to-steel-50 relative overflow-hidden">
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-copper-500/3 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-copper-500/4 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Featured article */}
          <div ref={featuredRef} className="group relative mb-16">
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(180,83,9,0.05)] group-hover:border-copper-500/20">
              <div className="rounded-[calc(2rem-1px)] overflow-hidden bg-white/70 backdrop-blur-md group-hover:bg-white/90 transition-all duration-500">
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-[360px] overflow-hidden">
                    <img
                      src="https://picsum.photos/seed/fountain-solution-guide/800/650"
                      alt="Fountain Solution Chemistry"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-grid opacity-[0.06]" />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-ink-800 text-[10px] font-semibold uppercase tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                        {featured.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-[9px] tracking-[0.25em] uppercase text-copper-500/60 font-semibold mb-3">Featured Resource</span>
                    <h3 className="font-heading font-bold text-2xl lg:text-3xl xl:text-4xl text-ink-800 tracking-tight leading-[1.1] mb-4">
                      {featured.title}
                    </h3>
                    <p className="text-steel-500 text-sm md:text-base leading-relaxed mb-7">
                      {featured.excerpt}
                    </p>
                    <Link
                      href={featured.href}
                      className="group/link inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ink-800 text-white text-sm font-semibold w-fit hover:bg-ink-700 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
                    >
                      <span>Read the Guide</span>
                      <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover/link:translate-x-0.5 group-hover/link:-translate-y-[1px] group-hover/link:scale-105 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => {
              const isActive = activeFilter === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => { setActiveFilter(f.id); setPage(1) }}
                  className={clsx(
                    'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
                    isActive
                      ? 'bg-ink-800 text-white shadow-lg shadow-ink-800/15'
                      : 'bg-white/80 backdrop-blur-sm text-steel-500 border border-steel-200/60 hover:border-steel-300 hover:text-ink-800 hover:shadow-[0_4px_20px_rgba(26,42,68,0.06)]',
                  )}
                >
                  {f.label}
                </button>
              )
            })}
          </div>

          {/* Article grid */}
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="article-card group block"
              >
                <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_20px_50px_rgba(180,83,9,0.05)] group-hover:border-copper-500/20">
                  <div className="rounded-[calc(2rem-1px)] overflow-hidden bg-white/70 backdrop-blur-md group-hover:bg-white/90 transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}/600/400`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-ink-800 text-[10px] font-semibold uppercase tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] -translate-x-2 group-hover:translate-x-0">
                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                          <FiArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-heading font-semibold text-lg text-ink-800 mb-2 leading-snug group-hover:text-copper-600 transition-colors duration-500">
                        {post.title}
                      </h4>
                      <p className="text-steel-500 text-sm leading-relaxed mb-5 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-steel-100">
                        <span className="text-[11px] text-steel-400 font-medium">
                          {post.date} <span className="mx-1">&middot;</span> {post.author}
                        </span>
                        <span className="text-[11px] font-semibold text-copper-500 flex items-center gap-1 group-hover/link:gap-1.5 transition-all duration-300">
                          Read
                          <FiArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-14">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => { setPage(p); gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                  className={clsx(
                    'w-10 h-10 rounded-full text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
                    p === page
                      ? 'bg-ink-800 text-white shadow-lg shadow-ink-800/15'
                      : 'bg-white text-steel-500 border border-steel-200/60 hover:border-steel-300 hover:text-ink-800 hover:shadow-[0_4px_20px_rgba(26,42,68,0.06)]',
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden bg-ink-900 py-28 lg:py-36">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div className="absolute -top-1/3 -right-1/4 w-[40vw] h-[40vw] min-w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,120,60,0.08)_0%,transparent_60%)]" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[30vw] h-[30vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,120,60,0.04)_0%,transparent_60%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-copper-400/40" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-copper-400/60 font-semibold">Stay Updated</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05] mb-5">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/45 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Get the latest technical articles, guides, and industry insights delivered to your inbox monthly.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail('') }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-copper-500/50 focus:bg-white/10 transition-all duration-500"
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-copper-500 text-white text-sm font-semibold hover:bg-copper-600 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shrink-0 shadow-[0_4px_20px_rgba(199,106,44,0.15)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
