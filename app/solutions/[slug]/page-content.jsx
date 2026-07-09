import Link from 'next/link'
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { solutionContent } from '@/lib/solutions-data'

function clean(value) {
  return String(value).replace(/&ndash;/g, '-').replace(/&micro;/g, 'u').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&').replace(/&deg;/g, 'deg')
}

function renderSection(section) {
  if (section.type === 'specsTable') {
    return (
      <section className="bg-white px-6 py-12 md:px-10 lg:py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70 md:p-8">
          <h2 className="text-3xl font-extrabold text-[#004B8D]">{clean(section.title)}</h2>
          <div className="mt-6 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200">
            {section.specs.map((spec) => (
              <div key={spec.param} className="grid grid-cols-1 gap-2 bg-white px-5 py-4 sm:grid-cols-2 odd:bg-slate-50">
                <span className="text-sm font-bold text-[#071F3D]">{clean(spec.param)}</span>
                <span className="text-sm text-slate-600 sm:text-right">{clean(spec.value)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (section.type === 'comparisonTable') {
    return (
      <section className="bg-white px-6 py-12 md:px-10 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold text-[#004B8D]">{clean(section.title)}</h2>
          <div className="mt-8 overflow-x-auto rounded-[1.5rem] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70">
            <table className="w-full min-w-[640px] border-collapse">
              <thead className="bg-[#06294A] text-white">
                <tr>{section.headers.map((header) => <th key={header} className="px-5 py-4 text-left text-sm font-bold">{clean(header)}</th>)}</tr>
              </thead>
              <tbody>
                {section.rows.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 odd:bg-slate-50">
                    {row.map((cell, cellIndex) => <td key={cellIndex} className="px-5 py-4 text-sm text-slate-700">{clean(cell)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }

  const items = section.items || section.steps || []
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 px-6 py-12 md:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold text-[#004B8D]">{clean(section.title)}</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const title = typeof item === 'object' ? item.title : item
            const description = typeof item === 'object' ? item.description : null
            return (
              <div key={`${title}-${index}`} className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
                <FiCheckCircle className="h-6 w-6 text-[#4B8B2B]" />
                <h3 className="mt-4 text-lg font-extrabold text-[#071F3D]">{clean(title)}</h3>
                {description && <p className="mt-3 text-sm leading-7 text-slate-600">{clean(description)}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function SolutionDetailContent({ slug }) {
  const data = solutionContent[slug]

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-[#004B8D]">Solution Not Found</h1>
          <p className="mt-3 text-slate-600">The solution you are looking for does not exist.</p>
          <Link href="/solutions" className="mt-6 inline-flex rounded-full bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">Back to Solutions</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-[#00B8D9]/20 blur-[120px]" />
        <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-5xl text-white">
            <Link href="/solutions" className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70">
              <FiArrowLeft className="h-4 w-4" />
              All Solutions
            </Link>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Solution</p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">{clean(data.title)}</h1>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white/82">{clean(data.subtitle)}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Overview</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#004B8D] md:text-5xl">Practical chemistry for better control.</h2>
          </div>
          <p className="text-lg leading-9 text-slate-700">{clean(data.overview)}</p>
        </div>
      </section>

      {data.sections.map((section, index) => <div key={`${section.type}-${index}`}>{renderSection(section)}</div>)}

      <section className="bg-[#06294A] px-6 py-16 text-white md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Technical Consultation</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Interested in this solution?</h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4B8B2B] px-7 py-4 text-sm font-bold text-white">
            Inquire Now
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
