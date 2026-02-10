"use client";

import clsx from "clsx";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { DotList } from "@/components/primitives/DotList";
import { MetaRow } from "@/components/primitives/MetaRow";
import { CardShell } from "@/components/primitives/CardShell";
import { LazyImage } from "@/components/media/LazyImage";

type Swatch = {
  name: string;
  token: string;
  className: string;
  note?: string;
};

const colors: Swatch[] = [
  { name: "Background", token: "--background / --foreground", className: "bg-background text-foreground" },
  { name: "Card", token: "--card / --card-foreground", className: "bg-card text-card-foreground" },
  { name: "Primary", token: "--primary / --primary-foreground", className: "bg-primary text-primary-foreground" },
  { name: "Secondary", token: "--secondary / --secondary-foreground", className: "bg-secondary text-secondary-foreground" },
  { name: "Muted", token: "--muted / --muted-foreground", className: "bg-muted text-muted-foreground" },
  { name: "Accent", token: "--accent / --accent-foreground", className: "bg-accent text-accent-foreground" },
  { name: "Destructive", token: "--destructive", className: "bg-destructive text-white", note: "Use sparingly for alerts" },
  { name: "Border", token: "--border", className: "bg-border text-foreground" },
  { name: "Input", token: "--input", className: "bg-input text-foreground" },
  { name: "Ring", token: "--ring", className: "bg-ring text-foreground" },
];

const radii = [
  { name: "Radius", token: "--radius" },
  { name: "Radius Sm", token: "--radius-sm" },
  { name: "Radius Md", token: "--radius-md" },
  { name: "Radius Lg", token: "--radius-lg" },
  { name: "Radius Xl", token: "--radius-xl" },
];

const utilities = [
  { name: "font-copy", description: "Body stack with kerning + ligatures." },
  { name: "font-heading", description: "Heading stack with stylistic set 01." },
  { name: "font-mono", description: "Azeret Mono stack." },
  { name: "heading-tight / heading-normal", description: "Letter-spacing helpers for headings." },
  { name: "text-balance / text-pretty", description: "Prevent awkward text wrapping." },
  { name: "prose-optimized", description: "Long-form copy line-height + features." },
  { name: "glass", description: "Blurred background + subtle border for panels." },
  { name: "body-label", description: "Uppercase micro label (12px)." },
  { name: "body-base", description: "Paragraph copy (18px)." },
  { name: "heading-sm", description: "Small heading / meta names." },
  { name: "heading-base", description: "Section/card heading." },
  { name: "heading-display", description: "Hero/statement heading." },
];

const typeScale = [
  { label: "XL", className: "heading-display", note: "Hero / display (48px)" },
  { label: "LG", className: "heading-base", note: "Section titles / leads (36px)" },
  { label: "Base", className: "body-base", note: "Body copy (18px)" },
  { label: "SM", className: "body-label", note: "Meta, captions, overlines (12px)" },
];

const buttonVariantsDemo = [
  { label: "Primary", variant: "primary" as const },
  { label: "Secondary", variant: "secondary" as const },
  { label: "Accent", variant: "accent" as const },
  { label: "Outline", variant: "outline" as const },
  { label: "Ghost", variant: "ghost" as const },
];

const buttonSizesDemo = ["sm", "base", "lg"] as const;

const primitives = [
  { name: "SectionHeader", description: "Sticky top banner for section labels with icon support.", usage: "<SectionHeader icon={<Icon />} label=\"Latest Work\" />" },
  { name: "SectionIntro", description: "Eyebrow + title + body intro block.", usage: "<SectionIntro eyebrow=\"Eyebrow\" title=\"Heading\" description={<p>Body</p>} />" },
  { name: "DotList", description: "Bullet list with consistent spacing and tone options.", usage: "<DotList items={['Item']} tone=\"primary\" />" },
  { name: "MetaRow", description: "Inline meta pills row with icons.", usage: "<MetaRow items={[{ icon: <Icon />, label: 'Meta' }]} />" },
  { name: "CardShell", description: "Rounded card with border/shadow and optional hover lift.", usage: "<CardShell interactive>Content</CardShell>" },
  { name: "LazyImage", description: "Shared lazy-loaded image with placeholder and hover overlay.", usage: "<LazyImage image={{src, alt}} />" },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-primary" />
      <h2 className="text-xl font-semibold heading-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const SwatchCard = ({ swatch }: { swatch: Swatch }) => (
  <div className="flex flex-col gap-2 rounded-xl border border-border bg-card/60 p-4 shadow-sm">
    <div className={clsx(" border border-border/60 p-4 text-sm font-medium", swatch.className)}>
      {swatch.name}
    </div>
    <div className="text-xs text-muted-foreground flex items-center justify-between">
      <span>{swatch.token}</span>
      {swatch.note && <span className="text-sm text-muted-foreground/70">{swatch.note}</span>}
    </div>
  </div>
);

const RadiusCard = ({ name, token }: { name: string; token: string }) => (
  <div className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 shadow-sm">
    <div className="h-12 w-20 bg-muted/50" style={{ borderRadius: `var(${token})` }} />
    <div className="text-sm">
      <p className="font-semibold">{name}</p>
      <p className="text-xs text-muted-foreground">{token}</p>
    </div>
  </div>
);

