'use client'

import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function CounterStat({ value, suffix, label, large, light }) {
  const ref = useRef(null)
  const numRef = useRef(null)

  useGSAP(() => {
    const el = numRef.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      el.textContent = value % 1 === 0 ? value : value.toFixed(1)
      return
    }

    const obj = { val: 0 }

    gsap.to(obj, {
      val: value,
      duration: 2.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        once: true,
      },
      onUpdate() {
        el.textContent = value % 1 === 0
          ? Math.round(obj.val)
          : obj.val.toFixed(1)
      },
    })
  }, { scope: ref })

  return (
    <div ref={ref}>
      <p className={`font-display font-bold leading-none ${large ? 'text-5xl' : 'text-4xl'} ${light ? 'text-white' : 'text-ink-900'}`}>
        <span ref={numRef}>0</span>{suffix}
      </p>
      <p className={`mt-2 ${large ? 'text-base' : 'text-sm'} ${light ? 'text-white/60' : 'text-steel-500'}`}>{label}</p>
    </div>
  )
}
