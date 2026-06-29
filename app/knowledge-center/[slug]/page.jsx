'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useRef } from 'react'
import { FiArrowLeft, FiCalendar, FiUser, FiClock, FiFileText, FiDownload, FiChevronRight, FiCheckCircle } from 'react-icons/fi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Hero from '@/components/shared/Hero'
import ScrollReveal from '@/components/shared/ScrollReveal'

// Content database for the dummy knowledge base resources
const knowledgeContent = {
  'fountain-solution-guide': {
    category: 'Guide',
    title: 'The Complete Guide to Fountain Solution Chemistry',
    excerpt: 'A comprehensive deep-dive into pH, conductivity, alcohol substitutes, and how modern fountain solution formulations affect print quality and press efficiency.',
    author: 'Dr. Wei Chen',
    date: 'Mar 24, 2024',
    readTime: '15 min read',
    image: 'https://picsum.photos/seed/fount-guide/1200/600',
    content: `
      <p class="lead">Fountain solution is the chemical heart of the offset printing process. While often referred to simply as "water," it is a highly engineered mixture of chemical buffers, gum arabic, wetting agents, biocides, and defoamers. Understanding how these elements interact with your plates, inks, and paper is essential to achieving consistent print quality and minimizing waste.</p>
      
      <h3>The Three Pillars of Fountain Solution Chemistry</h3>
      <p>A fountain solution consists of three primary elements that must be held in precise balance:</p>
      <ol>
        <li><strong>Water Quality:</strong> The quality of your source tap water determines the stability of the final mixture. Hard water minerals can react with acid buffers, leading to unstable pH drift.</li>
        <li><strong>Fountain Concentrate:</strong> Concentrated buffers that maintain a stable acidic environment, control calcium buildup, and prevent bacterial growth.</li>
        <li><strong>Alcohol Replacements (Substitutes):</strong> Wetting agents that lower water surface tension, helping it distribute evenly across the plate's non-image area.</li>
      </ol>

      <h3>Maintaining the Optimal pH Range</h3>
      <p>pH is the scale that measures acidity or alkalinity. For offset printing, the ideal pH is 4.5 to 5.5. A pH within this range protects the hydrophobic boundary on the plate, prevents ink emulsification, and ensures sharp dot reproduction. If pH drops below 4.0, it will attack the plate image and retard ink drying. If it rises above 6.0, ink will scum on the plate, causing printing defects.</p>
      
      <h3>Conductivity and System Maintenance</h3>
      <p>Conductivity measures the electrical current flowing through water, which tells you how saturated the fountain solution is with chemical ions and contaminants. As the press runs, paper coatings and ink residues build up in the recirculating tank. If conductivity increases by 1,000 µS/cm above the fresh tank baseline, the solution must be replaced to prevent plate blinding and ink piling.</p>
    `,
    benefits: [
      'Optimal ink-water balance for cleaner start-ups',
      'Longer plate life and sharper half-tone dot fidelity',
      'Reduced paper waste and less press downtime',
      'Stable conductivity even during high-speed packaging runs'
    ],
    downloadLabel: 'Download Technical Guide (PDF)'
  },
  'ipa-reduction': {
    category: 'Article',
    title: 'Understanding IPA Reduction in Dampening Systems',
    excerpt: 'Practical approaches to reducing isopropyl alcohol usage without compromising print quality.',
    author: 'Dr. Wei Chen',
    date: 'Mar 15, 2024',
    readTime: '10 min read',
    image: 'https://picsum.photos/seed/ipa-red/1200/600',
    content: `
      <p class="lead">Reducing Isopropyl Alcohol (IPA) is a major goal for pressrooms aiming to improve air quality and cut operational costs. However, IPA plays multiple roles on the press: it increases viscosity, chills the rollers, and makes dampening water distribution highly forgiving. Transitioning to low-alcohol or alcohol-free chemistry requires a strategic approach.</p>
      
      <h3>Step 1: Check Roller Alignment and Hardness</h3>
      <p>Without IPA, water transfer is less forgiving of mechanical imperfections. Rollers must be in excellent physical condition. Check roller hardness (durometer) and ensure settings are adjusted perfectly to manufacturer specifications. Hardened or glaze-covered rollers will fail to transfer water smoothly without alcohol.</p>
      
      <h3>Step 2: Optimize Chiller Settings</h3>
      <p>Alcohol cools the dampening water. In its absence, the temperature of your recirculating tank must be monitored closely. Keep water temperatures between 10°C and 13°C. Warmer water reduces solution viscosity and makes ink-water balance harder to maintain.</p>
      
      <h3>Step 3: Select the Right Replacement Chemistry</h3>
      <p>Modern alcohol substitutes use sophisticated surfactant chemistry to lower surface tension and mimic alcohol's behavior. Transitioning to Falcon's high-stability IPA replacements allows you to cut IPA levels to under 2% immediately, or eliminate it altogether, without losing control of the ink boundary.</p>
    `,
    benefits: [
      'Up to 90% reduction in VOC emissions',
      'Immediate cost savings on raw chemicals and hazardous disposal fees',
      'Healthier workplace with lower solvent odors',
      'No equipment retrofits required on modern offset presses'
    ],
    downloadLabel: 'Download IPA-Free Implementation Checklist'
  },
  'plate-cleaning-guide': {
    category: 'Guide',
    title: 'Plate Cleaning Best Practices for Longevity',
    excerpt: 'Extend the life of your printing plates with proper cleaning techniques and the right chemistry.',
    author: 'Sarah Mitchell',
    date: 'Feb 28, 2024',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/plate-clean/1200/600',
    content: `
      <p class="lead">Printing plates represent a significant capital investment. Neglecting them during press stops or using aggressive cleaning solvents can damage the plate's sensitive coating, causing early degradation and expensive downtime. Implementing correct cleaning protocols extends plate run lengths and maintains print sharpness.</p>
      
      <h3>Choose Mild, Plate-Safe Formulations</h3>
      <p>Aggressive general-purpose press washes are too harsh for printing plate coatings. Always use specialized, pH-balanced plate cleaners that dissolve ink residues without attacking the hydrophilic non-image layers. Thermal, UV, and conventional plates require dedicated formulations optimized for their specific coatings.</p>
      
      <h3>Proper Gumming for Storage</h3>
      <p>Whenever plates are removed from the press or left standing for extended periods, they must be gummed. Apply a thin, even layer of gum arabic or synthetic gum solution to prevent oxidation. Oxidized plate areas lose their water-receptivity, causing severe ink scumming during restarts.</p>
    `,
    benefits: [
      'Prevents oxidation and plate blinding during press stops',
      'Maintains clean boundaries for sharp print highlights',
      'Extends thermal and UV plate run length by up to 25%',
      'Reduces chemical inventory through dual-purpose cleaners'
    ],
    downloadLabel: 'Download Plate Maintenance Guidelines'
  }
}

