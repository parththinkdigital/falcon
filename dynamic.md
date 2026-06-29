# Dynamic Content Audit — Falcon Chemicals Frontend

> **Status**: The frontend is a well-designed static shell. All content is hardcoded. The backend API (Express + Sequelize + MySQL) is fully built but completely disconnected. No page imports `lib/api.js`. Admin CRUD pages are empty placeholders.  
> **Goal**: Map every piece of static content to its dynamic source.

## Legend

| Icon | Meaning |
|---|---|
| **🔴 SHOULD** | Core functionality — must come from API/DB for the app to work as a real product |
| **🟡 COULD** | Nice-to-have / CMS-managed content — can be hardcoded initially but ideal to manage |
| **🟢 OK** | Already dynamic (no action needed) |

---


## 2. Home Page (`app/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **4 Category cards** | Hardcoded objects | **🔴 SHOULD** | `GET /api/categories?featured=true` |
| 2 | **3 Testimonials** (Marcus Weber, Sarah Chen, James Okafor) | Hardcoded objects | **🔴 SHOULD** | `GET /api/testimonials` (new model) or hardcoded section in settings |
| 3 | **6 Client logos** (Precision Print Group, Crown Litho, etc.) | Hardcoded initials only | **🔴 SHOULD** | `GET /api/clients` (new model) or `GET /api/gallery?category=clients` |
| 4 | Stats: `27+ Years`, `50+ Countries`, `120+ Formulations` | Hardcoded numbers | **🔴 COULD** | Admin → Company info → `stats` JSON field |

---

## 3. About Page (`app/about/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **4 Stats**: 15+ Years, 500+ Clients, 50+ Countries, 200+ Formulations | Hardcoded | **🔴 COULD** | Admin → About page settings → `stats[]` |
| 2 | **10 Client logos** (PrintCorp, OffsetPro, PressWorks, etc.) | Hardcoded initials | **🔴 SHOULD** | `GET /api/clients` or gallery by category |
---

## 4. Products Page (`app/products/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **All product categories** | From `lib/products-data.js` | **🔴 SHOULD** | `GET /api/categories` |
| 2| Category descriptions | Hardcoded in `products-data.js` | **🔴 SHOULD** | `GET /api/categories` → `description` |
| 3 | Category feature lists | Hardcoded arrays | **🔴 SHOULD** | `GET /api/categories` → JSON `features` field |
| 6 | Category product counts | Hardcoded | **🔴 SHOULD** | Computed from `GET /api/products?categoryId=X` count |
---

## 5. Products Category Page (`app/products/[category]/page.jsx`) + CRUD for the Product Categories

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **All products in category** | From `lib/products-data.js` | **🔴 SHOULD** | `GET /api/products?categorySlug={slug}` |
| 2 | Filter tabs: `All`, `Fountain Solutions`, etc. | Hardcoded array | **🔴 SHOULD** | `GET /api/categories` → filter options |
| 3 | Product images | SVG placeholder jugs | **🔴 SHOULD** | `GET /api/products` → `images[0]` |
| 4 | Product code/name/description | Hardcoded | **🔴 SHOULD** | `GET /api/products` |
| 5 | Product features | Hardcoded | **🔴 SHOULD** | `GET /api/products` → `features` (JSON) |
| 6 | Product specifications | Hardcoded | **🔴 SHOULD** | `GET /api/products` → `specifications` (JSON) |
| 7 | "View Details" links | Hardcoded href | **🔴 SHOULD** | Dynamic slug-based routing |

---

## 6. Product Detail Page (`app/products/[category]/[slug]/page.jsx`) + CRUD for the Product Details

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **Single product data** | From `lib/products-data.js` + AR-7500 override | **🔴 SHOULD** | `GET /api/products/{slug}` |
| 2 | Product image | SVG placeholder jug | **🔴 SHOULD** | `GET /api/products` → `images[0]` |
| 3 | Features list | Hardcoded array | **🔴 SHOULD** | `GET /api/products` → `features` |
| 4 | Specifications table | Hardcoded label/value pairs | **🔴 SHOULD** | `GET /api/products` → `specifications` |
| 5 | Action links: "View Technical Specification" is PDF , "View Safety Datasheet" is a pdf but needs a FORM fill, "Request a Sample leads to a WP number with product related msg" | `href="#"` | **🔴 SHOULD** | `GET /api/products` → `techSpecUrl`, `safetySheetUrl` |
| 6 | AR-7500 special description override | Hardcoded if/else | **🔴 SHOULD** | Consistent data from API (remove special case) |

---

