// File: src/hooks/useScrollAnimation.ts
"use client"

import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const elementRef = useRef<HTMLElement>(null)
  
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '-50px 0px -50px 0px',
    triggerOnce: false,
    ...options
  }
  
  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial state
    element.classList.add('animate-out')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            entry.target.classList.remove('animate-out')
            
            if (defaultOptions.triggerOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!defaultOptions.triggerOnce) {
            entry.target.classList.add('animate-out')
            entry.target.classList.remove('animate-in')
          }
        })
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin,
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return elementRef
}