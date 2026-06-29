'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 640)
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  return (
    <section className="relative w-full h-auto aspect-[16/9] sm:aspect-auto sm:h-screen overflow-hidden flex items-center justify-center bg-ink-950">
      <div className="absolute inset-0 w-full h-full">
        {isDesktop ? (
          <video autoPlay muted loop playsInline key="desktop-video" className="w-full h-full object-cover">
            <source src="/Falcon.mp4" type="video/mp4" />
          </video>
        ) : (
          <video autoPlay muted loop playsInline key="mobile-video" className="w-full h-full object-cover">
            <source src="/Falcon.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
