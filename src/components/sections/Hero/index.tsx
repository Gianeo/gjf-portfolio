"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Navigation from "@/components/navigation/Navigation";
import { ArrowDownIcon } from "@phosphor-icons/react";
import { Check, Copy, MessagesSquare } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  className?: string;
}

const whatIDo = [
  { title: "Product", description: "Creation and building" },
  { title: "User Interfaces", description: "Design and Engineering" },
  { title: "Leadership", description: "People and Performance" },
  { title: "Coaching", description: "Talent development" },
  { title: "Brand", description: "Development" },
];

const served = [
  { title: "SaaS", description: "Subscriptions, Analytics, Services" },
  { title: "Fintech", description: "Banking, Payments" },
  { title: "Ecommerce", description: "General Merchandise, Grocery" },
  { title: "0-1 to ScaleUp", description: "Best fit for" },
  { title: "Global", description: "From the US, UK, EU, to India" },
];

const history = [
  { label: "Today", company: "JustScore" },
  { label: "2020-24", company: "Chargebee" },
  { label: "2019-20", company: "Zopa Bank" },
  { label: "2019", company: "Sainsbury's Argos" },
  { label: "2010-19", company: "Ocado Technology" },
  { label: "Since 1999", company: "Freelance" },
];

export default function HeroSection({ className = "" }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const email = "giannijfavaretto@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  useEffect(() => {
    if (!popoverOpen) return;
    const handleScroll = () => setPopoverOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popoverOpen]);

  return (
    <section
      className={`relative text-primary min-h-screen flex flex-col ${className}`}
    >
      <div className="relative flex-1">
        <div className="sticky top-0 z-20">
          <Navigation />
        </div>
      </div>

      <div className="w-full p-6 mt-88 lg:mt-0 lg:p-10 lg:px-12 space-y-12 lg:space-y-16 backdrop-blur-md bg-background/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-4 space-y-12 flex flex-col justify-between pb-8 lg:pb-0">
            <div className="space-y-6">
              <p className="body-label text-muted">
                Craftsmanship + Leadership
              </p>
              <h1
                id="hero-heading"
                className="heading-display leading-tight text-primary"
              >
                Design+ for growth.
              </h1>
            </div>
            <div>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button variant="accent" size="base" className="gap-2 data-[state=open]:opacity-50 cursor-pointer">
                    <span className="inline-flex size-7 items-center justify-center">
                      <MessagesSquare />
                    </span>
                    Shall we chat?
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-54 space-y-2 my-2 bg-background/80 backdrop-blur-sm shadow-xl">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm transition hover:text-accent cursor-pointer"
                    aria-label="Copy email to clipboard"
                  >
                    <span className="font-medium text-foreground-strong">
                      {copied ? "Email copied" : "Copy my email"}
                    </span>
                    <span className="flex items-center justify-center shrink-0 size-5">
                      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                    </span>
                  </button>
                  <div className="rounded-md border border-transparent px-3 py-2 text-sm text-muted">
                    Chatbox coming soon.
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-6">
              <p className="body-label text-muted">
                What I do
              </p>
              <ul className="space-y-1.5">
                {whatIDo.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-black/10 pb-2 flex flex-col last:border-0 last:pb-0 dark:border-white/8"
                  >
                    <span className="heading-sm text-secondary">
                      {item.title}
                    </span>
                    <span className="body-sm text-muted">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block space-y-6">
              <p className="body-label text-muted">
                Served
              </p>
              <ul className="space-y-1.5">
                {served.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-black/10 pb-2 flex flex-col last:border-0 last:pb-0 dark:border-white/8"
                  >
                    <span className="heading-sm text-secondary">
                      {item.title}
                    </span>
                    <span className="body-sm text-muted">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 relative">
              <p className="body-label text-muted">
                History
              </p>
              <ul className="space-y-1.5">
                {history.map((item) => (
                  <li
                    key={item.label}
                    className="border-b border-black/10 pb-2 last:border-0 last:pb-0 dark:border-white/8"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="body-sm text-muted whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="body-sm text-secondary text-right">
                        {item.company}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <ArrowDownIcon className="absolute bottom-0 size-8 right-0 text-accent animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
