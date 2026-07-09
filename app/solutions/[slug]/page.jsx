import { solutionContent } from '@/lib/solutions-data'
import SolutionDetailContent from './page-content'

export function generateStaticParams() {
  return Object.keys(solutionContent).map((slug) => ({ slug }))
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params

  return <SolutionDetailContent slug={slug} />
}
