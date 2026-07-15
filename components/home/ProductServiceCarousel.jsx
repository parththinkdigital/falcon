'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductServiceCarousel({ banners }) {
  const [slideIndex, setSlideIndex] = useState(banners.length > 1 ? 1 : 0)
  const [isPaused, setIsPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const loopedBanners = banners.length > 1
    ? [banners[banners.length - 1], ...banners, banners[0]]
    : banners
  const activeIndex = banners.length > 1 ? (slideIndex - 1 + banners.length) % banners.length : 0

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)

    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    setSlideIndex(banners.length > 1 ? 1 : 0)
  }, [banners.length])

  useEffect(() => {
    if (isPaused || reduceMotion || banners.length < 2) return undefined

    const timer = window.setInterval(() => {
      setTransitionEnabled(true)
      setSlideIndex((current) => current >= banners.length + 1 ? current : current + 1)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [banners.length, isPaused, reduceMotion])

  const goToPrevious = () => {
    if (banners.length < 2) return
    setTransitionEnabled(true)
    setSlideIndex((current) => current <= 0 ? current : current - 1)
  }

  const goToNext = () => {
    if (banners.length < 2) return
    setTransitionEnabled(true)
    setSlideIndex((current) => current >= banners.length + 1 ? current : current + 1)
  }

  const handleTransitionEnd = () => {
    if (banners.length < 2) return

    if (slideIndex <= 0) {
      setTransitionEnabled(false)
      setSlideIndex(banners.length)
      requestAnimationFrame(() => requestAnimationFrame(() => setTransitionEnabled(true)))
    }

    if (slideIndex >= banners.length + 1) {
      setTransitionEnabled(false)
      setSlideIndex(1)
      requestAnimationFrame(() => requestAnimationFrame(() => setTransitionEnabled(true)))
    }
  }

  return (
    <div
      className="relative bg-[#06294A] py-6 md:px-12 md:py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden md:rounded-lg">
        <div
          className="flex"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translate3d(-${slideIndex * 100}%, 0, 0)`,
            transition: reduceMotion || !transitionEnabled ? 'none' : 'transform 680ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {loopedBanners.map((banner, index) => (
            <Link
              key={`${banner.image}-${index}`}
              href={banner.href}
              className="relative block min-w-full overflow-hidden bg-[#06294A]"
              style={{ aspectRatio: '16/9' }}
              aria-label={`View ${banner.title}`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 h-full w-full object-contain md:object-cover"
              />
            </Link>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 md:left-4"
        aria-label="Previous product and services banner"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#06294A] shadow-lg shadow-black/25 backdrop-blur transition hover:bg-white active:scale-95 md:h-12 md:w-12">
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </span>
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 md:right-4"
        aria-label="Next product and services banner"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#06294A] shadow-lg shadow-black/25 backdrop-blur transition hover:bg-white active:scale-95 md:h-12 md:w-12">
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </span>
      </button>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm md:bottom-4">
        {banners.map((banner, index) => (
          <button
            key={banner.image}
            type="button"
            onClick={() => {
              setTransitionEnabled(true)
              setSlideIndex(index + 1)
            }}
            className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Show ${banner.title}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
