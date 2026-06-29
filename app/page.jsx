'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/home/Hero'
import SectionHeader from '@/components/shared/SectionHeader'
import ProductMarquee from '@/components/home/ProductMarquee'
import TestimonialCard from '@/components/home/TestimonialCard'
import ScrollReveal from '@/components/shared/ScrollReveal'
import CounterStat from '@/components/shared/CounterStat'
import { FiArrowRight } from 'react-icons/fi'
import LogoLoop from '@/components/shared/LogoLoop'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const categories = [
  {
    title: 'Fountain Solutions',
    description: 'Premium fountain solutions engineered for sheetfed, heatset, and coldset printing with superior ink-water balance.',
    href: '/solutions/fountain-solutions',
    features: ['Superior ink-water balance', 'Faster startup', 'Consistent color'],
    gradient: 'fountain',
  },
  {
    title: 'IPA Replacements',
    description: 'Environmentally friendly IPA-free alternatives that reduce VOC emissions without compromising print quality.',
    href: '/solutions/ipa-replacements',
    features: ['Low VOC emissions', 'Safer pressroom', 'Cost effective'],
    gradient: 'ipa',
  },
  {
    title: 'Plate Cleaners',
    description: 'Advanced plate cleaning chemistry for thermal, UV, violet, and conventional plates.',
    href: '/solutions/plate-cleaners',
    features: ['Extends plate life', 'Removes contamination', 'Maintains sharpness'],
    gradient: 'plate',
  },
  {
    title: 'Roller & Blanket Washes',
    description: 'High-performance cleaning chemicals formulated to remove ink quickly while protecting rubber surfaces.',
    href: '/solutions/roller-blanket-washes',
    features: ['Quick ink removal', 'Protects rubber', 'Faster cleaning'],
    gradient: 'roller',
  },
]

const testimonials = [
  {
    quote: 'Falcon Chemicals transformed our pressroom. Their fountain solutions delivered the most consistent color we have ever achieved on our sheetfed presses. Makeready time dropped by nearly 30%.',
    author: 'Marcus Weber',
    role: 'Production Director',
    company: 'Precision Print Group',
  },
  {
    quote: 'We switched to their IPA-free alternatives two years ago and have not looked back. VOC levels in our facility dropped significantly, and our print quality actually improved.',
    author: 'Sarah Chen',
    role: 'Operations Manager',
    company: 'Crown Litho',
  },
  {
    quote: 'The technical support from Falcon is unmatched. Their team spent a full day with our press operators fine-tuning the chemistry for our specific conditions. That level of service is rare.',
    author: 'James Okafor',
    role: 'Plant Manager',
    company: 'Metro Press Solutions',
  },
]

const clients = [
  { name: 'Precision Print Group', initials: 'PP' },
  { name: 'Crown Litho', initials: 'CL' },
  { name: 'Metro Press Solutions', initials: 'MP' },
  { name: 'Sterling Printworks', initials: 'SP' },
  { name: 'Premier Graphics', initials: 'PG' },
  { name: 'Quantum Print Solutions', initials: 'QP' },
]

