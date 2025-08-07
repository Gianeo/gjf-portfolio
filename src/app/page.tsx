import type { Metadata } from "next";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/sections/Hero";
// import ProductShowcase from "@/components/sections/ProductShowcase";
import ClientsLogos from "@/components/sections/ClientsLogos";
import WorkHistory from "@/components/sections/WorkHistory";
import PersonalProfile from "@/components/sections/Profile";
// import Services from "@/components/sections/Services";

// Page-specific metadata that extends the root layout
export const metadata: Metadata = {
  title: "Gianni Favaretto - Design Leadership Portfolio",
  description: "Angelic troublemaker, sceptical optimist. 25+ years designing and leading teams from 0-1 to enterprises. Currently building JustScore.",
  openGraph: {
    title: "Gianni Favaretto - Design Leadership Portfolio",
    description: "Angelic troublemaker, sceptical optimist. 25+ years designing and leading teams from 0-1 to enterprises.",
    url: "https://giannifavaretto.com",
    type: "website",
  },
  twitter: {
    title: "Gianni Favaretto - Design Leadership Portfolio",
    description: "Angelic troublemaker, sceptical optimist. 25+ years designing and leading teams from 0-1 to enterprises.",
  },
  alternates: {
    canonical: "https://giannifavaretto.com",
  },
};

// Structured data for the portfolio/website
const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "Portfolio",
  "name": "Gianni Favaretto Design Leadership Portfolio",
  "description": "Professional portfolio showcasing 25+ years of design leadership experience across fintech, e-commerce, and SaaS",
  "creator": {
    "@type": "Person",
    "name": "Gianni Favaretto",
    "jobTitle": "Senior Design Leader",
    "url": "https://giannifavaretto.com"
  },
  "url": "https://giannifavaretto.com",
  "inLanguage": "en-US",
  "dateModified": new Date().toISOString(),
  "mainEntity": {
    "@type": "Person",
    "name": "Gianni Favaretto",
    "jobTitle": "Senior Design Leader & Product Strategist",
    "description": "Design leader with expertise in building and scaling design teams, creating design systems, and driving product strategy across multiple industries."
  }
};

// Demo component showcasing the complete layout with all sections
export default function HomePage() {
  return (
    <>
      {/* Portfolio structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />

      {/* Site header with navigation */}
      <header role="banner">
        <Navigation />
      </header>

      {/* Hero section - primary content */}
      <section 
        id="hero" 
        aria-labelledby="hero-heading"
        role="region"
        aria-label="Introduction and overview"
      >
        <Hero />
      </section>

      {/* Main content area */}
      <main 
        id="main-content" 
        role="main"
        className="space-y-8 lg:space-y-32 pb-24 md:px-8 lg:px-0"
      >
        {/* Client logos section */}
        <section 
          id="clients" 
          aria-labelledby="clients-heading"
          role="region"
          aria-label="Client companies and partnerships"
        >
          <h2 id="clients-heading" className="sr-only">
            Companies I&apos;ve worked with
          </h2>
          <ClientsLogos />
        </section>

        {/* Work history section */}
        <section 
          id="work-history" 
          aria-labelledby="work-heading"
          role="region"
          aria-label="Professional work experience and portfolio"
        >
          <h2 id="work-heading" className="sr-only">
            Work History and Experience
          </h2>
          <WorkHistory />
        </section>

        {/* Personal profile section */}
        <section 
          id="profile" 
          aria-labelledby="profile-heading"
          role="region"
          aria-label="Personal background and philosophy"
        >
          <h2 id="profile-heading" className="sr-only">
            Personal Profile and Background
          </h2>
          <PersonalProfile />
        </section>

        {/* Commented out sections for future use */}
        {/* 
        <section 
          id="product-showcase" 
          aria-labelledby="products-heading"
          role="region"
          aria-label="Featured product work and case studies"
        >
          <h2 id="products-heading" className="sr-only">
            Featured Product Work
          </h2>
          <ProductShowcase />
        </section>

        <section 
          id="services" 
          aria-labelledby="services-heading"
          role="region"
          aria-label="Services and capabilities offered"
        >
          <h2 id="services-heading" className="sr-only">
            Services and Capabilities
          </h2>
          <Services />
        </section>
        */}
      </main>

      {/* Site footer - will be added when you create a footer component */}
      <footer 
        role="contentinfo"
        className="sr-only"
        aria-label="Site footer and additional information"
      >
        {/* Footer content will go here when you create a Footer component */}
        <p>&copy; 2025 Gianni Favaretto. All rights reserved.</p>
      </footer>
    </>
  );
}