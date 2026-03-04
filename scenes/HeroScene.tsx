"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import FloatingText from "@/components/canvas/FloatingText";
import Particles from "@/components/canvas/Particles";
import RotatingGeometry from "@/components/canvas/RotatingGeometry";
import CameraRig from "@/components/canvas/CameraRig";
import ShaderBackground from "@/components/canvas/ShaderBackground";

export default function HeroScene() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas
                camera={{ position: [0, 2, 10], fov: 50 }}
                style={{ pointerEvents: "auto" }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: false }}
            >
                <ShaderBackground />

                {/* Basic lighting setup */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />

                {/* 3D Elements wrapped in Suspense for font loading */}
                <Suspense fallback={null}>
                    <FloatingText />
                    <RotatingGeometry />
                </Suspense>

                <Particles count={1500} />

                {/* Parallax Rig */}
                <CameraRig />
            </Canvas>
        </div>
    );
}
