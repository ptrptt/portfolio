# Portfolio UI/UX Redesign Specification: Clean QA Engineering Grid & Precision

## 1. Executive Summary & Core Rules
This specification outlines the visual redesign of Phattharaphon Tangtaeng's Software Tester & QA Engineer Portfolio website. The goal is to transform the visual presentation into a highly professional, modern, precise, and polished developer/QA portfolio aesthetic while strictly adhering to content immutability rules.

### Strict Content Guardrails (100% Preserved)
- **Zero Content Alterations**: All text strings, names, profile images (`/profile.jpg`, `/abot.jpg`), logos (`/Logo_of_University_of_Phayao.svg`, `/obaclogo.png`), education records, skills arrays, project descriptions, contact details, links, and PDF assets remain 100% identical.
- **Zero Data Structure Modifications**: `src/data/index.ts` content remains untouchable in terms of copy and information.
- **Functional Parity**: All navigation IDs (`#hero`, `#about`, `#education`, `#skills`, `#projects`, `#contact`), download links, smooth scrolling, and external links remain intact.

---

## 2. Design System & Visual Identity (Option 1)

### Color Palette
- **Primary Canvas Background**: Clean Slate background (`#F8FAFC` / `bg-slate-50`)
- **Card Backgrounds**: Pure White (`#FFFFFF`) with subtle slate borders (`border-slate-200/80`)
- **Primary Brand Colors**: Blue `#2563EB` (`blue-600`) to Sky Blue `#60A5FA` (`blue-400`)
- **Accent Gradients**: Subtle background meshes (`from-blue-50/60 via-slate-50 to-indigo-50/40`)
- **Text Color Hierarchy**:
  - Main Headings / Titles: Deep Slate (`#0F172A` / `slate-900`)
  - Body Text: Medium Slate (`#475569` / `slate-600`)
  - Secondary / Captions: Soft Slate (`#64748B` / `slate-500`)
- **Status Indicators (QA Precision Accent)**:
  - Green pulse indicator (`#22C55E` / `emerald-500`) for availability status
  - Blue checkmark icon bullets for QA emphasis

### Typography & Spacing
- **Font**: Inter font (`--font-inter`, sans-serif)
- **Tracking & Leading**: `tracking-tight` for titles; `leading-relaxed` for paragraphs
- **Section Padding**: Consistent vertical spacing (`py-20 lg:py-24`) across section containers
- **Border Radius**: Refined curves (`rounded-xl` for interactive elements, `rounded-2xl` for section cards, `rounded-3xl` for image presentation frames)

---

## 3. Component-by-Component Redesign Specifications

### A. Navbar (`src/components/Navbar.tsx`)
- **Container**: Floating top navbar with subtle glassmorphic backdrop (`bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm`).
- **Logo**: Styled `PT.` logo with a subtle glowing dot accent.
- **Nav Links**: Rounded-full buttons with smooth animated background pill (`motion.span`) for active section state.
- **Resume CTA**: Sleek primary gradient button with icon slide hover transition.

### B. Hero Section (`src/components/HeroSection.tsx`)
- **Background Layer**: Clean technical dot-grid SVG mesh background combined with subtle blur glows (`from-blue-100/50 to-sky-100/40 opacity-60 blur-3xl`).
- **Availability Status Badge**: Clean QA status pill above title: `● OPEN TO INTERNSHIP` with pulsing emerald dot.
- **Typography**: Responsive scale for name headline (`Hello, I'm Phattharaphon Tangtaeng`) with blue gradient text highlight.
- **CTA Buttons**:
  - `Download CV`: Primary gradient pill button (`bg-gradient-to-r from-[#2563EB] to-[#60A5FA]`) with subtle hover shadow glow and icon down-slide.
  - `Contact Me`: Secondary border button (`border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50/80`) with smooth focus ring.
- **Profile Image Container**:
  - Double-framed precision card (`rounded-3xl border border-slate-200/80 bg-white p-2.5 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300`).
  - Preserved photo (`/profile.jpg`) with precision aspect ratio and subtle corner viewport accents.

### C. About Section (`src/components/AboutSection.tsx`)
- **Layout**: Balanced 2-column grid.
- **Left Column (Text)**: Preserved introduction text rendered in clean typography with enhanced line-height (`leading-relaxed text-slate-600`).
- **Right Column (Photo)**: Photo (`/abot.jpg`) encased in matching precision double-frame with subtle shadow and border styling.

### D. Education Section (`src/components/EducationSection.tsx`)
- **Timeline**: Connected vertical timeline line (`bg-gradient-to-b from-blue-500/40 via-blue-400/30 to-transparent`) with animated gradient node dots.
- **Cards**: White card containers with `border border-slate-200/80`, logo image framing (`/Logo_of_University_of_Phayao.svg`, `/obaclogo.png`), current status badge (emerald pill), and GPA highlight pill (`GPA: 2.50` / `GPA: 3.66`).

### E. Skills Section (`src/components/SkillsSection.tsx`)
- **Layout**: Grid of skill category cards (`Testing Skills`, `Tools`, `Languages`, `Concepts`, `Soft Skills`).
- **Category Card Styling**: Top subtle color accent line, soft icon background container, and interactive skill pills (`px-3 py-1 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200`).

### F. Projects Section (`src/components/ProjectsSection.tsx`)
- **Cards**: Project cards with subtle hover lift (`hover:-translate-y-1.5 transition-transform duration-300 shadow-sm hover:shadow-xl hover:border-blue-200`).
- **Image Header**: Project preview box with gradient backgrounds (`from-orange-400 to-rose-500`, `from-blue-400 to-indigo-500`, etc.), glass icon badge, and category subtitle pill.
- **Action Buttons**: GitHub link button and Live Demo gradient button with hover micro-animations.

### G. Contact Section & Footer (`src/components/ContactSection.tsx`, `src/components/Footer.tsx`)
- **Contact Grid**: 2x2 responsive grid of contact cards (Email, GitHub, LinkedIn, Phone) with hover border glow and scale transitions.
- **Send Message CTA**: Prominent email CTA button with paper airplane hover rotation and shadow glow.
- **Footer**: Clean footer with top border, copyright notice, and floating back-to-top button.

---

## 4. Verification & Testing Criteria
- **Zero Content Regression**: Verify that every word, image, and link is 100% preserved.
- **Browser Visual Verification**: Run `npm run dev`, inspect the website across viewport breakpoints (Mobile 375px, Tablet 768px, Desktop 1280px).
- **Console & Build Verification**: Ensure clean build with zero TypeScript or linting errors.
