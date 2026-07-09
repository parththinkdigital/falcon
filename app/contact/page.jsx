'use client'

import { useState } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { FiArrowRight, FiCheck, FiChevronDown, FiClock, FiMail, FiMapPin, FiPhone, FiSend, FiShield, FiSliders, FiTruck } from 'react-icons/fi'
import { api } from '@/lib/api'

const contactInfo = [
  {
    icon: FiMapPin,
    label: 'Headquarters',
    value: 'Nashik, Maharashtra',
    lines: ['499/1/B, Pimpri Road, Off Nashik-Ch. Sambhajinagar Highway, Chittgaon, Taluka Niphad, District Nashik-422 003. Maharashtra State, India'],
  },
  {
    icon: FiPhone,
    label: 'Call Us',
    value: '+91-9022247664',
    lines: ['+91-7972561459', '+91-9226347664', 'WhatsApp: +91-9226347664 / +91-9029726283'],
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'kkd@falchem.in',
    lines: ['skd@falchem.in'],
  },
  {
    icon: FiClock,
    label: 'Business Hours',
    value: 'Mon - Sat',
    lines: ['9:00 AM - 6:00 PM', 'Sunday: Closed'],
  },
]

const subjects = ['Product Inquiry', 'Technical Support', 'Request a Quote', 'Custom Formulation', 'General Question']

const facilityHighlights = [
  {
    icon: FiSliders,
    title: 'Automated Blending',
    text: 'Controlled reactor systems help maintain repeatable pH, conductivity, and batch performance across every order.',
  },
  {
    icon: FiShield,
    title: 'Quality Control',
    text: 'Incoming raw materials and finished formulations are checked through dedicated laboratory workflows before dispatch.',
  },
  {
    icon: FiTruck,
    title: 'National Logistics',
    text: 'Our Nashik location gives Falcon fast freight access for printers across India and export-ready supply requirements.',
  },
]

const faqs = [
  {
    question: 'What is the typical lead time for custom formulations?',
    answer: 'Our Nashik R&D laboratory typically drafts custom blending prototypes within 5-7 business days, followed by trial batch production once specifications are aligned.',
  },
  {
    question: 'Are your pressroom chemicals compliant with environmental regulations?',
    answer: 'Yes. Falcon products are formulated to support modern low-VOC and pressroom safety requirements while maintaining consistent print performance.',
  },
  {
    question: 'Do you offer bulk supply and logistics assistance?',
    answer: 'Yes. We support standard cans, drums, and bulk packaging needs, with logistics coordination for direct freight delivery to print houses.',
  },
  {
    question: 'Can we request a product trial or sample?',
    answer: 'Yes. Send your press type, current chemistry, and print requirement through the form and our team will coordinate the right sample or trial recommendation.',
  },
]

const emptyForm = { name: '', email: '', phone: '', company: '', subject: subjects[0], message: '' }

