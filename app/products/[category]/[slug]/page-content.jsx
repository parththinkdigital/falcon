import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight, FileText } from 'lucide-react'
import { getProductByCode, getRelatedProducts } from '@/lib/products-data'

const categoryImages = {
  'sheetfed-fountain-solutions': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/1-SHEETFED-BANNER-1920X1080.png',
  'coldset-fountain-concentrates': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/2-COLDSET 1920X1080.png',
  'heatset-web-fountain-concentrates': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/3-HEATSET-1920X1080.png',
  'ipa-replacements': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/7-IPA AND IPA REPL-1920X1080.png',
  'roller-blanket-washes': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/5-BLANKET AND ROLLER WASH-1920X1080.png',
  'offset-plate-cleaners': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/6-SPECIALITY CLEANERS.png',
}

const productPlaceholder = '/product-placholders.png'

export default function ProductDetailContent({ slug }) {
  const product = getProductByCode(slug)

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#071F3D]">Product Not Found</h1>
          <p className="mt-3 text-slate-600">The product you are looking for does not exist.</p>
          <Link href="/products" className="mt-6 inline-flex items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">View All Products</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product.category.id, product.code, 3)
  const heroImage = categoryImages[product.category.id] || '/new-banners/PRODUCT_AND_SERVICES_BANNERS/1-SHEETFED-BANNER-1920X1080.png'

  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden bg-[#06294A]">
        <img src={heroImage} alt={product.category.title} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37]/95 via-[#004B8D]/75 to-[#031E37]/30" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-4xl text-white">
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/70">
              <Link href="/products" className="transition hover:text-white">Products</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href={`/products/${product.category.id}`} className="transition hover:text-white">{product.category.shortTitle}</Link>
              <ChevronRight className="h-4 w-4" />
              <span>{product.code}</span>
            </nav>
            <span className="inline-flex bg-[#4B8B2B] px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white">SKU {product.code}</span>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/85">{product.category.title}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 lg:py-24">
        <div className="border-t-4 border-[#00B8D9] bg-white p-8 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
          <div className="mb-8 flex items-center justify-center bg-slate-50 p-8">
            <img src={productPlaceholder} alt={`${product.name} product placeholder`} className="h-64 w-auto object-contain" />
          </div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Product Overview</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#071F3D] md:text-5xl">{product.name}</h2>
          <p className="mt-6 leading-8 text-slate-700">{product.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#3f7624]">
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-[#004B8D] px-6 py-3 text-sm font-bold text-[#004B8D] transition hover:bg-[#004B8D] hover:text-white">
              Request Sample
            </Link>
          </div>
        </div>

        <div className="bg-[#06294A] p-8 text-white md:p-10">
          <p className="text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">Key Features</p>
          <div className="mt-7 space-y-5">
            {product.features.map((feature) => (
              <div key={feature} className="flex gap-4 border-t border-white/15 pt-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#9BD36A]" />
                <p className="leading-7 text-white/85">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <FileText className="h-8 w-8 text-[#004B8D]" />
            <div>
              <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Technical Data</p>
              <h2 className="text-4xl font-extrabold text-[#071F3D]">Specifications</h2>
            </div>
          </div>

          <div className="overflow-hidden bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr key={spec.label} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="w-1/2 border-r border-slate-200 px-5 py-4 text-sm font-extrabold text-[#004B8D] md:px-8">{spec.label}</td>
                    <td className="px-5 py-4 text-sm font-medium text-slate-700 md:px-8">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
          <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Related Products</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#071F3D] md:text-6xl">Other Products in This Range</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.code} href={`/products/${item.category.id}/${item.code}`} className="group border-t-4 border-[#00B8D9] bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                <div className="mb-5 flex items-center justify-center bg-slate-50 p-5">
                  <img src={productPlaceholder} alt={`${item.name} product placeholder`} className="h-32 w-auto object-contain" />
                </div>
                <span className="bg-[#06294A] px-3 py-1 text-xs font-extrabold tracking-widest text-white">{item.code}</span>
                <h3 className="mt-5 text-xl font-extrabold text-[#004B8D]">{item.name}</h3>
                <p className="mt-4 line-clamp-3 leading-7 text-slate-700">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4B8B2B]">
                  View Details
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
