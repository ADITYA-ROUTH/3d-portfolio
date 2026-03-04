"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, Text3D } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingText() {
    const textRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (textRef.current) {
            // Gentle floating animation
            textRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
            textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
            textRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.02;
        }
    });

    return (
        <group ref={textRef}>
            <Center>
                <Text3D
                    font="/fonts/Inter_Bold.json"
                    size={1.5}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    ADITYA ROUTH
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#ffffff"
                        emissiveIntensity={0.2}
                        roughness={0.1}
                        metalness={0.8}
                        side={THREE.DoubleSide}
                    />
                </Text3D>
            </Center>
        </group>
    );
}