function SuccessState() {
  return (
    <div className="rounded-[1.75rem] bg-[#F4FAF0] px-6 py-12 text-center ring-1 ring-[#4B8B2B]/15">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4B8B2B] text-white shadow-[0_18px_36px_rgba(75,139,43,0.25)]">
        <FiCheck className="h-10 w-10" />
      </div>
      <h3 className="mt-7 text-3xl font-extrabold text-[#004B8D]">Message received</h3>
      <p className="mx-auto mt-3 max-w-md leading-7 text-slate-700">
        Thank you for reaching out. Our technical team will review your inquiry and respond as soon as possible.
      </p>
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [activeFaq, setActiveFaq] = useState(null)

  const updateForm = (field, value) => setForm((current) => ({ ...current, [field]: value }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      await api.submitContact({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        productInterest: form.subject,
        message: form.message,
      })
      setSubmitted(true)
      setForm(emptyForm)
    } catch (submitError) {
      setError('We could not send your message right now. Please call or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-[#00B8D9]/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#4B8B2B]/25 blur-[110px]" />
        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl grid-cols-1 gap-10 px-6 py-28 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="text-white">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Contact Us</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Let's Talk
              <span className="block text-[#00B8D9]">Chemistry</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">
              Need a quote, technical guidance, product samples, or custom pressroom chemistry? Falcon's team is ready to help you move faster with confidence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="tel:+919022247664" className="rounded-full bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(75,139,43,0.25)]">Call Sales</a>
              <a href="mailto:kkd@falchem.in" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#004B8D]">Email Team</a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-md">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#4B8B2B]">Fast Response Desk</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#004B8D]">Share your requirement.</h2>
              <p className="mt-3 leading-7 text-slate-700">Tell us about your press type, challenge, and volume. We will route your message to the right technical or sales contact.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Response</p>
                  <p className="mt-1 text-xl font-extrabold text-[#071F3D]">24 hrs</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Support</p>
                  <p className="mt-1 text-xl font-extrabold text-[#071F3D]">Pan India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50 to-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-[1.75rem] bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6FF] text-[#004B8D]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-[10px] font-extrabold uppercase tracking-widest text-[#4B8B2B]">{item.label}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#004B8D]">{item.value}</h3>
                  <div className="mt-3 space-y-1.5">
                    {item.lines.map((line) => <p key={line} className="text-sm leading-6 text-slate-600">{line}</p>)}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70 md:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Send a Message</p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#004B8D] md:text-5xl">How can we help?</h2>
                <p className="mt-4 leading-7 text-slate-700">Fill in the form and we will get back with product guidance, pricing, or technical support.</p>
              </div>

              {submitted ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#071F3D]">Full Name *</span>
                      <input type="text" required value={form.name} onChange={(event) => updateForm('name', event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-[#071F3D] outline-none transition focus:border-[#00B8D9] focus:bg-white focus:ring-4 focus:ring-[#00B8D9]/10" placeholder="Rahul Sharma" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#071F3D]">Email Address *</span>
                      <input type="email" required value={form.email} onChange={(event) => updateForm('email', event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-[#071F3D] outline-none transition focus:border-[#00B8D9] focus:bg-white focus:ring-4 focus:ring-[#00B8D9]/10" placeholder="rahul@printco.in" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#071F3D]">Phone</span>
                      <input type="tel" value={form.phone} onChange={(event) => updateForm('phone', event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-[#071F3D] outline-none transition focus:border-[#00B8D9] focus:bg-white focus:ring-4 focus:ring-[#00B8D9]/10" placeholder="+91 98765 43210" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#071F3D]">Company</span>
                      <input type="text" value={form.company} onChange={(event) => updateForm('company', event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-[#071F3D] outline-none transition focus:border-[#00B8D9] focus:bg-white focus:ring-4 focus:ring-[#00B8D9]/10" placeholder="PrintCo Solutions" />
                    </label>
                  </div>

                  <div>
                    <span className="mb-3 block text-[10px] font-extrabold uppercase tracking-widest text-[#071F3D]">Subject</span>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((subject) => (
                        <button key={subject} type="button" onClick={() => updateForm('subject', subject)} className={clsx('rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition', form.subject === subject ? 'bg-[#004B8D] text-white shadow-[0_8px_20px_rgba(0,75,141,0.2)]' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
                          {subject}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-widest text-[#071F3D]">Message *</span>
                    <textarea required rows={6} value={form.message} onChange={(event) => updateForm('message', event.target.value)} className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-[#071F3D] outline-none transition focus:border-[#00B8D9] focus:bg-white focus:ring-4 focus:ring-[#00B8D9]/10" placeholder="Tell us about your press type, product requirement, quantity, or technical challenge..." />
                  </label>

                  {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-xs leading-6 text-slate-500">By submitting, you agree that Falcon may contact you about this inquiry.</p>
                    <button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4B8B2B] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_28px_rgba(75,139,43,0.22)] transition disabled:cursor-not-allowed disabled:opacity-60">
                      {submitting ? 'Sending...' : 'Send Message'}
                      <FiSend className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70">
                <div className="h-80 bg-slate-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.711815128035!2d74.10887373809033!3d20.091176045558117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc4e09f87efd5%3A0xad028dc7f6de311b!2sNiphad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719640000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Falcon Chemicals Niphad Plant Location"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#4B8B2B]">Visit Falcon</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#004B8D]">Niphad Manufacturing Facility</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Located near the Nashik industrial corridor for reliable formulation, QC, and dispatch operations.</p>
                  <a href="https://maps.google.com/?q=Niphad,+Maharashtra" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#004B8D] px-5 py-3 text-sm font-bold text-white">
                    Open in Google Maps
                    <FiArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 rounded-[2rem] bg-[#06294A] p-6 text-white shadow-[0_18px_45px_rgba(6,41,74,0.18)]">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#9BD36A]">Capacity</p>
                  <p className="mt-2 text-2xl font-extrabold">2,500+</p>
                  <p className="text-xs text-white/65">Tons annually</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#9BD36A]">R&D Lab</p>
                  <p className="mt-2 text-2xl font-extrabold">On-Site</p>
                  <p className="text-xs text-white/65">Testing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#06294A] px-6 py-16 text-white md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Facility Focus</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">Built for dependable pressroom supply.</h2>
            <p className="mt-5 leading-8 text-white/70">From controlled blending to quality checks and dispatch coordination, Falcon supports printers with reliable chemistry and responsive technical service.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {facilityHighlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[2rem] bg-white/10 p-7 ring-1 ring-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9BD36A]/15 text-[#9BD36A]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50 px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">FAQ</p>
            <h2 className="mt-4 text-4xl font-extrabold text-[#004B8D] md:text-6xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-700">Quick answers for product trials, compliance, logistics, and custom formulation requests.</p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div key={faq.question} className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
                  <button type="button" onClick={() => setActiveFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-bold text-[#071F3D]">{faq.question}</span>
                    <span className={clsx('flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#004B8D] transition', isOpen && 'rotate-180 bg-[#004B8D] text-white')}>
                      <FiChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={clsx('overflow-hidden transition-all duration-300', isOpen ? 'max-h-48' : 'max-h-0')}>
                    <p className="border-t border-slate-100 px-6 py-5 leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
