import { knowledgeContent } from '@/lib/knowledge-center-data'
import KnowledgeResourceContent from './page-content'

export function generateStaticParams() {
  return Object.keys(knowledgeContent).map((slug) => ({ slug }))
}

export default function KnowledgeResourcePage() {
  return <KnowledgeResourceContent />
}
