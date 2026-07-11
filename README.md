# Premium Freelance Portfolio Website (SaaS-Style)

This is a premium, high-converting freelance portfolio website styled after top-tier tech companies (Apple, Vercel, Stripe, Linear). Built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, it is highly optimized for page-load speeds, responsive layouts, Core Web Vitals, and modern search engine indexing.

---

## 🚀 Key Features

- **Apple-Level Polish:** Immersive scroll reveals, responsive typography, and sub-pixel alignment.
- **Vercel-Level Speed:** Static page generations, optimized metadata, and layout stability.
- **Stripe-Level Spacing:** A minimalist, grid-based luxury aesthetic using CSS glassmorphism.
- **Premium Loading Screen:** Smooth animated progress bar with sweep exits.
- **Dynamic Stats Counter:** Real-time numerical count-ups when scrolled into view.
- **Interactive Projects Showcase:** Toggleable project case studies with inline modal drawers.
- **Dynamic Filtering Tech Stack:** Interactive grid that dynamically filters expertise tiers.
- **High-Converting Contact Form:** Form validation with accessible alerts, loading states, and success indicators.
- **Dynamic SEO System:** Dynamic sitemaps, schema mappings (JSON-LD), and OpenGraph cards.
- **Dark/Light Mode:** Seamless theme transitions matching system preferences.

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion (v12)
- **Icons:** Lucide React (v1)

---

## 📁 Directory Structure

```
├── app/                  # Next.js App Router (Layouts, Pages, SEO files)
│   ├── favicon.ico
│   ├── globals.css       # Tailwind v4 configuration, color tokens, animations
│   ├── layout.tsx        # Main layouts, Google fonts, dynamic metadata
│   ├── page.tsx          # Homepage assembler
│   ├── robots.ts         # Dynamic robots.txt generator
│   └── sitemap.ts        # Dynamic sitemap.xml generator
├── components/           # Generic reusable UI components
│   ├── icons.tsx         # Custom brand SVGs (Github, Linkedin, Twitter)
│   ├── ThemeProvider.tsx # Client-side themes provider (next-themes)
│   └── ThemeToggle.tsx   # Premium theme switcher button
├── config/               # Website configuration files
│   └── site.ts           # Site metadata, primary links, and navigation items
├── data/                 # Content databases
│   └── portfolio.ts      # Services, stats, project context, skills, FAQs
├── sections/             # Individual sections of the homepage
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Stats.tsx
│   └── TechStack.tsx
├── public/               # Public assets (CV, images, manifest)
├── package.json
└── tsconfig.json
```

---

## ⚙️ How to Customize

No need to modify core React code! All content is structured cleanly inside two configuration files:

1. **General Site Info & Links:** Edit [config/site.ts](file:///c:/Users/admin/OneDrive/文件/FreeLancing/config/site.ts) to update:
   - Your name
   - SEO metadata description and search keywords
   - Resume and social media URLs (GitHub, LinkedIn, Twitter)
   - Email address

2. **Portfolio Data, Projects & History:** Edit [data/portfolio.ts](file:///c:/Users/admin/OneDrive/文件/FreeLancing/data/portfolio.ts) to customize:
   - Homepage tagline and bio paragraph
   - Numerical counters (Years of Experience, Projects Delivered)
   - Services offered, along with bullet lists of benefits
   - Projects list (each project features details for **Challenges**, **Solutions**, and **Results**)
   - Skills categorized lists
   - Interactive tech stack grid items
   - Professional experience timeline (roles, companies, bullets)
   - FAQs questions and answers

---

## 💻 Local Development

### Prerequisites
- Node.js 20+
- npm (Node Package Manager)

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Verify Production Build
```bash
npm run build
```

---

## 🌐 Deployment to Vercel

This project is fully structured for zero-configuration deployments on Vercel:

1. Push your codebase to a GitHub, GitLab, or Bitbucket repository.
2. Log into your [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project** and import your repository.
5. Once complete, hook up your custom domain. SSL certificates and Edge caching will configure automatically.

---

## 📄 Resume Document Configuration

The portfolio features centralized configuration to manage and serve your professional resume.

* **Resume Filename:** `Uma_FreeLancer.pdf`
* **Local Location:** `public/Uma_FreeLancer.pdf`
* **Public URL Path:** `/Uma_FreeLancer.pdf`
* **Local Test URL:** `http://localhost:3000/Uma_FreeLancer.pdf`
* **Production URL:** `https://uma-personal-portfolio.vercel.app/Uma_FreeLancer.pdf`

### How to Replace the Resume:
To update your resume later:
1. Replace the existing file at `public/Uma_FreeLancer.pdf` with your new PDF document.
2. **Important Note:** The replacement file must keep the exact same filename (`Uma_FreeLancer.pdf`) unless you also update the `resumeUrl` parameter inside [config/site.ts](file:///c:/Users/admin/OneDrive/文件/FreeLancing/config/site.ts).
