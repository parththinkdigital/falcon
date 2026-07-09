'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { categories } from '@/lib/products-data'

gsap.registerPlugin(useGSAP)

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Knowledge Centre', href: '/knowledge-center' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  const ref = useRef(null)
  const productLinks = categories.map((category) => ({
    label: category.title,
    href: `/products/${category.id}`,
  }))

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
            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
              <span className="font-semibold text-sm text-neutral-800">Falcon Chemicals</span><br />
              Precision pressroom chemistry engineered for commercial printing operations worldwide. Trusted by printers in 50+ countries.
            </p>
          </div>

          {/* Products */}
          <div className="footer-col lg:col-span-2">
            <h3 className="font-extrabold text-xs text-neutral-800 mb-6 uppercase tracking-[0.22em]">Products</h3>
            <ul className="space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm text-neutral-600 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-copper-500"
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
            <h3 className="font-extrabold text-xs text-neutral-800 mb-6 uppercase tracking-[0.22em]">Company</h3>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm text-neutral-600 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-copper-500"
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
            <h3 className="font-extrabold text-xs text-neutral-800 mb-6 uppercase tracking-[0.22em]">Contact Us</h3>
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
        <p className="text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Falcon Chemicals. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-neutral-600">
          <Link href="/privacy" className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-neutral-700">Privacy Policy</Link>
          <Link href="/terms" className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-neutral-700">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
