'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { FiArrowRight, FiArrowUpRight, FiCalendar, FiUser, FiClock, FiMail } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/shared/Hero'
import { clsx } from 'clsx'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'industry-news', label: 'Industry News' },
  { id: 'technical', label: 'Technical' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'company', label: 'Company' },
]

const featured = {
  category: 'Technical',
  title: 'The Future of IPA-Free Dampening Systems in Commercial Printing',
  excerpt: 'As environmental regulations tighten and printers seek safer pressroom environments, IPA-free dampening systems are moving from niche to mainstream. Here is what the shift means for your operation.',
  author: 'Dr. Wei Chen',
  date: 'Jun 18, 2024',
  readTime: '8 min read',
  href: '/blog/ipa-free-dampening-future',
}

const posts = [
  {
    category: 'Industry News',
    title: 'New Environmental Regulations Impacting Pressroom Chemistry',
    excerpt: 'An overview of the latest regulatory changes affecting chemical usage in printing operations across Europe and Asia.',
    author: 'Sarah Mitchell',
    date: 'Jun 12, 2024',
    readTime: '5 min read',
    href: '/blog/environmental-regulations-2024',
  },
  {
    category: 'Technical',
    title: 'Optimising pH and Conductivity in Fountain Solutions',
    excerpt: 'A practical guide to maintaining optimal pH and conductivity levels for consistent print quality across different press types.',
    author: 'Michael Koh',
    date: 'Jun 5, 2024',
    readTime: '6 min read',
    href: '/blog/ph-conductivity-optimisation',
  },
  {
    category: 'Sustainability',
    title: 'How Water-Based Chemistry Is Reducing Print Industry Emissions',
    excerpt: 'Water-based formulations are helping printers meet sustainability targets without compromising on performance or quality.',
    author: 'James Tan',
    date: 'May 28, 2024',
    readTime: '4 min read',
    href: '/blog/water-based-chemistry-emissions',
  },
  {
    category: 'Company',
    title: 'Falcon Chemicals Expands Distribution to Southeast Asia',
    excerpt: 'New partnerships in Thailand, Vietnam, and Indonesia bring Falcon premium formulations to faster-growing markets.',
    author: 'Marketing Team',
    date: 'May 20, 2024',
    readTime: '3 min read',
    href: '/blog/southeast-asia-expansion',
  },
  {
    category: 'Technical',
    title: 'Understanding Roller Glaze and How to Prevent It',
    excerpt: 'Roller glazing is one of the most common pressroom issues. Learn what causes it and how the right chemistry prevents it.',
    author: 'Dr. Wei Chen',
    date: 'May 14, 2024',
    readTime: '7 min read',
    href: '/blog/roller-glaze-prevention',
  },
  {
    category: 'Industry News',
    title: 'Drupa 2024: Key Takeaways for Pressroom Chemistry',
    excerpt: 'Our team reports back from Drupa 2024 with the trends and innovations shaping the future of print chemistry.',
    author: 'Sarah Mitchell',
    date: 'May 7, 2024',
    readTime: '6 min read',
    href: '/blog/drupa-2024-takeaways',
  },
  {
    category: 'Sustainability',
    title: 'Reducing VOC Emissions: A Practical Roadmap for Printers',
    excerpt: 'A step-by-step guide to reducing volatile organic compound emissions in your pressroom through chemistry and process changes.',
    author: 'James Tan',
    date: 'Apr 30, 2024',
    readTime: '5 min read',
    href: '/blog/voc-emission-roadmap',
  },
  {
    category: 'Company',
    title: 'Behind the Scenes: Inside Falcon R&D Laboratory',
    excerpt: 'A rare look inside our research and development facility where the next generation of pressroom chemistry is being formulated.',
    author: 'Marketing Team',
    date: 'Apr 22, 2024',
    readTime: '4 min read',
    href: '/blog/inside-rd-laboratory',
  },
  {
    category: 'Technical',
    title: 'Plate Cleaning Chemistry: What Every Printer Should Know',
    excerpt: 'Choosing the right plate cleaner extends plate life and improves print quality. Here is what to look for.',
    author: 'Michael Koh',
    date: 'Apr 15, 2024',
    readTime: '5 min read',
    href: '/blog/plate-cleaning-chemistry',
  },
]

