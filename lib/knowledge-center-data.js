export const knowledgeContent = {
  'fountain-solution-guide': {
    category: 'Guide',
    title: 'The Complete Guide to Fountain Solution Chemistry',
    excerpt: 'A comprehensive deep-dive into pH, conductivity, alcohol substitutes, and how modern fountain solution formulations affect print quality and press efficiency.',
    author: 'Dr. Wei Chen',
    date: 'Mar 24, 2024',
    readTime: '15 min read',
    image: 'https://picsum.photos/seed/fount-guide/1200/600',
    content: '<p class="lead">Fountain solution is the chemical heart of the offset printing process. While often referred to simply as "water," it is a highly engineered mixture of chemical buffers, gum arabic, wetting agents, biocides, and defoamers. Understanding how these elements interact with your plates, inks, and paper is essential to achieving consistent print quality and minimizing waste.</p><h3>The Three Pillars of Fountain Solution Chemistry</h3><p>A fountain solution consists of three primary elements that must be held in precise balance:</p><ol><li><strong>Water Quality:</strong> The quality of your source tap water determines the stability of the final mixture. Hard water minerals can react with acid buffers, leading to unstable pH drift.</li><li><strong>Fountain Concentrate:</strong> Concentrated buffers that maintain a stable acidic environment, control calcium buildup, and prevent bacterial growth.</li><li><strong>Alcohol Replacements (Substitutes):</strong> Wetting agents that lower water surface tension, helping it distribute evenly across the plate&#39;s non-image area.</li></ol><h3>Maintaining the Optimal pH Range</h3><p>pH is the scale that measures acidity or alkalinity. For offset printing, the ideal pH is 4.5 to 5.5. A pH within this range protects the hydrophobic boundary on the plate, prevents ink emulsification, and ensures sharp dot reproduction. If pH drops below 4.0, it will attack the plate image and retard ink drying. If it rises above 6.0, ink will scum on the plate, causing printing defects.</p><h3>Conductivity and System Maintenance</h3><p>Conductivity measures the electrical current flowing through water, which tells you how saturated the fountain solution is with chemical ions and contaminants. As the press runs, paper coatings and ink residues build up in the recirculating tank. If conductivity increases by 1,000 \u00B5S/cm above the fresh tank baseline, the solution must be replaced to prevent plate blinding and ink piling.</p>',
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
    content: '<p class="lead">Reducing Isopropyl Alcohol (IPA) is a major goal for pressrooms aiming to improve air quality and cut operational costs. However, IPA plays multiple roles on the press: it increases viscosity, chills the rollers, and makes dampening water distribution highly forgiving. Transitioning to low-alcohol or alcohol-free chemistry requires a strategic approach.</p><h3>Step 1: Check Roller Alignment and Hardness</h3><p>Without IPA, water transfer is less forgiving of mechanical imperfections. Rollers must be in excellent physical condition. Check roller hardness (durometer) and ensure settings are adjusted perfectly to manufacturer specifications. Hardened or glaze-covered rollers will fail to transfer water smoothly without alcohol.</p><h3>Step 2: Optimize Chiller Settings</h3><p>Alcohol cools the dampening water. In its absence, the temperature of your recirculating tank must be monitored closely. Keep water temperatures between 10\u00B0C and 13\u00B0C. Warmer water reduces solution viscosity and makes ink-water balance harder to maintain.</p><h3>Step 3: Select the Right Replacement Chemistry</h3><p>Modern alcohol substitutes use sophisticated surfactant chemistry to lower surface tension and mimic alcohol&#39;s behavior. Transitioning to Falcon&#39;s high-stability IPA replacements allows you to cut IPA levels to under 2% immediately, or eliminate it altogether, without losing control of the ink boundary.</p>',
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
    content: '<p class="lead">Printing plates represent a significant capital investment. Neglecting them during press stops or using aggressive cleaning solvents can damage the plate&#39;s sensitive coating, causing early degradation and expensive downtime. Implementing correct cleaning protocols extends plate run lengths and maintains print sharpness.</p><h3>Choose Mild, Plate-Safe Formulations</h3><p>Aggressive general-purpose press washes are too harsh for printing plate coatings. Always use specialized, pH-balanced plate cleaners that dissolve ink residues without attacking the hydrophilic non-image layers. Thermal, UV, and conventional plates require dedicated formulations optimized for their specific coatings.</p><h3>Proper Gumming for Storage</h3><p>Whenever plates are removed from the press or left standing for extended periods, they must be gummed. Apply a thin, even layer of gum arabic or synthetic gum solution to prevent oxidation. Oxidized plate areas lose their water-receptivity, causing severe ink scumming during restarts.</p>',
    benefits: [
      'Prevents oxidation and plate blinding during press stops',
      'Maintains clean boundaries for sharp print highlights',
      'Extends thermal and UV plate run length by up to 25%',
      'Reduces chemical inventory through dual-purpose cleaners'
    ],
    downloadLabel: 'Download Plate Maintenance Guidelines'
  }
}

export function getFallbackResource(slug) {
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
    content: '<p class="lead">Optimizing chemical performance in printing operations is a continuous science. Substrate variations, ink selections, and mechanical configurations all demand precise adjustments. This technical guide outlines chemical properties, standard dosing ratios, and troubleshooting guidelines to ensure successful implementation.</p><h3>Application and Dosage Guidelines</h3><p>Always mix concentrates with pre-filtered water using automated dosing equipment. Establish a conductivity baseline and test pH at start, mid-run, and end-run to track drift. Store all chemistries in dry environments out of direct heat to maintain stability.</p>',
    benefits: [
      'Standardized dosing ratios for maximum stability',
      'Detailed chemical analysis and safety specs',
      'Easy integration into automated press pumps'
    ],
    downloadLabel: 'Download Product Technical Specification Sheet'
  }
}
