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

function VisionMissionSection() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.vm-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      }
    )
  }, { scope: ref })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-steel-50/30 relative z-10 border-t border-steel-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="vm-card bg-white p-10 md:p-14 rounded-[2rem] border border-steel-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(180,83,9,0.06)] hover:border-copper-500/20 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-copper-100/50 to-copper-500/5 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-steel-50 border border-steel-100 text-copper-600 mb-8 group-hover:scale-110 group-hover:bg-copper-500 group-hover:text-white group-hover:border-copper-500 transition-all duration-500 shadow-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-ink-900 mb-4 group-hover:text-copper-600 transition-colors duration-300">Our Vision</h3>
            <p className="text-steel-500 leading-relaxed font-sans font-light text-lg">
              To be the definitive global leader in sustainable pressroom chemistry, driving the evolution of the printing industry through uncompromising quality, forward-thinking innovation, and environmental responsibility.
            </p>
          </div>

          {/* Mission Card */}
          <div className="vm-card bg-white p-10 md:p-14 rounded-[2rem] border border-steel-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(180,83,9,0.06)] hover:border-copper-500/20 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br from-copper-100/50 to-copper-500/5 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-steel-50 border border-steel-100 text-copper-600 mb-8 group-hover:scale-110 group-hover:bg-copper-500 group-hover:text-white group-hover:border-copper-500 transition-all duration-500 shadow-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-ink-900 mb-4 group-hover:text-copper-600 transition-colors duration-300">Our Mission</h3>
            <p className="text-steel-500 leading-relaxed font-sans font-light text-lg">
              To engineer advanced, high-performance formulations that solve real production challenges. We empower commercial printers worldwide with reliable solutions that optimize print quality, reduce environmental impact, and streamline daily operations.
            </p>
          </div>
        </div>
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
              <span className="block">An Agile young Company</span>
              <span className="block font-semibold">backed by 30+ years of </span>
              <span className="block bg-gradient-to-r from-copper-500 to-copper-600 bg-clip-text text-transparent font-sans"> experience with Print!</span>
            </h1>
          </div>

          <div className="hero-sub-box mt-16 md:mt-20 w-full">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-3/5">
                <div className="relative pl-8 md:pl-10 border-l-2 border-copper-300/60">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-copper-500 border-2 border-white shadow-sm" />
                  <h2 className="text-xl md:text-2xl font-display font-medium text-ink-900 leading-snug">
                    Falcon was founded by a Printing Technologist with over 30 years of hands-on experience. His goal has always been to develop pressroom chemicals that address the real production challenges, and every formulation we create is inspired by this philosophy.
                  </h2>
                </div>

                <div className="mt-8 pl-8 md:pl-10 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-copper-300/60 to-transparent" />
                  <div className="space-y-6">
                    <div className="flex items-start gap-5 group">
                      <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-copper-500/10 flex items-center justify-center text-copper-600 group-hover:bg-copper-500 group-hover:text-white transition-all duration-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-steel-500 text-sm leading-relaxed font-sans font-light">
                          Leveraging his extensive national and international network, we quickly established a strong and robust distribution channel across 50+ countries.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 group">
                      <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-copper-500/10 flex items-center justify-center text-copper-600 group-hover:bg-copper-500 group-hover:text-white transition-all duration-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-steel-500 text-sm leading-relaxed font-sans font-light">
                          Our Operations Director receives ongoing training from veteran chemists in Europe and Southeast Asia, incorporating globally recognized manufacturing standards at every stage.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 group">
                      <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-copper-500/10 flex items-center justify-center text-copper-600 group-hover:bg-copper-500 group-hover:text-white transition-all duration-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-steel-500 text-sm leading-relaxed font-sans font-light">
                          Our Executive Director oversees finance, strategic planning, and corporate governance — ensuring Falcon continues to invest in innovation and deliver consistent value worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/5 flex flex-col justify-center">
                <div className="bg-gradient-to-br from-copper-500 to-copper-600 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-display font-bold leading-none mb-2">30+</div>
                    <p className="text-white/80 text-sm uppercase tracking-widest font-semibold">Years of Experience</p>
                    <div className="w-12 h-0.5 bg-white/30 my-6" />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-display font-bold">500+</div>
                        <p className="text-white/70 text-[10px] uppercase tracking-wider">Pressrooms</p>
                      </div>
                      <div>
                        <div className="text-2xl font-display font-bold">50+</div>
                        <p className="text-white/70 text-[10px] uppercase tracking-wider">Countries</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-steel-400 text-[10px] uppercase tracking-[0.2em] font-semibold mt-4 text-center">
                  Trusted by commercial printers worldwide
                </p>
              </div>
            </div>
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

      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Client logos */}
      <ClientMarquee />
    </div>
  )
}
