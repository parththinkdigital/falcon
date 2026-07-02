import { solutionContent } from '@/lib/solutions-data'
import SolutionDetailContent from './page-content'

export function generateStaticParams() {
  return Object.keys(solutionContent).map((slug) => ({ slug }))
}

export default function SolutionDetailPage() {
  return <SolutionDetailContent />
}
