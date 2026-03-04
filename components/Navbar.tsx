"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
    ssr: false,
    loading: () => <div className="w-10 h-10 rounded-full bg-white/5 animate-pulse backdrop-blur-md border border-white/10" />
});

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    AD<span className="text-accent">ITYA</span>
                </Link>

                <div className="hidden md:flex gap-8">
                    {["Home", "Projects", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm uppercase tracking-widest hover:text-accent transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="flex items-center ml-4 border-l border-white/10 pl-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
