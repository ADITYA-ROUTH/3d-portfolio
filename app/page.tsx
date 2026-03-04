"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundGlow from "@/components/BackgroundGlow";
import SceneFallback from "@/components/SceneFallback";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/scenes/HeroScene"), {
  ssr: false,
  loading: () => <SceneFallback />
});

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center"><SceneFallback /></div>
});

const SkillsSection = dynamic(() => import("@/components/SkillsSection"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center"><SceneFallback /></div>
});

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Page load fade-in
    gsap.from(container.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // Fade in sections on scroll
    const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");

    sections.forEach((sec) => {
      gsap.from(sec, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, { scope: container });

  return (
    <main ref={container} className="relative min-h-screen">
      {/* Persistent Fixed Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroScene />
        <BackgroundGlow />
      </div>

      {/* All page content sits above the background */}
      <div className="relative z-10 pointer-events-auto">
        <Navbar />
        <Hero />

        <ProjectsSection />

        <AboutSection />

        <SkillsSection />

        <ContactSection />
      </div>
    </main>
  );
}
