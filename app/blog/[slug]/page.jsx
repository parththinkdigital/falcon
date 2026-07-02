import { blogPostsContent } from '@/lib/blog-data'
import BlogPostContent from './page-content'

export function generateStaticParams() {
  return Object.keys(blogPostsContent).map((slug) => ({ slug }))
}

export default function BlogPostPage() {
  return <BlogPostContent />
}
