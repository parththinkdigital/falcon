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

const tdsFiles = {
  '201': ['SHEETFED FOUNTAIN SOLUTIONS', '201-FOUNT MARSHAL NEW.pdf'],
  '202': ['SHEETFED FOUNTAIN SOLUTIONS', '202-PRESS COMMAND NEW.pdf'],
  '203': ['SHEETFED FOUNTAIN SOLUTIONS', '203-FORMULA 1 NEW.pdf'],
  '211': ['SHEETFED FOUNTAIN SOLUTIONS', '211-ROLFOUNT NEW.pdf'],
  '217': ['SHEETFED FOUNTAIN SOLUTIONS', '217-BLU FOUNT NEW.pdf'],
  '220': ['SHEETFED FOUNTAIN SOLUTIONS', '220-ALCOSTOP NEW.pdf'],
  '221': ['SHEETFED FOUNTAIN SOLUTIONS', '221-EZY FOUNT NEW.pdf'],
  '222': ['SHEETFED FOUNTAIN SOLUTIONS', '222-STABIFOUNT SOFT NEW.pdf'],
  '223': ['SHEETFED FOUNTAIN SOLUTIONS', '223-STABIFOUNT HARD.pdf'],
  '224': ['SHEETFED FOUNTAIN SOLUTIONS', '224-STABIFOUNT UV.pdf'],
  '226': ['SHEETFED FOUNTAIN SOLUTIONS', '226 STABIFOUNT M NEW.pdf'],
  '234': ['SHEETFED FOUNTAIN SOLUTIONS', '234-AF 9000 PLUS.pdf'],
  '235': ['SHEETFED FOUNTAIN SOLUTIONS', '235-AF 8000 PLUS.pdf'],
  '208': ['COLDSET & HEATSET WEB FOUNTAIN SOLUTIONS', '208-FOUNT WEB MASTER NEW.pdf'],
  '209': ['COLDSET & HEATSET WEB FOUNTAIN SOLUTIONS', '209-FOUNT WEB COMMAND NEW.pdf'],
  '212': ['COLDSET & HEATSET WEB FOUNTAIN SOLUTIONS', '212-FOUNT FIRST EDITION NEW.pdf'],
  '237': ['COLDSET & HEATSET WEB FOUNTAIN SOLUTIONS', '237-HEAT FOUNT PLUS NEW.pdf'],
  '238': ['COLDSET & HEATSET WEB FOUNTAIN SOLUTIONS', '238-HEAT FOUNT EXTRA.pdf'],
  '301': ['IPA REPLACEMENTS & IPA', '301-ALCOBAN AR.pdf'],
  '302': ['IPA REPLACEMENTS & IPA', '302-FALCOPURE 99.8_.pdf'],
  '303': ['IPA REPLACEMENTS & IPA', '303-LITHOGRADE IPA.pdf'],
  '401': ['PLATE CLEANERS', '401-UNIVERSAL PLATE CLEANER NEW.pdf'],
  '402': ['PLATE CLEANERS', '402-UV PLATE CLEANER.pdf'],
  '403': ['PLATE CLEANERS', '403-ALUMNET POWER.pdf'],
  '404': ['PLATE CLEANERS', '404-PLATEKLEEN-228.pdf'],
  '405': ['PLATE CLEANERS', '405-CTP PLATE CLEANER.pdf'],
  '501': ['ROLLER & BLANKET WASHES', '501-STARWASH-40.pdf'],
  '502': ['ROLLER & BLANKET WASHES', '502-ROTEKLEEN-60.pdf'],
  '503': ['ROLLER & BLANKET WASHES', '503-UV COMBI WASH-12.pdf'],
  '503-14': ['ROLLER & BLANKET WASHES', '503-UV COMBI WASH-14.pdf'],
  '508': ['ROLLER & BLANKET WASHES', '508-ULTRASOL UVLO.pdf'],
  '514': ['ROLLER & BLANKET WASHES', '514-ROTAKLEEN-40.pdf'],
  '516': ['ROLLER & BLANKET WASHES', '516-ROTAKLEEN-80.pdf'],
  '509': ['SPECIALITY CLEANERS', '509-METERKLEEN 99.pdf'],
  '511': ['OFFSET PRESS SUNDRIES', '511-RUBBER REJUVENATOR.pdf'],
  '512': ['OFFSET PRESS SUNDRIES', '512-CHROME ROLLER CLEANER.pdf'],
  '701': ['OFFSET PRESS SUNDRIES', '701-DRY ASP.pdf'],
  '901': ['PLATE PROTECTION GUMS', '901-GUM ARABIC SOLUTION.pdf'],
  '902': ['PLATE PROTECTION GUMS', '902-UNIPRO GUM.pdf'],
  '903': ['PLATE PROTECTION GUMS', '903-PLATE BAKING GUM.pdf'],
  '904': ['PLATE PROTECTION GUMS', '904-ECONOGUM.pdf'],
  '911': ['SPECIALITY CLEANERS', '911-CALCIUM WASH.pdf'],
  '912': ['OFFSET PRESS SUNDRIES', '912-FOUNT DRIER.pdf'],
  '913': ['SPECIALITY CLEANERS', '913-DEGLAZING GEL.pdf'],
  '914': ['SPECIALITY CLEANERS', '914-COLOR CHANGE PASTE.pdf'],
  '915': ['SPECIALITY CLEANERS', '915-DAMPER SLEEVE CLEANER.pdf'],
  '916': ['OFFSET PRESS SUNDRIES', '916-FOUNT TANK CLEANSER.pdf'],
}

function getTdsHref(product) {
  const file = tdsFiles[product.code]
  return file ? `/TDS/${file[0]}/${file[1]}` : '/contact'
}

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
  const tdsHref = getTdsHref(product)
  const hasTdsPdf = tdsHref.endsWith('.pdf')

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
            <img src={getProductImage(product.category.id, product.code)} alt={product.name} className="h-64 w-auto object-contain" />
          </div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Product Overview</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#071F3D] md:text-5xl">{product.name}</h2>
          <p className="mt-6 leading-8 text-slate-700">{product.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={tdsHref} target={hasTdsPdf ? '_blank' : undefined} rel={hasTdsPdf ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#3f7624]">
              Refer TDS
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-[#004B8D] px-6 py-3 text-sm font-bold text-[#004B8D] transition hover:bg-[#004B8D] hover:text-white">
              Refer MSDS
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
              <Link key={item.code} href={`/products/${item.category.id}/${item.code}`} className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-300 hover:border-[#00B8D9]/50">
                <div className="h-1 w-full bg-gradient-to-r from-[#004B8D] via-[#00B8D9] to-[#004B8D]" />
                <div className="aspect-[4/3] relative bg-[#C5E4F9]">
                  <img src={getProductImage(item.category.id, item.code)} alt={item.name} className="absolute inset-0 h-full w-full object-contain px-2 py-1" />
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
      )}
    </>
  )
}
