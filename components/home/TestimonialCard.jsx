'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiStar } from 'react-icons/fi'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function TestimonialCard({ quote, author, role, company, index = 0, light = false }) {
  const ref = useRef(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: index * 0.1,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    )
  }, { scope: ref })

  return (
    <div
      ref={ref}
      className={light
        ? 'relative rounded-2xl bg-white/5 border border-white/[0.07] p-6 sm:p-8 hover:border-copper-500/20 transition-all duration-300'
        : 'relative rounded-2xl bg-white border border-steel-200 p-6 sm:p-8 hover:border-copper-500/20 hover:shadow-[0_8px_32px_rgba(199,106,44,0.06)] transition-all duration-300'
      }
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={`w-4 h-4 fill-copper-400 text-copper-400`} />
        ))}
      </div>
      <p className={`leading-relaxed mb-6 ${light ? 'text-white/70' : 'text-steel-600'} text-sm`}>
        {"\u201C"}{quote}{"\u201D"}
      </p>
      <div className={`flex items-center gap-3 pt-4 ${light ? 'border-t border-white/[0.07]' : 'border-t border-steel-100'}`}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ink-700 to-ink-800 flex items-center justify-center shrink-0">
          <span className="text-white font-heading font-bold text-sm">{author.charAt(0)}</span>
        </div>
        <div>
          <p className={`font-heading font-semibold text-sm ${light ? 'text-white/90' : 'text-ink-800'}`}>{author}</p>
          <p className={`text-xs ${light ? 'text-white/40' : 'text-steel-500'}`}>{role}, {company}</p>
        </div>
      </div>
    </div>
  )
}
