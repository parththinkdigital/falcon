'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight } from 'react-icons/fi'
import { clsx } from 'clsx'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const gradients = {
  fountain: 'from-sky-900/90 via-ink-800/80 to-ink-900',
  ipa: 'from-emerald-900/90 via-ink-800/80 to-ink-900',
  plate: 'from-copper-800/90 via-ink-800/80 to-ink-900',
  roller: 'from-steel-700/90 via-ink-800/80 to-ink-900',
}

const images = {
  fountain: 'https://picsum.photos/seed/falcon-fountain/800/600',
  ipa: 'https://picsum.photos/seed/falcon-ipa/800/600',
  plate: 'https://picsum.photos/seed/falcon-plate/800/600',
  roller: 'https://picsum.photos/seed/falcon-roller/800/600',
}

export default function CategoryBanner({ title, description, href, gradient = 'fountain' }) {
  const ref = useRef(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    )
  }, { scope: ref })

  return (
    <Link
      ref={ref}
      href={href}
      className={clsx(
        'group relative block rounded-2xl overflow-hidden h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[420px]',
        'border border-white/[0.06] hover:border-copper-500/30',
        'transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
      )}
    >
      <div className="absolute inset-0">
        <img
          src={images[gradient] || images.fountain}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className={clsx(
        'absolute inset-0 bg-gradient-to-t',
        gradients[gradient] || gradients.fountain
      )} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-ink-900/10" />
      <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/10 transition-all duration-500" />

      <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-end h-full">
        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
          <span className="w-4 h-4 rounded bg-copper-400/30" />
        </div>
        <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
          {title}
        </h3>
        <div className="w-10 h-0.5 rounded-full bg-copper-500 mt-4 mb-3" />
        <p className="text-white/50 text-sm leading-relaxed max-w-sm translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-copper-400 mt-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
          Learn More <FiArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}
