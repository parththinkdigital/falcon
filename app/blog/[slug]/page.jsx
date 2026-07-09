import { blogPostsContent } from '@/lib/blog-data'
import BlogPostContent from './page-content'

export function generateStaticParams() {
  return Object.keys(blogPostsContent).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params

  return <BlogPostContent slug={slug} />
}
