'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight } from 'react-icons/fi'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ProductCard({
  code,
  name = 'AR-7500',
  description = 'AR-7500 is an advanced alcohol substitute that enhances water viscosity in continuous dampening systems. It is free of harmful air pollutants (HAPs) and safe for unbaked CTP plates. When used with Tower fountain solutions, AR-7500 helps achieve optimal ink and water balance, ensuring outstanding press performance.',
  image,
  href = '#',
  links = [],
  index = 0,
}) {
  const ref = useRef(null)

  const defaultLinks = [
    { label: 'View Technical Specification', href: '#' },
    { label: 'View Safety Datasheet', href: '#' },
    { label: 'Request a Sample', href: '#' },
  ]

  const cardLinks = links.length > 0 ? links : defaultLinks

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: index * 0.08,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }
    )
  }, { scope: ref })

  return (
    <div
      ref={ref}
      className="group bg-white overflow-hidden border border-gray-200 shadow-sm max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-stretch p-6 md:p-12 pb-6 md:pb-8">
        {/* Left Column: Image container */}
        <div className="w-full md:w-[35%] flex items-center justify-center p-4 relative min-h-[260px]">
          {image ? (
            <img
              src={image}
              alt={name}
              className="max-h-[280px] w-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-103"
            />
          ) : (
            /* Fallback generic bottle vector container if no image string provided */
            <div className="relative w-full h-full flex items-center justify-center min-h-[240px] bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <div className="w-28 h-40 rounded-xl bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-sm flex flex-col items-center justify-center p-4">
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider text-center">
                  TOWER
                </span>
                <div className="w-full h-12 bg-red-500/10 rounded mt-2 border border-red-200" />
              </div>
            </div>
          )}

          {/* Subtle Float-top Code Badge if provided optionally */}
          {code && (
            <div className="absolute top-0 left-0">
              <span className="inline-block px-2.5 py-1 bg-white border border-gray-200 text-[#d60042] text-[11px] font-bold tracking-wider shadow-sm">
                {code}
              </span>
            </div>
          )}
        </div>

        {/* Right Column: Product Content Info */}
        <div className="w-full md:w-[65%] flex flex-col justify-center pt-6 md:pt-0 md:pl-10">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#d60042] tracking-tight mb-5 leading-none">
            {name}
          </h2>
          <p className="text-[#222222] text-base md:text-[17px] leading-[1.65] font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Footer Nav Action Links Bar */}
      <div className="bg-[#f0f0f0] border-t border-gray-200 px-6 md:px-12 py-4">
        <div className="flex flex-wrap items-center justify-start gap-x-3 gap-y-2 text-sm">
          {cardLinks.map((link, i) => (
            <div key={i} className="flex items-center gap-3">
              <Link
                href={link.href || href}
                className="text-xs md:text-[13px] font-bold text-[#d60042] hover:text-red-800 transition-colors duration-150 tracking-wide flex items-center gap-1 group/link"
              >
                <span>{link.label}</span>
                <FiArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
              </Link>
              {i < cardLinks.length - 1 && (
                <span className="text-gray-400 font-light select-none text-base">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}