## 10. Blog Page (`app/blog/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **All 9 blog posts** | **Completely hardcoded** | **🔴 SHOULD** | `GET /api/posts?type=article` |
| 2 | **Featured post** | Hardcoded object | **🔴 SHOULD** | `GET /api/posts?featured=true&limit=1` |
| 3 | **5 Category tabs** (All Posts, Industry News, Technical, Sustainability, Company) | Hardcoded array | **🔴 SHOULD** | `GET /api/posts` → distinct categories |
| 4 | **All post images** | `picsum.photos/seed/...` | **🔴 SHOULD** | `GET /api/posts` → `featuredImage` |
| 5 | Author names (Dr. Wei Chen, etc.) | Hardcoded strings | **🔴 SHOULD** | `GET /api/posts` → `author` |
| 6 | Publish dates | Hardcoded strings | **🔴 SHOULD** | `GET /api/posts` → `publishedAt` |
| 7 | Read time | Hardcoded strings | **🟡 COULD** | Calculated from `content.length / 200` |
| 8 | `PER_PAGE = 6` pagination | Hardcoded constant | **🟡 COULD** | Configurable: admin → settings → `postsPerPage` |
| 9 | Post hrefs | Hardcoded `/blog/...` paths | **🔴 SHOULD** | Dynamic `href="/blog/{slug}"` |
| 10 | Hero heading: `"Blog"` + subtitle | Hardcoded | **🟡 COULD** | Admin → Blog page settings |
| 11 | Newsletter section | Hardcoded heading/copy | **🟡 COULD** | Admin → Blog page settings |

---

## 11. Knowledge Center Page (`app/knowledge-center/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **All 6 articles/guides/resources** | **Completely hardcoded** | **🔴 SHOULD** | `GET /api/posts` (mixed types) |
| 2 | **Featured resource** | Hardcoded guide | **🔴 SHOULD** | `GET /api/posts?featured=true&type=guide` |
| 3 | **5 Filter tabs** (All, Articles, Guides, Case Studies, Videos) | Hardcoded array | **🔴 SHOULD** | Derived from `GET /api/posts` → distinct `type` values |
| 4 | **All images** | `picsum.photos/seed/...` | **🔴 SHOULD** | `GET /api/posts` → `featuredImage` |
| 5 | Author/date/category per resource | Hardcoded | **🔴 SHOULD** | `GET /api/posts` |
| 6 | `PER_PAGE = 6` | Hardcoded constant | **🟡 COULD** | Configurable: admin → settings |
| 7 | Resource hrefs | Hardcoded paths | **🔴 SHOULD** | Dynamic `/knowledge-center/{slug}` |
| 8 | Hero heading/subtitle | Hardcoded | **🟡 COULD** | Admin → Knowledge Center settings |
| 9 | Newsletter section | Hardcoded | **🟡 COULD** | Admin → Knowledge Center settings |

---

## 12. Gallery Page (`app/gallery/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **All 12 gallery items** | **Completely hardcoded** | **🔴 SHOULD** | `GET /api/gallery` |
| 2 | **All images** | `picsum.photos/seed/...` | **🔴 SHOULD** | `GET /api/gallery` → `url` / `thumbnail` |
| 3 | Item titles/subtitles | Hardcoded | **🔴 SHOULD** | `GET /api/gallery` → `title` / `description` |
| 4 | 3 Tabs (All, Photos, Videos) | Hardcoded array | **🟡 COULD** | Auto-derived from `GET /api/gallery` → distinct `type` values |
| 5 | Aspect ratios | Hardcoded | **🟡 COULD** | Auto from image dimensions |
| 6 | Hero heading/subtitle | Hardcoded | **🟡 COULD** | Admin → Gallery page settings |

---

## 13. Contact Page (`app/contact/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1| **Form submission** | No actual API call | **🔴 SHOULD** | `POST /api/inquiries` (backend already has this route!) |

---

## 14. Header (`components/layouts/Header.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 2 | **Mega-menu product categories** | From `products-data.js` | **🔴 SHOULD** | `GET /api/categories` |
| 3 | `"24 products across 5 categories"` | Hardcoded count | **🔴 SHOULD** | Computed from `GET /api/products` + `GET /api/categories` |
| 4 | Logo image | `/LOGO WITH TL.jpg` | **🟡 COULD** | Admin → Branding → `logo` |

---


## 16. Admin Pages

### Admin Dashboard (`app/admin/dashboard/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **48 Total Products** | Hardcoded number | **🔴 SHOULD** | `GET /api/products` → count |
| 2 | **24 Blog Posts** | Hardcoded number | **🔴 SHOULD** | `GET /api/posts` → count |
| 3 | **12 New Inquiries** | Hardcoded number | **🔴 SHOULD** | `GET /api/inquiries?status=new` → count |
| 4 | **2,847 Page Views** | Hardcoded number | **🟡 COULD** | Analytics integration or future |
| 5 | Change percentages (+12%, +8%, etc.) | Hardcoded | **🔴 SHOULD** | Calculated from period-over-period counts |
| 6 | All stat icons/labels | Hardcoded | **🟡 COULD** | Admin → Dashboard settings |

### Admin Login (`app/admin/login/page.jsx`)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **Authentication** | Redirects without validation | **🔴 SHOULD** | `POST /api/auth/login` (backend exists!) |
| 2 | Error messages | Hardcoded | **🟡 COULD** | From API response |

