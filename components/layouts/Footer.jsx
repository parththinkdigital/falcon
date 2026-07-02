'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

gsap.registerPlugin(useGSAP)

const productLinks = [
  { label: 'Fountain Solutions', href: '/solutions/fountain-solutions' },
  { label: 'IPA Replacements', href: '/solutions/ipa-replacements' },
  { label: 'Plate Cleaners', href: '/solutions/plate-cleaners' },
  { label: 'Roller & Blanket Washes', href: '/solutions/roller-blanket-washes' },
  { label: 'Specialty Chemicals', href: '/solutions/specialty-chemicals' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Knowledge Centre', href: '/knowledge-center' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  const ref = useRef(null)

  useGSAP(() => {
    const cols = ref.current?.querySelectorAll('.footer-col')
    if (!cols?.length) return
    gsap.fromTo(cols,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      }
    )
  }, { scope: ref })

  return (
    <footer ref={ref} className="relative bg-white text-neutral-900 overflow-hidden">

      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-copper-400/[0.03] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-copper-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-copper-500/[0.05] via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-copper-400/[0.04] rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-copper-500/[0.03] rounded-full blur-[150px]" />
        <div className="container-custom relative z-10 py-20 lg:py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-copper-400/50" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-copper-500/70 font-semibold">Get in Touch</span>
              <span className="h-px w-8 bg-copper-400/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
              Ready to optimise your pressroom?
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Our technical team is standing by to help you find the perfect chemistry for your operation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/contact" className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-copper-500 text-white text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-copper-600 active:scale-[0.97]">
                <span>Contact Us</span>
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
                  <FiArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link href="/contact" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-neutral-500 text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-300 active:scale-[0.97]">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* Main grid */}
      <div className="container-custom pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="footer-col lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-copper-500/10 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                <div className="relative">
                  <img
                    src="/LOGO WITH TL.jpg"
                    alt="Falcon Chemicals"
                    className="w-30 h-20 object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              <span className="font-semibold text-sm text-neutral-600">Falcon Chemicals</span><br />
              Precision pressroom chemistry engineered for commercial printing operations worldwide. Trusted by printers in 50+ countries.
            </p>
          </div>

          {/* Products */}
          <div className="footer-col lg:col-span-2">
            <h3 className="font-semibold text-[10px] text-neutral-400 mb-6 uppercase tracking-[0.2em]">Products</h3>
            <ul className="space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm text-neutral-400 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-copper-500"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-px left-0 w-0 h-px bg-copper-400 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col lg:col-span-2">
            <h3 className="font-semibold text-[10px] text-neutral-400 mb-6 uppercase tracking-[0.2em]">Company</h3>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm text-neutral-400 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-copper-500"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-px left-0 w-0 h-px bg-copper-400 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Double Bezel */}
          <div className="footer-col lg:col-span-4">
            <h3 className="font-semibold text-[10px] text-neutral-400 mb-6 uppercase tracking-[0.2em]">Contact Us</h3>
            <div className="p-1.5 rounded-[1.25rem] bg-black/[0.02] ring-1 ring-black/[0.04]">
              <div className="rounded-[calc(1.25rem-0.375rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] p-5 space-y-4">
                <a href="tel:+919022247664" className="flex items-center gap-3.5 text-sm text-neutral-600 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-copper-500 group">
                  <span className="w-9 h-9 rounded-xl bg-copper-50 flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-copper-100">
                    <FiPhone className="w-4 h-4 text-copper-500" />
                  </span>
                  <span>+91-9022247664 / +91-9226347664</span>
                </a>
                <a href="mailto:kkd@falchem.in" className="flex items-center gap-3.5 text-sm text-neutral-600 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-copper-500 group">
                  <span className="w-9 h-9 rounded-xl bg-copper-50 flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-copper-100">
                    <FiMail className="w-4 h-4 text-copper-500" />
                  </span>
                  <span>kkd@falchem.in / skd@falchem.in</span>
                </a>
                <div className="flex items-start gap-3.5 text-sm text-neutral-600">
                  <span className="w-9 h-9 rounded-xl bg-copper-50 flex items-center justify-center shrink-0 mt-0.5">
                    <FiMapPin className="w-4 h-4 text-copper-500" />
                  </span>
                  <span>499/1/B, Pimpri Road, Off Nashik-Ch. Sambhajinagar Highway, Chittgaon, Taluka Niphad, Dist. Nashik-422 003, Maharashtra (INDIA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} Falcon Chemicals. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-neutral-400">
          <Link href="/privacy" className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-neutral-700">Privacy Policy</Link>
          <Link href="/terms" className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-neutral-700">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
