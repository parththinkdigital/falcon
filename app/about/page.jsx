import Link from 'next/link'
import { 
  ArrowRight, 
  FlaskConical, 
  MapPin, 
  Handshake, 
  Lightbulb, 
  Award, 
  Cog, 
  Layers, 
  Users 
} from 'lucide-react'

const stats = [
  { value: '30+', label: 'Years of print experience' },
  { value: '500+', label: 'Commercial pressrooms' },
  { value: '50+', label: 'Countries served' },
  { value: '120+', label: 'Chemical formulations' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#06294A] py-24">
        <img 
          src="/about/hero.jpg" 
          alt="Falcon modern agile technically driven team" 
          className="absolute inset-0 h-full w-full object-cover opacity-30 object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37]/95 via-[#004B8D]/65 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 z-10">
          <div className="max-w-4xl text-white">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-[#00B8D9]">
              About Falcon
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Modern, Agile and <br />
              <span className="text-[#9BD36A]">Technically Driven.</span>
            </h1>
            <div className="mt-8 space-y-6 text-base md:text-lg font-medium leading-relaxed text-white/90 max-w-3xl">
              <p>
                More than a manufacturer, Falcon is a team of printing technologists dedicated to solving everyday pressroom challenges through smarter chemistry, continuous innovation, and practical technical support.
              </p>
              <p>
                Every formulation is developed with one objective—to help printers achieve greater consistency, higher productivity, and lower operating costs.
              </p>
              <p>
                By combining real pressroom experience with disciplined manufacturing and ongoing research, we deliver solutions that perform reliably under demanding production conditions.
              </p>
              <p>
                Our customers don't simply buy chemicals from us—they gain a technical partner committed to helping their pressrooms perform at their best.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#3f7624] shadow-md hover:shadow-lg">
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: KKD Photo */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#004B8D] to-[#4B8B2B] opacity-25 blur transition duration-1000 group-hover:opacity-45" />
            <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-slate-100">
              <img 
                src="/about/kkd-photo.jpg" 
                alt="Founder printing technologist in Falcon laboratory" 
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
              />
            </div>
          </div>
          
          {/* Right Column: Story Text */}
          <div className="lg:pl-8">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B] mb-3">
              Our Story
            </p>
            <h2 className="text-3xl font-extrabold text-[#06294A] md:text-5xl leading-tight mb-8">
              Our Journey Began With <br />
              <span className="text-[#004B8D]">One Simple Belief</span>
            </h2>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p className="font-semibold text-[#071F3D] border-l-4 border-[#4B8B2B] pl-4">
                Founded by a printing technologist with 30+ years of hands-on industry experience, Falcon brings together technical knowledge, practical insight, and a commitment to create better results on press.
              </p>
              <p>
                Today, we partner with printers and packaging converters to deliver high-performing pressroom solutions that improve print quality, reduce waste, and enhance productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations & Advantages Section (Split Warehouse Section) */}
      <section className="bg-slate-50 px-6 py-16 md:px-10 lg:py-24 border-y border-slate-100">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          {/* Left Column: Advantages */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="mb-4">
              <p className="text-sm font-extrabold uppercase tracking-widest text-[#004B8D] mb-3">
                Our Operations
              </p>
              <h2 className="text-3xl font-extrabold text-[#06294A] md:text-4xl">
                Core Strengths & Manufacturing Advantages
              </h2>
            </div>

            <div className="space-y-6">
              {/* Technical Expertise */}
              <div className="flex gap-5 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md hover:border-[#004B8D]/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#004B8D]/10 text-[#004B8D]">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                    Technical Expertise
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed text-sm md:text-base">
                    We believe that the most effective Printing Chemicals can be formulated by people who understand the printing press as deeply as they understand the chemistry behind it... we qualify well for this!
                  </p>
                </div>
              </div>

              {/* Locational Advantage */}
              <div className="flex gap-5 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md hover:border-[#00B8D9]/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00B8D9]/10 text-[#00B8D9]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                    Locational Advantage
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed text-sm md:text-base">
                    Strategically located in Nashik, near Mumbai, our 8,000 sq. ft. manufacturing facility gives us a distinct competitive advantage. Our proximity to India's major seaports, inland dry ports, and national expressway network allows us to efficiently procure raw materials and serve customers worldwide with consistently high-quality pressroom chemicals. You can bank upon us for reliable turnaround times. Whether shipping a single pallet or a full container load...we can do it!
                  </p>
                </div>
              </div>

              {/* Private Label & Contract Manufacturing */}
              <div className="flex gap-5 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md hover:border-[#4B8B2B]/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4B8B2B]/10 text-[#4B8B2B]">
                  <Handshake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                    Ideal Choice for Contract Manufacturing
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed text-sm md:text-base">
                    Looking to launch your own brand of Printing Chemicals? Falcon Pressroom Solutions provides fully confidential Private Label and Contract Manufacturing services for distributors, trading companies, and printing industry suppliers across the globe. From manufacturing to packaging, labeling, and documentation, we offer complete end-to-end white labelling solutions tailored to your market requirements. Every partnership is governed by a strict Confidentiality and Non-Disclosure Agreement (NDA), ensuring your formulations, branding, commercial strategy, and intellectual property remain fully protected.
                  </p>
                  <p className="mt-4 text-xs font-bold text-[#4B8B2B] uppercase tracking-wider">
                    YOU FOCUS ON BUILDING YOUR BRAND AND GROWING YOUR MARKET AND WE PROVIDE THE MANUFACTURING EXPERTISE COUPLED WITH BETTER VALUE FOR YOUR MARKET!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Warehouse Image */}
          <div className="flex items-center justify-center">
            <img 
              src="/about/warehouse-clean.jpg" 
              alt="Falcon Nashik manufacturing facility and warehouse" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-[#06294A] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:border-r md:last:border-none border-white/10 px-4">
                <div className="text-4xl font-extrabold text-[#00B8D9] md:text-5xl lg:text-6xl">
                  {stat.value}
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/70 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thinking Chemistry Section */}
      <section className="bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          {/* Left Column: Infographic Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00B8D9] to-[#004B8D] opacity-20 blur transition duration-1000 group-hover:opacity-35" />
            <div className="relative overflow-hidden rounded-lg bg-slate-50 shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100">
              <img 
                src="/about/thinking-chemistry.jpg" 
                alt="Chemistry that thinks before it mixes infographic" 
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>
          
          {/* Right Column: Details */}
          <div className="lg:pl-8">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#00B8D9] mb-3">
              Our Philosophy
            </p>
            <h2 className="text-3xl font-extrabold text-[#06294A] md:text-4xl leading-tight mb-8">
              Chemistry That Thinks <br />
              <span className="text-[#004B8D]">Before It Mixes</span>
            </h2>
            <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
              <p className="font-semibold text-[#071F3D]">
                At Falcon, manufacturing printing chemicals is not just about blending ingredients—it is about understanding what actually happens on the press.
              </p>
              <p>
                Metallic inks do not enjoy acidic fountain solutions, so we developed neutral founts. UV inks behave differently from conventional inks, so we created UV-specific solutions. Soft water, hard water, brush dampening, turbo dampening, NBR rollers, EPDM rollers, old plates, reused plates, drying issues on semi-absorbent substrates—each challenge demands a different answer.
              </p>
              <p>
                That is why our products are not born only in the lab. They are shaped by real pressroom problems, long observation, stubborn trials, and the simple belief that a printer's problem deserves a thoughtful solution.
              </p>
              <p className="italic text-[#004B8D] font-medium border-l-4 border-[#00B8D9] pl-4">
                "A purchase order makes us happy. But a printer's relieved smile after a difficult job runs smoothly—that is what truly makes our day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Falcon Section (HTML/CSS implementation of infographic) */}
      <section className="bg-slate-50 px-6 py-16 md:px-10 lg:py-24 border-y border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B] mb-3">
              Why Choose Falcon
            </p>
            <h2 className="text-3xl font-extrabold text-[#06294A] md:text-5xl">
              The Falcon Advantage
            </h2>
            <div className="mt-4 h-1 w-24 bg-[#4B8B2B] mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#004B8D]/30 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#004B8D]/10 text-[#004B8D] mx-auto mb-6">
                <FlaskConical className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                Technical Expertise
              </h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                30+ years of hands-on experience in printing technology.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#00B8D9]/30 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00B8D9]/10 text-[#00B8D9] mx-auto mb-6">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                Strong R & D
              </h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Continuous innovation to solve real pressroom challenges.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#4B8B2B]/30 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4B8B2B]/10 text-[#4B8B2B] mx-auto mb-6">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                Quality Assurance
              </h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Strict quality control ensures consistent performance every time.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#F58220]/30 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F58220]/10 text-[#F58220] mx-auto mb-6">
                <Cog className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                Modern Facility
              </h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Advanced manufacturing with lean processes and efficient systems.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#004B8D]/30 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#004B8D]/10 text-[#004B8D] mx-auto mb-6">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                Wide Product Range
              </h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Complete range of pressroom chemicals under one roof.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#4B8B2B]/30 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4B8B2B]/10 text-[#4B8B2B] mx-auto mb-6">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-[#06294A] uppercase tracking-wide">
                Trusted By Printers
              </h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Built on reliability, integrity, and long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Infographics Section */}
      <section className="bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Vision Card */}
            <div className="relative group overflow-hidden rounded-xl bg-slate-50 border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-[#004B8D]/35">
              <div className="aspect-[1469/809] w-full overflow-hidden">
                <img 
                  src="/about/vision.jpg" 
                  alt="Falcon Vision: Creating Value Beyond Chemistry infographic" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
                />
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative group overflow-hidden rounded-xl bg-slate-50 border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-[#4B8B2B]/35">
              <div className="aspect-[1457/813] w-full overflow-hidden">
                <img 
                  src="/about/mission.jpg" 
                  alt="Falcon Mission: Reducing Carbon Footprints. Raising Standards. infographic" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
                />
              </div>
            </div>
          </div>

          {/* Commitment Banner Strip */}
          <div className="mt-16 text-center max-w-3xl mx-auto px-4 border-t border-slate-100 pt-10">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#4B8B2B]">
              Our Dedication
            </p>
            <h3 className="mt-3 text-lg md:text-2xl font-bold text-[#06294A] leading-relaxed uppercase tracking-wider">
              We are committed to delivering performance, safety & sustainability.
            </h3>
            <p className="mt-4 text-base md:text-lg font-semibold text-[#004B8D]">
              Better Chemistry. <span className="text-[#4B8B2B]">Better Results.</span> One Promise.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
