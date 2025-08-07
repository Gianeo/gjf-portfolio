'use client';

import { Envelope, InstagramLogo, LinkedinLogo } from 'phosphor-react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  // Handle smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
      // Update focus for accessibility
      element.focus({ preventScroll: true });
    }
  };

  return (
    <nav 
      className={`relative z-10 flex items-center justify-between p-6 lg:px-12 lg:py-8 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo/Brand */}
      <div className="flex items-center">
        <a 
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="text-xs font-mono text-neutral-700 hover:text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:rounded"
          aria-label="Gianni J. Favaretto - Go to top of page"
        >
          <span aria-hidden="true">Gianni J. Favaretto</span>
        </a>
      </div>

      {/* Skip navigation menu for keyboard users */}
      <div className="sr-only focus-within:not-sr-only">
        <ul className="flex gap-4 p-2 bg-white shadow-lg rounded">
          <li>
            <a 
              href="#main-content"
              className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('main-content');
              }}
            >
              Main Content
            </a>
          </li>
          <li>
            <a 
              href="#work-history"
              className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('work-history');
              }}
            >
              Work History
            </a>
          </li>
          <li>
            <a 
              href="#profile"
              className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('profile');
              }}
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
      
      {/* Social Links */}
      <div 
        className="flex items-center space-x-4 lg:space-x-2"
        role="list"
        aria-label="Social media and contact links"
      >
        <a 
          href="mailto:giannijfavaretto@gmail.com" 
          className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Send email to Gianni Favaretto"
          role="listitem"
        >
          <Envelope 
            className="size-5" 
            aria-hidden="true"
          />
          <span className="sr-only">Email: giannijfavaretto@gmail.com</span>
        </a>
        
        <a 
          href="https://www.instagram.com/giannifavaretto/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Follow Gianni Favaretto on Instagram (opens in new tab)"
          role="listitem"
        >
          <InstagramLogo 
            className="size-5" 
            aria-hidden="true"
          />
          <span className="sr-only">Instagram profile</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/giannijfavaretto/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Connect with Gianni Favaretto on LinkedIn (opens in new tab)"
          role="listitem"
        >
          <LinkedinLogo 
            className="size-5" 
            aria-hidden="true"
          />
          <span className="sr-only">LinkedIn profile</span>
        </a>
      </div>

      {/* Structured data for contact information */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "contactType": "Professional Contact",
            "email": "giannijfavaretto@gmail.com",
            "url": [
              "https://www.linkedin.com/in/giannijfavaretto/",
              "https://www.instagram.com/giannifavaretto/?hl=en"
            ],
            "availableLanguage": "English"
          }),
        }}
      />
    </nav>
  );
}