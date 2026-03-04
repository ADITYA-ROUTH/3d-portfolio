"use client";

import { useRef, useState, useMemo, memo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Project } from "@/lib/projectsData";

interface ProjectNodeProps {
    repo: Project;
    position: [number, number, number];
    isActive: boolean;
    onClick: (repo: Project, position: THREE.Vector3) => void;
}

const ProjectNode = memo(({ repo, position, isActive, onClick }: ProjectNodeProps) => {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    // Create geometries inside useMemo so they survive React lifecycle
    // Module-level THREE objects get disposed by R3F's cleanup on unmount
    const boxGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
    const wireframeGeometry = useMemo(() => new THREE.BoxGeometry(1.05, 1.05, 1.05), []);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Float animation oscillating around its local 0 origin
        const floatOffset = Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1;
        groupRef.current.position.y = floatOffset;

        // Gentle rotation
        groupRef.current.rotation.x += 0.005;
        groupRef.current.rotation.y += 0.01;

        // Scale on hover or active
        const targetScale = isActive ? 1.5 : hovered ? 1.2 : 1;
        groupRef.current.scale.lerp(
            new THREE.Vector3(targetScale, targetScale, targetScale),
            0.1
        );
    });

    const handlePointerOver = (e: any) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
    };

    const handlePointerOut = () => {
        setHovered(false);
        document.body.style.cursor = "auto";
    };

    const handleClick = (e: any) => {
        e.stopPropagation();
        onClick(repo, new THREE.Vector3(...position));
    };

    const handleDoubleClick = (e: any) => {
        e.stopPropagation();
        const url = repo.liveUrl || repo.githubUrl;
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <group position={position}>
            <group
                ref={groupRef}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
            >
                {/* Main solid cube */}
                <mesh geometry={boxGeometry}>
                    <meshStandardMaterial
                        color={isActive ? "#60a5fa" : hovered ? "#93c5fd" : "#3b82f6"}
                        emissive={isActive ? "#60a5fa" : hovered ? "#93c5fd" : "#3b82f6"}
                        emissiveIntensity={isActive ? 1.2 : hovered ? 0.9 : 0.7}
                        roughness={0.3}
                        metalness={0.3}
                    />
                </mesh>

                {/* Wireframe overlay for tech aesthetic */}
                <mesh geometry={wireframeGeometry}>
                    <meshBasicMaterial
                        color={isActive ? "#ffffff" : "#60a5fa"}
                        wireframe
                        transparent
                        opacity={isActive ? 0.8 : 0.4}
                    />
                </mesh>
            </group>

            <Html distanceFactor={15} position={[0, -1.2, 0]} center className="pointer-events-none transition-opacity duration-300">
                <div className={`text-center transition-all duration-300 ${isActive || hovered ? 'opacity-100 scale-110' : 'opacity-60 scale-100'}`}>
                    <div className="font-mono text-sm font-bold text-white whitespace-nowrap px-2 py-1 bg-black/50 backdrop-blur-sm rounded border border-white/10">
                        {repo.name}
                    </div>
                    {repo.techStack && repo.techStack.length > 0 && (
                        <div className="text-[10px] text-accent mt-1 uppercase tracking-wider">
                            {repo.techStack[0]}
                        </div>
                    )}
                    {(repo.liveUrl || repo.githubUrl) && (
                        <div className={`text-[9px] mt-1 uppercase tracking-wider font-medium ${repo.liveUrl ? 'text-emerald-400' : 'text-purple-400'}`}>
                            {repo.liveUrl ? '🔗 Live' : '⌂ GitHub'}
                        </div>
                    )}
                </div>
            </Html>
        </group>
    );
});

ProjectNode.displayName = "ProjectNode";

export default ProjectNode;