// Generate fallback resource if slug doesn't exist
function getFallbackResource(slug) {
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return {
    category: 'Technical Resource',
    title: title,
    excerpt: 'Detailed technical specification and application instructions for Falcon Chemical pressroom solutions.',
    author: 'Falcon Technical Service',
    date: 'Feb 1, 2024',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/' + slug + '/1200/600',
    content: `
      <p class="lead">Optimizing chemical performance in printing operations is a continuous science. Substrate variations, ink selections, and mechanical configurations all demand precise adjustments. This technical guide outlines chemical properties, standard dosing ratios, and troubleshooting guidelines to ensure successful implementation.</p>
      <h3>Application and Dosage Guidelines</h3>
      <p>Always mix concentrates with pre-filtered water using automated dosing equipment. Establish a conductivity baseline and test pH at start, mid-run, and end-run to track drift. Store all chemistries in dry environments out of direct heat to maintain stability.</p>
    `,
    benefits: [
      'Standardized dosing ratios for maximum stability',
      'Detailed chemical analysis and safety specs',
      'Easy integration into automated press pumps'
    ],
    downloadLabel: 'Download Product Technical Specification Sheet'
  }
}

export default function KnowledgeResourcePage() {
  const { slug } = useParams()
  const contentRef = useRef(null)
  
  const resource = knowledgeContent[slug] || getFallbackResource(slug)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.back-link', { x: -15, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo('.resource-meta', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.resource-main', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.resource-sidebar', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.7')
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
        title={resource.title}
        eyebrow={resource.category}
        className="pb-8 md:pb-12"
      >
        <div className="resource-meta flex flex-wrap items-center gap-5 text-steel-500 text-xs mt-3">
          <div className="flex items-center gap-1.5">
            <FiUser className="w-3.5 h-3.5 text-copper-500" />
            <span>{resource.author}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-steel-300" />
          <div className="flex items-center gap-1.5">
            <FiCalendar className="w-3.5 h-3.5 text-copper-500" />
            <span>{resource.date}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-steel-300" />
          <div className="flex items-center gap-1.5">
            <FiClock className="w-3.5 h-3.5 text-copper-500" />
            <span>{resource.readTime}</span>
          </div>
        </div>
      </Hero>

      {/* Resource Body Container */}
      <div className="container-custom relative z-10 mt-8">
        <div className="mb-8">
          <Link href="/knowledge-center" className="back-link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-steel-500 hover:text-copper-600 transition-colors duration-300">
            <FiArrowLeft className="w-4 h-4" />
            Back to Knowledge Center
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Content Column */}
          <div className="resource-main lg:col-span-8 flex flex-col gap-8">
            {/* Featured Image */}
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-steel-200/60 to-transparent overflow-hidden shadow-[0_12px_40px_rgba(26,42,68,0.04)]">
              <div className="rounded-[calc(2rem-1px)] overflow-hidden aspect-[2/1] relative bg-steel-100">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content text */}
            <div className="p-8 md:p-12 rounded-[2rem] border border-steel-200/50 bg-white/70 backdrop-blur-md shadow-sm">
              <div 
                className="prose-industrial text-steel-600 space-y-6 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: resource.content }}
              />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="resource-sidebar lg:col-span-4 flex flex-col gap-8">
            {/* Download/Resource Card */}
            <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-copper-500/20 to-transparent overflow-hidden shadow-[0_8px_30px_rgba(180,83,9,0.03)]">
              <div className="p-7 rounded-[calc(2rem-1px)] border border-copper-500/10 bg-white/95 backdrop-blur-md">
                <h4 className="font-heading font-semibold text-ink-900 text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
                  <FiFileText className="w-4 h-4 text-copper-500" />
                  Technical Resource
                </h4>
                <p className="text-xs md:text-sm text-steel-500 leading-relaxed mb-6">
                  Access the full technical specification sheets, material safety sheets (MSDS), and press adjustment sheets.
                </p>
                <button className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold shadow-md active:scale-[0.97] transition-all duration-300">
                  <FiDownload className="w-4 h-4" />
                  <span>{resource.downloadLabel || 'Download Technical PDF'}</span>
                </button>
              </div>
            </div>

            {/* Benefits list */}
            {resource.benefits && (
              <div className="p-7 rounded-[2rem] border border-steel-200/50 bg-white/80 backdrop-blur-md shadow-sm">
                <h4 className="font-heading font-semibold text-ink-900 text-xs tracking-wider uppercase mb-4">Operational Benefits</h4>
                <ul className="space-y-3.5">
                  {resource.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-steel-600 leading-relaxed">
                      <FiCheckCircle className="w-4 h-4 text-copper-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Call to Action */}
            <div className="p-7 rounded-[2rem] bg-ink-900 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-grid opacity-[0.06]" />
              <div className="absolute -top-1/4 -right-1/4 w-32 h-32 rounded-full bg-copper-500/10 blur-xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[9px] tracking-[0.25em] uppercase text-copper-400 font-semibold block mb-2">Technical Service</span>
                <h5 className="font-heading font-bold text-lg leading-snug mb-3">Custom Formulations</h5>
                <p className="text-white/60 text-xs leading-relaxed mb-5">Falcon engineers can custom blend fountain solutions and cleaners to match your local water hardness and unique ink systems.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-copper-500 hover:bg-copper-600 text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md">
                  Request Consultation
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
