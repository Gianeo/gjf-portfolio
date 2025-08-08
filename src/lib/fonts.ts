// src/lib/fonts.ts
import localFont from 'next/font/local'

// Switzer Font - All weights
export const switzer = localFont({
  src: [
    {
      path: '../../public/fonts/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Switzer-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Switzer-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Switzer-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-switzer',
  display: 'swap',
})

// Azeret Mono Font - Light weight for monospace
export const azeretMono = localFont({
  src: [
    {
      path: '../../public/fonts/AzeretMono-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-azeret-mono',
  display: 'swap',
})

// Export for easy access
export const fonts = {
  copy: switzer,      // Switzer for body text
  heading: switzer,   // Switzer-Semibold for headings
  mono: azeretMono,   // Azeret Mono for monospace
}