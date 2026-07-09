import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/products-data'
import { productServiceBanners } from '@/lib/product-service-banners'

const categoryImages = {
  'sheetfed-fountain-solutions': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/1-SHEETFED-BANNER-1920X1080.png',
  'coldset-fountain-concentrates': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/2-COLDSET 1920X1080.png',
  'heatset-web-fountain-concentrates': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/3-HEATSET-1920X1080.png',
  'ipa-replacements': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/7-IPA AND IPA REPL-1920X1080.png',
  'roller-blanket-washes': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/5-BLANKET AND ROLLER WASH-1920X1080.png',
}

export default function ProductsPage() {
  const productCount = categories.reduce((total, category) => total + category.products.length, 0)

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#00B8D9]/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-[#4B8B2B]/20 blur-[120px]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Product Range</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Complete
              <span className="block text-[#00B8D9]">Pressroom Chemistry</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">
              Specialized chemistry engineered for sheetfed, heatset, coldset, cleaning, IPA replacement, and specialty pressroom applications.
            </p>
            <Link href="#categories" className="mt-8 inline-flex items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">
              Browse Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 border border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <div className="border-r border-white/15 p-5 md:p-6">
              <div className="text-3xl font-extrabold md:text-5xl">{categories.length}</div>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/70">Product Families</p>
            </div>
            <div className="border-r border-white/15 p-5 md:p-6">
              <div className="text-3xl font-extrabold md:text-5xl">{productCount}</div>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/70">Products</p>
            </div>
            <div className="p-5 md:p-6">
              <div className="text-3xl font-extrabold md:text-5xl">50+</div>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/70">Countries</p>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Categories</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-[#071F3D] md:text-6xl">
          Solutions Built for <span className="text-[#004B8D]">Every Pressroom</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((cat, index) => (
            <Link key={cat.id} href={`/products/${cat.id}`} className="block overflow-hidden border border-slate-300 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
              <div className="overflow-hidden bg-[#06294A]">
                <img src={categoryImages[cat.id] || productServiceBanners[index % productServiceBanners.length].image} alt={cat.title} className="h-auto w-full" />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#4B8B2B]">{cat.products.length} Products</span>
                  <ArrowRight className="h-5 w-5 text-[#004B8D]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#004B8D]">{cat.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{cat.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.products.slice(0, 5).map((product) => (
                    <span key={product.code} className="bg-[#06294A]/5 px-3 py-1 text-xs font-bold text-[#071F3D]">{product.code}</span>
                  ))}
                  {cat.products.length > 5 && <span className="bg-[#4B8B2B]/10 px-3 py-1 text-xs font-bold text-[#4B8B2B]">+{cat.products.length - 5} more</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#06294A] px-6 py-16 text-white md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Technical Partnership</p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Need help choosing the right chemistry?
            <Link href="/contact" className="mt-8 flex w-fit items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">
              Contact Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </h2>
        </div>
      </section>
    </>
  )
}
