"use client";

import { useState, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { MapPinIcon, EnvelopeIcon, TagIcon, CalendarIcon, LinkIcon as ExternalLinkIcon } from "@phosphor-icons/react";

// Import the data structure
import { personalProfileData, PersonalImage } from "./data";
import type { PersonalProfile } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { FadeReveal } from "@/components/motion";

interface PersonalProfileProps {
  profile?: PersonalProfile;
}

// Utility function to format text with line breaks - enhanced for accessibility
const formatTextWithLineBreaks = (text: string) => {
  return text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index < text.split('\n').length - 1 && <br />}
    </span>
  ));
};

// Memoized optimized image component with enhanced accessibility
const OptimizedImageContainer = memo(({
  image,
  priority = false
}: {
  image: PersonalImage;
  priority?: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Lazy loading with intersection observer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority,
    rootMargin: '50px',
  });

  // Memoized callbacks to prevent re-renders
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  const shouldLoad = priority || inView;

  return (
    <figure 
      ref={ref} 
      className="group relative overflow-hidden glass cursor-pointer h-full w-full"
      role="img"
      aria-label={`Personal photo: ${image.alt}`}
    >
      {/* Loading placeholder with accessibility */}
      {(!isLoaded || hasError) && (
        <div 
          className="absolute inset-0 bg-neutral-200 animate-pulse z-10"
          aria-label={hasError ? 'Failed to load image' : 'Loading image'}
        />
      )}

      {/* Enhanced hover effects for visual feedback */}
      {isLoaded && !hasError && (
        <>
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
          <div 
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"
            aria-hidden="true"
          >
            <ExternalLinkIcon size={20} color="#fff" />
          </div>
        </>
      )}

      {/* Image container with enhanced alt text */}
      {shouldLoad && !hasError && (
        <div className="absolute inset-0 z-20">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={image.src}
              alt={`${image.alt} - Personal photo showcasing professional and adventure lifestyle`}
              fill
              onLoad={handleLoad}
              onError={handleError}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-all duration-700 group-hover:scale-105"
              priority={priority}
              quality={85}
            />
          </div>
        </div>
      )}

      {/* Hidden caption for screen readers */}
      <figcaption className="sr-only">
        Personal photograph showing aspects of professional and personal life, including design work and outdoor adventures.
      </figcaption>
    </figure>
  );
});

OptimizedImageContainer.displayName = 'OptimizedImageContainer';

// Memoized image row component with semantic structure
const ImageRow = memo(({ 
  images,
  gridCols = "grid-cols-1 md:grid-cols-2",
  heights = "h-80 md:h-96",
  priority = false
}: { 
  images: PersonalImage[];
  gridCols?: string;
  heights?: string;
  priority?: boolean;
}) => {
  if (images.length === 0) return null;

  return (
    <div 
      className={`grid ${gridCols} gap-1 ${heights}`}
      role="region"
      aria-label="Personal photography gallery"
    >
      {images.map((image, index) => (
        <OptimizedImageContainer
          key={`profile-${image.id}`}
          image={image}
          priority={priority && index === 0} // Only first image of first row is priority
        />
      ))}
    </div>
  );
});

ImageRow.displayName = 'ImageRow';

// Memoized contact actions with enhanced accessibility
const ContactActions = memo(({ profile }: { profile: PersonalProfile }) => (
  <div 
    className="flex gap-3"
    role="group"
    aria-label="Contact and social media links"
  >
    {profile.contactEmail && (
      <Button asChild size="sm" variant="outline">
        <Link 
          href={`mailto:${profile.contactEmail}`}
          aria-label={`Send email to Gianni Favaretto at ${profile.contactEmail}`}
        >
          <EnvelopeIcon size={16} aria-hidden="true" />
          <span>Contact</span>
          <span className="sr-only"> via email</span>
        </Link>
      </Button>
    )}
    {profile.linkedinUrl && (
      <Button asChild size="sm" variant="outline">
        <Link 
          href={profile.linkedinUrl} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Gianni Favaretto on LinkedIn (opens in new tab)"
        >
          <ExternalLinkIcon size={16} aria-hidden="true" />
          <span>LinkedIn</span>
          <span className="sr-only"> profile (opens in new tab)</span>
        </Link>
      </Button>
    )}
    {profile.instagramUrl && (
      <Button asChild size="sm" variant="outline">
        <Link 
          href={profile.instagramUrl} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Gianni Favaretto on Instagram (opens in new tab)"
        >
          <ExternalLinkIcon size={16} aria-hidden="true" />
          <span>Instagram</span>
          <span className="sr-only"> profile (opens in new tab)</span>
        </Link>
      </Button>
    )}
  </div>
));

ContactActions.displayName = 'ContactActions';

