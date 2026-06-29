'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Hero from '@/components/shared/Hero'
import SectionHeader from '@/components/shared/SectionHeader'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi'

const slugContent = {
  'fountain-solutions': {
    title: 'Fountain Solutions',
    subtitle: 'Premium fountain solutions engineered for optimal ink-water balance across sheetfed, heatset, and coldset offset printing presses.',
    overview: 'Falcon fountain solutions are formulated with advanced wetting agents and buffering systems that maintain consistent ink-water balance across long press runs. Our chemistries reduce surface tension for superior plate wetting while preventing emulsification, scumming, and tinting. Available in standard, alcohol-reduced, and IPA-free variants to match your environmental and operational goals.',
    sections: [
      {
        type: 'benefitsList',
        title: 'Key Benefits',
        columns: 3,
        items: [
          'Superior print quality with consistent color density across the entire press run',
          'Faster startup times with immediate ink-water balance achievement from the first sheet',
          'Reduced paper waste from fewer hickeys, scumming, and plate-related issues',
          'Extended press stability with wide operating latitude for press operators',
          'Lower total cost of ownership through reduced alcohol consumption and waste',
          'Compatible with all plate types including thermal, violet, and conventional',
        ],
      },
      {
        type: 'specsTable',
        title: 'Technical Specifications',
        specs: [
          { param: 'pH (10% solution)', value: '4.5 – 5.5' },
          { param: 'Conductivity (10% solution)', value: '1,800 – 2,500 \u00B5S/cm' },
          { param: 'Appearance', value: 'Clear to light amber liquid' },
          { param: 'Specific Gravity', value: '1.05 – 1.15 g/mL' },
          { param: 'Recommended Dosage', value: '2 – 4% for standard applications' },
          { param: 'Shelf Life', value: '24 months in sealed container' },
        ],
      },
      {
        type: 'applicationGrid',
        title: 'Application Areas',
        items: [
          'Sheetfed Commercial Printing',
          'Heatset Web Printing',
          'Coldset Newspaper Printing',
          'Packaging & Label Printing',
        ],
      },
    ],
  },
  'ipa-replacements': {
    title: 'IPA Replacements',
    subtitle: 'Environmentally friendly alternatives to isopropyl alcohol that reduce VOC emissions while maintaining or improving dampening performance.',
    overview: 'Falcon IPA replacement formulations eliminate or dramatically reduce the need for isopropyl alcohol in your dampening system. These advanced chemistries provide the same wetting and surface tension control as IPA without the health, safety, and environmental drawbacks. Our one-to-one replacement products require no equipment modification and deliver immediate improvements in pressroom air quality.',
    sections: [
      {
        type: 'statsRow',
        title: 'Environmental Impact',
        items: [
          { value: '90%', label: 'VOC Reduction' },
          { value: '100%', label: 'IPA Elimination Possible' },
          { value: '0', label: 'Equipment Modifications Needed' },
        ],
      },
      {
        type: 'comparisonTable',
        title: 'Product Comparison',
        headers: ['Property', 'Traditional IPA', 'Falcon IPA-Free'],
        rows: [
          ['VOC Content', '100%', '&lt; 5%'],
          ['Flash Point', '12\u00B0C', '&gt; 60\u00B0C'],
          ['Handling Risk', 'Flammable', 'Non-flammable'],
          ['Dosage Rate', '8 – 15%', '1 – 3%'],
          ['Odor', 'Strong alcohol', 'Mild, low odor'],
        ],
      },
      {
        type: 'benefitsList',
        title: 'Key Features',
        columns: 2,
        items: [
          'Non-flammable formulation improves pressroom safety and insurance profile',
          'Reduces regulatory compliance burden for air quality and VOC reporting',
          'Eliminates employee exposure to harmful IPA vapors and skin irritants',
          'Compatible with all standard dampening systems without modifications',
          'Maintains print quality equal to or better than traditional IPA dampening',
          'Cost-effective with lower dosage rates compared to isopropyl alcohol',
        ],
      },
    ],
  },
  'plate-cleaners': {
    title: 'Plate Cleaners',
    subtitle: 'Advanced plate cleaning solutions designed to remove ink contamination while preserving image quality and extending plate life.',
    overview: 'Falcon plate cleaners deliver thorough cleaning action that removes dried and cured ink from all plate surfaces without abrasion or chemical damage. Our formulations are engineered to maintain dot sharpness and image integrity across thousands of impressions, reducing plate remakes and press downtime.',
    sections: [
      {
        type: 'featuresGrid',
        title: 'Product Features',
        items: [
          { title: 'Non-Abrasive Formula', description: 'Gentle cleaning action removes ink without scratching or wearing plate surfaces, preserving image quality and extending plate life.' },
          { title: 'Universal Compatibility', description: 'Safe for thermal CTP, violet, UV, and conventional plate types. One product simplifies your inventory and training.' },
          { title: 'Fast Acting', description: 'Penetrates and dissolves dried ink rapidly, reducing cleaning time and getting presses back to production faster.' },
          { title: 'Anti-Static Protection', description: 'Specialized anti-static agents reduce dust attraction during cleaning and plate storage, preventing image defects.' },
        ],
      },
      {
        type: 'stepsList',
        title: 'Usage Instructions',
        steps: [
          'Apply Falcon plate cleaner to a clean, lint-free cloth or sponge',
          'Wipe the plate surface gently in a single direction using light pressure',
          'Allow cleaner to dwell for 10-15 seconds to dissolve dried ink',
          'Wipe away dissolved residue with a clean section of the cloth',
          'Rinse with water if required by your specific plate type specification',
          'Inspect plate surface for complete cleanliness before mounting on press',
        ],
      },
      {
        type: 'safetyInfo',
        title: 'Safety & Handling',
        items: [
          'Use in well-ventilated areas or with local exhaust ventilation',
          'Wear chemical-resistant gloves and safety glasses during use',
          'Store in original containers away from heat, sparks, and open flame',
          'Refer to Safety Data Sheet for complete handling and disposal guidelines',
        ],
      },
    ],
  },
  'roller-blanket-washes': {
    title: 'Roller & Blanket Washes',
    subtitle: 'High-performance cleaning solutions for rubber rollers, printing blankets, and press components that remove ink quickly and safely.',
    overview: 'Falcon roller and blanket washes are engineered to remove ink, paper dust, and contaminants from press components while preserving rubber integrity. Our formulations balance fast evaporation with effective dwell time, ensuring thorough cleaning in minimal press downtime. Available in multiple flash point options to match your pressroom safety requirements.',
    sections: [
      {
        type: 'comparisonTable',
        title: 'Product Range',
        headers: ['Product', 'Flash Point', 'Best For'],
        rows: [
          ['Falcon Wash R-100', '&gt; 100\u00B0C', 'Heatset web presses, high-speed operations'],
          ['Falcon Wash R-62', '&gt; 62\u00B0C', 'General sheetfed, UV ink cleaning'],
          ['Falcon Wash R-35', '&gt; 35\u00B0C', 'Coldset, newsprint, quick cleaning cycles'],
          ['Falcon Wash R-LE', 'Non-flammable', 'Low-emission pressrooms, sensitive environments'],
        ],
      },
      {
        type: 'benefitsList',
        title: 'Key Benefits',
        columns: 2,
        items: [
          'Fast cleaning cycles reduce press downtime and increase productive running time',
          'Protective conditioning agents extend roller and blanket life by preventing rubber drying',
          'Effective against conventional, UV, and hybrid inks with minimal scrubbing required',
          'Low-odor formulations improve pressroom working conditions for operators',
          'Available in non-flammable options for improved safety compliance',
          'Compatible with automatic blanket washing systems on modern presses',
        ],
      },
      {
        type: 'applicationGrid',
        title: 'Compatibility',
        items: [
          'Rubber Rollers',
          'Printing Blankets',
          'Press Components',
          'Automatic Wash Systems',
        ],
      },
    ],
  },
  'specialty-chemicals': {
    title: 'Specialty Chemicals',
    subtitle: 'Supporting chemicals and additives for press maintenance, machine optimization, and production consistency.',
    overview: 'Beyond our core product lines, Falcon offers a comprehensive range of specialty chemicals designed to support every aspect of pressroom operations. From maintenance formulations that extend equipment life to performance additives that enhance production consistency, these products complete the Falcon chemistry ecosystem.',
    sections: [
      {
        type: 'benefitsList',
        title: 'Product Categories',
        columns: 2,
        items: [
          'Press maintenance cleaners and degreasers for deep cleaning of press components',
          'Roller conditioning compounds that restore and maintain optimal roller tack',
          'pH buffer solutions for precise dampening water chemistry control',
          'Anti-foam agents that prevent foaming in circulating dampening systems',
          'Biocide treatments that control biological growth in dampening systems',
          'Gumming solutions for plate storage and roll-up optimization',
        ],
      },
      {
        type: 'featuresGrid',
        title: 'Applications',
        items: [
          { title: 'Press Maintenance', description: 'Extend equipment life with specialized cleaners, lubricants, and protective treatments for all press components.' },
          { title: 'Machine Optimization', description: 'Fine-tune press performance with additives that improve ink transfer, water control, and overall efficiency.' },
          { title: 'Production Consistency', description: 'Maintain stable print quality run after run with chemistry that controls variables in the dampening system.' },
          { title: 'Problem Solving', description: 'Address specific pressroom challenges with targeted formulations for foaming, scumming, and contamination issues.' },
        ],
      },
      {
        type: 'benefitsList',
        title: 'Benefits',
        columns: 3,
        items: [
          'Optimized press performance and efficiency',
          'Extended equipment life and reduced maintenance costs',
          'Consistent production quality across all shifts',
          'Reduced operational costs and chemical inventory complexity',
          'Expert technical support for formulation selection',
          'Custom blending available for unique requirements',
        ],
      },
    ],
  },
}

