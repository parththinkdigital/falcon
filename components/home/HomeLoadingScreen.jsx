'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import gsap from 'gsap'

export default function HomeLoadingScreen({ onFinish }) {
  const overlayRef = useRef(null)
  const videoRef = useRef(null)
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('falconHomeLoaded') === 'true') {
      setVisible(false)
      onFinish?.()
      return
    }
    setMounted(true)
  }, [onFinish])

  const dismiss = useCallback(() => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setVisible(false)
        sessionStorage.setItem('falconHomeLoaded', 'true')
        onFinish?.()
      },
    })
  }, [onFinish])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => dismiss()
    video.addEventListener('ended', handleEnded)

    const safetyTimer = setTimeout(() => {
      if (video.ended === false) dismiss()
    }, 10000)

    return () => {
      video.removeEventListener('ended', handleEnded)
      clearTimeout(safetyTimer)
    }
  }, [dismiss])

  if (!visible || !mounted) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/Falcon.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      <button
        onClick={dismiss}
        className="absolute top-6 right-6 z-10 px-4 py-2 rounded-full text-white/40 hover:text-white text-[11px] tracking-[0.15em] uppercase transition-colors border border-white/10 hover:border-white/25"
      >
        Skip
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-center">
        <p className="text-white/20 text-[10px] tracking-[0.35em] uppercase font-light">
          Falcon Chemicals
        </p>
      </div>
    </div>
  )
}
