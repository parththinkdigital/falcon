'use client'

import { useState, useEffect, useCallback } from 'react'

const banners = ['/hero-banners/1.jpeg']

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((i) => {
    setCurrent(i)
  }, [])

  useEffect(() => {
    if (banners.length < 2) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-auto aspect-[16/9] sm:aspect-auto sm:h-screen overflow-hidden flex items-center justify-center bg-ink-950">
      <div className="absolute inset-0 w-full h-full">
        {banners.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Hero banner ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none z-[2]" />

      <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          Pressroom Chemistry<br className="hidden sm:block" />
          <span className="text-copper-400">Driven by Passion</span>
        </h1>
        <p className="mt-6 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light">
          At Falcon, We don&rsquo;t just manufacture Pressroom Chemicals&mdash; we create solutions for better printing. Our purpose is to assist our customers overcome their day-to-day challenges on the print shopfloor. We strongly believe that Long-term business success comes from optimizing the purpose, not merely maximizing profits.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      {banners.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                i === current ? 'bg-white w-4' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
