'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useRef } from 'react'
import { FiArrowLeft, FiCalendar, FiUser, FiClock, FiShare2, FiBookmark, FiChevronRight, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Hero from '@/components/shared/Hero'
import ScrollReveal from '@/components/shared/ScrollReveal'

// Content database for the dummy posts
const blogPostsContent = {
  'ipa-free-dampening-future': {
    category: 'Technical',
    title: 'The Future of IPA-Free Dampening Systems in Commercial Printing',
    excerpt: 'As environmental regulations tighten and printers seek safer pressroom environments, IPA-free dampening systems are moving from niche to mainstream. Here is what the shift means for your operation.',
    author: 'Dr. Wei Chen',
    date: 'Jun 18, 2024',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/ipa-free/1200/600',
    content: `
      <p class="lead">For decades, Isopropyl Alcohol (IPA) has been the go-to additive in offset printing. It stabilizes the dampening system, lowers water surface tension, and provides press operators with a forgiving margin of error. However, as environmental regulations tighten and the push for healthier pressroom environments intensifies, IPA-free dampening systems are rapidly transitioning from a niche choice to an industry standard.</p>
      
      <h3>The Environmental and Regulatory Drivers</h3>
      <p>Volatile Organic Compounds (VOCs) are a primary target of clean air regulations globally. IPA is a significant source of VOC emissions in print shops. By eliminating IPA, printing companies can dramatically lower their environmental footprint, simplify regulatory compliance, and create a safer, healthier workplace free of harsh solvent odors.</p>
      
      <blockquote>
        "The elimination of Isopropyl Alcohol is the single most impactful change a pressroom can make to reduce VOC emissions and improve operator health."
      </blockquote>

      <h3>The Technical Challenges of Going Alcohol-Free</h3>
      <p>Transitioning to IPA-free printing requires a fundamental understanding of pressroom chemistry. Without alcohol to artificially manage the ink-water balance, the fountain solution itself must do the heavy lifting. The key technical hurdles include:</p>
      <ul>
        <li><strong>Surface Tension Control:</strong> The fountain solution must reduce water surface tension effectively to ensure uniform plate wetting without emulsifying the ink.</li>
        <li><strong>Roller Maintenance:</strong> Alcohol keeps rollers clean by dissolving ink residues. Without it, roller glazing and calcium deposits can build up much faster.</li>
        <li><strong>Precision Dosage:</strong> IPA-free chemistry has a narrower operating window. Buffers, pH levels, and conductivity must be monitored with high precision.</li>
      </ul>

      <h3>Optimizing Chemistry for Success</h3>
      <p>A successful transition relies on selecting the right alcohol replacement additives and fountain solution chemistry. Modern formulations, such as Falcon's premium IPA replacements, use advanced surfactants and humectants that replicate the dampening characteristics of IPA without the safety hazards. They maintain a stable ink-water balance even during high-speed, long-run commercial prints.</p>
    `,
    takeaways: [
      'IPA elimination reduces VOC emissions by up to 90% in print shops.',
      'Advanced surfactants in modern founts replicate IPA performance successfully.',
      'Precision monitoring of pH and conductivity is crucial when running alcohol-free.',
      'Proper roller maintenance prevents glazing issues associated with IPA-free operations.'
    ]
  },
  'environmental-regulations-2024': {
    category: 'Industry News',
    title: 'New Environmental Regulations Impacting Pressroom Chemistry',
    excerpt: 'An overview of the latest regulatory changes affecting chemical usage in printing operations across Europe and Asia.',
    author: 'Sarah Mitchell',
    date: 'Jun 12, 2024',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/env-reg/1200/600',
    content: `
      <p class="lead">The printing industry is facing unprecedented regulatory pressure. From Europe's REACH regulations to tightening VOC standards in Southeast Asia, the chemistry used in everyday pressrooms is being re-evaluated. Understanding these changes is no longer just a compliance issue; it is a vital part of operational strategy.</p>
      
      <h3>Key Regulatory Updates</h3>
      <p>In 2024, regulatory bodies have introduced lower limits on VOC emissions and restricted several traditional solvents commonly found in press washes and plate cleaners. These changes aim to protect both community air quality and pressroom workers from exposure to potentially hazardous chemicals.</p>
      
      <blockquote>
        "Printers who proactively audit their chemistry and transition to compliant alternatives avoid the risk of sudden operational disruptions."
      </blockquote>

      <h3>The Move Toward Water-Based and Bio-Renewable Solvents</h3>
      <p>To comply with the new rules, manufacturers are innovating with vegetable-based washes, water-miscible cleaners, and low-VOC fountain solutions. These chemistries offer high flash points and low vapor pressures, drastically reducing workplace hazards and insurance premiums.</p>
    `,
    takeaways: [
      'Global VOC limits are dropping, restricting traditional solvents.',
      'Compliance requires shifting toward low-VOC and bio-renewable solvents.',
      'Proactive chemistry audits prevent compliance fines and operational halts.',
      'Green certifications can be leveraged as a competitive edge in B2B markets.'
    ]
  },
  'ph-conductivity-optimisation': {
    category: 'Technical',
    title: 'Optimising pH and Conductivity in Fountain Solutions',
    excerpt: 'A practical guide to maintaining optimal pH and conductivity levels for consistent print quality across different press types.',
    author: 'Michael Koh',
    date: 'Jun 5, 2024',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/ph-cond/1200/600',
    content: `
      <p class="lead">Consistent offset print quality starts with the fountain solution. Two variables command absolute control over this system: pH and conductivity. If these metrics drift, printers face a host of issues, from ink emulsification to dot gain and plate damage. This guide outlines how to monitor and control both variables for maximum press stability.</p>
      
      <h3>The pH Scale: Finding the Sweet Spot</h3>
      <p>For most offset inks and plates, the ideal pH range is a slightly acidic 4.5 to 5.5. In this window, the fountain solution keeps the plate's non-image area hydrophilic (water-receptive) without attacking the aluminum plate or causing the ink to dry too slowly. A pH below 4.0 can cause plate blinding and slow drying, while a pH above 6.0 leads to scumming and tinting.</p>
      
      <h3>Conductivity: The True Measure of Contamination</h3>
      <p>While pH measures the acidity, conductivity measures the total dissolved solids (ions) in the water. Freshly mixed fountain solution will have a baseline conductivity (typically 1,500 to 2,500 µS/cm). As the press runs, paper dust, ink particles, and water minerals contaminate the mixture, driving conductivity up. A spike of 1,000 µS/cm or more above the baseline indicates that the water recirculating tank should be drained and refilled.</p>
    `,
    takeaways: [
      'The ideal pH range for standard offset printing is 4.5 to 5.5.',
      'High pH causes ink scumming; low pH slows drying and causes plate damage.',
      'Conductivity tracks tank contamination and signals when to dump the solution.',
      'Consistent daily measurement is key to reducing print defects.'
    ]
  }
}

// Generate fallback content if slug doesn't exist in dummy list
function getFallbackPost(slug) {
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return {
    category: 'Technical Insights',
    title: title,
    excerpt: 'Deep technical analysis of offset printing dynamics, chemistry formulations, and optimization tips from Falcon Chemical experts.',
    author: 'Falcon Technical Team',
    date: 'Jun 20, 2024',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/' + slug + '/1200/600',
    content: `
      <p class="lead">The parameters governing modern pressrooms are highly complex. Optimizing chemical formulations to match specific substrates, inks, and operating speeds requires scientific precision and daily vigilance. In this article, we explore the variables that affect this balance and provide operational best practices.</p>
      <h3>Understanding the Chemical Dynamics</h3>
      <p>Every printing run involves a delicate chemical interaction between paper fiber, ink resins, fountain solution buffer salts, and metal plates. Small changes in press temperature, water hardness, or mechanical shear can disrupt the ink-water balance, leading to visible defects and waste. By standardizing chemistry, printers can establish a reliable baseline and resolve issues quickly.</p>
    `,
    takeaways: [
      'Chemical consistency is key to repeating high-quality print runs.',
      'Minor temperature changes in the pressroom affect ink viscosity and water transfer.',
      'Standardized formulas reduce troubleshooting cycles.'
    ]
  }
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const contentRef = useRef(null)
  
  const post = blogPostsContent[slug] || getFallbackPost(slug)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.back-link', { x: -15, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo('.article-meta', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.article-main', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.article-sidebar', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.7')
  }, { scope: contentRef })

  return (
    <article className="min-h-screen bg-gradient-to-b from-steel-50 via-white to-steel-50 relative pb-24 overflow-hidden" ref={contentRef}>
      {/* Background Architectural Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <div className="absolute inset-y-0 left-1/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-2/4 w-px bg-black" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-black" />
      </div>

      {/* Subtle Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-copper-500/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-copper-500/2 blur-[100px] pointer-events-none" />

      {/* Premium Compact Header */}
      <Hero
        title={post.title}
        eyebrow={post.category}
        className="pb-8 md:pb-12"
      >
        <div className="article-meta flex flex-wrap items-center gap-5 text-steel-500 text-xs mt-3">
          <div className="flex items-center gap-1.5">
            <FiUser className="w-3.5 h-3.5 text-copper-500" />
            <span>{post.author}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-steel-300" />
          <div className="flex items-center gap-1.5">
            <FiCalendar className="w-3.5 h-3.5 text-copper-500" />
            <span>{post.date}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-steel-300" />
          <div className="flex items-center gap-1.5">
            <FiClock className="w-3.5 h-3.5 text-copper-500" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </Hero>

      {/* Article Body Container */}
      <div className="container-custom relative z-10 mt-8">
        <div className="mb-8">
          <Link href="/blog" className="back-link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-500 hover:text-copper-600 transition-colors duration-300">
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Content Column */}
          <div className="article-main lg:col-span-8 flex flex-col gap-8">
            {/* Featured Image */}
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden shadow-[0_12px_40px_rgba(26,42,68,0.04)]">
              <div className="rounded-[calc(2rem-1px)] overflow-hidden aspect-[2/1] relative bg-steel-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content text */}
            <div className="p-8 md:p-12 rounded-[2rem] border border-steel-200/50 bg-white/70 backdrop-blur-md shadow-sm">
              <div 
                className="prose-industrial text-steel-600 space-y-6 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="article-sidebar lg:col-span-4 flex flex-col gap-8">
            {/* Takeaways Card */}
            {post.takeaways && (
              <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden">
                <div className="p-7 rounded-[calc(2rem-1px)] border border-steel-100 bg-white/80 backdrop-blur-md">
                  <h4 className="font-heading font-semibold text-ink-900 text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-3 rounded bg-copper-500" />
                    Key Takeaways
                  </h4>
                  <ul className="space-y-4">
                    {post.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-steel-600 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-copper-500/10 text-copper-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Author details / Social share */}
            <div className="p-7 rounded-[2rem] border border-steel-200/50 bg-white/80 backdrop-blur-md shadow-sm">
              <h4 className="font-heading font-semibold text-ink-900 text-xs tracking-wider uppercase mb-4">Author</h4>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-600 font-bold font-display">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h5 className="font-heading font-semibold text-sm text-ink-900 leading-tight">{post.author}</h5>
                  <span className="text-[10px] text-steel-400">Chemical Specialist</span>
                </div>
              </div>
              
              <hr className="border-steel-100 mb-5" />

              <h4 className="font-heading font-semibold text-ink-900 text-xs tracking-wider uppercase mb-3">Share</h4>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-full border border-steel-200 text-steel-500 hover:bg-ink-800 hover:text-white hover:border-ink-800 transition-all duration-300 flex items-center justify-center text-sm">
                  <FiTwitter />
                </button>
                <button className="w-8 h-8 rounded-full border border-steel-200 text-steel-500 hover:bg-ink-800 hover:text-white hover:border-ink-800 transition-all duration-300 flex items-center justify-center text-sm">
                  <FiLinkedin />
                </button>
                <button className="w-8 h-8 rounded-full border border-steel-200 text-steel-500 hover:bg-ink-800 hover:text-white hover:border-ink-800 transition-all duration-300 flex items-center justify-center text-sm">
                  <FiFacebook />
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-7 rounded-[2rem] bg-ink-900 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-grid opacity-[0.06]" />
              <div className="absolute -top-1/4 -right-1/4 w-32 h-32 rounded-full bg-copper-500/10 blur-xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[9px] tracking-[0.25em] uppercase text-copper-400 font-semibold block mb-2">Need Technical Help?</span>
                <h5 className="font-heading font-bold text-lg leading-snug mb-3">Optimise Your Pressroom Chemistry</h5>
                <p className="text-white/60 text-xs leading-relaxed mb-5">Our technical engineers can audit your current fountain solutions and help you transition to low-VOC chemistry.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md">
                  Contact Specialist
                  <FiChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
