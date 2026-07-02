import { categories } from '@/lib/products-data'
import ProductCategoryContent from './page-content'

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.id }))
}

export default function ProductCategoryPage({ params }) {
  return <ProductCategoryContent category={params.category} />
}
