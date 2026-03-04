"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projectsData";
import { FolderGit2, ExternalLink, Trophy, Cpu, Code2, Target, Lightbulb, PlayCircle, Layers } from "lucide-react";

interface ProjectPanelProps {
    repo: Project | null;
    onClose: () => void;
}

export default function ProjectPanel({ repo, onClose }: ProjectPanelProps) {
    return (
        <AnimatePresence>
            {repo && (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[calc(100%-2rem)] md:w-full max-w-xl z-20 pointer-events-auto max-h-[90vh] overflow-y-auto custom-scrollbar"
                >
                    <div className="bg-black/60 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_0_40px_var(--color-accent-glow)] relative">

                        {/* Ambient Background Glow inside panel */}
                        <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-start gap-4 pr-12">
                                <div className="p-3 bg-white/10 rounded-xl border border-white/5 mt-1">
                                    <FolderGit2 size={28} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                                        {repo.name}
                                    </h3>
                                    <p className="text-accent/90 font-medium text-sm leading-relaxed">
                                        {repo.tagline}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-xs font-mono bg-white/5 px-2 py-1 rounded-md border border-white/10 hover:bg-white/10 hover:border-white/30"
                            >
                                ESC
                            </button>
                        </div>

                        {/* Achievement Badge */}
                        {repo.achievement && (
                            <div className="mb-6 flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500/90 px-4 py-2 rounded-xl text-sm font-medium w-max">
                                <Trophy size={16} />
                                {repo.achievement}
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* Problem & Solution */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {repo.problem && (
                                    <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                                        <div className="flex items-center gap-2 mb-2 text-white/80 font-semibold text-sm">
                                            <Target size={16} className="text-red-400" />
                                            The Problem
                                        </div>
                                        <p className="text-white/60 text-sm leading-relaxed">{repo.problem}</p>
                                    </div>
                                )}
                                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2 text-white/80 font-semibold text-sm">
                                        <Lightbulb size={16} className="text-green-400" />
                                        The Solution
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed">{repo.solution}</p>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <div className="flex items-center gap-2 mb-3 text-white/80 font-semibold text-sm">
                                    <Code2 size={16} className="text-accent" />
                                    Technology Stack
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {repo.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                                <div className="flex items-center gap-2 mb-4 text-white p font-bold">
                                    <Cpu size={18} className="text-white" />
                                    Key Features
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/70">
                                    {repo.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-accent mt-0.5">▹</span>
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Architecture */}
                            {repo.architecture && (
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-white/80 font-semibold text-sm">
                                        <Layers size={16} className="text-purple-400" />
                                        System Architecture
                                    </div>
                                    <div className="p-3 bg-black/40 border border-white/10 rounded-xl text-xs font-mono text-white/60 text-center leading-relaxed">
                                        {repo.architecture}
                                    </div>
                                </div>
                            )}

                            {/* Result / Impact */}
                            {(repo.result || repo.impact) && (
                                <div className="bg-accent/10 border border-accent/20 p-4 rounded-2xl">
                                    <p className="text-accent/90 text-sm font-medium leading-relaxed">
                                        <span className="text-accent font-bold uppercase text-xs tracking-wider mr-2">Impact:</span>
                                        {repo.result || repo.impact}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-8">
                            {repo.githubUrl ? (
                                <a
                                    href={repo.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white py-3 rounded-xl font-medium transition-all duration-300 border border-white/10 hover:border-white/30"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FolderGit2 size={18} />
                                    <span className="text-sm">View Source</span>
                                </a>
                            ) : (
                                <button
                                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 text-white/30 py-3 rounded-xl font-medium border border-white/10 border-dashed cursor-not-allowed"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <LockIcon size={18} />
                                    <span className="text-sm">Source Private</span>
                                </button>
                            )}
                            {repo.liveUrl && (
                                <a
                                    href={repo.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-accent/80 hover:bg-accent text-white py-3 rounded-xl font-medium transition-all duration-300 shadow-[0_0_15px_var(--color-accent-glow)] hover:shadow-[0_0_25px_var(--color-accent-glow)]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <PlayCircle size={18} />
                                    <span className="text-sm">Live Demo</span>
                                </a>
                            )}
                        </div>

                    </div>
                    {/* Basic scoped CSS inside the component for scrollbar */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .custom-scrollbar::-webkit-scrollbar {
                            width: 4px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-track {
                            background: transparent;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: rgba(255, 255, 255, 0.2);
                            border-radius: 10px;
                        }
                        `}} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Temporary internal component for Lock Icon
function LockIcon({ size = 24 }: { size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}
