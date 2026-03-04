"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraRig() {
    useFrame((state) => {
        // Pointer parallax
        const targetX = (state.pointer.x * 2.5);
        const targetY = (state.pointer.y * 1.5) + 2; // Offset Y slightly

        // Calculate scroll progress (0 to 1) for Z-axis movement
        let scrollProgress = 0;
        if (typeof window !== "undefined") {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
        }

        // Move camera forward into the scene as user scrolls down
        const targetZ = 10 - (scrollProgress * 15);

        // Smoothly interpolate the camera position to the target
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
        state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);

        // Have the camera always look at the center
        state.camera.lookAt(0, 0, 0);
    });

    return null;
}
