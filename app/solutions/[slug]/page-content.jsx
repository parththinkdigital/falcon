'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi'
import Hero from '@/components/shared/Hero'
import SectionHeader from '@/components/shared/SectionHeader'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { solutionContent } from '@/lib/solutions-data'

function renderSection(section, i) {
  switch (section.type) {
    case 'benefitsList':
      return (
        <section key={i} className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className={`grid md:grid-cols-2 lg:grid-cols-${section.columns || 2} gap-4 mt-12 max-w-4xl mx-auto`}>
              {section.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3 p-5 rounded-xl bg-steel-50 border border-steel-100">
                  <FiCheckCircle className="w-5 h-5 text-copper-500 mt-0.5 shrink-0" />
                  <span className="text-steel-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'specsTable':
      return (
        <section key={i} className="section-padding">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="max-w-2xl mx-auto mt-12 divide-y divide-steel-200 border border-steel-200 rounded-xl overflow-hidden">
              {section.specs.map((spec, j) => (
                <div key={j} className={`flex justify-between items-center px-6 py-4 ${j % 2 === 0 ? 'bg-white' : 'bg-steel-50'}`}>
                  <span className="text-sm font-medium text-ink-800">{spec.param}</span>
                  <span className="text-sm text-steel-500 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'applicationGrid':
      return (
        <section key={i} className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {section.items.map((item, j) => (
                <div key={j} className="text-center p-6 rounded-xl border border-steel-200 bg-white hover:border-copper-500/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-copper-500/10 flex items-center justify-center mx-auto mb-3">
                    <FiCheckCircle className="w-5 h-5 text-copper-500" />
                  </div>
                  <span className="text-sm font-medium text-ink-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'statsRow':
      return (
        <section key={i} className="section-padding bg-gradient-to-r from-copper-500/5 to-amber-500/5">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
              {section.items.map((item, j) => (
                <div key={j} className="text-center p-8 rounded-2xl bg-white border border-steel-200 shadow-sm">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-copper-500 mb-2">{item.value}</div>
                  <div className="text-sm text-steel-500 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'comparisonTable':
      return (
        <section key={i} className="section-padding">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="max-w-3xl mx-auto mt-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-ink-800">
                    {section.headers.map((h, j) => (
                      <th key={j} className="text-left px-5 py-4 text-white font-heading font-semibold text-sm first:rounded-l-xl last:rounded-r-xl">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, j) => (
                    <tr key={j} className={`border-b border-steel-200 ${j % 2 === 0 ? 'bg-white' : 'bg-steel-50'}`}>
                      {row.map((cell, k) => (
                        <td key={k} className={`px-5 py-4 text-sm ${k === 0 ? 'font-medium text-ink-800' : 'text-steel-500'}`}>
                          {k > 0 ? <span dangerouslySetInnerHTML={{ __html: cell }} /> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )

    case 'featuresGrid':
      return (
        <section key={i} className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {section.items.map((item, j) => (
                <div key={j} className="p-6 rounded-xl border border-steel-200 bg-white hover:border-copper-500/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 flex items-center justify-center mb-4">
                    <FiCheckCircle className="w-5 h-5 text-copper-500" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-ink-800 mb-2">{item.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'stepsList':
      return (
        <section key={i} className="section-padding">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="max-w-2xl mx-auto mt-12 space-y-6">
              {section.steps.map((step, j) => (
                <div key={j} className="flex gap-5 items-start">
                  <div className="w-8 h-8 rounded-full bg-copper-500 text-white flex items-center justify-center font-heading font-bold text-sm shrink-0">
                    {j + 1}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-steel-600 text-sm leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'safetyInfo':
      return (
        <section key={i} className="section-padding bg-amber-50/50">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-3xl mx-auto">
              {section.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3 p-5 rounded-xl bg-white border border-amber-200">
                  <FiCheckCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-steel-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    default:
      return null
  }
}

export default function SolutionDetailContent() {
  const { slug } = useParams()
  const data = solutionContent[slug]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-ink-800 mb-4">Solution Not Found</h1>
          <p className="text-steel-500 mb-6">The solution you are looking for does not exist.</p>
          <Link href="/solutions" className="btn-primary">Back to Solutions</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        dark={false}
        size="md"
      />

      <ScrollReveal>
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeader title="Overview" />
            <p className="text-steel-500 leading-relaxed max-w-3xl text-base sm:text-lg">
              {data.overview}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {data.sections.map((section, i) => (
        <ScrollReveal key={i}>
          {renderSection(section, i)}
        </ScrollReveal>
      ))}

      <ScrollReveal>
        <section className="relative bg-ink-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ink-800 to-ink-900" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-copper-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="container-custom relative z-10 py-20">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Interested in This Product?
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Contact our technical sales team for detailed specifications, pricing, and a free pressroom consultation.
              </p>
              <Link href="/contact" className="btn-accent">
                Inquire Now
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="container-custom py-8">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-steel-500 hover:text-copper-500 transition-colors duration-300">
          <FiArrowLeft className="w-4 h-4" />
          All Solutions
        </Link>
      </div>
    </>
  )
}
