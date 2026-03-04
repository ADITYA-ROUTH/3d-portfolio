"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export default function RotatingGeometry() {
    const icoRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (icoRef.current) {
            icoRef.current.rotation.x += 0.005;
            icoRef.current.rotation.y += 0.005;
        }
        if (torusRef.current) {
            torusRef.current.rotation.x -= 0.002;
            torusRef.current.rotation.y -= 0.003;
        }
    });

    return (
        <group>
            {/* Central Abstract Shape */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
                <mesh ref={icoRef} position={[4, 2, -5]}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial
                        color="#3b82f6"
                        wireframe
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            </Float>

            {/* Surrounding Ring */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.3, 0.3]}>
                <mesh ref={torusRef} position={[-5, -2, -8]}>
                    <torusGeometry args={[2, 0.1, 16, 100]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        wireframe
                        transparent
                        opacity={0.2}
                    />
                </mesh>
            </Float>
        </group>
    );
}
