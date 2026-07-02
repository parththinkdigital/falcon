import { categories } from '@/lib/products-data'
import ProductDetailContent from './page-content'

export function generateStaticParams() {
  return categories.flatMap((cat) =>
    cat.products.map((product) => ({
      category: cat.id,
      slug: product.code,
    }))
  )
}

export default function ProductDetailPage({ params }) {
  return <ProductDetailContent category={params.category} slug={params.slug} />
}
