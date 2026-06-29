'use client'

import Link from 'next/link'
import Hero from '@/components/shared/Hero'
import SectionHeader from '@/components/shared/SectionHeader'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { FiDroplet, FiWind, FiLayers, FiRefreshCw } from 'react-icons/fi'

const categories = [
  {
    icon: FiDroplet,
    title: 'Fountain Solutions',
    description: 'Premium fountain solutions engineered for optimal ink-water balance across sheetfed, heatset, and coldset offset presses.',
    slug: 'fountain-solutions',
  },
  {
    icon: FiWind,
    title: 'IPA Replacements',
    description: 'Environmentally responsible IPA alternatives that reduce VOC emissions while maintaining or improving dampening performance.',
    slug: 'ipa-replacements',
  },
  {
    icon: FiLayers,
    title: 'Plate Cleaners',
    description: 'Advanced cleaning solutions for thermal, UV, violet, and conventional plates that extend plate life and maintain image sharpness.',
    slug: 'plate-cleaners',
  },
  {
    icon: FiRefreshCw,
    title: 'Roller & Blanket Washes',
    description: 'High-performance washes for rubber rollers, printing blankets, and press components that clean quickly and safely.',
    slug: 'roller-blanket-washes',
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="Pressroom Solutions"
        subtitle="Comprehensive chemistry solutions engineered for every printing application and press type."
        dark={false}
        size="md"
      />

      <ScrollReveal>
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeader
                eyebrow="Our Products"
                title="Engineered for Performance"
                subtitle="Every formulation in our catalog is developed through rigorous R&D, tested in real pressroom conditions, and optimized for consistent, measurable results."
                center
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="section-padding bg-white -mt-20">
        <div className="container-custom">
          <ScrollReveal stagger className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link key={cat.slug} href={`/solutions/${cat.slug}`} className="group block">
                  <div className="relative h-full rounded-2xl overflow-hidden border border-steel-200 hover:border-copper-500/30 transition-all duration-500">
                    <div className="h-32 bg-gradient-to-br from-ink-700 to-ink-800 overflow-hidden">
                      <img src={"https://picsum.photos/seed/solution-" + cat.slug + "/400/160"} alt={cat.title} className="w-full h-full object-cover opacity-60" />
                    </div>
                    <div className="p-8">
                      <div className="w-12 h-12 rounded-full bg-copper-500/10 flex items-center justify-center mb-5 group-hover:bg-copper-500/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-copper-500" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-ink-800 mb-3 group-hover:text-copper-600 transition-colors duration-300">
                        {cat.title}
                      </h3>
                      <p className="text-steel-500 text-sm leading-relaxed mb-6">
                        {cat.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-copper-500 font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                        Learn more
                        <span className="text-lg leading-none">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-ink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ink-800 to-ink-900" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-copper-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="container-custom relative z-10 py-20">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Our technical team can develop specialized formulations for unique printing requirements.
                We also offer specialty chemicals for press maintenance and optimization.
              </p>
              <Link href="/contact" className="btn-accent">
                Talk to Our Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
