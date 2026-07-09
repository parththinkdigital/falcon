import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const industries = [
  { title: 'Commercial Printing', description: 'Complete chemistry solutions for sheetfed and web offset commercial printers producing brochures, catalogs, and marketing materials.' },
  { title: 'Publishing', description: 'Specialized formulations for book and magazine printing with precise ink-water balance control for consistent high-volume runs.' },
  { title: 'Packaging', description: 'Advanced fountain solutions and plate cleaners designed for carton, flexible, and corrugated packaging applications.' },
  { title: 'Newspaper', description: 'High-speed coldset chemistry engineered for the demanding pace of newspaper and insert production environments.' },
  { title: 'Label Printing', description: 'Precision chemistry for narrow-web and wide-web label presses requiring exceptional dot reproduction and fast color changes.' },
  { title: 'UV Printing', description: 'Specialized pressroom chemicals compatible with UV ink systems, including roller washes and blanket cleaners.' },
]

const metrics = [
  { value: '22%', label: 'Waste Reduction' },
  { value: '10+', label: 'Years Partnership' },
  { value: '50M+', label: 'Impressions Yearly' },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-[#00B8D9]/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#4B8B2B]/25 blur-[110px]" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Industries We Serve</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Chemistry For
              <span className="block text-[#00B8D9]">Every Pressroom</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">
              From commercial sheetfed to high-speed web, Falcon formulates chemistry that supports the exacting demands of every printing segment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50 to-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.title} className="overflow-hidden rounded-[2rem] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70">
                <div className="relative h-48 overflow-hidden bg-[#06294A]">
                  <img src={`https://picsum.photos/seed/${industry.title.toLowerCase().replace(/\s+/g, '-')}/900/520`} alt={industry.title} className="h-full w-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06294A]/80 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="mb-5 h-1 w-20 rounded-full bg-[#00B8D9]" />
                  <h2 className="text-2xl font-extrabold text-[#004B8D]">{industry.title}</h2>
                  <p className="mt-4 leading-7 text-slate-700">{industry.description}</p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4B8B2B]">
                    Discuss Requirements
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06294A] px-6 py-16 text-white md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-white/10 p-3 ring-1 ring-white/10">
            <img src="https://picsum.photos/seed/printing-partnership/900/700" alt="Printing press partnership" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" />
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Featured Partnership</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">Reliable chemistry for demanding production networks.</h2>
            <p className="mt-6 leading-8 text-white/70">
              Falcon works with printers and channel partners to reduce waste, stabilize print quality, and support long-term production growth through practical technical guidance.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="block text-3xl font-extrabold text-[#9BD36A]">{metric.value}</span>
                  <span className="mt-1 block text-xs leading-5 text-white/55">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Pressroom Fit</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#004B8D] md:text-6xl">Ready to optimise your pressroom?</h2>
          </div>
          <div className="rounded-[2rem] bg-slate-50 p-7 ring-1 ring-slate-200/70">
            {['Assess current chemistry and press conditions', 'Recommend the right formulation package', 'Support trials, samples, and operator setup'].map((item) => (
              <div key={item} className="flex gap-3 border-b border-slate-200 py-4 last:border-b-0">
                <FiCheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4B8B2B]" />
                <span className="font-medium leading-7 text-slate-700">{item}</span>
              </div>
            ))}
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4B8B2B] px-7 py-4 text-sm font-bold text-white">
              Contact Our Team
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