// Memoized hero section with comprehensive accessibility
const HeroSection = memo(({ profile }: { profile: PersonalProfile }) => (
  <section className="relative grid grid-cols-1 lg:grid-cols-12 pt-8 lg:pt-20 pb-8 px-6 lg:px-1">
    <article className="lg:col-start-3 lg:col-span-4">
      {/* Profile metadata */}
      <FadeReveal
        className="flex flex-wrap gap-4 mb-8 text-xs"
      >
        <div className="flex items-center gap-2 font-mono">
          <TagIcon size={16} aria-hidden="true" />
          <span>{profile.tagline}</span>
        </div>
        <div className="flex items-center gap-2 font-mono">
          <CalendarIcon size={16} aria-hidden="true" />
          <span>{profile.yearsOfExperience}+ years experience</span>
        </div>
        <div className="flex items-center gap-2 font-mono sr-only">
          <MapPinIcon size={16} aria-hidden="true" />
          <span>{profile.location}</span>
        </div>
      </FadeReveal>

      {/* Main heading with proper structure */}
      <FadeReveal>
        <h1
          className="heading-display text-primary mb-6"
          id="profile-heading"
        >
          {formatTextWithLineBreaks(profile.name)}
        </h1>
      </FadeReveal>

      {/* Personal statement with enhanced readability */}
      <div
        className="body-base mb-8 max-w-lg"
        role="region"
        aria-labelledby="profile-heading"
        aria-describedby="profile-statement"
      >
        <div id="profile-statement" className="space-y-4">
          {profile.personalStatement.split('\n\n').map((paragraph, index) => (
            <FadeReveal key={index}>
              <p>
                {formatTextWithLineBreaks(paragraph)}
              </p>
            </FadeReveal>
          ))}
        </div>
      </div>

      {/* Contact actions */}
      <ContactActions profile={profile} />

      {/* Hidden additional context for screen readers */}
      <div className="sr-only" aria-label="Additional profile information">
        <h2>Professional Background</h2>
        <p>
          Based in {profile.location}, currently serving as {profile.currentRole}, 
          with {profile.yearsOfExperience} years of professional experience in design leadership.
        </p>
        <h3>Core Expertise</h3>
        <ul>
          {profile.skills.map(skillGroup => (
            skillGroup.skills.map((skill, index) => (
              <li key={`${skillGroup.category}-${index}`}>{skill}</li>
            ))
          ))}
        </ul>
      </div>
    </article>
  </section>
));

HeroSection.displayName = 'HeroSection';

export default function PersonalProfile({
  profile = personalProfileData,
}: PersonalProfileProps) {

  // Memoize profile data to prevent unnecessary recalculations
  const memoizedProfile = useMemo(() => profile, [profile]);

  // Generate comprehensive structured data for personal profile
  const profileStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": ["Person", "ProfilePage"],
    "@id": "https://giannifavaretto.com#person",
    "name": memoizedProfile.name.replace('\n', ' '),
    "givenName": "Gianni",
    "additionalName": "J.",
    "familyName": "Favaretto",
    "description": memoizedProfile.personalStatement,
    "jobTitle": memoizedProfile.currentRole,
    "worksFor": {
      "@type": "Organization",
      "name": "JustScore",
      "url": "https://justscore.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "England",
      "addressCountry": "UK"
    },
    "email": memoizedProfile.contactEmail,
    "url": "https://giannifavaretto.com",
    "sameAs": [
      memoizedProfile.linkedinUrl,
      memoizedProfile.instagramUrl
    ].filter(Boolean),
    "image": memoizedProfile.images[0]?.src ? `https://giannifavaretto.com${memoizedProfile.images[0].src}` : null,
    "knowsAbout": memoizedProfile.skills.flatMap(skillGroup => skillGroup.skills),
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Design Leader",
      "occupationLocation": {
        "@type": "City",
        "name": "London, UK"
      },
      "skills": memoizedProfile.skills.map(skillGroup => skillGroup.category),
      "experienceRequirements": `${memoizedProfile.yearsOfExperience}+ years experience`
    },
    "knowsLanguage": {
      "@type": "Language",
      "name": "English",
      "alternateName": "en"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://giannifavaretto.com#profile",
      "name": "Personal Profile - Gianni Favaretto",
      "description": "Personal background, philosophy, and professional approach of design leader Gianni Favaretto"
    }
  }), [memoizedProfile]);


  return (
    <section className="bg-background text-foreground pb-48">
      {/* Comprehensive structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData),
        }}
      />

      <SectionHeader icon={null} label="Profile" />
      
      <main role="main" aria-label="Personal profile and background">
        <div className="sr-only">
          <h2>Personal Profile</h2>
          <p>
            Comprehensive overview of personal background, professional philosophy, 
            and approach to design leadership developed over {memoizedProfile.yearsOfExperience} years of experience.
          </p>
        </div>

        <HeroSection profile={memoizedProfile} />
      </main>

      {/* Future: Image gallery section - currently commented out but ready for accessibility */}
      {/* 
      <section className="pt-8 pb-16 px-6 lg:px-1" aria-label="Personal photography gallery">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-start-3 col-span-8">
            <div className="sr-only">
              <h3>Personal Photography</h3>
              <p>A visual journey showcasing both professional work and personal adventures that inform my design perspective.</p>
            </div>
            <div className="space-y-1">
              <ImageRow 
                images={imageRows.row1}
                heights="h-80 md:h-96"
                priority={true}
              />
              <ImageRow 
                images={imageRows.row2}
                heights="h-80 md:h-96"
              />
              <ImageRow 
                images={imageRows.row3}
                heights="h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>
      */}
    </section>
  );
}
