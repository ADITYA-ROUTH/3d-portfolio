"use client";

import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillsGalaxy, { skillsData } from "./canvas/SkillsGalaxy";
import SkillsModal from "./SkillsModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SkillsSection() {
    const [selectedSkill, setSelectedSkill] = useState<typeof skillsData[0] | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".skills-header", {
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
            id="skills"
            className="reveal-section relative min-h-[100vh] flex flex-col items-center justify-center border-t border-white/10 overflow-hidden"
        >
            <div className="absolute top-[10%] left-0 right-0 z-10 text-center pointer-events-none skills-header px-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    Technical Core
                </h2>
                <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg">
                    Interact with the skill nodes tracing the orbit of my tech stack.
                </p>
            </div>

            <div className="w-full h-full absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 16], fov: 45 }} dpr={[1, 2]}>
                    <ambientLight intensity={0.5} />
                    <SkillsGalaxy onSkillClick={setSelectedSkill} />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.8}
                        maxPolarAngle={Math.PI / 1.5}
                        minPolarAngle={Math.PI / 3}
                    />
                </Canvas>
            </div>

            <SkillsModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        </section>
    );
}