const PER_PAGE = 6

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const featuredRef = useRef(null)
  const gridRef = useRef(null)

  const filtered = activeCategory === 'all'
    ? posts
    : posts.filter((p) => p.category.toLowerCase().replace(/\s+/g, '-') === activeCategory)

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice(0, page * PER_PAGE)

  useGSAP(() => {
    const el = featuredRef.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      },
    )
  }, { scope: featuredRef })

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll('.blog-card')
    if (!cards?.length) return
      gsap.fromTo(cards,
        { opacity: 0, y: 48, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7,
          stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
        },
      )
    }, [activeCategory, page])

  return (
    <>
      <Hero
        title="Latest Pressroom Insights"
        subtitle="Industry insights, technical deep-dives, and company updates from the team behind Falcon Chemicals."
        eyebrow="Blog"
      />

      {/* Featured post */}
      <section className="pt-24 pb-8 bg-[#f9fafb]">
        <div className="container-custom">
          <div ref={featuredRef} className="group relative">
            <div className="p-[1.5px] rounded-[1.5rem] bg-gradient-to-b from-copper-400/30 via-steel-200/80 to-steel-200/20 overflow-hidden">
              <div className="rounded-[calc(1.5rem-1.5px)] overflow-hidden bg-white">
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-[380px] overflow-hidden">
                    <img
                      src="https://picsum.photos/seed/ipa-free-dampening/800/650"
                      alt={featured.title}
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
                    <span className="text-[9px] tracking-[0.25em] uppercase text-copper-500/60 font-semibold mb-3">Featured Post</span>
                    <h3 className="font-heading font-bold text-2xl lg:text-3xl xl:text-4xl text-ink-800 tracking-tight leading-[1.1] mb-4">
                      {featured.title}
                    </h3>
                    <p className="text-steel-500 text-sm md:text-base leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-steel-400 mb-7">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiUser className="w-3.5 h-3.5" />
                        {featured.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiClock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </span>
                    </div>
                    <Link
                      href={featured.href}
                      className="group/link inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ink-800 text-white text-sm font-semibold w-fit hover:bg-ink-700 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
                    >
                      <span>Read Article</span>
                      <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover/link:translate-x-0.5 group-hover/link:-translate-y-[1px] group-hover/link:scale-105 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding bg-gradient-to-b from-steel-50 via-white to-steel-50 relative overflow-hidden">
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-copper-500/3 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-copper-500/4 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setPage(1) }}
                  className={clsx(
                    'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
                    isActive
                      ? 'bg-ink-800 text-white shadow-lg shadow-ink-800/15'
                      : 'bg-white/80 backdrop-blur-sm text-steel-500 border border-steel-200/60 hover:border-steel-300 hover:text-ink-800 hover:shadow-[0_4px_20px_rgba(26,42,68,0.06)]',
                  )}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="blog-card group block"
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
                        <div className="flex items-center gap-3 text-[11px] text-steel-400 font-medium">
                          <span className="flex items-center gap-1">
                            <FiCalendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="hidden sm:flex items-center gap-1">
                            <FiClock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-copper-500 flex items-center gap-1 transition-all duration-300 group-hover:gap-1.5">
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

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-steel-400 text-sm">No posts in this category yet. Check back soon.</p>
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
              <span className="text-[10px] tracking-[0.28em] uppercase text-copper-400/60 font-semibold">Stay Informed</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05] mb-5">
              Never Miss an Update
            </h2>
            <p className="text-white/45 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Subscribe to get the latest articles, technical guides, and industry news delivered to your inbox.
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
