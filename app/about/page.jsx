'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight } from 'react-icons/fi'
import LogoLoop from '@/components/shared/LogoLoop'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { value: '27+', label: 'Years of Excellence' },
  { value: '500+', label: 'Commercial Pressrooms' },
  { value: '50+', label: 'Countries Served' },
  { value: '120+', label: 'Chemical Formulations' },
]

const clientLogos = [
  { name: 'PrintCorp', initials: 'PC' },
  { name: 'OffsetPro', initials: 'OP' },
  { name: 'PressWorks', initials: 'PW' },
  { name: 'ColourCraft', initials: 'CC' },
  { name: 'LithoTech', initials: 'LT' },
  { name: 'SpeedPrint', initials: 'SP' },
  { name: 'InkMaster', initials: 'IM' },
  { name: 'GraphicPress', initials: 'GP' },
  { name: 'DigitalPrint', initials: 'DP' },
  { name: 'PrimeOffset', initials: 'PO' },
]

function StatsCounters() {
  const ref = useRef(null)

  useGSAP(() => {
    const items = ref.current?.querySelectorAll('.counter-item')
    if (!items?.length) return
    
    gsap.fromTo(items,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      }
    )

    const counters = ref.current?.querySelectorAll('.stat-number')
    if (!counters?.length) return
    counters.forEach((el) => {
      const text = el.textContent.trim()
      const num = parseInt(text)
      if (isNaN(num)) return
      const suffix = text.replace(/[\d]/g, '')
      gsap.fromTo(el,
        { textContent: '0' },
        {
          textContent: num,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].textContent) + suffix
          },
        }
      )
    })
  }, { scope: ref })

  return (
    <div ref={ref} className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="counter-item bg-white/80 backdrop-blur-md border border-steel-100 rounded-2xl p-6 md:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(180,83,9,0.05)] hover:border-copper-500/20 hover:-translate-y-1 transition-all duration-500 group">
            <span className="stat-number text-4xl md:text-5xl lg:text-6xl font-display font-bold text-copper-500 mb-2 block">
              {stat.value}
            </span>
            <p className="text-steel-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] leading-normal max-w-[150px] mx-auto">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ClientMarquee() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.clients-header',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      }
    )
  }, { scope: ref })

  const renderCard = (client) => (
    <div className="flex items-center justify-center w-32 h-20 bg-white/80 backdrop-blur-md border border-steel-100 rounded-2xl hover:border-copper-500/30 hover:shadow-[0_15px_35px_rgba(180,83,9,0.04)] hover:-translate-y-0.5 transition-all duration-500 group cursor-default">
      <span className="text-lg font-heading font-bold text-steel-300 group-hover:text-copper-500 transition-colors duration-500 select-none">
        {client.initials}
      </span>
    </div>
  )

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-steel-50 overflow-hidden border-t border-steel-100">
      <div className="container-custom">
        <div className="clients-header text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full border border-steel-200 bg-steel-50/50 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-steel-500 font-semibold">Our Network</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-ink-900 mb-3">Trusted Partners</h2>
          <p className="text-steel-400 text-sm md:text-base leading-relaxed">
            Printing facilities and commercial packaging leaders worldwide rely on Falcon chemistry.
          </p>
        </div>
      </div>

      <div className="clients-loop relative z-10 max-w-[1400px] mx-auto px-4">
        <LogoLoop
          logos={clientLogos}
          speed={45}
          direction="left"
          gap={20}
          logoHeight={80}
          fadeOut
          pauseOnHover
          renderItem={renderCard}
        />
        <div className="h-5" />
        <LogoLoop
          logos={[...clientLogos].reverse()}
          speed={45}
          direction="right"
          gap={20}
          logoHeight={80}
          fadeOut
          pauseOnHover
          renderItem={renderCard}
        />
      </div>
    </section>
  )
}

export default function AboutPage() {
  const pageRef = useRef(null)
  const visualRef = useRef(null)

  useGSAP(() => {
    // Page load hero animations
    const tl = gsap.timeline()

    tl.fromTo('.hero-eyebrow',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.4 }
    )
    tl.fromTo('.hero-title span',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      '-=0.3'
    )
    tl.fromTo('.hero-sub-box',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.4'
    )

    // Philosophy text scroll reveal
    gsap.fromTo('.about-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.page-about', start: 'top 80%', once: true },
      }
    )

    // Parallax scroll on visual container
    gsap.fromTo('.about-visual-img',
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: visualRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    )

    // Fade-in container layout for image banner
    gsap.fromTo(visualRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: visualRef.current, start: 'top 85%', once: true },
      }
    )
  }, { scope: pageRef })

  return (
    <div ref={pageRef} className="relative bg-white overflow-hidden min-h-screen">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none z-0">
        <div className="absolute inset-y-0 left-1/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-2/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-black" />
        <div className="absolute inset-x-0 top-1/4 h-px bg-black" />
        <div className="absolute inset-x-0 top-2/4 h-px bg-black" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-copper-500/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-copper-500/3 blur-[120px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-28 z-10">
        <div className="container-custom">
          <div className="max-w-5xl">
            <div className="hero-eyebrow mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-copper-500/20 bg-copper-500/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-copper-600 font-semibold">Since 1998</span>
              </span>
            </div>
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light text-ink-900 leading-[1.08] tracking-tight">
              <span className="block">Smarter Pressroom</span>
              <span className="block font-semibold">Chemistry for</span>
              <span className="block bg-gradient-to-r from-copper-500 to-copper-600 bg-clip-text text-transparent font-sans">Printers &amp; Packaging Leaders</span>
            </h1>
          </div>

          <div className="hero-sub-box mt-16 md:mt-24 max-w-3xl border-l-2 border-copper-400 pl-6 md:pl-8">
            <h2 className="text-xl md:text-2xl font-display font-medium text-ink-900 leading-snug">
              Engineering Precision Chemistry for Tomorrow&rsquo;s Print
            </h2>
            <p className="text-steel-500 text-sm md:text-base mt-3 max-w-xl leading-relaxed font-sans font-light">
              Advanced formulations engineered for commercial printing operations worldwide, focusing on consistency, sustainability, and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Parallax Visual Banner Section */}
      <section ref={visualRef} className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8 mb-16 md:mb-24 z-10">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900 shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-steel-200/50">
          <Image
            src="/about-us-img.jpg"
            alt="Falcon Chemicals manufacturing lab facility mockup"
            fill
            sizes="(max-w-768px) 100vw, 1200px"
            className="about-visual-img object-cover opacity-90 transition-transform duration-700 hover:scale-102"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* About Description + Stats Section */}
      <section className="page-about bg-white relative z-10 pb-20 md:pb-28">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center font-medium mb-20 md:mb-24">
            <div className="w-12 h-0.5 bg-copper-500/60 mb-8 mx-auto" />
            <h2 className="about-title text-xl md:text-2xl lg:text-3xl font-display font-light text-ink-900 leading-relaxed max-w-4xl mx-auto">
              We specialise in engineering advanced pressroom chemistry that <span className="font-semibold text-copper-600 font-sans">optimises print quality</span>,
              reduces environmental impact, and streamlines production through rigorous quality control,
              regulatory compliance, and continuous innovation—enabling printers to operate with
              confidence and clarity.
            </h2>
          </div>

          <div className="border-t border-steel-100 pt-16 md:pt-20">
            <StatsCounters />
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientMarquee />
    </div>
  )
}
