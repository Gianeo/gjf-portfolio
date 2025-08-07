"use client";

import { useState } from "react";
import { 
  Moon, 
  Sun, 
  Palette, 
  Layout, 
  Sparkle,
  ArrowRight,
  Play,
  Star
} from "phosphor-react";

export default function TestPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="glass p-3 rounded-full hover:scale-105 transition-all duration-200 group"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun size={20} className="text-foreground group-hover:rotate-12 transition-transform" />
          ) : (
            <Moon size={20} className="text-foreground group-hover:rotate-12 transition-transform" />
          )}
        </button>
      </div>

      <main className="container-wide py-8 space-y-16">
        {/* Header */}
        <header className="text-center space-y-4 py-8">
          <h1 className="text-6xl font-heading font-semibold text-gradient mb-4">
            design.studio
          </h1>
          <p className="text-xl font-copy text-muted-foreground max-w-2xl mx-auto">
            Foundation Testing - TailwindCSS v4, Switzer & Outfit from Fontshare
          </p>
        </header>

        {/* Typography Test */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkle size={24} className="text-primary" />
            <h2 className="text-3xl font-heading font-semibold">Typography System</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Body Font - Switzer */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-heading font-semibold text-primary mb-4">Switzer (Body Copy)</h3>
              <div className="space-y-3 font-copy">
                <p className="text-sm font-normal">Regular 400 - Clean and readable body text for all your content needs</p>
                <p className="text-base font-medium">Medium 500 - Perfect for emphasized text and important information</p>
                <p className="text-lg font-semibold">Semibold 600 - Great for subheadings and section labels</p>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-normal text-muted-foreground">
                    Switzer provides excellent readability with a modern, clean aesthetic that works perfectly for interfaces and long-form content.
                  </p>
                </div>
              </div>
            </div>

            {/* Heading Font - Outfit */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-heading font-semibold text-primary mb-4">Outfit (Headings)</h3>
              <div className="space-y-3 font-heading">
                <h4 className="text-2xl font-semibold">Large Heading</h4>
                <h5 className="text-xl font-semibold">Medium Heading</h5>
                <h6 className="text-lg font-semibold">Small Heading</h6>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-copy font-normal text-muted-foreground">
                    Outfit brings character and personality to headings with its distinctive letterforms and excellent display qualities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Font Combination Examples */}
          <div className="glass p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-primary">Typography in Action</h3>
            
            <article className="space-y-4">
              <h4 className="text-3xl font-heading font-semibold">The Future of Digital Design</h4>
              <p className="text-lg font-copy font-normal text-muted-foreground leading-relaxed">
                Modern design requires typography that balances aesthetics with functionality. 
              </p>
              <p className="text-base font-copy font-normal leading-relaxed">
                The combination of <span className="font-medium">Switzer</span> for body text and <span className="font-heading font-semibold">Outfit</span> for headings creates a harmonious hierarchy that guides readers through content naturally. This pairing ensures both readability and visual impact across all digital touchpoints.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-sm font-copy font-medium text-primary">Font Pairing:</span>
                <span className="text-sm font-copy font-normal">Switzer + Outfit</span>
              </div>
            </article>
          </div>
        </section>

        {/* Color System Test */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Palette size={24} className="text-primary" />
            <h2 className="text-3xl font-heading font-semibold">Color System</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Primary Colors */}
            <div className="space-y-2">
              <div className="h-16 bg-primary rounded-lg"></div>
              <p className="text-xs font-copy text-center">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-secondary rounded-lg"></div>
              <p className="text-xs font-copy text-center">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-accent rounded-lg"></div>
              <p className="text-xs font-copy text-center">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-muted rounded-lg"></div>
              <p className="text-xs font-copy text-center">Muted</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-destructive rounded-lg"></div>
              <p className="text-xs font-copy text-center">Destructive</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-success rounded-lg"></div>
              <p className="text-xs font-copy text-center">Success</p>
            </div>
          </div>
        </section>

        {/* Component Test */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Layout size={24} className="text-primary" />
            <h2 className="text-3xl font-heading font-semibold">Component Styles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Buttons */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <h3 className="font-heading font-semibold text-primary">Buttons</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors font-copy font-medium">
                  Primary Button
                </button>
                <button className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary-hover transition-colors font-copy font-medium">
                  Secondary Button
                </button>
                <button className="w-full border border-border text-foreground px-4 py-2 rounded-lg hover:bg-accent transition-colors font-copy font-medium">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <h3 className="font-heading font-semibold text-primary">Glass Card</h3>
              <p className="text-muted-foreground text-sm font-copy">
                This card demonstrates the glass morphism effect with backdrop blur and transparency.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Star size={16} className="text-warning" />
                <span className="font-copy font-medium">Premium Feature</span>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="bg-surface border border-border p-6 rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="font-heading font-semibold text-primary">Interactive Card</h3>
              <p className="text-muted-foreground text-sm font-copy">
                Hover effects and smooth transitions showcase the animation system.
              </p>
              <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-copy font-medium">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Animation Test */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkle size={24} className="text-primary" />
            <h2 className="text-3xl font-heading font-semibold">Animation System</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-border p-6 rounded-2xl animate-fade-in">
              <h4 className="font-heading font-semibold mb-2">Fade In</h4>
              <p className="text-sm font-copy text-muted-foreground">Smooth opacity transition</p>
            </div>
            
            <div className="bg-surface border border-border p-6 rounded-2xl animate-slide-up">
              <h4 className="font-heading font-semibold mb-2">Slide Up</h4>
              <p className="text-sm font-copy text-muted-foreground">Upward motion with fade</p>
            </div>
            
            <div className="bg-surface border border-border p-6 rounded-2xl animate-scale-in">
              <h4 className="font-heading font-semibold mb-2">Scale In</h4>
              <p className="text-sm font-copy text-muted-foreground">Bounce scale animation</p>
            </div>
          </div>
        </section>

        {/* Responsive Test */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Play size={24} className="text-primary" />
            <h2 className="text-3xl font-heading font-semibold">Responsive Design</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-sm font-copy font-medium">{i + 1}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground text-sm font-copy">
            Resize your browser to see responsive grid behavior
          </p>
        </section>

        {/* Font Loading Status */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkle size={24} className="text-primary" />
            <h2 className="text-3xl font-heading font-semibold">Font Loading Status</h2>
          </div>

          <div className="glass p-6 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-heading font-semibold text-primary">Switzer Weights</h4>
                <div className="space-y-2 font-copy">
                  <p className="font-normal">✓ Regular 400</p>
                  <p className="font-medium">✓ Medium 500</p>
                  <p className="font-semibold">✓ Semibold 600</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-heading font-semibold text-primary">Outfit Weights</h4>
                <div className="space-y-2">
                  <p className="font-heading font-semibold">✓ Semibold 600</p>
                  <p className="font-copy text-muted-foreground text-sm">Primary heading weight</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status */}
        <footer className="text-center py-8 border-t border-border">
          <div className="flex items-center justify-center gap-2 text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-copy font-medium">Fontshare integration complete!</span>
          </div>
          <p className="text-xs font-copy text-muted-foreground mt-2">
            TailwindCSS v4 • Switzer (Copy) • Outfit (Headings) • Phosphor Icons
          </p>
        </footer>
      </main>
    </div>
  );
}