function renderSection(section, i) {
  switch (section.type) {
    case 'benefitsList':
      return (
        <section key={i} className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className={`grid md:grid-cols-2 lg:grid-cols-${section.columns || 2} gap-4 mt-12 max-w-4xl mx-auto`}>
              {section.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3 p-5 rounded-xl bg-steel-50 border border-steel-100">
                  <FiCheckCircle className="w-5 h-5 text-copper-500 mt-0.5 shrink-0" />
                  <span className="text-steel-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'specsTable':
      return (
        <section key={i} className="section-padding">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="max-w-2xl mx-auto mt-12 divide-y divide-steel-200 border border-steel-200 rounded-xl overflow-hidden">
              {section.specs.map((spec, j) => (
                <div key={j} className={`flex justify-between items-center px-6 py-4 ${j % 2 === 0 ? 'bg-white' : 'bg-steel-50'}`}>
                  <span className="text-sm font-medium text-ink-800">{spec.param}</span>
                  <span className="text-sm text-steel-500 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'applicationGrid':
      return (
        <section key={i} className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {section.items.map((item, j) => (
                <div key={j} className="text-center p-6 rounded-xl border border-steel-200 bg-white hover:border-copper-500/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-copper-500/10 flex items-center justify-center mx-auto mb-3">
                    <FiCheckCircle className="w-5 h-5 text-copper-500" />
                  </div>
                  <span className="text-sm font-medium text-ink-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'statsRow':
      return (
        <section key={i} className="section-padding bg-gradient-to-r from-copper-500/5 to-amber-500/5">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
              {section.items.map((item, j) => (
                <div key={j} className="text-center p-8 rounded-2xl bg-white border border-steel-200 shadow-sm">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-copper-500 mb-2">{item.value}</div>
                  <div className="text-sm text-steel-500 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'comparisonTable':
      return (
        <section key={i} className="section-padding">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="max-w-3xl mx-auto mt-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-ink-800">
                    {section.headers.map((h, j) => (
                      <th key={j} className="text-left px-5 py-4 text-white font-heading font-semibold text-sm first:rounded-l-xl last:rounded-r-xl">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, j) => (
                    <tr key={j} className={`border-b border-steel-200 ${j % 2 === 0 ? 'bg-white' : 'bg-steel-50'}`}>
                      {row.map((cell, k) => (
                        <td key={k} className={`px-5 py-4 text-sm ${k === 0 ? 'font-medium text-ink-800' : 'text-steel-500'}`}>
                          {k > 0 ? <span dangerouslySetInnerHTML={{ __html: cell }} /> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )

    case 'featuresGrid':
      return (
        <section key={i} className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {section.items.map((item, j) => (
                <div key={j} className="p-6 rounded-xl border border-steel-200 bg-white hover:border-copper-500/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 flex items-center justify-center mb-4">
                    <FiCheckCircle className="w-5 h-5 text-copper-500" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-ink-800 mb-2">{item.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'stepsList':
      return (
        <section key={i} className="section-padding">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="max-w-2xl mx-auto mt-12 space-y-6">
              {section.steps.map((step, j) => (
                <div key={j} className="flex gap-5 items-start">
                  <div className="w-8 h-8 rounded-full bg-copper-500 text-white flex items-center justify-center font-heading font-bold text-sm shrink-0">
                    {j + 1}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-steel-600 text-sm leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'safetyInfo':
      return (
        <section key={i} className="section-padding bg-amber-50/50">
          <div className="container-custom">
            <SectionHeader title={section.title} center />
            <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-3xl mx-auto">
              {section.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3 p-5 rounded-xl bg-white border border-amber-200">
                  <FiCheckCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-steel-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    default:
      return null
  }
}

export default function SolutionDetailPage() {
  const { slug } = useParams()
  const data = slugContent[slug]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-ink-800 mb-4">Solution Not Found</h1>
          <p className="text-steel-500 mb-6">The solution you are looking for does not exist.</p>
          <Link href="/solutions" className="btn-primary">Back to Solutions</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        dark={false}
        size="md"
      />

      <ScrollReveal>
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeader title="Overview" />
            <p className="text-steel-500 leading-relaxed max-w-3xl text-base sm:text-lg">
              {data.overview}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {data.sections.map((section, i) => (
        <ScrollReveal key={i}>
          {renderSection(section, i)}
        </ScrollReveal>
      ))}

      <ScrollReveal>
        <section className="relative bg-ink-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ink-800 to-ink-900" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-copper-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="container-custom relative z-10 py-20">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Interested in This Product?
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Contact our technical sales team for detailed specifications, pricing, and a free pressroom consultation.
              </p>
              <Link href="/contact" className="btn-accent">
                Inquire Now
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="container-custom py-8">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-steel-500 hover:text-copper-500 transition-colors duration-300">
          <FiArrowLeft className="w-4 h-4" />
          All Solutions
        </Link>
      </div>
    </>
  )
}
