'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiImage, FiVideo, FiArrowUpRight } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/shared/Hero'
import { clsx } from 'clsx'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const tabs = [
  { id: 'all', label: 'All', icon: FiImage },
  { id: 'photos', label: 'Photos', icon: FiImage },
  { id: 'videos', label: 'Videos', icon: FiVideo },
]

const items = [
  { type: 'photo', title: 'Production Floor', subtitle: 'State-of-the-art manufacturing line with advanced automation', aspect: 'aspect-[3/4]' },
  { type: 'photo', title: 'Quality Control Lab', subtitle: 'Rigorous testing at every batch for consistent output', aspect: 'aspect-[4/3]' },
  { type: 'video', title: 'Manufacturing Process', subtitle: 'Behind the scenes of our precision production', aspect: 'aspect-[1/1]' },
  { type: 'photo', title: 'R&D Facility', subtitle: 'Innovation center for next-generation formulations', aspect: 'aspect-[16/9]' },
  { type: 'photo', title: 'Warehouse & Logistics', subtitle: 'Global distribution network serving 50+ countries', aspect: 'aspect-[4/5]' },
  { type: 'video', title: 'Customer Success Story', subtitle: 'How we helped a leading printer scale operations', aspect: 'aspect-[3/4]' },
  { type: 'photo', title: 'Team & Culture', subtitle: 'The people driving Falcon Chemicals forward', aspect: 'aspect-[1/1]' },
  { type: 'photo', title: 'Trade Show Exhibition', subtitle: 'Connecting with industry leaders worldwide', aspect: 'aspect-[5/4]' },
  { type: 'video', title: 'Product Demo Series', subtitle: 'Application guides for our top formulations', aspect: 'aspect-[4/3]' },
  { type: 'photo', title: 'Raw Materials Storage', subtitle: 'Premium inputs that guarantee premium outputs', aspect: 'aspect-[2/3]' },
  { type: 'photo', title: 'Packaging Line', subtitle: 'Efficient and sustainable packaging solutions', aspect: 'aspect-[1/1]' },
  { type: 'photo', title: 'Global Partners Meet', subtitle: 'Annual distributor conference and networking', aspect: 'aspect-[3/2]' },
]

function getImgUrl(title, w, h) {
  return `https://picsum.photos/seed/${title.toLowerCase().replace(/\s+/g, '-')}/${w}/${h}`
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const [lbIndex, setLbIndex] = useState(0)
  const gridRef = useRef(null)

  const filtered = activeTab === 'all' ? items : items.filter((i) => i.type === activeTab)

  const openLightbox = useCallback((item) => {
    setLightbox(item)
    setLbIndex(filtered.indexOf(item))
  }, [filtered])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const goNext = useCallback(() => {
    const next = (lbIndex + 1) % filtered.length
    setLightbox(filtered[next])
    setLbIndex(next)
  }, [lbIndex, filtered])

  const goPrev = useCallback(() => {
    const prev = (lbIndex - 1 + filtered.length) % filtered.length
    setLightbox(filtered[prev])
    setLbIndex(prev)
  }, [lbIndex, filtered])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    if (lightbox) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox, goNext, goPrev])

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll('.gallery-card')
    if (!cards?.length) return
    gsap.fromTo(cards,
      { opacity: 0, y: 48, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.8,
        stagger: 0.06, ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          once: true,
        },
      },
    )
  }, [activeTab])

  return (
    <>
      <Hero
        title="Our Visual Journey"
        subtitle="Take a visual tour of our facilities, products, and the team behind Falcon Chemicals."
        eyebrow="Gallery"
      />

      <section className="section-padding bg-gradient-to-b from-steel-50 via-white to-steel-50 relative overflow-hidden">
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-copper-500/3 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-copper-500/4 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex flex-wrap gap-2 mb-14">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    'group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium',
                    'transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
                    isActive
                      ? 'bg-ink-800 text-white shadow-lg shadow-ink-800/15'
                      : 'bg-white/80 backdrop-blur-sm text-steel-500 border border-steel-200/60 hover:border-steel-300 hover:text-ink-800 hover:shadow-[0_4px_20px_rgba(26,42,68,0.06)]',
                  )}
                >
                  <Icon className={clsx(
                    'w-4 h-4 transition-transform duration-500',
                    isActive ? 'text-copper-400' : 'group-hover:scale-105',
                  )} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div
            ref={gridRef}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5"
          >
            {filtered.map((item, i) => (
              <button
                key={`${item.title}-${i}`}
                onClick={() => openLightbox(item)}
                className={clsx(
                  'gallery-card group relative w-full text-left cursor-pointer break-inside-avoid mb-5',
                  item.aspect,
                )}
              >
                <div className="absolute inset-0 p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden pointer-events-none transition-all duration-500 group-hover:border-copper-500/20 group-hover:shadow-[0_20px_50px_rgba(180,83,9,0.05)]">
                  <div className="relative w-full h-full rounded-[calc(2rem-1px)] overflow-hidden bg-ink-900">
                    <img
                      src={getImgUrl(item.title, 800, 600)}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />

                    <div className="absolute inset-0 bg-gradient-to-br from-copper-500/0 via-transparent to-copper-500/0 opacity-0 group-hover:opacity-20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />

                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-ink-800 text-[10px] font-semibold uppercase tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                        {item.type === 'video' ? <FiVideo className="w-3 h-3" /> : <FiImage className="w-3 h-3" />}
                        {item.type}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-heading font-semibold text-base">{item.title}</h3>
                          <p className="text-white/50 text-xs mt-0.5">{item.subtitle}</p>
                        </div>
                        <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          <FiArrowUpRight className="w-3 h-3 text-white/70" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/90 backdrop-blur-xl p-4 sm:p-6 md:p-10"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <FiX className="w-4 h-4" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  className="absolute left-4 md:left-8 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 opacity-0 md:opacity-100"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 opacity-0 md:opacity-100"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.div
              key={lightbox.title}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.4)] mb-6 relative">
                <div className="p-[2px] bg-gradient-to-b from-white/15 to-white/5 rounded-2xl">
                  <div className="relative aspect-[16/10] rounded-[calc(1rem-2px)] overflow-hidden bg-ink-900">
                    <img
                      src={getImgUrl(lightbox.title, 1200, 750)}
                      alt={lightbox.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-grid opacity-[0.04]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-3">
                          {lightbox.type === 'video' ? (
                            <FiVideo className="w-7 h-7 text-white/60" />
                          ) : (
                            <FiImage className="w-7 h-7 text-white/60" />
                          )}
                        </div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 text-ink-800 text-[11px] font-semibold uppercase tracking-wider shadow-lg">
                          {lightbox.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl">
                <h2 className="text-white font-heading font-bold text-2xl sm:text-3xl mb-2">{lightbox.title}</h2>
                <p className="text-white/45 text-base sm:text-lg leading-relaxed">{lightbox.subtitle}</p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium">
                  {lbIndex + 1} / {filtered.length}
                </span>
                <span className="w-px h-3 bg-white/10" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium">
                  Click outside to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
