"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent text-sm mb-6 tracking-wide">
                        WELCOME TO THE FUTURE
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    CREATIVE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">DEVELOPER</span>
                </motion.h1>

                <motion.p
                    className="max-w-xl text-white/60 text-lg mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Building immersive digital experiences with modern web technologies and 3D interactions.
                </motion.p>

                <motion.button
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full overflow-hidden flex items-center gap-2 pointer-events-auto hover:border-accent hover:shadow-[0_0_30px_var(--color-accent-glow)] transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                        Explore Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </motion.button>
            </div>
        </section>
    );
}
