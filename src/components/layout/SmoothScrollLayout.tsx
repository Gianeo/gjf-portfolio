// File: src/components/layout/SmoothScrollLayout.tsx
"use client"

import { useEffect, useRef, createContext, useContext } from 'react'
import Lenis from 'lenis'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface SmoothScrollLayoutProps {
  children: React.ReactNode
}

// Context for sharing scroll functions
interface ScrollContextType {
  scrollToSection: (target: string) => void
  lenis: Lenis | null
}

export const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: () => {},
  lenis: null,
})

export const useScroll = () => useContext(ScrollContext)

export default function SmoothScrollLayout({ children }: SmoothScrollLayoutProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with minimal, working configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // Add lenis class to html for CSS targeting
    document.documentElement.classList.add('lenis')

    // Request animation frame loop (Lenis best practice)
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('lenis')
    }
  }, [])

  // Scroll to section function with proper type casting
  const scrollToSection = (target: string) => {
    const element = document.querySelector(target)
    if (element && lenisRef.current) {
      // Cast Element to HTMLElement for Lenis
      lenisRef.current.scrollTo(element as HTMLElement, {
        offset: -80, // Account for fixed navigation
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3), // Ease out cubic
      })
    }
  }

  return (
    <div className="relative">
      {/* Background gradient - subtle and elegant */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }} 
        />
      </div>

      {/* Main content wrapper */}
      <div className="relative">
        <ScrollContext.Provider value={{ scrollToSection, lenis: lenisRef.current }}>
          {children}
        </ScrollContext.Provider>
      </div>
    </div>
  )
}

// Import the Navigation, Hero, and Products components
import Navigation from '@/components/navigation/Navigation'
import Hero from '@/components/sections/Hero'
import ClientsLogos from "@/components/sections/ClientsLogos";
import WorkHistory from "@/components/sections/WorkHistory";
import PersonalProfile from "@/components/sections/Profile";

// Demo component showcasing the complete layout with all sections
function DemoPage() {
  // Commented out unused scroll animation refs - ready for future animation features
  // const clientsRef = useScrollAnimation()
  // const workRef = useScrollAnimation()
  // const whatWeDoRef = useScrollAnimation()
  // const labRef = useScrollAnimation()

  return (
    <SmoothScrollLayout>
      {/* Beautiful Navigation with Scroll Progress */}
      <Navigation />
      
      {/* Stunning Hero Section */}
      <Hero />
      
      {/* Interactive Products Showcase */}
      <ClientsLogos />
      <WorkHistory />
      <PersonalProfile />
    </SmoothScrollLayout>
  )
}