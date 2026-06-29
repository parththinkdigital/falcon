'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { clsx } from 'clsx'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SectionHeader({ title, subtitle, center = false, light = false, eyebrow }) {
  const ref = useRef(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    )
  }, { scope: ref })

  return (
    <div ref={ref} className={`mb-14 ${center ? 'text-center' : ''} ${light ? 'text-white' : ''}`}>
      {eyebrow && (
        <span className={clsx(
          'inline-block text-[11px] font-medium uppercase tracking-[0.18em] mb-3',
          light ? 'text-copper-300' : 'text-copper-500'
        )}>
          {eyebrow}
        </span>
      )}
      <h2 className={clsx(
        'font-heading font-bold tracking-tight text-balance',
        light ? 'text-white' : 'text-ink-800',
        center ? 'mx-auto' : '',
        subtitle ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl',
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          'text-base sm:text-lg leading-relaxed mt-4 max-w-2xl',
          center && 'mx-auto',
          light ? 'text-white/60' : 'text-steel-500'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
