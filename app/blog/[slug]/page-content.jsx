'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useRef } from 'react'
import { FiArrowLeft, FiCalendar, FiUser, FiClock, FiChevronRight, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Hero from '@/components/shared/Hero'
import { blogPostsContent, getFallbackPost } from '@/lib/blog-data'

export default function BlogPostContent() {
  const { slug } = useParams()
  const contentRef = useRef(null)

  const post = blogPostsContent[slug] || getFallbackPost(slug)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.back-link', { x: -15, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo('.article-meta', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.article-main', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.article-sidebar', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.7')
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
        title={post.title}
        eyebrow={post.category}
        className="pb-8 md:pb-12"
      >
        <div className="article-meta flex flex-wrap items-center gap-5 text-steel-500 text-xs mt-3">
          <div className="flex items-center gap-1.5">
            <FiUser className="w-3.5 h-3.5 text-copper-500" />
            <span>{post.author}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-steel-300" />
          <div className="flex items-center gap-1.5">
            <FiCalendar className="w-3.5 h-3.5 text-copper-500" />
            <span>{post.date}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-steel-300" />
          <div className="flex items-center gap-1.5">
            <FiClock className="w-3.5 h-3.5 text-copper-500" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </Hero>

      <div className="container-custom relative z-10 mt-8">
        <div className="mb-8">
          <Link href="/blog" className="back-link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-500 hover:text-copper-600 transition-colors duration-300">
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="article-main lg:col-span-8 flex flex-col gap-8">
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden shadow-[0_12px_40px_rgba(26,42,68,0.04)]">
              <div className="rounded-[calc(2rem-1px)] overflow-hidden aspect-[2/1] relative bg-steel-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-[2rem] border border-steel-200/50 bg-white/70 backdrop-blur-md shadow-sm">
              <div 
                className="prose-industrial text-steel-600 space-y-6 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          <div className="article-sidebar lg:col-span-4 flex flex-col gap-8">
            {post.takeaways && (
              <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden">
                <div className="p-7 rounded-[calc(2rem-1px)] border border-steel-100 bg-white/80 backdrop-blur-md">
                  <h4 className="font-heading font-semibold text-ink-900 text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-3 rounded bg-copper-500" />
                    Key Takeaways
                  </h4>
                  <ul className="space-y-4">
                    {post.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-steel-600 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-copper-500/10 text-copper-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="p-7 rounded-[2rem] border border-steel-200/50 bg-white/80 backdrop-blur-md shadow-sm">
              <h4 className="font-heading font-semibold text-ink-900 text-xs tracking-wider uppercase mb-4">Author</h4>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-600 font-bold font-display">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h5 className="font-heading font-semibold text-sm text-ink-900 leading-tight">{post.author}</h5>
                  <span className="text-[10px] text-steel-400">Chemical Specialist</span>
                </div>
              </div>
              
              <hr className="border-steel-100 mb-5" />

              <h4 className="font-heading font-semibold text-ink-900 text-xs tracking-wider uppercase mb-3">Share</h4>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-full border border-steel-200 text-steel-500 hover:bg-ink-800 hover:text-white hover:border-ink-800 transition-all duration-300 flex items-center justify-center text-sm">
                  <FiTwitter />
                </button>
                <button className="w-8 h-8 rounded-full border border-steel-200 text-steel-500 hover:bg-ink-800 hover:text-white hover:border-ink-800 transition-all duration-300 flex items-center justify-center text-sm">
                  <FiLinkedin />
                </button>
                <button className="w-8 h-8 rounded-full border border-steel-200 text-steel-500 hover:bg-ink-800 hover:text-white hover:border-ink-800 transition-all duration-300 flex items-center justify-center text-sm">
                  <FiFacebook />
                </button>
              </div>
            </div>

            <div className="p-7 rounded-[2rem] bg-ink-900 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-grid opacity-[0.06]" />
              <div className="absolute -top-1/4 -right-1/4 w-32 h-32 rounded-full bg-copper-500/10 blur-xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[9px] tracking-[0.25em] uppercase text-copper-400 font-semibold block mb-2">Need Technical Help?</span>
                <h5 className="font-heading font-bold text-lg leading-snug mb-3">Optimise Your Pressroom Chemistry</h5>
                <p className="text-white/60 text-xs leading-relaxed mb-5">Our technical engineers can audit your current fountain solutions and help you transition to low-VOC chemistry.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md">
                  Contact Specialist
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
