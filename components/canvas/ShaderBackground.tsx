"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    // Push the z value near the far clipping plane (1.0 in NDC is far, -1.0 is near)
    gl_Position = vec4(position.xy, 0.99, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;

// Simple pseudo-random and noise functions
float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// 2D Noise
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main() {
    vec2 st = vUv * 3.0;
    
    // Add time based distortion
    st.x += noise(st + uTime * 0.1) * 0.5;
    st.y += noise(st - uTime * 0.2) * 0.5;
    
    float n = noise(st + uTime * 0.5);
    
    // Create a smooth gradient background combined with noise
    vec3 baseColor = vec3(0.02, 0.02, 0.05); // deep dark blue/black
    vec3 glowColor = uColor * n * 0.5;
    
    // Vignette
    float dist = length(vUv - 0.5) * 2.0;
    float vignette = 1.0 - smoothstep(0.5, 1.5, dist);
    
    gl_FragColor = vec4(baseColor + glowColor * vignette, 1.0);
}
`;

export default function ShaderBackground() {
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#3b82f6") }, // Default accent
    }), []);

    // Sync shader color with CSS variable accent color
    useEffect(() => {
        const updateColor = () => {
            const root = document.documentElement;
            // Get computed value of --accent from current theme
            const accentHex = getComputedStyle(root).getPropertyValue('--accent').trim();
            if (accentHex && materialRef.current) {
                materialRef.current.uniforms.uColor.value.set(accentHex);
            }
        };

        // Initial update
        setTimeout(updateColor, 100); // small delay to ensure CSS vars are applied

        // Listen for theme changes (using a MutationObserver on data-theme)
        const observer = new MutationObserver(updateColor);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => observer.disconnect();
    }, []);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    return (
        <mesh frustumCulled={false} renderOrder={-1}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
}
