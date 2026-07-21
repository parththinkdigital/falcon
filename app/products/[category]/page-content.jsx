import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { categories, getCategoryById } from '@/lib/products-data'

const categoryImages = {
  'sheetfed-fountain-solutions': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/1-SHEETFED-BANNER-1920X1080.png',
  'coldset-fountain-concentrates': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/2-COLDSET 1920X1080.png',
  'heatset-web-fountain-concentrates': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/3-HEATSET-1920X1080.png',
  'ipa-replacements': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/7-IPA AND IPA REPL-1920X1080.png',
  'roller-blanket-washes': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/5-BLANKET AND ROLLER WASH-1920X1080.png',
  'offset-plate-cleaners': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/6-SPECIALITY CLEANERS.png',
}

const productPlaceholder = '/product-placholders.png'

export default function ProductCategoryContent({ category }) {
  const data = getCategoryById(category)  

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#071F3D]">Category Not Found</h1>
          <p className="mt-3 text-slate-600">The category you are looking for does not exist.</p>
          <Link href="/products" className="mt-6 inline-flex items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">View All Products</Link>
        </div>
      </div>
    )
  }

  const heroImage = categoryImages[data.id] || '/new-banners/PRODUCT_AND_SERVICES_BANNERS/1-SHEETFED-BANNER-1920X1080.png'

  return (
    <>
      <section className="relative min-h-[54vh] overflow-hidden bg-[#06294A]">
        <img src={heroImage} alt={data.title} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37]/95 via-[#004B8D]/75 to-[#031E37]/30" />
        <div className="relative mx-auto flex min-h-[54vh] max-w-7xl items-center px-6 py-24 md:px-10">
          <div className="max-w-4xl text-white">
            <nav className="mb-6 flex items-center gap-2 text-sm font-semibold text-white/70">
              <Link href="/products" className="transition hover:text-white">Products</Link>
              <ChevronRight className="h-4 w-4" />
              <span>{data.shortTitle}</span>
            </nav>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Product Category</p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              {data.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/85">{data.description}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products/${cat.id}`}
              className={`shrink-0 px-4 py-2 text-xs font-extrabold uppercase tracking-widest ${cat.id === data.id ? 'bg-[#004B8D] text-white' : 'bg-slate-100 text-[#071F3D]'}`}
            >
              {cat.shortTitle}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Products</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#071F3D] md:text-6xl">
              Explore <span className="text-[#004B8D]">{data.shortTitle}</span>
            </h2>
          </div>
          <p className="font-bold text-[#004B8D]">{data.products.length} products available</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.products.map((product) => (
            <article key={product.code} className="border-t-4 border-[#00B8D9] bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.15)] md:p-8">
              <div className="mb-6 flex items-center justify-center bg-slate-50 p-6">
                <img src={productPlaceholder} alt={`${product.name} product placeholder`} className="h-40 w-auto object-contain" />
              </div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="bg-[#06294A] px-3 py-1 text-xs font-extrabold tracking-widest text-white">{product.code}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#4B8B2B]">{data.shortTitle}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#004B8D]">{product.name}</h3>
              <p className="mt-4 line-clamp-3 leading-7 text-slate-700">{product.description}</p>
              <ul className="mt-5 space-y-2">
                {product.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4B8B2B]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={`/products/${data.id}/${product.code}`} className="inline-flex items-center gap-2 bg-[#4B8B2B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#3f7624]">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-[#004B8D] px-5 py-3 text-sm font-bold text-[#004B8D] transition hover:bg-[#004B8D] hover:text-white">
                  Refer MSDS
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
