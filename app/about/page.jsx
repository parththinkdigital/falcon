import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const strengths = [
  'Founded by a Printing Technologist with 30+ years of hands-on print experience.',
  'Strong distribution network across 50+ countries through national and international partnerships.',
  'Manufacturing standards shaped by ongoing training from veteran chemists in Europe and Southeast Asia.',
  'Strategic financial planning and corporate governance focused on long-term product consistency.',
]

const stats = [
  { value: '30+', label: 'Years of print experience' },
  { value: '500+', label: 'Commercial pressrooms' },
  { value: '50+', label: 'Countries served' },
  { value: '120+', label: 'Chemical formulations' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#06294A]">
        <img src="/about-us-img.jpg" alt="Falcon pressroom chemistry facility" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37]/95 via-[#004B8D]/70 to-[#031E37]/25" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">About Falcon</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              An Agile Young Company
              <span className="block text-[#00B8D9]">Backed by Print Experience</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">
              Falcon was founded by a Printing Technologist with over 30 years of hands-on experience. Every formulation we create is inspired by real pressroom challenges and practical printing knowledge.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#3f7624]">
              Talk to Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="bg-[#06294A] p-8 text-white md:p-12 lg:p-14">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Why Falcon</p>
            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Because We Understand
              <span className="block text-[#00B8D9]">Printing Technology,</span>
              <span className="mt-8 block">We Create</span>
              <span className="block text-[#9BD36A]">Better Pressroom Chemistry</span>
            </h2>
            <div className="mt-10 h-1 w-40 bg-[#00B8D9]" />
          </div>

          <div className="grid grid-cols-1 gap-5">
            <article className="border-l-4 border-[#004B8D] bg-slate-50 p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-[#004B8D]">Pressroom-First Formulation</h3>
              <p className="mt-4 font-bold leading-7 text-[#071F3D]">
                We believe the most effective printing chemicals can be formulated by people who understand the printing press as deeply as they understand the chemistry behind it.
              </p>
            </article>

            <article className="border-l-4 border-[#4B8B2B] bg-slate-50 p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-[#004B8D]">Strategic Manufacturing Access</h3>
              <p className="mt-4 leading-7 text-slate-700">
                From our 8,000 sq. ft. facility in Nashik, near Mumbai, we can ship reliably worldwide, from a single pallet to a full container load.
              </p>
            </article>

            <article className="border-l-4 border-[#00B8D9] bg-slate-50 p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-[#004B8D]">Private Label & Partnerships</h3>
              <p className="mt-4 leading-7 text-slate-700">
                Falcon also supports confidential private label and contract manufacturing partnerships for distributors, trading companies, and printing industry suppliers across the globe.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#06294A] px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden border border-white/15 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
            <img src="/why-falcon/technicalexpertise.png" alt="Technical expertise" className="h-auto w-full" />
          </div>
          <div className="text-white">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Our Foundation</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Practical Expertise.
              <span className="block text-[#00B8D9]">Reliable Chemistry.</span>
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5">
              {strengths.map((item) => (
                <div key={item} className="flex gap-4 border-t border-white/15 pt-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#9BD36A]" />
                  <p className="leading-7 text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t-4 border-[#00B8D9] bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
              <div className="text-4xl font-extrabold text-[#004B8D] md:text-5xl">{stat.value}</div>
              <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-widest text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#004B8D] px-6 py-16 text-white md:px-10 lg:px-20 lg:py-24">
          <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Our Vision</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">Creating Value Beyond Chemistry</h2>
          <p className="mt-6 leading-8 text-white/85">
            To become a trusted technical partner to the printing industry by delivering high-performance pressroom chemicals, expert guidance, and dependable service that enables our customers to print better.
          </p>
        </div>
        <div className="bg-[#4B8B2B] px-6 py-16 text-white md:px-10 lg:px-20 lg:py-24">
          <p className="text-sm font-extrabold uppercase tracking-widest text-white/70">Our Mission</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">Reducing Carbon Footprints. Raising Standards.</h2>
          <p className="mt-6 leading-8 text-white/85">
            We are committed to developing environmentally responsible pressroom chemicals that reduce emissions, conserve resources, and support a cleaner, more sustainable future for the global printing industry.
          </p>
        </div>
      </section>
    </>
  )
}
