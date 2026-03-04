"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!glowRef.current) return;

        gsap.to(glowRef.current, {
            yPercent: 100,
            scale: 1.5,
            opacity: 0.1,
            ease: "none",
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });
    });

    return (
        <div
            ref={glowRef}
            className="absolute top-[20%] left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen"
        />
    );
}
