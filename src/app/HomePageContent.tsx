"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { motionTokens } from "@/system/motion-tokens";
import { springPresets } from "@/system/motion-presets";
import { MotionDebugBar } from "@/components/motion";
import { LogoGf } from "@/components/logo/LogoGf";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import ClientsLogos from "@/components/sections/ClientsLogos";
import Statement from "@/components/sections/Statements/Statement01";
import ProductShowcase from "@/components/sections/ProductShowcase";
import WorkHistory from "@/components/sections/WorkHistory";
import PersonalProfile from "@/components/sections/Profile";

export default function HomePageContent() {
  const prefersReducedMotion = useReducedMotion();
  const [viewportHeight, setViewportHeight] = useState(1);
  const [logoHeight, setLogoHeight] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHeight = () => setViewportHeight(window.innerHeight || 1);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (!logoRef.current) return;
    const updateLogoHeight = () => {
      setLogoHeight(logoRef.current?.getBoundingClientRect().height || 0);
    };
    updateLogoHeight();
    const resizeObserver = new ResizeObserver(updateLogoHeight);
    resizeObserver.observe(logoRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const logoYRaw = useTransform(scrollY, (value) => {
    const offset = Math.max(0, viewportHeight / 2 - 80 - logoHeight / 2);
    const t = Math.min(value / (viewportHeight * 1.1), 1);
    const eased = 1 - Math.pow(1 - t, 3);
    return offset * (1 - eased);
  });
  const logoScaleRaw = useTransform(scrollY, (value) => {
    const t = Math.min(value / (viewportHeight * 1.1), 1);
    const eased = 1 - Math.pow(1 - t, 3);
    return 1 - 0.75 * eased;
  });
  const logoOpacityRaw = useTransform(logoScaleRaw, [1, 0.25], [1, 0], { clamp: true });
  const bgScaleRaw = useTransform(scrollY, (value) => {
    const t = Math.min(value / 1000, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    return 1 - 0.25 * eased;
  });
  const overlayOpacityRaw = useTransform(scrollY, [0, viewportHeight * 0.75], [0.25, 0.965]);
  const logoY = useSpring(logoYRaw, springPresets.calm);
  const logoScale = useSpring(logoScaleRaw, springPresets.calm);
  const logoOpacity = useSpring(logoOpacityRaw, springPresets.calm);
  const bgScale = useSpring(bgScaleRaw, springPresets.calm);
  const overlayOpacity = useSpring(overlayOpacityRaw, springPresets.calm);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={{ duration: motionTokens.durationShort, ease: motionTokens.easeOut }}>
        <div className="relative">
          <div className="fixed inset-0 z-0 pointer-events-none w-screen overflow-hidden">
            <m.div
              className="absolute inset-0"
              style={prefersReducedMotion ? { scale: 1 } : { scale: bgScale }}
              aria-hidden="true"
            >
              <Image
                src="/images/hero/hero.webp"
                alt="Hero background"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <m.div className="absolute inset-0 bg-background" style={{ opacity: overlayOpacity }} />
            </m.div>

            <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
              <m.div
                ref={logoRef}
                className="relative w-full max-w-[90vw] lg:max-w-5xl aspect-video flex items-center justify-center"
                style={
                  prefersReducedMotion
                    ? { y: 0, scale: 1, opacity: 1 }
                    : { y: logoY, scale: logoScale, opacity: logoOpacity, transformOrigin: "center", willChange: "transform, opacity" }
                }
              >
                <LogoGf
                  className="relative z-10 w-32 md:w-64 h-auto ml-8 lg:ml-16 mt-8 md:mt-0"
                  aria-label="Gianeo Studio logo"
                />
              </m.div>
            </div>
          </div>

          <div className="relative z-10">
            <section
              id="hero"
              aria-labelledby="hero-heading"
              role="region"
              aria-label="Introduction and overview"
            >
              <Hero />
            </section>

            <main
              id="main-content"
              role="main"
              className="pb-24 px-0"
            >
              <section
                id="clients"
                aria-label="Client logos"
                role="region"
              >
                <ClientsLogos />
              </section>

              <section
                id="intro"
                aria-label="Intro overview"
                role="region"
              >
                <Intro />
              </section>

              <section
                id="statement"
                aria-label="Statement"
                role="region"
              >
                <Statement />
              </section>

              <section
                id="product-showcase"
                aria-labelledby="products-heading"
                role="region"
                aria-label="Featured product work and case studies"
              >
                <h2 id="products-heading" className="sr-only">
                  Featured Product Work
                </h2>
                <ProductShowcase />
              </section>

              <section
                id="history"
                aria-labelledby="history-heading"
                role="region"
                aria-label="History"
              >
                <h2 id="history-heading" className="sr-only">
                  History
                </h2>
                <WorkHistory />
              </section>

              <section
                id="profile"
                aria-labelledby="profile-heading"
                role="region"
                aria-label="Personal background and philosophy"
              >
                <h2 id="profile-heading" className="sr-only">
                  Personal Profile and Background
                </h2>
                <PersonalProfile />
              </section>
            </main>
          </div>
        </div>
        <MotionDebugBar
          items={[
            { label: "page", value: scrollYProgress },
            { label: "logoScale", value: logoScale },
            { label: "bgScale", value: bgScale },
          ]}
        />
      </MotionConfig>
    </LazyMotion>
  );
}
