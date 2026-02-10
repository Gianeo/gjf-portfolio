'use client';

import { EnvelopeIcon, InstagramLogoIcon, LinkedinLogoIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useScroll } from '@/components/layout/SmoothScrollLayout';
import { useTheme } from '@/components/providers/ThemeProvider';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const { scrollToSection } = useScroll();
  const { theme, toggleTheme } = useTheme();

  // Handle smooth scroll to sections with Lenis
  const handleNavClick = (sectionId: string) => {
    scrollToSection(`#${sectionId}`);
  };

  return (
    <nav
      className={`relative w-full z-10 flex items-center justify-between px-6 lg:px-12 lg:py-8 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo/Brand + Theme Switcher */}
      <div className="flex items-center gap-3">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="text-xs tracking-widest font-mono text-primary hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:rounded"
          aria-label="Gianeo Studio - Go to top of page"
        >
          <span aria-hidden="true">Gianni J Favaretto</span>
        </a>
      </div>

      <div className='hidden'>
        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <MoonIcon className="size-4" aria-hidden="true" />
          ) : (
            <SunIcon className="size-4" aria-hidden="true" />
          )}
        </button>
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
                handleNavClick('main-content');
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
                handleNavClick('work-history');
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
                handleNavClick('profile');
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
          <EnvelopeIcon
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
          <InstagramLogoIcon
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
          <LinkedinLogoIcon
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