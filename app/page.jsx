import Link from 'next/link'
import HomePreloader from '@/components/home/HomePreloader'
import ProductServiceCarousel from '@/components/home/ProductServiceCarousel'
import { productServiceBanners } from '@/lib/product-service-banners'
import { ArrowRight } from 'lucide-react'

const heroBanner = {
  image: '/hero-banners/1.jpeg',
  href: '/about',
}

const featureCards = [
  {
    title: 'TECHNICAL EXPERTISE',
    image: '/why-falcon/technicalexpertise.png',
  },
  {
    title: 'BETTER VALUE',
    image: '/why-falcon/betterquality.png',
  },
  {
    title: 'STRATEGIC LOCATION',
    image: '/why-falcon/strategicloaction.png',
  },
]

export default function HomePage() {
  return (
    <>
      <HomePreloader />

      <section className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-[#06294A] pt-16 lg:pt-[76px]">
        <Link href={heroBanner.href} aria-label="View Falcon pressroom chemistry details" className="block w-full">
          <img src={heroBanner.image} alt="Falcon pressroom chemistry" className="h-auto w-full object-contain" />
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-[360px_1fr]">
        <div className="bg-white p-4">
          <img src="/hall.png" alt="THE 10TH ALL IN PRINT CHINA" className="w-full h-auto" />
        </div>
        <div className="flex items-center bg-[#004B8D] px-8 py-6">
          <h2 className="text-2xl font-medium tracking-tight text-white md:text-5xl">
            Visit Us in HALL N1 / BOOTH B-453
          </h2>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:py-24">
        <div>
          <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Why Falcon</p>
          <h2 className="text-4xl font-extrabold leading-tight text-[#071F3D] md:text-5xl lg:text-6xl">
            Because <br />
            We Understand <br />
            <span className="text-[#004B8D]">Printing Technology,</span>
            <br /><br />
            We Create <br />
            <span className="text-[#4B8B2B]">Better Pressroom Chemistry</span>
          </h2>
        </div>
        <div className="border-l-4 border-[#004B8D] pl-8">
          <p className="font-bold leading-7 text-[#004B8D]">
            We believe the most effective printing chemicals can be formulated by people who understand the printing press as deeply as they understand the chemistry behind it, and we qualify well for this.
          </p>
          <p className="mt-6 leading-7 text-slate-700">
            From our 8,000 sq. ft. facility in Nashik, near Mumbai, we can ship reliably worldwide, from a single pallet to a full container load.
          </p>
          <p className="mt-6 leading-7 text-slate-700">
            Falcon Pressroom Solutions also supports confidential private label and contract manufacturing partnerships for distributors, trading companies, and printing industry suppliers across the globe.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#3f7624]">
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {featureCards.map((card) => (
            <article key={card.title} className="group flex flex-col items-center">
              <div className="overflow-hidden border border-slate-300 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                <div className="overflow-hidden bg-[#06294A]">
                  <img src={card.image} alt={card.title} className="h-auto w-full transition duration-700 group-hover:scale-105" />
                </div>
              </div>
              <Link href="/about" className="mt-4 inline-flex items-center justify-center gap-1 rounded bg-[#004B8D] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#071F3D]">
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="bg-white px-6 py-8 text-center md:py-12">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#4B8B2B]">Product & Services</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#004B8D] md:text-6xl">
            Solutions We Create...
          </h2>
        </div>

        <ProductServiceCarousel banners={productServiceBanners} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
        <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">
          Why Industries & Channel Partners Choose Us
        </p>
        <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-[#071F3D] md:text-6xl">
          The Difference is in the <span className="text-[#4B8B2B]">Formulation</span> and <span className="text-[#4B8B2B]">Trust</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          <div className="border-t-4 border-[#00B8D9] pt-8">
            <h3 className="text-2xl font-extrabold text-[#004B8D]">For Printers & Industries</h3>
            <p className="mt-5 leading-8 text-slate-700 text-justify">
              Our customers rely on us as trusted technical consultants, not just suppliers. We work alongside printing businesses to understand their production challenges, optimize pressroom performance, and recommend solutions that deliver measurable improvements in print quality, consistency, and operational efficiency.
            </p>
            <p className="mt-5 leading-8 text-slate-700 text-justify">
              Every recommendation is backed by decades of formulation expertise, ensuring customers receive the right chemistry for their specific production environment while reducing waste, minimizing downtime, and improving overall productivity.
            </p>
          </div>
          <div className="border-t-4 border-[#4B8B2B] pt-8">
            <h3 className="text-2xl font-extrabold text-[#004B8D]">For Distributors & Channel Partners</h3>
            <p className="mt-5 leading-8 text-slate-700 text-justify">
              We believe strong partnerships are built on transparency, reliability, and long-term mutual growth. Our distributors benefit from consistent product quality, technical expertise, responsive support, and a partner committed to helping them expand their business with confidence.
            </p>
            <p className="mt-5 leading-8 text-slate-700 text-justify">
              Through knowledge sharing, product training, and collaborative problem-solving, we empower our partners to deliver greater value to their customers while building lasting relationships founded on trust, integrity, and shared success.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
