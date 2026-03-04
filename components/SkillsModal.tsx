"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, Layers, Cpu, Server } from "lucide-react";

interface SkillsModalProps {
    skill: {
        id: number;
        name: string;
        description: string;
        level: number;
    } | null;
    onClose: () => void;
}

export default function SkillsModal({ skill, onClose }: SkillsModalProps) {
    // Use a generic icon based on name
    const getIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case "react":
            case "next.js":
                return <Code2 className="text-accent" size={32} />;
            case "three.js":
            case "gsap":
            case "framer motion":
                return <Layers className="text-emerald-400" size={32} />;
            case "node.js":
                return <Server className="text-purple-400" size={32} />;
            default:
                return <Cpu className="text-accent" size={32} />;
        }
    };

    return (
        <AnimatePresence>
            {skill && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 pointer-events-auto"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 30, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 30, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl max-w-md w-full relative shadow-[0_0_50px_var(--color-accent-glow)] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                {getIcon(skill.name)}
                            </div>
                            <h3 className="text-3xl font-bold text-white">{skill.name}</h3>
                        </div>

                        <p className="text-white/70 mb-8 leading-relaxed">
                            {skill.description}
                        </p>

                        <div className="space-y-3">
                            <div className="flex justify-between items-end text-sm text-white/60 font-mono tracking-wide">
                                <span>SYSTEM.PROFICIENCY</span>
                                <span className="text-accent font-bold">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full bg-accent shadow-[0_0_15px_var(--color-accent-glow)] rounded-full relative"
                                >
                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
