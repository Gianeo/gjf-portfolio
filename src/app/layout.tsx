import type { Metadata } from "next";
import Script from 'next/script';
import { switzer, azeretMono } from "@/lib/fonts";
import "./globals.css";

// Enhanced metadata with comprehensive SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://giannifavaretto.com'), // Replace with your actual domain
  title: {
    default: "Gianni Favaretto - Design leadership with craftsmanship at its core.",
    template: "%s | Gianni Favaretto"
  },
  description: "Designer, Leader and Product Strategist known for blending design craftsmanship with strategic vision. Builds products, brands, and design systems at scale—uniting usability, visual precision, and scalable processes across fintech, e-commerce, SaaS, and emerging AI platforms.",
  keywords: [
    "design leader",
    "design craftsmanship",
    "product design",
    "design systems",
    "UX leadership",
    "design strategy",
    "fintech design",
    "SaaS design",
    "team leadership",
    "London designer",
    "senior design director",
    "UI design",
    "user experience",
    "digital product strategy",
    "design team building"
  ],
  authors: [{
    name: "Gianni Favaretto",
    url: "https://giannifavaretto.com"
  }],
  creator: "Gianni Favaretto",
  publisher: "Gianni Favaretto",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://giannifavaretto.com",
    siteName: "Gianni Favaretto - Design Portfolio",
    title: "Gianni Favaretto - Design leadership with craftsmanship at its core.",
    description: "Designer, Leader and Product Strategist known for blending design craftsmanship with strategic vision. Builds products, brands, and design systems at scale—uniting usability, visual precision, and scalable processes across fintech, e-commerce, SaaS, and emerging AI platforms.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gianni Favaretto - Design Portfolio",
      }
    ],
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    site: "@GianniFavaretto",
    creator: "@GianniFavaretto",
    title: "Gianni Favaretto - Design leadership with craftsmanship at its core.",
    description: "Designer and Leader with 20+ years experience building design teams and products at scale.",
    images: ["/images/og-image.jpg"],
  },

  // Technical SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional metadata
  category: "Design & Technology",
  classification: "Portfolio",

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code", // Replace with actual
    // other: ["facebook-domain-verification", "pinterest-verification"]
  },

  // Next.js built-in icon support - replaces manual favicon links
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000"
      }
    ]
  }
};

// Structured data for personal/professional profile
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Person", "CreativeWork"],
  "name": "Gianni Favaretto",
  "givenName": "Gianni",
  "familyName": "Favaretto",
  "additionalName": "J.",
  "jobTitle": "Design leadership with craftsmanship at its core.",
  "description": "Designer, Leader and Product Strategist known for blending design craftsmanship with strategic vision. Builds products, brands, and design systems at scale—uniting usability, visual precision, and scalable processes across fintech, e-commerce, SaaS, and emerging AI platforms.",
  "url": "https://giannifavaretto.com",
  "image": "https://giannifavaretto.com/images/profile/gianni-favaretto.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/giannijfavaretto/",
    "https://www.instagram.com/giannifavaretto/?hl=en"
  ],
  "email": "giannijfavaretto@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "UK"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "JustScore",
    "url": "https://justscore.com"
  },
  "knowsAbout": [
    "Product Design",
    "Design Leadership",
    "Design Systems",
    "User Experience Design",
    "Team Management",
    "Design Strategy",
    "Fintech",
    "SaaS",
    "E-commerce"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Designer and Leader",
    "occupationLocation": {
      "@type": "City",
      "name": "London, UK"
    },
    "skills": [
      "Design Leadership",
      "End-to-end design",
      "Team Building",
      "Design Systems",
      "Design Technology"
    ]
  },
  "alumniOf": [
    {
      "@type": "Organization",
      "name": "UVU - Computer Science",
      "description": "Computer Science studies in the US"
    }
  ],
  "award": [
    "Macromedia Site of the Month",
    "Accessibility Excellence Recognition"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth" // Improves scroll behavior
    >
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Canonical URL - will be overridden by page-specific canonicals */}
        <link rel="canonical" href="https://giannifavaretto.com" />

        {/* Viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body
        className={`${switzer.variable} ${azeretMono.variable} font-copy antialiased`}
        suppressHydrationWarning
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Skip to main content
        </a>

        {children}

        {/* Google Analytics using Next.js Script component - only in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}