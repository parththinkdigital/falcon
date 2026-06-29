'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  distance = 40,
  blur = false,
  once = true,
  stagger = false,
}) {
  const ref = useRef(null)

  useGSAP(() => {
    if (!ref.current) return
    const targets = stagger
      ? ref.current.children
      : ref.current

    gsap.fromTo(
      targets,
      {
        opacity: 0,
        y: distance,
        ...(blur && { filter: 'blur(8px)' }),
      },
      {
        opacity: 1,
        y: 0,
        ...(blur && { filter: 'blur(0px)' }),
        duration,
        ease: 'power3.out',
        stagger: stagger ? 0.08 : 0,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once,
        },
      }
    )
  }, { scope: ref })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
