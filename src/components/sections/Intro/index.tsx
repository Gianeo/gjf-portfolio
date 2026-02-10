"use client";

import { ArrowDownIcon } from "@phosphor-icons/react";
import { FadeReveal, BlindReveal } from "@/components/motion";
import Image from "next/image";

interface IntroProps {
  className?: string;
}

export function Intro({ className = "" }: IntroProps) {
  return (
    <section className={`relative pb-0 lg:pb-24 z-0 bg-transparent ${className}`}>

          <BlindReveal
            className="hidden lg:block absolute inset-0 opacity-30"
            index={0}
            total={1}
            stagger="none"
            offset={["start 85%", "start 0%"]}
          >
            <Image
              src="/images/hero/intro.webp"
              alt="Hero background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-background/10" />
          </BlindReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 body-base text-muted space-y-8 px-6 lg:px-0 lg:pt-24 relative">

            <div className="sm:col-start-2 lg:col-start-5 xl:col-start-8 lg:col-span-7 xl:col-span-4 space-y-8 max-w-2xl lg:max-w-xl lg:pt-8 xl:pt-24">
              <FadeReveal className="body-label text-accent">
                Design Leadership
              </FadeReveal>
              <div>
                <FadeReveal>
                  <h2 className="heading-display text-primary">
                    With intention, action, and care.
                  </h2>
                </FadeReveal>
              </div>
            </div>

            <div className="sm:col-start-2 lg:col-start-5 xl:col-start-5 lg:col-span-3 space-y-6 lg:mt-24 xl:mt-32 lg:pr-16 max-w-md">
              <FadeReveal>
                You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
              </FadeReveal>
              <FadeReveal>
                You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
              </FadeReveal>
            </div>

            <div className="sm:col-start-2 lg:col-start-8 xl:col-start-8 lg:col-span-3 space-y-6 lg:mt-24 xl:mt-32 lg:pr-16 max-w-md">
              <FadeReveal className="heading-sm text-secondary">
                That&apos;s where I come in.
              </FadeReveal>
              <FadeReveal>
                I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
              </FadeReveal>
            </div>

            <div className="hidden row-start-2 col-start-1 pb-6 lg:flex flex-col justify-end items-end">
              <ArrowDownIcon className="size-8 text-accent animate-bounce" />
            </div>

          </div>
    </section >
  );
}

export default Intro;
