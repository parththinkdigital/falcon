'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

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
  image: 'https://picsum.photos/seed/ipa-free-dampening/1200/750',
}

const posts = [
  { category: 'Industry News', title: 'New Environmental Regulations Impacting Pressroom Chemistry', excerpt: 'An overview of the latest regulatory changes affecting chemical usage in printing operations across Europe and Asia.', author: 'Sarah Mitchell', date: 'Jun 12, 2024', readTime: '5 min read', href: '/blog/environmental-regulations-2024' },
  { category: 'Technical', title: 'Optimising pH and Conductivity in Fountain Solutions', excerpt: 'A practical guide to maintaining optimal pH and conductivity levels for consistent print quality across different press types.', author: 'Michael Koh', date: 'Jun 5, 2024', readTime: '6 min read', href: '/blog/ph-conductivity-optimisation' },
  { category: 'Sustainability', title: 'How Water-Based Chemistry Is Reducing Print Industry Emissions', excerpt: 'Water-based formulations are helping printers meet sustainability targets without compromising on performance or quality.', author: 'James Tan', date: 'May 28, 2024', readTime: '4 min read', href: '/blog/water-based-chemistry-emissions' },
  { category: 'Company', title: 'Falcon Chemicals Expands Distribution to Southeast Asia', excerpt: 'New partnerships in Thailand, Vietnam, and Indonesia bring Falcon premium formulations to faster-growing markets.', author: 'Marketing Team', date: 'May 20, 2024', readTime: '3 min read', href: '/blog/southeast-asia-expansion' },
  { category: 'Technical', title: 'Understanding Roller Glaze and How to Prevent It', excerpt: 'Roller glazing is one of the most common pressroom issues. Learn what causes it and how the right chemistry prevents it.', author: 'Dr. Wei Chen', date: 'May 14, 2024', readTime: '7 min read', href: '/blog/roller-glaze-prevention' },
  { category: 'Industry News', title: 'Drupa 2024: Key Takeaways for Pressroom Chemistry', excerpt: 'Our team reports back from Drupa 2024 with the trends and innovations shaping the future of print chemistry.', author: 'Sarah Mitchell', date: 'May 7, 2024', readTime: '6 min read', href: '/blog/drupa-2024-takeaways' },
  { category: 'Sustainability', title: 'Reducing VOC Emissions: A Practical Roadmap for Printers', excerpt: 'A step-by-step guide to reducing volatile organic compound emissions in your pressroom through chemistry and process changes.', author: 'James Tan', date: 'Apr 30, 2024', readTime: '5 min read', href: '/blog/voc-emission-roadmap' },
  { category: 'Company', title: 'Behind the Scenes: Inside Falcon R&D Laboratory', excerpt: 'A rare look inside our research and development facility where the next generation of pressroom chemistry is being formulated.', author: 'Marketing Team', date: 'Apr 22, 2024', readTime: '4 min read', href: '/blog/inside-rd-laboratory' },
  { category: 'Technical', title: 'Plate Cleaning Chemistry: What Every Printer Should Know', excerpt: 'Choosing the right plate cleaner extends plate life and improves print quality. Here is what to look for.', author: 'Michael Koh', date: 'Apr 15, 2024', readTime: '5 min read', href: '/blog/plate-cleaning-chemistry' },
]

function categoryKey(category) {
  return category.toLowerCase().replace(/\s+/g, '-')
}

function imageFor(title) {
  return `https://picsum.photos/seed/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}/800/560`
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [email, setEmail] = useState('')

  const filtered = useMemo(() => (
    activeCategory === 'all' ? posts : posts.filter((post) => categoryKey(post.category) === activeCategory)
  ), [activeCategory])

  return (
    <>
      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#00B8D9]/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-[#4B8B2B]/20 blur-[120px]" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Blog</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Latest Pressroom
              <span className="block text-[#00B8D9]">Insights</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">
              Industry insights, technical deep-dives, and company updates from the Falcon team.
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
              <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Featured Post</p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#004B8D] md:text-5xl">{featured.title}</h2>
              <p className="mt-5 leading-8 text-slate-700">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>{featured.date}</span>
                <span>{featured.author}</span>
                <span>{featured.readTime}</span>
              </div>
              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">
                Read Article
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="mt-12 flex gap-3 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-widest ${activeCategory === category.id ? 'bg-[#004B8D] text-white shadow-[0_8px_20px_rgba(0,75,141,0.2)]' : 'bg-white text-[#071F3D] shadow-[0_4px_16px_rgba(15,23,42,0.08)]'}`}
              >
                {category.label}
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4B8B2B]">{post.readTime}</span>
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
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Stay Informed</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">Never miss an update.</h2>
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
