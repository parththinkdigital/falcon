import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, Link2, Mail, Share2, User } from 'lucide-react'
import { blogPostsContent, getFallbackPost } from '@/lib/blog-data'

export default function BlogPostContent({ slug }) {
  const post = blogPostsContent[slug] || getFallbackPost(slug)

  return (
    <article className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#06294A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37] via-[#004B8D] to-[#06294A]" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#00B8D9]/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-[#4B8B2B]/20 blur-[120px]" />
        <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-center px-6 py-28 md:px-10">
          <div className="max-w-5xl text-white">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-[#9BD36A]">{post.category}</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">{post.title}</h1>
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-white/75">
              <span className="inline-flex items-center gap-2"><User className="h-4 w-4 text-[#9BD36A]" />{post.author}</span>
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-[#9BD36A]" />{post.date}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-[#9BD36A]" />{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50 to-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <main className="min-w-0">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
              <img src={post.image} alt={post.title} className="aspect-[16/8] w-full object-cover" />
            </div>

            <div className="mt-8 rounded-[2rem] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70 md:p-10">
              <div
                className="space-y-6 text-base leading-8 text-slate-700 [&_.lead]:text-xl [&_.lead]:font-bold [&_.lead]:leading-9 [&_.lead]:text-[#004B8D] [&_blockquote]:border-l-4 [&_blockquote]:border-[#00B8D9] [&_blockquote]:bg-slate-50 [&_blockquote]:p-5 [&_blockquote]:font-bold [&_blockquote]:text-[#071F3D] [&_h3]:pt-4 [&_h3]:text-2xl [&_h3]:font-extrabold [&_h3]:text-[#071F3D] [&_li]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_strong]:text-[#004B8D]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </main>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {post.takeaways && (
              <div className="rounded-[1.75rem] bg-white p-7 shadow-[0_14px_36px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70">
                <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">Key Takeaways</h2>
                <ul className="mt-5 space-y-4">
                  {post.takeaways.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4B8B2B]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-[1.75rem] bg-[#06294A] p-7 text-white shadow-[0_18px_45px_rgba(6,41,74,0.2)]">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#9BD36A]">Author</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-extrabold text-[#004B8D]">
                  {post.author.split(' ').map((name) => name[0]).join('')}
                </div>
                <div>
                  <h3 className="font-extrabold">{post.author}</h3>
                  <p className="text-sm text-white/65">Chemical Specialist</p>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                {[Share2, Link2, Mail].map((Icon, index) => (
                  <span key={index} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-[#004B8D] p-7 text-white shadow-[0_18px_45px_rgba(0,75,141,0.18)]">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#9BD36A]">Need Technical Help?</p>
              <h3 className="mt-3 text-2xl font-extrabold">Optimise Your Pressroom Chemistry</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">Our technical engineers can audit your current fountain solutions and help you transition to low-VOC chemistry.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#004B8D]">
                Contact Specialist
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </article>
  )
}
