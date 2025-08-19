"use client";

import { useState, useCallback, useMemo, memo } from "react";
import { Tag } from "phosphor-react"; // Only import what we actually use
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { LogoGf } from "@/components/logo/LogoGf";

interface HeroSectionProps {
  className?: string;
}

// Memoized optimized image component - consistent with other components
const OptimizedImageContainer = memo(({
  image,
  className = "",
  priority = false
}: {
  image: { id: string; src: string; alt: string };
  className?: string;
  priority?: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Lazy loading with intersection observer - consistent pattern
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority, // Skip intersection observer for priority images
    rootMargin: '100px', // Larger margin for hero images
  });

  // Memoized callbacks to prevent re-renders
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Don't render if there's an error
  if (hasError) return null;

  const shouldLoad = priority || inView;

  return (
    <div ref={ref} className={`group aspect-square ${className}`}>
      <div className="relative overflow-hidden rounded-lg glass w-full h-full">
        {/* Simple loading placeholder - consistent styling */}
        {!isLoaded && shouldLoad && (
          <div className="absolute inset-0 bg-neutral-200 animate-pulse z-10" />
        )}

        {/* Hover effect - only render when loaded */}
        {isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        )}

        {/* Image container - only load when in view or priority */}
        {shouldLoad && (
          <div className="absolute inset-0 z-30">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                onLoad={handleLoad}
                onError={handleError}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
                priority={priority}
                quality={85}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

OptimizedImageContainer.displayName = 'OptimizedImageContainer';

// Memoized text cell component
const TextCell = memo(({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`rounded-lg w-full bg-neutral-100 flex items-center text-xs text-neutral-600 aspect-square p-4 ${className}`}>
    <div className="font-mono text-left max-w-sm mx-auto">
      {children}
    </div>
  </div>
));

TextCell.displayName = 'TextCell';

// Memoized logo section
const LogoSection = memo(() => (
  <div className="mb-6 lg:mb-12 px-6 lg:px-0">
    <LogoGf 
      className="w-32 lg:w-48 xl:w-56 h-auto" 
      aria-label="Gianni Favaretto professional logo"
    />
  </div>
));

LogoSection.displayName = 'LogoSection';

// Memoized badge section
const BadgeSection = memo(() => (
  <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground px-6 lg:px-0">
    <div className="flex items-center gap-2 font-mono" role="text">
      <Tag size={16} aria-hidden="true" />
      <span>Craftsmanship + Leadership.</span>
    </div>
  </div>
));

BadgeSection.displayName = 'BadgeSection';

// Memoized content section
const ContentSection = memo(() => (
  <>
    {/* Main heading with proper hierarchy */}
    <h1 
      id="hero-heading"
      className="font-heading font-bold text-5xl md:text-6xl heading-tight text-foreground mb-8 xl:mb-8 px-6 lg:px-0"
    >
      Design+ expertise for fast growth.
    </h1>

    {/* Main description with proper semantic structure */}
    <div className="font-copy text-lg md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-12 prose-optimized px-6 lg:px-0 space-y-4">
      <p>
        You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others… not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead. You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
      </p>
      
      <p>
        <strong>That&apos;s where I come in.</strong>
      </p>
      
      <p>
        I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
      </p>
      <p>
        <em>Not disruptive. Just effective. <br />For the business, and for the people it serves.</em>
      </p>
    </div>
  </>
));

ContentSection.displayName = 'ContentSection';

// Memoized bottom section
const BottomSection = memo(() => (
  <aside 
    className="col-span-12 lg:col-start-2 lg:col-span-5 xl:col-start-3 xl:col-span-4 xl:pb-16 px-4 py-16 mb-16 mt-1 mx-6 lg:mx-0 rounded-lg bg-neutral-100 space-y-6 text-xs text-neutral-600 text-left font-mono"
    aria-label="Key capabilities summary"
  >
    <p className="w-[11rem] mx-auto">
      UX and visual flair <br />combined with <br />AI and UI engineering.
    </p>
  </aside>
));

BottomSection.displayName = 'BottomSection';

export default function HeroSection({ className = "" }: HeroSectionProps) {

  // Memoized gallery images data - prevent recreation on re-renders
  const galleryImages = useMemo(() => [
    { 
      id: 'hero-image-1', 
      src: '/images/work/intro/1.webp', 
      alt: 'Chargebee subscription management platform interface showcasing clean design and user-friendly dashboard' 
    },
    { 
      id: 'hero-image-2', 
      src: '/images/work/intro/2.webp', 
      alt: 'JustScore performance management tool featuring AI-powered insights and intuitive scoring interface' 
    },
    { 
      id: 'hero-image-3', 
      src: '/images/work/intro/3.webp', 
      alt: 'Ocado Smart Platform e-commerce solution with advanced product discovery and seamless checkout experience' 
    }
  ], []);

  // Memoized image gallery grid
  const ImageGallery = memo(() => (
    <figure 
      className="grid grid-cols-2 gap-1 auto-rows-fr"
      aria-label="Portfolio work samples"
    >
      <figcaption className="sr-only">
        Selected examples of design work across SaaS, e-commerce, and fintech industries
      </figcaption>

      {/* 1st Cell - Text */}
      <TextCell>
        <span role="text">
          SaaS <br />
          Ecommerce <br />
          Fintech <br />
          +
        </span>
      </TextCell>

      {/* 2nd Cell - Image 1 (Priority - above fold) */}
      <OptimizedImageContainer
        image={galleryImages[0]}
        priority={true} // This is above the fold
      />

      {/* 3rd Cell - Image 2 (Lazy loaded) */}
      <OptimizedImageContainer
        image={galleryImages[1]}
      />

      {/* 4th Cell - Text */}
      <TextCell>
        <span role="text">
          End-to-end Design <br />
          Prototyping <br />
          Systems <br />
          +
        </span>
      </TextCell>

      {/* 5th Cell - Text */}
      <TextCell>
        <span role="text">
          Leadership <br />
          Team Management <br />
          Growth <br />
          +
        </span>
      </TextCell>

      {/* 6th Cell - Image 3 (Lazy loaded) */}
      <OptimizedImageContainer
        image={galleryImages[2]}
      />
    </figure>
  ));

  ImageGallery.displayName = 'ImageGallery';

  // Memoized decorative element
  const DecorativeElement = memo(() => (
    <div 
      className="absolute top-20 lg:top-24 xl:top-28 left-0 w-full lg:w-1/3 h-40 lg:h-48 xl:h-56 -translate-y-1/2 bg-neutral-100 rounded-r-lg"
      aria-hidden="true"
    >
      <div className="relative w-full mix-blend-multiply" />
    </div>
  ));

  DecorativeElement.displayName = 'DecorativeElement';

  return (
    <section className={`relative bg-background text-foreground overflow-hidden ${className}`}>
      {/* Structured data for the hero/about section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Gianni Favaretto - Design Leadership",
            "description": "Designer, Leader and Product Strategist known for blending design craftsmanship with strategic vision. Builds products, brands, and design systems at scale—uniting usability, visual precision, and scalable processes across fintech, e-commerce, SaaS, and emerging AI platforms.",
            "mainEntity": {
              "@type": "Person",
              "name": "Gianni Favaretto",
              "jobTitle": "Designer and Leader",
              "description": "Design leader focused on building effective teams, creating scalable systems, and delivering meaningful user experiences.",
              "knowsAbout": [
                "Design Leadership",
                "End-to-end design", 
                "Design Systems",
                "Team Management",
                "User Experience Design",
                "SaaS Design",
                "Fintech Design",
                "E-commerce Design"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://giannifavaretto.com"
                }
              ]
            }
          }),
        }}
      />

      {/* Main hero content */}
      <div className="relative z-10 grid grid-cols-12 py-12 lg:py-16 md:px-8 lg:px-0">
        {/* Primary content column */}
        <div className="col-span-12 lg:col-start-2 lg:col-span-5 xl:col-start-3 xl:col-span-4 xl:pb-16">
          <LogoSection />
          <BadgeSection />
          <ContentSection />
        </div>

        {/* Portfolio showcase gallery */}
        <div 
          className="col-span-12 lg:col-start-8 xl:col-start-9 lg:col-span-5 xl:col-span-4 mt-0 lg:mt-12 px-6 lg:px-0"
          role="complementary"
          aria-label="Featured work samples"
        >
          <ImageGallery />
        </div>

        {/* Capabilities summary */}
        <BottomSection />
      </div>

      {/* Decorative Elements */}
      <DecorativeElement />
    </section>
  );
}