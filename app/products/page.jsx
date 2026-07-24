import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories, compareProductsByCode } from '@/lib/products-data'
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
      <section id="categories" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Categories</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-[#071F3D] md:text-6xl">
          Solutions Built for <span className="text-[#004B8D]">Every Pressroom</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <Link key={cat.id} href={`/products/${cat.id}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white transition-all duration-300 hover:border-[#00B8D9]/50">
              <div className="relative overflow-hidden bg-[#C5E4F9] aspect-[16/9]">
                <img
                  src={categoryImages[cat.id] || productServiceBanners[index % productServiceBanners.length].image}
                  alt={cat.title}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4B8B2B]">{cat.products.length} Products</span>
                <h3 className="mt-1 text-xl font-extrabold leading-tight text-[#071F3D] transition-colors group-hover:text-[#004B8D]">{cat.title}</h3>
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {[...cat.products].sort(compareProductsByCode).slice(0, 5).map((product) => (
                      <span key={product.code} className="rounded-md bg-[#EAF6FF] px-2.5 py-1 text-[10px] font-bold text-[#004B8D]">{product.code}</span>
                    ))}
                    {cat.products.length > 5 && (
                      <span className="rounded-md bg-[#4B8B2B]/10 px-2.5 py-1 text-[10px] font-bold text-[#4B8B2B]">+{cat.products.length - 5}</span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#06294A] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 group-hover:bg-[#004B8D]">
                    View Products
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
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
