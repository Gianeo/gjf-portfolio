import type { Metadata } from "next";
import HomePageContent from "@/app/HomePageContent";

// Page-specific metadata that extends the root layout
export const metadata: Metadata = {
  title: "Gianni Favaretto - Design Leadership Portfolio",
  description: "Designer and Leader with 20+ years experience building design teams and products at scale. Currently building JustScore.",
  openGraph: {
    title: "Gianni Favaretto - Design Leadership Portfolio",
    description: "Designer and Leader with 20+ years experience building design teams and products at scale.",
    url: "https://giannifavaretto.com",
    type: "website",
  },
  twitter: {
    title: "Gianni Favaretto - Design Leadership Portfolio",
    description: "Designer and Leader with 20+ years experience building design teams and products at scale.",
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
  "description": "Professional portfolio showcasing 20+ years of design leadership experience across fintech, e-commerce, and SaaS",
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
      {/* <header role="banner">
        <Navigation />
      </header> */}

      <HomePageContent />

      {/* Site footer - will be added when you create a footer component */}
      <footer
        role="contentinfo"
        className="sr-only"
        aria-label="Site footer and additional information"
      >
        {/* Footer content will go here when you create a Footer component */}
        <p>&copy; 2026 Gianni James Favaretto. All rights reserved.</p>
      </footer>
    </>
  );
}
