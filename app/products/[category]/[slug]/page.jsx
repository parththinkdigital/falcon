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

export default async function ProductDetailPage({ params }) {
  const { category, slug } = await params

  return <ProductDetailContent category={category} slug={slug} />
}
