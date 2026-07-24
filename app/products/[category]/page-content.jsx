import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { categories, compareProductsByCode, getCategoryById } from '@/lib/products-data'

const categoryImages = {
  'sheetfed-fountain-solutions': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/1-SHEETFED-BANNER-1920X1080.png',
  'coldset-fountain-concentrates': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/2-COLDSET 1920X1080.png',
  'heatset-web-fountain-concentrates': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/3-HEATSET-1920X1080.png',
  'ipa-replacements': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/7-IPA AND IPA REPL-1920X1080.png',
  'roller-blanket-washes': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/5-BLANKET AND ROLLER WASH-1920X1080.png',
  'offset-plate-cleaners': '/new-banners/PRODUCT_AND_SERVICES_BANNERS/6-SPECIALITY CLEANERS.png',
}

const categoryFolderMap = {
  'sheetfed-fountain-solutions': 'SHEETFED-FOUNTAIN-SOLUTION',
  'ipa-replacements': 'IPA-REPLACEMENTS',
  'coldset-fountain-concentrates': 'COLDSET-FOUNTAIN-CONCENTRATES',
  'offset-plate-cleaners': 'OFFSET-PLATE-CLEANERS',
  'roller-blanket-washes': 'ROLLER-BLANKET-WASHES',
  'speciality-cleaners': 'SPECIALITY-CLEANERS',
  'offset-press-sundries': 'OFFSET-PRESS-SUNDRIES',
  'plate-protection-gums': 'PLATE-PROTECTION-GUMS',
}

const productPlaceholder = '/product-placholders.png'

function getProductImage(categoryId, productCode) {
  const folder = categoryFolderMap[categoryId]
  if (folder) {
    return `/products/${folder}/${productCode}.png`
  }
  return productPlaceholder
}

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
  const products = [...data.products].sort(compareProductsByCode)

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.code} href={`/products/${data.id}/${product.code}`} className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-300 hover:border-[#00B8D9]/50">
              <div className="h-1 w-full bg-gradient-to-r from-[#004B8D] via-[#00B8D9] to-[#004B8D]" />
              <div className="aspect-[3/1.8] relative bg-white">
                <img src={getProductImage(data.id, product.code)} alt={product.name} className="absolute inset-0 h-full w-full object-contain px-2 py-1" />
              </div>
              <div className="flex items-center justify-center bg-gradient-to-r from-[#06294A] via-[#004B8D] to-[#06294A] px-4 py-3">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-white tracking-wide">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