### Admin CRUD Pages (Products, Posts, Gallery, Inquiries, Settings)

| # | Item | Current | Priority | Dynamic Source |
|---|---|---|---|---|
| 1 | **Products table** | Empty placeholder | **🔴 SHOULD** | `GET /api/products`, `POST/PUT/DELETE /api/products/:id` |
| 2 | **Posts table** | Empty placeholder | **🔴 SHOULD** | `GET /api/posts`, `POST/PUT/DELETE /api/posts/:id` |
| 3 | **Gallery table** | Empty placeholder | **🔴 SHOULD** | `GET /api/gallery`, `POST/DELETE /api/gallery/:id` |
| 4 | **Inquiries table** | Empty placeholder | **🔴 SHOULD** | `GET /api/inquiries`, `PUT/DELETE /api/inquiries/:id` |
| 5 | **Settings page** | Empty placeholder | **🔴 SHOULD** | `GET/PUT /api/settings` (needs new endpoint) |
| 6 | **Add/Edit forms** (products, posts) | Don't exist (404) | **🔴 SHOULD** | Build form pages + connect to API |

---

## 17. Shared / Utility

| Item | Current | Priority | Dynamic Source |
|---|---|---|---|
| `lib/products-data.js` — All 6 categories, 24 products | **Entirely hardcoded** | **🔴 SHOULD** | Delete or deprecate this file entirely. Replace with API calls. |
| `components/products/ProductCard.jsx` | **Never imported anywhere** | **🟡 COULD** | Make it reusable by importing in product list pages |
| `lib/api.js` | **Never imported anywhere** | **🔴 SHOULD** | Start importing in every page that needs data |
| Hero video (`hero-bg.mp4`) | Static file | **🟡 COULD** | Admin → Branding → hero video upload |
| Banner images in `public/banners/` | Static files | **🔴 SHOULD** | Upload/manage via admin gallery |
| `about-us-img.jpg` | Static file, **never used** | **🟡 COULD** | Use or remove |

---

## 18. Backend Models That Need No Changes

These Sequelize models already match the frontend data needs:

| Model | Endpoints | Frontend Data Matches |
|---|---|---|
| `Product` | `GET /api/products`, `GET /api/products/:slug` | name, slug, sku, description, images, features (JSON), specifications (JSON) ✅ |
| `Category` | `GET /api/categories`, `GET /api/categories/:slug` | name, slug, description, image, parentId ✅ |
| `Post` | `GET /api/posts`, `GET /api/posts/:slug` | title, slug, excerpt, content, type, category, author, featuredImage, isFeatured ✅ |
| `Gallery` | `GET /api/gallery` | title, description, type, url, thumbnail, category ✅ |
| `Inquiry` | `POST /api/inquiries` | name, company, email, phone, message, productInterest ✅ |
| `Subscriber` | `POST /api/newsletter` | email ✅ |

**No new backend models are strictly required** — the existing schema already supports all the "SHOULD" dynamic data needs.

---

## 19. New Backend Models Needed (Nice-to-Have)

| Model | Purpose | Used By |
|---|---|---|
| `Testimonial` | Client testimonials with name, role, company, quote, avatar | Home page |
| `Client` | Client/customer logos with name, logo URL, isFeatured | Home page, About page |
| `Solution` | Rich solution pages with overview, benefits, specs, steps, stats | Solutions detail pages |
| `Industry` | Industry categories with description, image, gradient | Industries page |
| `Location` | Office locations with address, phone, email, map coordinates | Contact page |
| `Setting` | Key-value store for site-wide settings (site title, description, contact info, social links, hero text, etc.) | All pages, layout |

---

## 20. Implementation Priority Order

```
Phase 1 — Connect the backbone
  ├── Import & use api.js in pages (stop using products-data.js)
  ├── Wire admin login to POST /api/auth/login
  ├── Wire contact form to POST /api/inquiries
  ├── Wire newsletter to POST /api/newsletter
  └── Wire products/categories pages to GET /api/products and GET /api/categories

Phase 2 — Content pages go live
  ├── Wire blog page to GET /api/posts
  ├── Wire knowledge center to GET /api/posts (with type filter)
  ├── Wire gallery page to GET /api/gallery
  └── Build blog/[slug] and knowledge-center/[slug] detail pages

Phase 3 — Admin CRUD
  ├── Build product create/edit forms
  ├── Build post create/edit forms (rich text editor)
  ├── Build gallery upload + management
  ├── Build inquiry management (read/reply/close)
  └── Build settings page (company info, hero text, etc.)

Phase 4 — Extended content & polish
  ├── Build Solution model + admin UI
  ├── Build Testimonial model + admin UI
  ├── Build Client model + admin UI
  ├── Build Industry model + admin UI
  ├── Build Location model + admin UI
  ├── Build navigation management
  ├── Add dynamic hero/meta tags from settings
  └── Resolve conflicting contact info (footer vs contact page)
```
