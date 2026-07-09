'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { productServiceBanners } from '@/lib/product-service-banners'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const banners = productServiceBanners

export default function ProductMarquee() {
  const sectionRef = useRef(null)
  const stackRef = useRef(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray('.scroll-stack-card')
    if (!cards.length) return

    // Set initial positions: Card 0 is in place, subsequent cards are offset down, invisible and click-through safe
    gsap.set(cards.slice(1), { yPercent: 100, opacity: 0, pointerEvents: 'none' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * (cards.length - 1) * 0.9}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      }
    })

    cards.forEach((card, i) => {
      if (i === 0) return // Card 0 starts in view

      // Label for synchronization
      const label = `card-${i}`

      // Animate previous cards to scale down and fade slightly without shifting them up too far (keeps header clear)
      tl.to(cards.slice(0, i), {
        scale: (index) => 1 - (i - index) * 0.035,
        y: (index) => - (i - index) * 6,
        opacity: (index) => Math.max(0.3, 1 - (i - index) * 0.2),
        pointerEvents: 'none',
        duration: 1,
        ease: 'power1.inOut',
      }, label)

      // Animate current card to slide up, fade in, and enable pointer-events
      tl.fromTo(card,
        { yPercent: 100, opacity: 0, pointerEvents: 'none', scale: 0.98, y: 0 },
        {
          yPercent: 0,
          opacity: 1,
          pointerEvents: 'auto',
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power1.inOut',
        }, label)
    })
  }, { scope: sectionRef })

  return (
    <section className="relative bg-gradient-to-b from-steel-50 via-white to-steel-50 pt-24 pb-8 md:pt-28 md:pb-12 overflow-hidden min-h-screen flex flex-col justify-start" ref={sectionRef}>
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <div className="absolute inset-y-0 left-1/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-2/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-black" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-black" />
        <div className="absolute inset-x-0 top-2/3 h-px bg-black" />
      </div>
      
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #000 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-copper-400/8 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-copper-500/6 blur-[160px] pointer-events-none" />

      {/* Main Section Header */}
      <div className="text-center px-6 mb-4 md:mb-6 max-w-4xl mx-auto z-30 relative" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}>
        <div className="header-eyebrow inline-flex items-center gap-2.5 rounded-full border border-copper-500/20 bg-copper-500/5 px-4 py-1.5 mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-copper-600 font-semibold">Product Range</span>
        </div>
        <h2 className="header-title text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-ink-900 leading-none">
          Featured <span className="font-bold bg-gradient-to-r from-copper-500 to-copper-600 bg-clip-text text-transparent font-sans">Products</span>
        </h2>
        <p className="header-desc text-steel-500 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-light">
          Precision-engineered pressroom solutions trusted by commercial, packaging and newspaper printers worldwide.
        </p>
      </div>

      {/* Cards Stack Wrapper */}
      <div className="max-w-[1100px] w-full mx-auto px-4 md:px-8 relative z-10 flex-1 flex items-start justify-center mt-2 md:mt-4">
        <div ref={stackRef} className="relative w-full h-[45vh] md:h-[50vh] min-h-[300px] max-h-[440px]">
          {banners.map((banner, i) => (
            <div
              key={banner.title}
              className={`scroll-stack-card absolute inset-0 w-full h-full origin-top will-change-transform ${i > 0 ? 'opacity-0 pointer-events-none' : ''}`}
              style={{
                zIndex: (i + 1) * 10,
                ...(i > 0 && { transform: 'translate3d(0, 100%, 0)' })
              }}
            >
              {/* Visual Wrapper */}
              <div className="w-full h-full relative bg-steel-100/30 rounded-[2.5rem] p-1 border border-white/40 ring-1 ring-black/[0.03] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.12)]">
                <div className="w-full h-full relative bg-ink-950 rounded-[calc(2.5rem-0.5rem)] overflow-hidden">
                  <Link
                    href={banner.href}
                    className="relative block w-full h-full overflow-hidden group/card"
                  >
                    {/* Background Image */}
                    <Image
                      src={banner.image}
                      alt={banner.title}
                      fill
                      sizes="(max-w-768px) 100vw, 1100px"
                      className="object-cover opacity-90 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/card:scale-105"
                      priority={i === 0}
                      loading={i === 0 ? undefined : 'lazy'}
                    />
                    
                    {/* Dark Left-side Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

                    {/* Content Overlay - Left Aligned */}
                    <div className="absolute inset-y-0 left-0 flex items-center pl-8 md:pl-16 lg:pl-20 z-20">
                      <div className="max-w-sm text-left">
                        <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-copper-400 font-semibold block">
                          Category {(i + 1).toString().padStart(2, '0')}
                        </span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-white tracking-tight mt-2 leading-tight">
                          {banner.title}
                        </h3>
                        <div className="mt-5">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-copper-500 hover:bg-copper-600 text-white font-medium text-xs md:text-sm transition-all duration-300 shadow-md group-hover/card:shadow-lg group-hover/card:bg-copper-600 active:scale-[0.97]">
                            Explore Range
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
