"use client";

export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  aspectRatio: "square" | "landscape" | "portrait";
}

export interface ProjectData {
  title: string;
  description: string;
  category: string;
  client: string;
  date: string;
  images: ProjectImage[];
}

export interface GalleryItem {
  title: string;
  description: string;
  imageIndex: number;
}

export const sampleProject: ProjectData = {
  title: "JustScore",
  description:
    "Justscore is an employee performance platform I ideated and co-founded with a team of engineers and my daughter. We defined an API-first, AI-assistant-led strategy, shaping the product from brand to architecture—replacing gut-feel evaluations and delayed feedback with a simple, human-friendly experience that delivers consistent, actionable reviews in minutes.",
  category: "Co-founder / Product & Brand development, GTM.",
  client: "JustScore",
  date: "2025-26",
  images: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/work/justscore/${i + 1}.webp`,
    alt: `Showcase image ${i + 1}`,
    aspectRatio: "square",
  })),
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Mobile App",
    description:
      "From idea to interface, I led the mobile app as ideator, designer, and UI engineer—shaping an API-first foundation that enabled a fast, flexible front-end.",
    imageIndex: 0,
  },
  {
    title: "Web App",
    description:
      "Justscore began as a web app. I led ideation, design, and UI engineering, using the web experience to define the APIs, information architecture, and user flows that later scaled across the platform.",
    imageIndex: 1,
  },
  {
    title: "Marketing",
    description:
      "Justscore’s marketing site was where product and story met. I led design, UI engineering, positioning, and brand—working closely with my daughter and co-founder, whom I mentored throughout the process.",
    imageIndex: 2,
  },
  {
    title: "Brand",
    description:
      "We built the Justscore brand from the inside out—developing the logo, personality, voice, and visual identity that define the product’s character.",
    imageIndex: 3,
  },
];

export const getHoverSrc = (src: string) => {
  const dotIndex = src.lastIndexOf(".");
  if (dotIndex === -1) return `${src}_hover`;
  return `${src.slice(0, dotIndex)}_hover${src.slice(dotIndex)}`;
};
