'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'article', label: 'Articles' },
  { id: 'guide', label: 'Guides' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'video', label: 'Videos' },
]

const featured = {
  category: 'Guide',
  title: 'The Complete Guide to Fountain Solution Chemistry',
  excerpt: 'A comprehensive deep-dive into pH, conductivity, alcohol substitutes, and how modern fountain solution formulations affect print quality and press efficiency.',
  href: '/knowledge-center/fountain-solution-guide',
  image: 'https://picsum.photos/seed/fountain-solution-guide/1200/750',
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

function filterKey(category) {
  return category.toLowerCase().replace(/\s+/g, '-')
}

function imageFor(title) {
  return `https://picsum.photos/seed/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}/800/560`
}

export default function KnowledgeCenterPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [email, setEmail] = useState('')

  const filtered = useMemo(() => (
    activeFilter === 'all' ? articles : articles.filter((article) => filterKey(article.category) === activeFilter)
  ), [activeFilter])

  return (
    <>
      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#00B8D9]/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-[#4B8B2B]/20 blur-[120px]" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Resources</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Knowledge
              <span className="block text-[#00B8D9]">Center</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">
              Technical resources, guides, and insights to help you optimize pressroom operations with better chemistry.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50 to-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Link href={featured.href} className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70 md:grid-cols-2">
            <div className="overflow-hidden bg-[#06294A]">
              <img src={featured.image} alt={featured.title} className="h-full min-h-80 w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Featured Resource</p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#004B8D] md:text-5xl">{featured.title}</h2>
              <p className="mt-5 leading-8 text-slate-700">{featured.excerpt}</p>
              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">
                Read the Guide
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="mt-12 flex gap-3 overflow-x-auto pb-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-widest ${activeFilter === filter.id ? 'bg-[#004B8D] text-white shadow-[0_8px_20px_rgba(0,75,141,0.2)]' : 'bg-white text-[#071F3D] shadow-[0_4px_16px_rgba(15,23,42,0.08)]'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link key={post.title} href={post.href} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70">
                <div className="relative overflow-hidden bg-[#06294A]">
                  <img src={imageFor(post.title)} alt={post.title} className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#004B8D] shadow-sm">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="mb-5 h-1 w-20 rounded-full bg-[#00B8D9]" />
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{post.date}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4B8B2B]">Resource</span>
                  </div>
                  <h3 className="text-2xl font-extrabold leading-tight text-[#004B8D]">{post.title}</h3>
                  <p className="mt-4 line-clamp-3 leading-7 text-slate-700">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold text-slate-500">{post.author}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#4B8B2B]">
                      Read
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06294A] px-6 py-16 text-white md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Stay Updated</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">Get technical insights in your inbox.</h2>
          </div>
          <form onSubmit={(event) => { event.preventDefault(); setEmail('') }} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#004B8D]" />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full border-0 bg-white py-4 pl-11 pr-5 text-sm font-medium text-[#071F3D] outline-none"
              />
            </div>
            <button type="submit" className="rounded-full bg-[#4B8B2B] px-8 py-4 text-sm font-bold text-white">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}
