# Animation Guide

This project uses **Motion for React** (`motion/react`, formerly Framer Motion) for scroll‑linked parallax and reveal animations. Motion updates values outside React state, so animations stay smooth while scrolling.

## Quick Cheat Sheet

**Make reveals faster/slower**
- Find the `revealPresets` in `src/system/motion-presets.ts` and change `range`:
  - Smaller number = faster reveal
  - Bigger number = slower reveal

**Make motion stronger/weaker**
- For text slides: adjust `[-60, 0]` in `useTransform`.
- For parallax drift: adjust `[-10, 10]` in `useTransform`.

**Make spring snappier/softer**
```ts
// src/system/motion-presets.ts
springPresets.calm
```
- More stiffness = snappier
- More damping = calmer
- More mass = heavier/slower

**Where to look**
- Motion presets (global): `src/system/motion-presets.ts`
- Motion helpers: `src/components/motion/Reveal.tsx`, `src/components/motion/BlindReveal.tsx`
- Scroll helper hook: `src/hooks/useScrollRange.ts`
- Debug overlays (dev only): `src/components/motion/MotionDebugOverlay.tsx`, `src/components/motion/MotionRangeOverlay.tsx`
- Motion barrel: `src/components/motion/index.ts`
- Debug provider: `src/components/motion/MotionDebugProvider.tsx`
- Reveal sequence hook: `src/hooks/useRevealSequence.ts`
- Reveal sequences registry: `src/system/motion-presets.ts` (`revealSequences`)
- Typed getter: `getRevealSequence("intro")` in `src/system/motion-presets.ts`
- Background + Logo: `src/app/HomePageContent.tsx`
- Intro text reveal: `src/components/sections/Intro/index.tsx`
- Client blinds: `src/components/sections/ClientsLogos/index.tsx`
- Product gallery blinds: `src/components/sections/ProductShowcase/index.tsx`
- Work gallery blinds: `src/components/sections/WorkHistory/WorkExperienceEntry2.tsx`

## Why Motion
- **Scroll‑linked animation without jank**: Motion exposes motion values that update outside React state.
- **Declarative + composable**: Motion components (`m.div`) wrap existing markup with minimal changes.
- **Reduced bundle**: `LazyMotion` + `domAnimation` loads only what we need.

## Animation Tokens
Tokens live in `src/system/motion-tokens.ts` for consistent durations/easings across the site.

```ts
// src/system/motion-tokens.ts
export const motionTokens = {
  durationShort: 0.35,
  durationMedium: 0.6,
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.4, 0, 0.2, 1],
} as const;
```

CSS‑level motion tokens are also defined in `src/system/design-tokens.css` if you need to use them in styles.

## Where Motion Is Used (Current)

### Global background + logo layer
- File: `src/app/HomePageContent.tsx`
- Goal: keep the background image + LogoGf behind all sections, and parallax it as you scroll.

Key pieces:

1) **LazyMotion + MotionConfig**

```tsx
<LazyMotion features={domAnimation}>
  <MotionConfig transition={{ duration: motionTokens.durationShort, ease: motionTokens.easeOut }}>
    {/* animated content */}
  </MotionConfig>
</LazyMotion>
```

2) **Scroll‑linked motion values**

```tsx
const { scrollY } = useScroll();
const logoYRaw = useTransform(scrollY, /* ... */);
const logoScaleRaw = useTransform(scrollY, /* ... */);
const logoOpacityRaw = useTransform(scrollY, /* ... */);
const bgScaleRaw = useTransform(scrollY, /* ... */);
const overlayOpacityRaw = useTransform(scrollY, [0, viewportHeight * 0.75], [0.25, 0.965]);

// Smooth the motion with a spring so it feels elastic with scroll speed.
const springConfig = { stiffness: 140, damping: 26, mass: 0.9 };
const logoY = useSpring(logoYRaw, springConfig);
const logoScale = useSpring(logoScaleRaw, springConfig);
const logoOpacity = useSpring(logoOpacityRaw, springConfig);
const bgScale = useSpring(bgScaleRaw, springConfig);
const overlayOpacity = useSpring(overlayOpacityRaw, springConfig);
```

3) **Pinned background layer + logo**

```tsx
<m.div className="absolute inset-0" style={{ scale: bgScale }} />
<m.div style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}>
  <LogoGf ... />
</m.div>
```

4) **Reduced‑motion handling**

```tsx
const shouldReduceMotion = prefersReducedMotion || isMobile;
```

When `shouldReduceMotion` is true, transforms are disabled.

### ClientsLogos blinds reveal (reversible)
- File: `src/components/sections/ClientsLogos/index.tsx`
- Goal: each logo reveals with a clean vertical “blind drop” and reverses when scrolling up.

How it works:
1) Get the scroll progress for the logo container.
2) Smooth it with `useSpring`.
3) For each tile, map a portion of that progress to a `clip-path` inset.

```tsx
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"],
});
const revealProgress = useSpring(scrollYProgress, springConfig);

const start = index / total;
const end = (index + 1) / total + 0.08;
const reveal = useTransform(revealProgress, [start, end], [0, 1]);
const clipPath = useTransform(reveal, v => `inset(0% 0% ${100 - v * 100}% 0%)`);
```

