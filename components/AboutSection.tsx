"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".about-header", {
            opacity: 0,
            y: -30,
            duration: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="about"
            className="reveal-section relative min-h-screen flex flex-col items-center justify-center py-20 px-6 border-t border-white/10 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl mx-auto">
                <div className="about-header text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-accent/50 mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            I&apos;m an aspiring AI/ML engineer currently pursuing my{" "}
                            <span className="text-white font-semibold">B.Tech in Computer Science &amp; Engineering (AI/ML)</span>.
                            I thrive on turning complex problems into elegant, intelligent solutions — from training deep learning models to deploying them as production-ready applications.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            My hands-on experience spans projects like a{" "}
                            <span className="text-white font-semibold">Plant Disease Detection System</span> using CNNs,{" "}
                            a <span className="text-white font-semibold">Real-time Hand Gesture Recognition</span> app with MediaPipe &amp; OpenCV,
                            and <span className="text-white font-semibold">ShortsPilot</span> — an AI-powered video automation platform.
                            I&apos;m equally comfortable working across the stack with Python, TensorFlow, Next.js, and REST APIs.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            I&apos;m constantly exploring cutting-edge concepts — from transformer architectures and computer vision pipelines to scalable backend systems and cloud deployment. My goal is to engineer AI-driven products that create real-world impact at scale.
                        </motion.p>
                    </div>

                    {/* Visual Cards Column */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: BrainCircuit, title: "AI/ML Engineer", desc: "Deep learning, computer vision & intelligent model deployment." },
                            { icon: Server, title: "Backend Systems", desc: "Scalable APIs, databases & cloud-native architectures." },
                            { icon: GraduationCap, title: "B.Tech CSE (AI/ML)", desc: "Pursuing Computer Science with AI/ML specialization." },
                            { icon: Code2, title: "Android Dev", desc: "Native mobile apps with intelligent features." }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * idx }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <card.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                                <p className="text-sm text-white/50">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
