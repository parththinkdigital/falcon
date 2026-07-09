import { categories } from '@/lib/products-data'
import ProductCategoryContent from './page-content'

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.id }))
}

export default async function ProductCategoryPage({ params }) {
  const { category } = await params

  return <ProductCategoryContent category={category} />
}
