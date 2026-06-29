'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend, FiCheck, FiArrowRight, FiSliders, FiShield, FiTruck } from 'react-icons/fi'
import { clsx } from 'clsx'
import Link from 'next/link'
import Hero from '@/components/shared/Hero'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

const contactInfo = [
  {
    icon: FiMapPin,
    label: 'Address',
    lines: ['Plot No. A-12, MIDC Area', 'Niphad, Nashik', 'Maharashtra 422303, India'],
  },
  {
    icon: FiPhone,
    label: 'Phone',
    lines: ['+91 253 6789 012', '+91 253 6789 013'],
  },
  {
    icon: FiMail,
    label: 'Email',
    lines: ['info@falconchemicals.in', 'sales@falconchemicals.in'],
  },
  {
    icon: FiClock,
    label: 'Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
  },
]

const subjects = [
  'Product Inquiry',
  'Technical Support',
  'Request a Quote',
  'Custom Formulation',
  'General Question',
]

const faqs = [
  {
    question: 'What is the typical lead time for custom formulations?',
    answer: 'Our Nashik R&D laboratory typically drafts custom blending prototypes within 5-7 business days, followed by trial batch production once specifications are aligned.',
  },
  {
    question: 'Are your pressroom chemicals compliant with environmental regulations?',
    answer: 'Yes. All our products manufactured at the Niphad facility are formulated to meet national and international environmental standards, including low-VOC compliance and REACH safety requirements.',
  },
  {
    question: 'Do you offer bulk supply and logistics assistance?',
    answer: 'Absolutely. We supply in standard 20L cans, 200L drums, and 1,000L IBC tanks. Our Nashik logistics desk coordinates direct freight delivery to print houses nationwide.',
  },
  {
    question: 'Can we request a product trial or sample?',
    answer: 'Yes. We encourage trial periods for new clients. Contact our sales department using the form above to coordinate sample shipments and technical operator setup support.',
  },
]