export default function SystemPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 space-y-10">
        <header className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground">System</p>
              <h1 className="text-4xl font-semibold heading-tight">Design Tokens & Utilities</h1>
              <p className="max-w-3xl text-muted-foreground text-base">
                Live reference for the core styling system: tokens, typography, radii, and utilities. Values are theme-aware—toggle light/dark to verify contrast.
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
              <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
            </button>
          </div>
        </header>

        <Section title="Core Palette">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map((swatch) => (
              <SwatchCard key={swatch.name} swatch={swatch} />
            ))}
          </div>
        </Section>

        <Section title="Typography">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-2 shadow-sm">
              <p className="body-label text-muted-foreground">Body Label</p>
              <p className="body-label text-foreground">EXAMPLE LABEL</p>
              <p className="text-sm text-muted-foreground">Utility: <code className="text-sm">body-label</code></p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-2 shadow-sm">
              <p className="body-label text-muted-foreground">Body Base</p>
              <p className="body-base text-foreground">Paragraph body copy.</p>
              <p className="text-sm text-muted-foreground">Utility: <code className="text-sm">body-base</code></p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-2 shadow-sm">
              <p className="body-label text-muted-foreground">Heading SM</p>
              <p className="heading-sm text-foreground">Small heading</p>
              <p className="text-sm text-muted-foreground">Utility: <code className="text-sm">heading-sm</code></p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-2 shadow-sm">
              <p className="body-label text-muted-foreground">Heading Base</p>
              <p className="heading-base text-foreground">Section heading</p>
              <p className="text-sm text-muted-foreground">Utility: <code className="text-sm">heading-base</code></p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-2 shadow-sm">
              <p className="body-label text-muted-foreground">Heading Display</p>
              <p className="heading-display text-foreground">Display heading</p>
              <p className="text-sm text-muted-foreground">Utility: <code className="text-sm">heading-display</code></p>
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-border bg-card/60 p-6 shadow-sm mt-6">
            {typeScale.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                <p className={clsx(item.className)}>{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Radii">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {radii.map((radius) => (
              <RadiusCard key={radius.name} name={radius.name} token={radius.token} />
            ))}
          </div>
        </Section>

        <Section title="Utilities">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {utilities.map((item) => (
              <div key={item.name} className="rounded-xl border border-border bg-card/60 p-4 shadow-sm">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typography Scale (4 sizes)">
          <div className="space-y-3 rounded-xl border border-border bg-card/60 p-6 shadow-sm">
            {typeScale.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                <p className={clsx(item.className)}>{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Buttons">
          <div className="space-y-4 rounded-xl border border-border bg-card/60 p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {buttonVariantsDemo.map((item) => (
                <Button key={item.label} variant={item.variant} size="base">
                  {item.label}
                </Button>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {buttonSizesDemo.map((size) => (
                <div key={size} className="flex flex-col gap-2  border border-border/70 bg-card/50 p-4">
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Size: {size}</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary" size={size}>Primary</Button>
                    <Button variant="secondary" size={size}>Secondary</Button>
                    <Button variant="accent" size={size}>Accent</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Primitives">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {primitives.map((primitive) => (
              <CardShell key={primitive.name} className="p-4">
                <p className="font-semibold">{primitive.name}</p>
                <p className="text-sm text-muted-foreground">{primitive.description}</p>
                <p className="mt-2 text-xs font-mono text-muted-foreground/80 break-words">{primitive.usage}</p>
              </CardShell>
            ))}
          </div>
        </Section>

        <Section title="Examples">
          <div className="grid gap-4 lg:grid-cols-2">
            <CardShell className="p-4 space-y-4" interactive>
              <p className="text-sm font-semibold">SectionIntro + MetaRow</p>
              <MetaRow
                items={[
                  { label: "Product", icon: <span className="size-2 rounded-full bg-primary" /> },
                  { label: "2025", icon: <span className="size-2 rounded-full bg-muted-foreground" /> },
                ]}
              />
              <SectionIntro
                eyebrow={<span className="text-xs font-mono text-muted-foreground">Eyebrow</span>}
                title="Composable Sections"
                description={<p className="text-sm">Use SectionIntro to keep intros consistent.</p>}
                className="space-y-2"
                titleClassName="text-2xl"
              />
            </CardShell>
            <CardShell className="p-4 space-y-4" interactive>
              <p className="text-sm font-semibold">DotList + LazyImage</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
                <DotList items={["Strategy", "Technology", "Design"]} />
                <div className="w-full aspect-4/3">
                  <LazyImage
                    image={{ src: "/images/work/intro/1.webp", alt: "Sample" }}
                    className="h-full"
                    overlayClassName="from-primary/10 to-accent/10"
                    sizes="200px"
                    quality={80}
                  />
                </div>
              </div>
            </CardShell>
            <CardShell className="p-4 space-y-3" interactive>
              <p className="text-sm font-semibold">SectionHeader</p>
              <SectionHeader
                sticky={false}
                icon={<span className="size-2 rounded-full bg-primary" />}
                label="Preview banner"
                className="relative"
              />
              <p className="text-xs text-muted-foreground">Use for section headers; default is sticky.</p>
            </CardShell>
            <CardShell className="p-4 space-y-3" interactive>
              <p className="text-sm font-semibold">CardShell</p>
              <CardShell className="p-3 bg-background shadow-sm">
                <p className="text-sm">Nested content in CardShell.</p>
              </CardShell>
              <p className="text-xs text-muted-foreground">Adds radius, border, and optional hover lift.</p>
            </CardShell>
          </div>
        </Section>
      </div>
    </div>
  );
}
