````md
# Next.js + Tailwind Design Prompt

Build a responsive landing page in **Next.js + Tailwind CSS** for **Falcon Pressroom Solutions**, a B2B pressroom chemistry company.

Use only:
- Next.js
- React
- Tailwind CSS
- lucide-react icons

No separate CSS file except Tailwind base setup.

---

## Page Theme

Use this color palette through Tailwind arbitrary values:

```tsx
navy: #06294A
blue: #004B8D
cyan: #00B8D9
green: #4B8B2B
orange: #F58220
light: #F7FAFC
text: #071F3D
````

Use a clean corporate font like `Inter` or `Montserrat`.

---

## Page Structure

Create one page with these sections:

1. Hero
2. Exhibition Strip
3. Intro Section
4. Feature Cards
5. Solutions Product Banner
6. Trust Section
7. Footer

---

## Component Structure

```txt
/app/page.tsx
/components/Hero.tsx
/components/ExhibitionStrip.tsx
/components/IntroSection.tsx
/components/FeatureCards.tsx
/components/ProductBanner.tsx
/components/TrustSection.tsx
/components/Footer.tsx
```

---

# 1. Hero Section

Create a full-width hero section.

Use a lab background image:

```tsx
/images/lab-hero.jpg
```

Use Tailwind gradient overlay:

```tsx
<section className="relative min-h-[620px] overflow-hidden bg-cover bg-center">
  <div className="absolute inset-0 bg-gradient-to-r from-[#031E37]/95 via-[#031E37]/65 to-transparent" />
</section>
```

Place the content on the left.

```tsx
<h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
  Pressroom Chemistry...
  <span className="block text-[#00B8D9]">Driven by Passion.</span>
</h1>
```

Paragraph:

```tsx
<p className="mt-6 max-w-md text-sm md:text-base leading-7 text-white/85">
  At Falcon, we don't just manufacture pressroom chemicals — we create solutions
  for better printing. Our purpose is to help customers overcome their day-to-day
  challenges on the print shopfloor.
</p>
```

Buttons:

```tsx
<div className="mt-8 flex gap-4">
  <button className="bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">
    Learn More About Us →
  </button>
  <button className="border border-white/40 px-6 py-3 text-sm font-bold text-white">
    Explore Our Chemistry
  </button>
</div>
```

Place logo top-right:

```tsx
<div className="absolute right-10 top-8 text-right">
  <div className="text-4xl font-extrabold text-[#F58220]">Falcon</div>
  <div className="text-xs font-semibold text-white">Chemistry For Better Printing</div>
</div>
```

---

# 2. Exhibition Strip

```tsx
<section className="grid grid-cols-1 md:grid-cols-[360px_1fr]">
  <div className="bg-white p-4">
    <div className="border border-black p-3 text-black">
      <p className="text-xs font-bold">THE 10TH ALL IN PRINT CHINA</p>
      <p className="text-3xl font-extrabold text-red-600">全印展</p>
      <p className="text-xs">China International Exhibition for All Printing Technology & Equipment</p>
    </div>
  </div>

  <div className="flex items-center bg-[#004B8D] px-8 py-6">
    <h2 className="text-2xl md:text-5xl font-medium text-white">
      Visit Us in HALL N1 / BOOTH B-453
    </h2>
  </div>
</section>
```

---

# 3. Intro Section

```tsx
<section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:px-10">
  <div>
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#071F3D]">
      Because <br />
      We Understand <br />
      <span className="text-[#004B8D]">Printing Technology,</span>
      <br /><br />
      We Create <br />
      <span className="text-[#4B8B2B]">Better Pressroom Chemistry</span>
    </h2>
  </div>

  <div className="border-l-4 border-[#004B8D] pl-8">
    <p className="font-bold leading-7 text-[#004B8D]">
      We believe the most effective printing chemicals can be formulated by people
      who understand the printing press as deeply as they understand the chemistry
      behind it — and we qualify well for this.
    </p>

    <p className="mt-6 leading-7 text-slate-700">
      From our 8,000 sq. ft. facility in Nashik, near Mumbai, we can ship reliably
      worldwide, from a single pallet to a full container load.
    </p>

    <button className="mt-8 bg-[#4B8B2B] px-6 py-3 text-sm font-bold text-white">
      Learn More About Us...
    </button>
  </div>
</section>
```

---

# 4. Feature Cards

Use three poster cards.

```tsx
const cards = [
  {
    title: "TECHNICAL EXPERTISE",
    image: "/images/technical-expertise.jpg",
  },
  {
    title: "BETTER VALUE",
    image: "/images/better-value.jpg",
  },
  {
    title: "STRATEGIC LOCATION",
    image: "/images/strategic-location.jpg",
  },
];
```

Component:

```tsx
<section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
  <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
    {cards.map((card) => (
      <div key={card.title}>
        <div className="overflow-hidden border border-slate-300 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
          <img src={card.image} alt={card.title} className="h-auto w-full object-cover" />
        </div>
        <p className="mt-4 text-sm font-medium text-[#071F3D]">Read more &gt;&gt;</p>
      </div>
    ))}
  </div>
</section>
```

---

# 5. Solutions Heading

```tsx
<section className="px-6 pb-4 text-center">
  <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#004B8D]">
    Solutions We Create...
  </h2>
