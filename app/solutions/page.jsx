import Link from 'next/link'
import { FiArrowRight, FiDroplet, FiLayers, FiRefreshCw, FiWind } from 'react-icons/fi'

const categories = [
  { icon: FiDroplet, title: 'Fountain Solutions', description: 'Premium chemistry for stable ink-water balance across sheetfed, heatset, and coldset offset presses.', slug: 'fountain-solutions' },
  { icon: FiWind, title: 'IPA Replacements', description: 'Low-VOC alternatives that reduce alcohol dependency while maintaining reliable dampening performance.', slug: 'ipa-replacements' },
  { icon: FiLayers, title: 'Plate Cleaners', description: 'Plate-safe cleaners that remove contamination, protect image areas, and help extend plate life.', slug: 'plate-cleaners' },
  { icon: FiRefreshCw, title: 'Roller & Blanket Washes', description: 'Fast, effective wash chemistry for rollers, blankets, and automatic wash systems.', slug: 'roller-blanket-washes' },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-[#00B8D9]/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#4B8B2B]/25 blur-[110px]" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Pressroom Solutions</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Chemistry Built
              <span className="block text-[#00B8D9]">For Production</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">
              Practical chemistry systems for printers who need consistent quality, lower waste, faster startups, and dependable support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50 to-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Our Solutions</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#004B8D] md:text-6xl">Engineered for everyday pressroom performance.</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link key={cat.slug} href={`/solutions/${cat.slug}`} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70">
                  <div className="relative h-44 overflow-hidden bg-[#06294A]">
                    <img src={`https://picsum.photos/seed/solution-${cat.slug}/900/420`} alt={cat.title} className="h-full w-full object-cover opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06294A]/80 to-transparent" />
                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#004B8D] shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="mb-5 h-1 w-20 rounded-full bg-[#00B8D9]" />
                    <h3 className="text-2xl font-extrabold text-[#004B8D]">{cat.title}</h3>
                    <p className="mt-4 leading-7 text-slate-700">{cat.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4B8B2B]">
                      Explore Solution
                      <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#06294A] px-6 py-16 text-white md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Custom Formulation</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">Need chemistry for a specific pressroom challenge?</h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4B8B2B] px-7 py-4 text-sm font-bold text-white">
            Talk to Our Team
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
