"use client";

import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import ShaderBackground from "./canvas/ShaderBackground";
import ProjectsShowcase from "./canvas/ProjectsShowcase";
import ProjectPanel from "./ProjectPanel";
import { Project, projectsData } from "@/lib/projectsData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProjectsSection() {
    const [repos] = useState<Project[]>(projectsData);
    const [activeRepo, setActiveRepo] = useState<Project | null>(null);
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".projects-header", {
            opacity: 0,
            y: 30,
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
            id="projects"
            className="reveal-section w-full border-t border-white/10"
            style={{
                position: "relative",
                zIndex: 10,
                minHeight: "100vh",
                background: "#000000",
            }}
        >
            {/* Header — fades out when a project is focused */}
            <div
                className={`absolute top-[10%] left-0 right-0 text-center pointer-events-none projects-header px-4 transition-opacity duration-500 ${activeRepo ? 'opacity-0' : 'opacity-100'}`}
                style={{ zIndex: 20 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Architecture Log
                </h2>
                <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg mb-2">
                    Explore featured highlights of my core work.
                </p>
            </div>

            {/* Three.js Canvas for project cubes */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            >
                <Canvas
                    camera={{ position: [0, 2, 12], fov: 45 }}
                    onClick={() => setActiveRepo(null)}
                    dpr={[1, 2]}
                    gl={{ antialias: true, alpha: false }}
                    style={{ background: "#000000" }}
                >
                    <ShaderBackground />
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                    <directionalLight position={[-10, -10, -5]} intensity={0.7} color="#3b82f6" />

                    <ProjectsShowcase
                        repos={repos}
                        activeRepo={activeRepo}
                        onProjectClick={setActiveRepo}
                    />

                    {/* Gives nice reflections to the cubes */}
                    <Environment preset="city" />
                </Canvas>
            </div>

            {/* Project detail panel */}
            <ProjectPanel repo={activeRepo} onClose={() => setActiveRepo(null)} />

            {/* Click away layer to close panel */}
            {activeRepo && (
                <div
                    className="absolute inset-0 pointer-events-auto"
                    onClick={() => setActiveRepo(null)}
                    style={{ cursor: "zoom-out", zIndex: 15 }}
                />
            )}
        </section>
    );
}