</section>
```

---

# 6. Product Banner

Use background:

```tsx
/images/water-leaf-bg.jpg
```

Product bottle images:

```tsx
/images/products/fount-marshal.png
/images/products/press-command.png
/images/products/formula-1.png
/images/products/alcostop-ar.png
/images/products/af-9000.png
/images/products/af-8000.png
/images/products/rolfount-ar.png
/images/products/blu-fount.png
```

Component:

```tsx
import { Cog, Droplets, ShieldCheck, Waves, Gauge, Headphones } from "lucide-react";

const features = [
  { icon: Cog, text: "Developed by Printing Technologists" },
  { icon: Droplets, text: "IPA-Free Options Available" },
  { icon: ShieldCheck, text: "UV Compatible Solutions" },
  { icon: Waves, text: "Stable Ink-Water Balance" },
  { icon: Gauge, text: "Faster Start-ups & Cleaner Printing" },
  { icon: Headphones, text: "Expert Technical Support" },
];

const products = [
  "/images/products/fount-marshal.png",
  "/images/products/press-command.png",
  "/images/products/formula-1.png",
  "/images/products/alcostop-ar.png",
  "/images/products/af-9000.png",
  "/images/products/af-8000.png",
  "/images/products/rolfount-ar.png",
  "/images/products/blu-fount.png",
];

export default function ProductBanner() {
  return (
    <section className="relative overflow-hidden bg-[#06294A]">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/water-leaf-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031E37]/95 via-[#004B8D]/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-xl text-white">
            <p className="text-2xl font-bold">Advanced</p>

            <h2 className="mt-1 text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tight">
              Sheetfed
              <span className="block text-[#00B8D9]">Fountain Solutions</span>
            </h2>

            <div className="mt-5 h-1 w-40 bg-[#00B8D9]" />

            <p className="mt-5 font-bold">
              Tailored to Technically Suit the Dampening System Parameters
            </p>

            <p className="mt-4 text-sm leading-7 text-white/85">
              Falcon Pressroom Solutions offers a complete range of advanced fountain
              concentrates formulated to suit various types of dampening systems.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-4 md:grid-cols-8">
            {products.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Falcon product"
                className="mx-auto h-32 object-contain md:h-44"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-[#06294A] md:grid-cols-6">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.text}
              className="flex items-center gap-3 border-r border-white/10 px-4 py-5 text-white"
            >
              <Icon className="h-8 w-8 text-[#00B8D9]" />
              <p className="text-xs font-bold uppercase leading-tight">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

---

# 7. Trust Section

```tsx
<section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
  <p className="text-sm font-extrabold uppercase tracking-widest text-[#4B8B2B]">
    Why Industries & Channel Partners Choose Us
  </p>

  <h2 className="mt-5 max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight text-[#071F3D]">
    The Difference is in the{" "}
    <span className="text-[#4B8B2B]">Formulation</span>
    <br />
    and <span className="text-[#4B8B2B]">Trust</span>
  </h2>

  <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
    <div>
      <h3 className="text-2xl font-extrabold text-[#004B8D]">
        For Printers & Industries
      </h3>
      <p className="mt-5 leading-8 text-slate-700">
        Our customers rely on us as trusted technical consultants. They seek our
        practical advice on process improvements and solutions to everyday pressroom
        challenges.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-extrabold text-[#004B8D]">
        For Distributors & Channel Partners
      </h3>
      <p className="mt-5 leading-8 text-slate-700">
        Our distributors and channel partners value us as a dependable business
        partner, built on transparency, ethical practices, and long-term relationships.
      </p>
    </div>
  </div>
</section>
```

---

# 8. Footer

```tsx
import { Facebook, Twitter, Linkedin, Youtube, Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        <div>
          <div className="text-5xl font-extrabold text-[#F58220]">Falcon</div>
          <p className="mt-1 text-sm font-bold text-[#004B8D]">
            Chemistry For Better Printing
          </p>

          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
              <div
                key={index}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#004B8D] text-[#004B8D]"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-extrabold text-[#071F3D]">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-[#004B8D]">
            <li>About Us</li>
            <li>Products</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-[#071F3D]">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-[#004B8D]">
            <li>Certifications</li>
            <li>Leadership</li>
            <li>Corporate Responsibility</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-[#071F3D]">Get In Touch</h4>

          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <p className="flex gap-3">
              <Phone className="h-4 w-4 text-[#004B8D]" />
              +91-9022247665 / 7972561459
            </p>

            <p className="flex gap-3">
              <Mail className="h-4 w-4 text-[#004B8D]" />
              kkd@falchem.in
            </p>

            <p className="flex gap-3">
              <Globe className="h-4 w-4 text-[#004B8D]" />
              www.falconprs.com
            </p>

            <p className="flex gap-3 leading-6">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#004B8D]" />
              Survey No.499/1B, Pimpri Road, Off. Nashik-Ch. Sambhajinagar Highway,
              Chitegaon, Taluka Niphad, District Nashik - 422003, Maharashtra State,
              India.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t pt-8 text-xs text-slate-500 md:flex-row">
        <p>© 2025 Falcon Pressroom Solutions. All rights reserved.</p>
        <p>Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
}
```

---

# 9. Final AI Agent Instruction

```txt
Generate a complete responsive Next.js + Tailwind landing page using the structure above.

Use Tailwind utility classes only.
Do not write separate CSS.
Use reusable components.
Use lucide-react for icons.
Use images from /public/images.
Keep the design close to the provided Falcon reference:
large image-led hero, dark navy overlay, exhibition strip, white intro section,
three technical poster cards, blue “Solutions We Create...” title,
large product banner with bottles, trust section, and clean footer.

Make the layout fully responsive for mobile, tablet, and desktop.
```

```
```