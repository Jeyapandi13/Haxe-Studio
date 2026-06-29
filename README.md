# Haxe-Studio

> A premium, cinematic cybersecurity education website built with React, Three.js, and Framer Motion. Features a fullscreen video hero background, interactive 3D crystal animations, holographic card effects, and neon-glowing UI throughout.

---

## 🎬 Live Preview

```bash
npm run dev
# → Opens at http://localhost:5173/
```

---

## 🧬 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.x | UI framework — component-based architecture |
| **Vite** | 8.x | Blazing-fast build tool & dev server with HMR |
| **Tailwind CSS** | 4.x | Utility-first CSS framework (v4 with `@theme` and `@utility`) |
| **Three.js** | 0.185.x | 3D WebGL rendering engine for hero crystal & particles |
| **React Three Fiber** | 9.x | React renderer for Three.js (declarative 3D scenes) |
| **React Three Drei** | 10.x | Helper components for R3F (Stars, OrbitControls, etc.) |
| **Framer Motion** | 12.x | Animation library for React (page transitions, hover effects) |
| **GSAP** | 3.x | GreenSock Animation Platform (ScrollTrigger for scroll-driven animations) |
| **React Router DOM** | 7.x | Client-side routing & navigation |
| **Lucide React** | 1.x | Modern icon library (cybersecurity-themed icons) |
| **React Hook Form** | 7.x | Performant form handling (Contact & Enroll forms) |
| **React CountUp** | 6.x | Animated number counting for statistics |
| **Swiper** | 14.x | Touch-enabled slider/carousel |
| **Lenis** | 1.x | Smooth scrolling library |
| **EmailJS** | 4.x | Client-side email sending (contact forms) |
| **Oxlint** | 1.x | Fast JavaScript/TypeScript linter |

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** ≥ 18.x — [Download here](https://nodejs.org/)
- **npm** ≥ 9.x (comes with Node.js)
- **Git** (optional, for cloning)

### Step-by-Step Setup

```bash
# 1. Clone the repository (or download the ZIP)
git clone https://github.com/your-username/haxe-studio.git

# 2. Navigate into the project directory
cd haxe-studio

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173/**

---

## 🗂️ Project Folder Structure

```
Haxe Studio/
├── public/                          # Static assets served directly
│   ├── certificate.html             # HTML certificate template (iframe embed)
│   ├── favicon.jpg                  # Site favicon (JPG)
│   ├── favicon.svg                  # Site favicon (SVG)
│   ├── hero-bg.mp4                  # Cinematic video background for hero section
│   └── icons.svg                    # SVG icon sprite
│
├── src/                             # Application source code
│   ├── assets/                      # Imported assets (processed by Vite)
│   │   ├── haxe_logo.jpg            # Haxe Studio brand logo
│   │   ├── certificate.png.png      # Certificate preview image
│   │   ├── hero.png                 # Hero fallback image
│   │   ├── payment_qr.jpg           # UPI payment QR code
│   │   ├── react.svg                # React logo asset
│   │   └── vite.svg                 # Vite logo asset
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── CourseModal.jsx          # Full course detail modal overlay
│   │   ├── Footer.jsx              # Global footer with social links & glow effects
│   │   ├── HeroThree.jsx           # 3D hero scene (video bg + Three.js crystal/particles)
│   │   ├── Navbar.jsx              # Glass navigation header with animated active tabs
│   │   ├── ScrollToTop.jsx         # Utility: auto-scroll to top on route change
│   │   └── TiltCard.jsx            # Reusable 3D tilt card with mouse-tracking glow
│   │
│   ├── data/                        # Static data files
│   │   └── coursesData.js           # Course catalog (titles, prices, skills, FAQs)
│   │
│   ├── pages/                       # Route-level page components
│   │   ├── About.jsx               # About page (mission, vision, methodology, stats)
│   │   ├── Certification.jsx       # Certificate viewer & download page
│   │   ├── Contact.jsx             # Contact form + channels + operations map
│   │   ├── Courses.jsx             # Course catalog with filtering & modal detail
│   │   ├── Enroll.jsx              # Multi-step enrollment form with payment
│   │   ├── Home.jsx                # Landing page (hero, features, roadmap, FAQ, CTA)
│   │   ├── NotFound.jsx            # 404 error page with terminal-style diagnostics
│   │   ├── PrivacyPolicy.jsx       # Privacy policy legal document
│   │   └── Terms.jsx               # Terms of service legal document
│   │
│   ├── App.jsx                      # Root component with React Router setup
│   ├── App.css                      # Minimal app-level styles
│   ├── index.css                    # Global CSS: theme tokens, animations, utilities
│   └── main.jsx                     # Application entry point (React DOM render)
│
├── index.html                       # HTML entry point (Vite injects scripts here)
├── package.json                     # Dependencies, scripts, and project metadata
├── package-lock.json                # Locked dependency tree
├── vite.config.js                   # Vite configuration (React plugin)
├── .oxlintrc.json                   # Oxlint linter configuration
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

---

## 🚀 Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all project dependencies |
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint to check for code quality issues |

---

## 🎨 Design System & Cinematic Effects

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-primary` | `#070B14` | Page background (deep dark navy) |
| `--color-bg-secondary` | `#0E172A` | Section alternate background |
| `--color-primary` | `#7C3AED` | Purple accent (buttons, gradients) |
| `--color-secondary` | `#00D4FF` | Cyan accent (highlights, glows) |
| `--color-accent` | `#14F195` | Green accent (success, badges) |
| `--color-text-main` | `#F8FAFC` | Primary text color |
| `--color-text-secondary` | `#94A3B8` | Muted/secondary text |

### Typography

- **Body Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (300–800 weights)
- **Display Font**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (400–700 weights)

### Cinematic CSS Effects

| Effect | CSS Class/Utility | Description |
|--------|-------------------|-------------|
| Glass Morphism | `glass`, `glass-premium` | Frosted glass card backgrounds |
| Neon Card Glow | `neon-card` | Animated gradient border + glow on hover |
| Holographic Shimmer | `holo-shimmer` | Diagonal light sweep on hover |
| 3D Tilt | `TiltCard` component | Mouse-tracking perspective rotation |
| Glitch Text | `glitch-text` | Clip-path based text glitch flicker |
| Scanline Overlay | `cinematic-scanlines` | CRT/holographic scanline effect |
| Neon Breathing Border | `neon-border-breathe` | Pulsing glow on card borders |
| Cinematic Button | `btn-cinematic` | Scale + glow + ripple on hover |
| Input Focus Glow | `input-glow` | Cyan glow ring on form focus |
| Social Icon Pop | `social-neon` | Lift + neon shadow on hover |
| Neon Text Shadow | `.neon-text-glow` | Ambient text shadow with cyan/purple |
| Floating Icons | `icon-float` | Slow float animation on icons |
| Gradient Border | `.gradient-border-top` | Animated flowing gradient line |
| Cyber Pulse | `cyber-pulse` keyframe | Expanding ring pulse animation |

### 3D Hero Scene (Three.js)

The hero section combines a **fullscreen video background** with a **Three.js 3D scene**:

1. **Video Layer** — Cinematic cybersecurity MP4 playing fullscreen (muted, looped, autoplay)
2. **3D Canvas Layer** — Rendered on top with `mix-blend-mode: screen`:
   - **Crystal Core** — Icosahedron with emissive purple material + clearcoat
   - **Wireframe Shield** — Rotating outer wireframe sphere
   - **Holographic Rings** — Two orbiting torus geometries
   - **Interactive Particles** — 2000 particles reacting to mouse movement
   - **Grid Floor** — Cybernetic grid plane
   - **Stars** — Deep background star field
3. **Scanline Overlay** — Subtle repeating gradient for holographic feel
4. **Gradient Overlay** — Dark gradient ensuring text readability

---

## 📄 Pages Overview

### 🏠 Home (`/`)
The main landing page featuring:
- Cinematic video + 3D hero with glitch-animated title
- Feature cards with 3D tilt and holographic shimmer
- GSAP ScrollTrigger-animated learning roadmap timeline
- Popular course cards with neon hover effects
- Accordion FAQ with smooth expand/collapse
- Call-to-action section with breathing neon border

### 📚 Courses (`/courses`)
- Filterable course catalog (All / Beginner / Intermediate / Advanced / Expert)
- 3D tilt course cards with holographic shimmer
- Detailed course modal with staggered content reveals
- Pricing, skills, tools, prerequisites, and FAQs per course

### 🎓 Certification (`/certification`)
- Certificate viewer rendered in an iframe
- Download functionality for the HTML certificate
- Breathing neon border around the certificate frame

### ℹ️ About (`/about`)
- Mission & Vision in 3D tilt cards
- Offensive learning methodology timeline (4 phases)
- Animated achievement counters with glow pulse

### 📞 Contact (`/contact`)
- 4 contact channels (WhatsApp, Email, Telegram, Instagram) as tilt cards
- Operations schedule card
- Interactive map with radar ping animation
- Contact form with input glow focus effects

### 📝 Enroll (`/enroll`)
- Multi-step enrollment flow (Details → Processing → Success)
- Course selector with dynamic pricing
- 3D tilt payment method selectors (UPI / Card)
- QR code payment screen with live summary

### 🔒 Privacy Policy (`/privacy-policy`) & Terms (`/terms`)
- Staggered section reveals with floating icons
- Breathing neon document borders

### 🚫 404 Not Found
- Terminal-style diagnostic output with scanlines
- Glitch-animated "404: ACCESS DENIED" text
- Cyber-pulse animated shield icon

---

## 📁 Key Configuration Files

### `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### `package.json` Scripts
```json
{
  "dev": "vite",
  "build": "vite build",
  "lint": "oxlint",
  "preview": "vite preview"
}
```

---

## 🧑‍💻 Development Notes

- **Tailwind CSS v4** uses the new `@theme` directive for design tokens and `@utility` for custom utilities — no `tailwind.config.js` file needed.
- **Three.js warnings** about `THREE.Clock` being deprecated are harmless — R3F handles the timer internally.
- The **video file** (`hero-bg.mp4`) is ~15MB. For production, consider compressing it or using a CDN.
- **GSAP ScrollTrigger** is used only on the Home page roadmap timeline for scroll-driven line drawing.
- All animations respect `prefers-reduced-motion` through Framer Motion defaults.

---

## 📜 License

This project is private and proprietary. All rights reserved © 2026 Haxe Studio.
