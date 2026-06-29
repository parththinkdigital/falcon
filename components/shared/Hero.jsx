'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { clsx } from 'clsx'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

export default function Hero({
  title,
  subtitle,
  eyebrow,
  children,
  className,
}) {
  const ref = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.hero-eyebrow', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.2 })
      .fromTo('.hero-title', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.35')
      .fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      
    if (ref.current?.querySelector('.hero-children')) {
      tl.fromTo('.hero-children', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
    }
  }, { scope: ref })

  // Split title if it contains specific words or just style it cleanly
  const words = title ? title.trim().split(' ') : []
  let lastWord = ''
  let titleStart = ''
  
  if (words.length > 0) {
    lastWord = words.pop()
    titleStart = words.join(' ')
  }

  return (
    <section
      ref={ref}
      className={clsx(
        'relative overflow-hidden bg-gradient-to-b from-steel-50 via-white to-white pt-32 pb-16 md:pt-40 md:pb-20 border-b border-steel-100/60 z-10',
        className
      )}
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] select-none z-0">
        <div className="absolute inset-y-0 left-1/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-2/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-black" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-black" />
        <div className="absolute inset-x-0 top-2/3 h-px bg-black" />
      </div>

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-copper-500/4 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-copper-500/3 blur-[100px] pointer-events-none z-0" />

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl">
          {eyebrow && (
            <div className="hero-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full border border-copper-500/20 bg-copper-500/5 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse" />
              <span className="text-[9px] tracking-[0.25em] uppercase text-copper-600 font-semibold font-mono">
                {eyebrow}
              </span>
            </div>
          )}
          
          {title && (
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-display font-light text-ink-900 leading-[1.1] tracking-tight">
              {titleStart}{' '}
              <span className="font-semibold bg-gradient-to-r from-copper-500 to-copper-600 bg-clip-text text-transparent font-sans">
                {lastWord}
              </span>
            </h1>
          )}
          
          {subtitle && (
            <p className="hero-subtitle text-steel-500 text-sm md:text-base mt-4 max-w-xl leading-relaxed font-sans font-light">
              {subtitle}
            </p>
          )}
          
          {children && (
            <div className="hero-children mt-6 flex flex-wrap gap-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
