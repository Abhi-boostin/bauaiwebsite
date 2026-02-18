## ✅ ACT AS
A world-class Creative Developer (Awwwards-level) specializing in:
- Next.js
- Framer Motion
- Scroll-linked canvas animations

---

## 🎯 THE TASK
Build a premium **scrollytelling landing page** for **[PRODUCT / EXPERIENCE / BRAND]**.

**Core mechanic:**  
A scroll-linked animation that plays an **image sequence** of **[OBJECT / PRODUCT / SCENE]** *transforming / assembling / exploding / evolving* as the user scrolls.

Example uses:
- A supercar assembling itself  
- A sneaker breaking into layers  
- A watch revealing its internals  
- A spacecraft deploying    
- A SaaS product visual metaphor  

---

## 🧰 TECH STACK
- **Framework:** Next.js 14 (App Router)  
- **Styling:** Tailwind CSS  
- **Animation:** Framer Motion  
- **Rendering:** HTML5 Canvas (120-frame image sequence)

---

## 🎨 VISUAL DIRECTION & COLOR
- **Seamless Blending (Non-negotiable):**  
  The page background MUST match the image sequence background **exactly**:  
  `#050505`  
  → Image edges should be invisible so **[OBJECT]** floats in a pure void.

- **Color Palette:**  
  - Background: `#050505`  
  - Headings: `text-white/90`  
  - Body: `text-white/60`

- **Typography:** Inter or SF Pro  
  Ultra-clean, tracking-tight, luxury minimalist aesthetic.

---

## 🧩 IMPLEMENTATION DETAILS

### 1) Sticky Canvas Container
- Create: `components/[ComponentName].tsx`
- Wrapper div:
  - `height: 400vh` (4× viewport height for scroll duration)
- Inside wrapper:
  - `<canvas>` must be:
    - `sticky`
    - `top-0`
    - `h-screen`
    - `w-full`
- Canvas must be:
  - perfectly centered  
  - responsively scaled  

---

### 2) Scroll-Linked Image Sequence
- Load **[FRAME_COUNT] images** from: `/public/sequence/`
- Naming convention:
  - `frame_0.webp` → `frame_[N].webp`

**Scroll logic**
- Use Framer Motion `useScroll` to track scroll progress **0.0 → 1.0**
- Use `useSpring` to smooth interpolation (avoid jitter)
- Map scroll progress to frame index:
  - `Math.floor(scrollProgress * FRAME_COUNT)`

**Canvas draw**
- Draw current frame using `drawImage()`
- Scale correctly to fit viewport (mobile + desktop)

**Preloading**
- Preload all images  
- Show a loading UI with progress bar **before** revealing the experience  

---

### 3) Text Overlays (Scrollytelling Beats)

Replace each block with your own story.

#### Beat A — 0–20% Scroll
- Title: **[HERO WORD / PHRASE]** (Centered, huge)  
- Subtitle: [Short emotional promise]

#### Beat B — 25–45% Scroll
- Title: **[FEATURE / IDEA 1]** (Left aligned)  
- Subtitle: [Supporting detail]  
- Visual note: *[Describe visual change]*

#### Beat C — 50–70% Scroll
- Title: **[FEATURE / IDEA 2]** (Right aligned)  
- Subtitle: [Supporting detail]  
- Visual note: *[Describe visual state]*

#### Beat D — 75–95% Scroll
- Title: **[CALL TO ACTION]** (Centered CTA)  
- Subtitle: [Closing line]  
- Visual note: *[Final visual formation]*

All text uses `useTransform` for opacity and position.

---

## ✨ POLISH & PERFORMANCE
- Elegant loading state:
  - animated spinner + progress bar
- “Scroll to Explore” indicator:
  - visible at 0%
  - fades out by 10%
- Mobile scaling:
  - use “contain” fit logic
- Use `useSpring` for buttery smoothness:
  - `stiffness: 100`
  - `damping: 30`
- Cleanup:
  - remove event listeners on unmount
  - dispose of canvas context safely
- Custom scrollbar styling:
  - minimal
  - dark
  - subtle hover effect

---

## ⏱ ANIMATION TIMING RULES
- Text overlays should:
  - fade in over first **10%** of their range  
  - stay visible  
  - fade out over last **10%**  

Opacity mapping:
[start, start + 0.1, end - 0.1, end] → [0, 1, 1, 0]

Add subtle vertical motion:
- enter: `y: 20px → 0`
- exit: `0 → -20px`

---

## 📦 OUTPUT (Generate production-ready code)
1. `app/page.tsx` — main page component  
2. `components/[ComponentName].tsx` — scroll canvas animation  
3. `app/globals.css` — Tailwind base styles + custom scrollbar  

---

## ✅ KEY REQUIREMENTS
- TypeScript throughout  
- Proper cleanup (canvas + listeners)  
- Fully responsive (mobile + desktop)  
- 60fps smooth animation  
- Loading state before animation begins  
- No flicker / no stutter during scroll  
- Seamless blend with `#050505` background  

---

## 🧠 STYLE NOTES
- High-end product aesthetic  
  (Apple / automotive / luxury tech)  
- Huge typography:
  - titles: `text-7xl` → `text-9xl`  
- Generous whitespace  
- Subtle animations only  
- Professional, confident, premium feel  