function SuccessState() {
  return (
    <div className="text-center py-16 px-8">
      <div className="relative inline-block mb-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-copper-500 to-amber-500 flex items-center justify-center">
          <FiCheck className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -inset-4 rounded-full bg-copper-500/10 animate-ping" />
      </div>
      <h3 className="font-heading font-bold text-3xl text-ink-800 mb-3">Message Received</h3>
      <p className="text-steel-500 max-w-sm mx-auto leading-relaxed">
        Thank you for reaching out. Our technical team in Nashik will review your inquiry and respond within 24 hours.
      </p>
      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-copper-600">
        <FiMail className="w-4 h-4" />
        <span>We'll send a confirmation to your email</span>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeSubject, setActiveSubject] = useState(null)
  const [activeFaq, setActiveFaq] = useState(null)
  
  const pageRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const facilityRef = useRef(null)
  const faqRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    gsap.to(formRef.current, {
      opacity: 0, y: -20, duration: 0.4, ease: 'power2.in',
      onComplete: () => setSubmitted(true)
    })
  }

  useGSAP(() => {
    const cards = infoRef.current?.querySelectorAll('.info-card')
    if (cards?.length) {
      gsap.fromTo(cards,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: infoRef.current, start: 'top 85%', once: true }
        }
      )
    }

    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%', once: true }
        }
      )
    }

    const facilityBlocks = facilityRef.current?.querySelectorAll('.facility-block')
    if (facilityBlocks?.length) {
      gsap.fromTo(facilityBlocks,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: facilityRef.current, start: 'top 82%', once: true }
        }
      )
    }

    const faqItems = faqRef.current?.querySelectorAll('.faq-item')
    if (faqItems?.length) {
      gsap.fromTo(faqItems,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: faqRef.current, start: 'top 85%', once: true }
        }
      )
    }
  }, { scope: pageRef })

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-steel-50 via-white to-steel-50 relative overflow-hidden">
      {/* Background Architectural Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <div className="absolute inset-y-0 left-1/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-2/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-black" />
      </div>

      {/* Subtle Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-copper-500/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-copper-500/2 blur-[100px] pointer-events-none" />

      {/* Hero */}
      <Hero
        title="Let's Talk Chemistry"
        subtitle="Whether you need a quote, technical guidance, or want to explore custom formulations — our team is ready to help."
        eyebrow="Contact Us"
      />

      {/* Main Content */}
      <section className="section-padding relative z-10 pt-12">
        <div className="container-custom">
          {/* Info cards */}
          <div ref={infoRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="info-card p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)] transition-all duration-500 hover:-translate-y-1 hover:border-copper-500/20 hover:shadow-[0_20px_50px_rgba(180,83,9,0.04)]">
                  <div className="rounded-[calc(2rem-1px)] bg-white/70 backdrop-blur-md p-7 h-full flex flex-col justify-start">
                    <div className="w-10 h-10 rounded-xl bg-copper-50 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-copper-500" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-400 block mb-2">{item.label}</span>
                    <div className="space-y-1.5">
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-sm font-medium text-ink-800 leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Form + Map Sidebar */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden shadow-[0_12px_40px_rgba(26,42,68,0.03)]">
                <div className="rounded-[calc(2rem-1px)] bg-white/70 backdrop-blur-md p-8 sm:p-10" ref={formRef}>
                  <div className="mb-8">
                    <h2 className="font-heading font-semibold text-2xl text-ink-900 tracking-tight mb-2">Send Us a Message</h2>
                    <p className="text-steel-500 text-sm">Fill in the form and we'll get back to you within one business day.</p>
                  </div>

                  {submitted ? (
                    <SuccessState />
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-semibold text-ink-900 uppercase tracking-wider mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl border border-steel-200 bg-steel-50/50 text-ink-800 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-copper-500/30 focus:border-copper-400 focus:bg-white transition-all duration-300"
                            placeholder="Rahul Sharma"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold text-ink-900 uppercase tracking-wider mb-2">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl border border-steel-200 bg-steel-50/50 text-ink-800 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-copper-500/30 focus:border-copper-400 focus:bg-white transition-all duration-300"
                            placeholder="rahul.sharma@printco.in"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-semibold text-ink-900 uppercase tracking-wider mb-2">Phone</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl border border-steel-200 bg-steel-50/50 text-ink-800 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-copper-500/30 focus:border-copper-400 focus:bg-white transition-all duration-300"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold text-ink-900 uppercase tracking-wider mb-2">Company</label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl border border-steel-200 bg-steel-50/50 text-ink-800 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-copper-500/30 focus:border-copper-400 focus:bg-white transition-all duration-300"
                            placeholder="PrintCo Solutions India"
                          />
                        </div>
                      </div>

                      {/* Subject selection */}
                      <div>
                        <label className="block text-[10px] font-semibold text-ink-900 uppercase tracking-wider mb-2">Subject</label>
                        <div className="flex flex-wrap gap-2">
                          {subjects.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => { setActiveSubject(s); setForm({ ...form, subject: s }) }}
                              className={clsx(
                                'px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300',
                                activeSubject === s
                                  ? 'bg-ink-800 text-white shadow-md'
                                  : 'bg-steel-100/70 text-steel-600 hover:bg-steel-200 hover:text-ink-800'
                              )}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-ink-900 uppercase tracking-wider mb-2">Message *</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-steel-200 bg-steel-50/50 text-ink-800 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-copper-500/30 focus:border-copper-400 focus:bg-white transition-all duration-300 resize-none"
                          placeholder="We're interested in requesting a trial of your low-VOC fountain solutions for our pressroom..."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                        <p className="text-[11px] text-steel-400 leading-relaxed max-w-xs">
                          By submitting, you agree to our{' '}
                          <Link href="#" className="text-copper-500 hover:underline">Privacy Policy</Link>.
                          We'll never share your data.
                        </p>
                        <button type="submit" className="btn-accent group inline-flex items-center gap-2 shrink-0">
                          Send Message
                          <FiSend className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Google Map Sidebar */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              {/* Premium Google Map Card */}
              <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden shadow-[0_12px_40px_rgba(26,42,68,0.03)]">
                <div className="rounded-[calc(2rem-1px)] bg-white/70 backdrop-blur-md overflow-hidden flex flex-col">
                  {/* Map Iframe */}
                  <div className="h-72 w-full relative bg-steel-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.711815128035!2d74.10887373809033!3d20.091176045558117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc4e09f87efd5%3A0xad028dc7f6de311b!2sNiphad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719640000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(0.25) contrast(1.1) opacity(0.9)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Falcon Chemicals Niphad Plant Location"
                    />
                  </div>
                  
                  {/* Map footer details */}
                  <div className="p-6 border-t border-steel-100 bg-white">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-copper-50 flex items-center justify-center shrink-0">
                        <FiMapPin className="w-5 h-5 text-copper-500" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-ink-900 leading-tight">Niphad Headquarters</h4>
                        <p className="text-xs text-steel-500 mt-1 leading-relaxed">
                          Plot No. A-12, MIDC Industrial Area, Niphad, Nashik, Maharashtra 422303, India
                        </p>
                        <a 
                          href="https://maps.google.com/?q=Niphad,+Maharashtra" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-copper-500 hover:text-copper-600 mt-3 transition-colors group"
                        >
                          Open in Google Maps
                          <FiArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plant highlights */}
              <div className="p-6 rounded-[2rem] border border-steel-200/50 bg-white/70 backdrop-blur-md shadow-sm">
                <h3 className="font-heading font-semibold text-sm text-ink-900 mb-4">Niphad Manufacturing Facility</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-steel-50 border border-steel-100">
                    <span className="text-[10px] uppercase font-bold text-steel-400 tracking-wider">Capacity</span>
                    <p className="text-base font-semibold text-ink-800 mt-1">2,500+ Tons</p>
                    <span className="text-[9px] text-steel-400 block mt-0.5">Annual formulation output</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-steel-50 border border-steel-100">
                    <span className="text-[10px] uppercase font-bold text-steel-400 tracking-wider">R&D Lab</span>
                    <p className="text-base font-semibold text-ink-800 mt-1">On-Site</p>
                    <span className="text-[9px] text-steel-400 block mt-0.5">Advanced testing laboratory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights Block Section */}
      <section className="section-padding bg-ink-900 relative overflow-hidden" ref={facilityRef}>
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-copper-400 mb-3">Facility Focus</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
              State-of-the-Art Operations in Nashik
            </h2>
            <p className="text-white/40 text-sm sm:text-base mt-3 leading-relaxed font-light">
              Our Niphad facility houses advanced blending automated reactors, high-purity testing laboratories, and centralized logistics to serve printers across India and the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="facility-block p-8 rounded-[2rem] bg-ink-800 border border-white/5 flex flex-col justify-start">
              <div className="w-12 h-12 rounded-2xl bg-copper-500/10 flex items-center justify-center mb-6">
                <FiSliders className="w-6 h-6 text-copper-400" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">Automated Blending</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Precise automated Reactor tanks maintain exact batch formulation replication, guaranteeing consistent pH and conductivity tolerances on every order.
              </p>
            </div>

            <div className="facility-block p-8 rounded-[2rem] bg-ink-800 border border-white/5 flex flex-col justify-start">
              <div className="w-12 h-12 rounded-2xl bg-copper-500/10 flex items-center justify-center mb-6">
                <FiShield className="w-6 h-6 text-copper-400" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">Quality Control</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Our QC lab analyzes incoming raw elements and finished solutions, tracking specific gravities, refractive indices, and surface tensions to military-grade specs.
              </p>
            </div>

            <div className="facility-block p-8 rounded-[2rem] bg-ink-800 border border-white/5 flex flex-col justify-start">
              <div className="w-12 h-12 rounded-2xl bg-copper-500/10 flex items-center justify-center mb-6">
                <FiTruck className="w-6 h-6 text-copper-400" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">National Logistics</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Strategically positioned in the Nashik industrial corridor with close highway and rail freight access, enabling fast shipping timelines across the subcontinent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-white to-steel-50 relative overflow-hidden" ref={faqRef}>
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-copper-500/3 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-copper-500/2 blur-[80px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-copper-500/20 bg-copper-500/5 backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse" />
              <span className="text-[9px] tracking-[0.25em] uppercase text-copper-600 font-semibold font-mono">FAQ</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-ink-900 tracking-tight leading-tight">
              Frequently Asked <span className="font-bold bg-gradient-to-r from-copper-500 to-copper-600 bg-clip-text text-transparent font-sans">Questions</span>
            </h2>
            <p className="text-steel-500 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Find quick answers to common operational, technical, and logistic queries about Falcon Chemicals.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div 
                  key={index}
                  className="faq-item p-[1px] rounded-2xl bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
                >
                  <div className="rounded-[calc(2rem-1px)] bg-white">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-heading font-medium text-sm sm:text-base text-ink-900 pr-4">
                        {faq.question}
                      </span>
                      <span className={clsx(
                        "w-6 h-6 rounded-full bg-steel-50 flex items-center justify-center text-steel-500 text-xs shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180 bg-copper-50 text-copper-600"
                      )}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                          )}
                        </svg>
                      </span>
                    </button>
                    
                    <div className={clsx(
                      "transition-all duration-300 ease-in-out overflow-hidden",
                      isOpen ? "max-h-48 border-t border-steel-100" : "max-h-0"
                    )}>
                      <p className="px-6 py-5 text-xs sm:text-sm text-steel-500 leading-relaxed bg-steel-50/30">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}