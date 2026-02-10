# Design System

Centralized foundations for typography, color, layout radius, and reusable utilities used across the site. Tokens live as CSS custom properties and are theme-aware (light + dark).

## Files
- `design-tokens.css`: Tokens, semantic aliases, radii, and theme variants (`:root`, `.dark`). Accent aligns with the Hero “Get in touch” CTA.
- `design-utilities.css`: Base resets, typography helpers, letter-spacing shorthands, prose tweaks, glass effect, and accessibility media queries.
- Imported via `src/app/globals.css` to keep all pages on the same system.

## Usage
- Use semantic Tailwind tokens (`bg-background`, `text-foreground`, `border-border`, etc.)—they resolve to the custom properties defined in `design-tokens.css`.
- Typography stacks: `font-heading`, `font-copy`, `font-mono`. Letter spacing helpers: `heading-tight`, `heading-normal`.
- Typography scale is limited to **4 sizes** only: `text-sm` (12px), `text-base` (18px), `text-lg` (36px), `text-xl` (48px). All other Tailwind text-size utilities are aliased to these four sizes via `design-utilities.css`.
- Use `glass` for the blurred panel effect; `prose-optimized` for longer copy blocks.
- Keep any new component-level styles token-driven (no hard-coded hex values); extend tokens by editing `design-tokens.css` only.

## Theming
- Light/dark swap driven by `.dark` on `html`/`body` (handled by `ThemeProvider`). All semantic tokens map through the same names, so components stay mode-agnostic.
- Avoid duplicating colors in components—prefer semantic tokens (`primary`, `muted`, `border`, `ring`, etc.).

## Extending
- Add new primitives (e.g., `--radius-xxl`) inside `design-tokens.css` and reference them semantically. Avoid ad-hoc colors—extend the palette instead.
- Add utility helpers (e.g., animation shorthands) inside `design-utilities.css` to keep usage consistent and avoid per-component overrides.***
