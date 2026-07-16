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
      <section className="w-full overflow-hidden bg-[#06294A] pt-16 lg:pt-[76px]">
        <img 
          src="/about/hero.jpg" 
          alt="Falcon modern agile technically driven team" 
          className="block h-auto w-full object-contain" 
        />
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
      <section className="overflow-visible bg-slate-50 px-6 py-12 md:px-10 md:py-16 lg:py-24 border-y border-slate-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch xl:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column: Advantages */}
          <div className="space-y-8 lg:max-w-[620px] lg:space-y-12 lg:pt-4 xl:space-y-16">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-widest text-[#004B8D] mb-3">
                Our Operations
              </p>
              <h2 className="text-3xl font-extrabold text-[#06294A] md:text-4xl lg:text-5xl lg:leading-tight">
                Core Strengths & Manufacturing Advantages
              </h2>
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-white/80 bg-white p-4 shadow-[0_18px_45px_rgba(6,41,74,0.12)] sm:min-h-[360px] md:min-h-[520px] lg:hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B8D9]/10 via-transparent to-[#4B8B2B]/10" />
              <img 
                src="/about/warehouse.png" 
                alt="Falcon Nashik manufacturing facility and warehouse" 
                className="relative h-full w-full object-contain object-center" 
              />
            </div>

            <div className="space-y-5 md:space-y-6 lg:space-y-10 xl:space-y-12">
              {/* Technical Expertise */}
              <div className="flex gap-5 items-start bg-white p-5 md:p-6 rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md hover:border-[#004B8D]/30 lg:rounded-2xl lg:p-7 lg:shadow-[0_18px_45px_rgba(6,41,74,0.06)]">
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
              <div className="flex gap-5 items-start bg-white p-5 md:p-6 rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md hover:border-[#00B8D9]/30 lg:rounded-2xl lg:p-7 lg:shadow-[0_18px_45px_rgba(6,41,74,0.06)]">
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
              <div className="flex gap-5 items-start bg-white p-5 md:p-6 rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md hover:border-[#4B8B2B]/30 lg:rounded-2xl lg:p-7 lg:shadow-[0_18px_45px_rgba(6,41,74,0.06)]">
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
          <div className="relative hidden lg:block lg:min-h-0 lg:self-stretch xl:-mr-16">
            <div className="absolute inset-0 lg:sticky lg:inset-auto lg:top-0 lg:h-[calc(100vh-7rem)] lg:min-h-[680px]">
              <img 
                src="/about/warehouse.png" 
                alt="Falcon Nashik manufacturing facility and warehouse" 
                className="absolute right-0 top-0 h-full w-full origin-top-right object-contain object-right-top lg:scale-110 xl:scale-125" 
              />
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
