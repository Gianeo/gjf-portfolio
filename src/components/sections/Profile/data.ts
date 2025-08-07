// types/personal-profile.ts

export interface PersonalImage {
  id: number;
  src: string;
  alt: string;
  aspectRatio: "square" | "landscape" | "portrait";
}

export interface PersonalSkill {
  category: string;
  skills: string[];
}

export interface PersonalProfile {
  id: string;
  name: string;
  tagline: string;
  personalStatement: string;
  aboutMe: string;
  location: string;
  yearsOfExperience: number;
  currentRole: string;
  skills: PersonalSkill[];
  images: PersonalImage[];
  contactEmail?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

// Sample data structure
export const personalProfileData: PersonalProfile = {
  id: "gianni-profile",
  name: "Angelic Troublemaker. \nSceptical Optimist.",
  tagline: "Design and Adventure",
  personalStatement: "Years of unconventional experience—military discipline, serving the community as a missionary, factory work, raising a family, studying abroad—shaped my design instincts long before I called myself a designer. They gave me a sense of taste grounded in purpose, developed empathy, and a decision-making style that balances precision with pragmatism.\n\nI approach design as a way of thinking—structured, curious, and occasionally subversive. My focus isn't just on what we make, but also on how we make it: the conversations we initiate, the assumptions we challenge, and the systems we establish to support informed decisions under pressure.\n\nOver the past two decades, I've built and led design teams across fintech, e-commerce, and SaaS—not by scaling headcount, but by shaping environments where people can think clearly and challenge each other well. I care deeply about how design integrates with the rest of the business and how we make complexity legible without simplifying things unnecessarily.\n\nMy path here wasn't exactly linear. I studied and served in the Navy, worked in a book factory to fund my Uni Computer Science studies in the US, and moved countries while building a family. Those experiences left me with a low tolerance for theatrics and a high regard for thoughtful process.\n\nI stay sharp by stepping away—usually into the wild, often alone. That's where I do my best thinking: no slides, no backlog, just silence and a good discomfort.",
  aboutMe: "My journey started in 1999 as a freelance designer, working with industry leaders like Adobe, NASA, and Sun Microsystems. This foundation taught me adaptability and the importance of understanding diverse business contexts. Over the years, I've led transformative projects—from Ocado's international expansion to Zopa's banking revolution, and most recently, ideating and building JustScore from the ground up. I'm passionate about the craft of design, but even more excited about empowering others to create exceptional work.",
  location: "London, UK",
  yearsOfExperience: 25,
  currentRole: "Product, Design, and Brand at JustScore",
  skills: [
    {
      category: "Leadership",
      skills: ["Team Building", "Strategic Planning", "Mentoring", "Cross-functional Collaboration"]
    },
    {
      category: "Design",
      skills: ["Product Design", "Design Systems", "User Research", "Brand Strategy"]
    },
    {
      category: "Technology",
      skills: ["Next.js", "React", "TailwindCSS", "AI Integration", "Prototyping"]
    },
    {
      category: "Business",
      skills: ["Product Strategy", "Stakeholder Management", "Process Optimization", "Growth"]
    }
  ],
  images: Array.from({ length: 6 }, (_, i) => {
    let aspectRatio: "square" | "landscape" | "portrait";
    if (i % 3 === 0) {
      aspectRatio = "portrait";
    } else if (i % 2 === 0) {
      aspectRatio = "square";
    } else {
      aspectRatio = "landscape";
    }
    
    return {
      id: i + 1,
      src: `/images/profile/${i + 1}.webp`,
      alt: `Personal profile image ${i + 1}`,
      aspectRatio,
    };
  }),
  contactEmail: "giannijfavaretto@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/giannijfavaretto/",
  instagramUrl: "https://www.instagram.com/giannifavaretto/?hl=en"
};

// Helper functions
export const getSkillsByCategory = (category: string): string[] => {
  const skillCategory = personalProfileData.skills.find(
    skill => skill.category.toLowerCase() === category.toLowerCase()
  );
  return skillCategory ? skillCategory.skills : [];
};

export const getAllSkills = (): string[] => {
  return personalProfileData.skills.flatMap(skillCategory => skillCategory.skills);
};