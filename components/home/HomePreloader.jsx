'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function HomePreloader() {
  const loaderRef = useRef(null)
  const videoRef = useRef(null)
  const hasFinishedRef = useRef(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const loader = loaderRef.current
    const video = videoRef.current
    if (!loader) return undefined

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (isMobile) {
      setIsVisible(false)
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const finishPreloader = () => {
      if (hasFinishedRef.current) return
      hasFinishedRef.current = true

      gsap.to(loader, {
        yPercent: -100,
        duration: prefersReducedMotion ? 0 : 0.65,
        ease: 'expo.inOut',
        onComplete: () => {
          document.body.style.overflow = previousOverflow
          setIsVisible(false)
        },
      })
    }

    if (prefersReducedMotion) {
      const timeout = window.setTimeout(() => {
        finishPreloader()
      }, 450)

      return () => {
        window.clearTimeout(timeout)
        document.body.style.overflow = previousOverflow
      }
    }

    gsap.set(loader, { autoAlpha: 1 })

    if (video) {
      video.playbackRate = 1.75
      video.addEventListener('ended', finishPreloader)
      video.addEventListener('error', finishPreloader)
      video.play().catch(finishPreloader)
    }

    const fallbackTimeout = window.setTimeout(finishPreloader, 7000)

    return () => {
      window.clearTimeout(fallbackTimeout)
      if (video) {
        video.removeEventListener('ended', finishPreloader)
        video.removeEventListener('error', finishPreloader)
      }
      gsap.killTweensOf(loader)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={loaderRef}
      role="status"
      aria-live="polite"
      aria-label="Loading Falcon Pressroom Solutions"
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#071F3D] text-[#EFE3CC]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        src="/Falcon.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </div>
  )
}