export default function HomePage() {
  const aboutRef = useRef(null)

  useGSAP(() => {
    // 1. Entrance animations for the content grid
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      }
    })

    // Eyebrow and heading entrance
    tl.fromTo('.about-eyebrow', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
    tl.fromTo('.about-heading',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.3'
    )

    // Decorative SVG line drawing animation
    tl.fromTo('.about-svg-path',
      { strokeDasharray: '200', strokeDashoffset: '200' },
      { strokeDashoffset: '0', duration: 1.2, ease: 'power2.out' },
      '-=0.6'
    )

    // Description text and CTAs
    tl.fromTo('.about-desc',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.6'
    )
    tl.fromTo('.about-btn',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
      '-=0.4'
    )

    // Staggered pop-in for stat cards
    tl.fromTo('.stat-card',
      { opacity: 0, y: 35, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
      '-=0.3'
    )

    // 2. Mockup container entrance & concentric borders scale animations
    const visualTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-visual',
        start: 'top 82%',
        toggleActions: 'play none none none',
      }
    })

    visualTl.fromTo('.about-visual',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.about-border-1',
      { scale: 0.94, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' },
      '-=0.4'
    )
    .fromTo('.about-border-2',
      { scale: 0.92, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' },
      '-=0.4'
    )

    // 3. Gentle looping float for status badge
    gsap.fromTo('.about-badge',
      { y: 0 },
      {
        y: -8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      }
    )

    // 4. Parallax scroll effect for image
    gsap.fromTo('.about-img',
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-visual',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    )
  }, { scope: aboutRef })

  return (
    <>
      {/* ===== Top Announcement Bar & Hero Padding Wrapper ===== */}
      <div className="relative z-10 pt-[55px] sm:pt-0 bg-white">
        <div className="sm:hidden bg-gradient-to-r from-ink-950 via-ink-900 to-ink-950 text-white py-3.5 px-4 relative z-20 border-b border-white/5 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
          <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-copper-500/10 blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-copper-500/10 blur-xl pointer-events-none" />
        </div>
        
        {/* ===== Hero Section ===== */}
        <Hero />
      </div>

      {/* ===== About Brand Section ===== */}
      <section ref={aboutRef} className="relative py-16 sm:py-24 lg:py-36 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, #000 1px, transparent 1px), radial-gradient(circle at 85% 70%, #000 1px, transparent 1px)', backgroundSize: '48px 48px, 64px 64px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-copper-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-copper-500/3 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-48 h-48 border border-copper-500/10 rounded-full" />
        <div className="absolute bottom-1/4 -right-16 w-64 h-64 border border-steel-100/40 rounded-full" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="about-eyebrow inline-flex items-center gap-2.5 rounded-full border border-steel-200 bg-steel-50/50 px-4 py-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-steel-500 font-medium">Since 1998</span>
              </div>
              <div className="relative">
                <svg className="absolute -top-8 -left-10 w-24 h-24 text-copper-500/10 pointer-events-none" viewBox="0 0 100 100" fill="none">
                  <path className="about-svg-path" d="M10 50 Q 30 10, 50 50 T 90 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                <h2 className="about-heading text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-ink-900">
                  <span className="inline-block">Built on</span>{' '}
                  <span className="block font-semibold mt-1">Chemistry.</span>
                  <span className="inline-block mt-1">Driven by</span>{' '}
                  <span className="block font-semibold text-copper-500 mt-1">Precision.</span>
                </h2>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-16">
              <p className="about-desc text-steel-600 leading-relaxed text-lg">
                Specialised pressroom chemistry trusted by commercial, packaging and newspaper printers worldwide.
                ISO 9001-certified formulations engineered for consistent ink-water balance, faster makeready,
                and longer press life.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/about" className="about-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-800 text-white text-sm font-semibold hover:bg-ink-700 transition-all active:scale-[0.97] group">
                  Explore Our Facility
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/products" className="about-btn inline-flex items-center gap-2 px-6 py-3 rounded-full border border-steel-200 text-ink-600 text-sm font-medium hover:bg-steel-50 hover:border-steel-300 transition-all active:scale-[0.97]">
                  View Products
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-16 lg:mt-20">
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden shadow-[0_8px_30px_rgba(26,42,68,0.02)]">
              <div className="rounded-[calc(2rem-1px)] bg-white/70 backdrop-blur-md px-6 py-10 lg:py-12">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="stat-card bg-white border border-steel-100 rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(180,83,9,0.06)] hover:border-copper-500/20 hover:-translate-y-1.5 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-copper-500/10 to-copper-500/5 border border-copper-500/20 flex items-center justify-center mx-auto mb-5 text-copper-600 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <CounterStat value={27} suffix="+" label="Years of Manufacturing Excellence" large />
                  </div>
                  <div className="stat-card bg-white border border-steel-100 rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(180,83,9,0.06)] hover:border-copper-500/20 hover:-translate-y-1.5 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-copper-500/10 to-copper-500/5 border border-copper-500/20 flex items-center justify-center mx-auto mb-5 text-copper-600 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <CounterStat value={50} suffix="+" label="Countries Served" large />
                  </div>
                  <div className="stat-card bg-white border border-steel-100 rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(180,83,9,0.06)] hover:border-copper-500/20 hover:-translate-y-1.5 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-copper-500/10 to-copper-500/5 border border-copper-500/20 flex items-center justify-center mx-auto mb-5 text-copper-600 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <CounterStat value={120} suffix="+" label="Chemical Formulations" large />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual relative mt-16 lg:mt-24">
            {/* Architectural grid outline decorations */}
            <div className="about-border-1 absolute hidden sm:block -inset-4 border border-steel-200/30 rounded-[2.5rem] pointer-events-none z-0" />
            <div className="about-border-2 absolute hidden sm:block -inset-8 border border-steel-100/10 rounded-[3rem] pointer-events-none z-0" />
            
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 via-transparent to-steel-200/30 overflow-hidden shadow-2xl relative z-10">
              <div className="aspect-[16/9] lg:aspect-[21/9] rounded-[calc(2rem-1px)] overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900">
                <img
                  src="/company_placeholder.jpg"
                  alt="Falcon Chemicals Nashik Facility"
                  className="w-full h-full object-cover opacity-90 about-img transition-transform duration-700 hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating status badge */}
                <div className="about-badge absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md border border-steel-200/40 px-4 py-2.5 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-copper-500/10 flex items-center justify-center shrink-0">
                    <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-copper-500 animate-ping" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase font-bold text-steel-400 tracking-wider">Facility Status</p>
                    <p className="text-[11px] md:text-xs font-bold text-ink-900">Fully Operational — Niphad, Nashik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Product Range Section ===== */}
      <ProductMarquee/>

      {/* ===== Testimonials Section ===== */}
      <section className="section-padding bg-ink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-800" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="What Our Clients Say"
              subtitle="Trusted by printing operations worldwide."
              center
              light
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} light />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Clients / Trusted By Section ===== */}
      <section className="section-padding bg-steel-50 relative overflow-hidden w-full">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Trusted by Industry Leaders"
              subtitle="Printing operations worldwide rely on Falcon chemistry."
              center
            />
          </ScrollReveal>
          <div className="h-24 w-full relative">
            <LogoLoop
              logos={clients.map(c => ({
                node: (
                  <span className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-steel-200 shadow-sm select-none">
                    <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-copper-400 to-copper-500 flex items-center justify-center">
                      <span className="font-bold text-xs text-white">{c.initials}</span>
                    </span>
                    <span className="font-heading font-medium text-sm text-steel-600 whitespace-nowrap">{c.name}</span>
                  </span>
                )
              }))}
              speed={60}
              direction="left"
              logoHeight={56}
              gap={24}
              pauseOnHover
              fadeOut
              fadeOutColor="#f8f9fb"
              ariaLabel="Trusted printing industry partners"
            />
          </div>
        </div>
      </section>


    </>
  )
}