Because this uses scroll progress, it naturally reverses when you scroll up.

If `prefers-reduced-motion` is enabled, the logos render fully visible with no transforms.

### ProductShowcase gallery blinds
- File: `src/components/sections/ProductShowcase/index.tsx`
- Goal: images reveal with the same blind drop as Client logos.

The gallery section creates a springed progress value when the grid enters view, then each image maps its reveal range from that progress:

```tsx
const revealBase = useMotionValue(0);
const revealProgress = useSpring(revealBase, springConfig);
// when the gallery enters view -> revealBase.set(1)

const reveal = useTransform(revealProgress, [start, end], [0, 1]);
const clipPath = useTransform(reveal, v => `inset(0% 0% ${100 - v * 100}% 0%)`);
```

### WorkHistory gallery blinds
- File: `src/components/sections/WorkHistory/WorkExperienceEntry2.tsx`
- Goal: each work gallery uses the same blind drop as ProductShowcase.

Each gallery has its own in‑view trigger, then uses a springed progress value to drive `clip-path` per item.

### Intro text (scroll‑speed aware)
- File: `src/components/sections/Intro/index.tsx`
- Goal: text fades in from above and continues a subtle parallax drift.

Instead of fixed delays, the reveal is tied to scroll progress. Faster scrolling makes the reveal settle faster.

```tsx
const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

const makeReveal = (start: number) => {
  const end = start + 0.16;
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [-60, 0]);
  return {
    opacity: useSpring(opacity, springConfig),
    y: useSpring(y, springConfig),
  };
};
```

## How the animation configuration works (plain English)

- **useScroll** gives a progress number from `0 → 1` based on where a section is in the viewport.
- **useTransform** remaps that progress to something useful (like `opacity` or `clip-path`).
- **useSpring** smooths the changes, so fast scrolls feel elastic and slow scrolls feel calm.
- **clip-path** hides and reveals content without moving layout. We use it for the “blind drop”.
- **Reduced motion**: when the OS says “reduce motion”, we skip transforms and show content instantly.

### The two main patterns

1) **Scroll‑driven parallax**
   - Example: Logo and background in `src/app/HomePageContent.tsx`
   - Change how much it moves by editing the `useTransform` ranges.

2) **Scroll‑driven reveal**
   - Example: ClientsLogos + gallery images
   - Each item is assigned a small slice of the `0 → 1` scroll range.
   - This is how we create a stagger without timers.

## How to edit animations yourself

### Change how fast the reveal happens
In any `makeReveal` or `clipPath` mapping:
- Increase the range length (e.g. `start + 0.2`) to make it slower.
- Decrease it (e.g. `start + 0.1`) to make it faster.

### Change how strong the movement feels
In `useTransform`:
- For text: change `[-60, 0]` to `[-40, 0]` for a smaller move.
- For parallax: change `[-10, 10]` to `[-6, 6]` for a softer drift.

### Change the spring “feel”
Shared config lives in `src/system/motion-presets.ts`:

```ts
export const springPresets = {
  calm: { stiffness: 140, damping: 26, mass: 0.9 },
  soft: { stiffness: 110, damping: 24, mass: 1 },
  snappy: { stiffness: 180, damping: 22, mass: 0.8 },
} as const;
```

- **More stiffness** = snappier
- **More damping** = calmer, less bounce
- **More mass** = heavier, slower response

## Patterns to follow
- Prefer `useScroll` + `useTransform` for parallax.
- Avoid setState in scroll handlers.
- Animate with transforms and opacity only.
- Respect `prefers-reduced-motion` by short‑circuiting styles.

## Adding new animated sections
- Use `useScroll` + `useTransform` for parallax.
- For reveals, map a small scroll range to opacity/clip‑path.
- If you want the reveal to reverse on scroll up, use scroll progress (not a one‑time `inView`).

### Reusable components

**`<Reveal />`** (text/blocks)
- File: `src/components/motion/Reveal.tsx`
- Scroll‑driven fade + slide based on a preset.

```tsx
<Reveal preset="slow" spring="calm" start={0.2}>
  <h2>Heading</h2>
</Reveal>
```

**`<BlindReveal />`** (images/logos/cards)
- File: `src/components/motion/BlindReveal.tsx`
- Uses a vertical clip‑path to “drop” the content.
- Can run from an `inView` trigger or from a shared `progress` value.

```tsx
<BlindReveal index={idx} total={items.length}>
  <img ... />
</BlindReveal>
```

```tsx
<BlindReveal index={idx} total={items.length} progress={sharedProgress}>
  <img ... />
</BlindReveal>
```

### Debug overlay
- Press **d** to toggle a small motion debug panel in dev.
- Only renders when `NODE_ENV !== "production"`.

### Range overlay
- Shows scroll progress + the reveal ranges used in a section.
- Only renders when `NODE_ENV !== "production"`.

---

If you want this doc updated as we change behavior, tell me and I’ll keep it in sync.
