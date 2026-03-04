"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export const skillsData = [
    { id: 0, name: "React", description: "Building interactive UIs with modern component-based architecture and hooks.", level: 95 },
    { id: 1, name: "Next.js", description: "Full-stack React applications with App Router, SSR, and API routes.", level: 90 },
    { id: 2, name: "Three.js", description: "Creating immersive, high-performance 3D web experiences and scenes.", level: 85 },
    { id: 3, name: "TypeScript", description: "Type-safe JavaScript development for scalable and maintainable applications.", level: 90 },
    { id: 4, name: "Tailwind CSS", description: "Utility-first CSS framework for rapid and responsive UI development.", level: 95 },
    { id: 5, name: "GSAP", description: "Crafting highly performant, timeline-based web animations and scroll effects.", level: 85 },
    { id: 6, name: "Framer Motion", description: "Declarative, physics-based animations for dynamic React components.", level: 90 },
    { id: 7, name: "Node.js", description: "Backend JavaScript runtime for building scalable RESTful APIs and servers.", level: 80 },
];

export default function SkillsGalaxy({ onSkillClick }: { onSkillClick: (skill: typeof skillsData[0]) => void }) {
    const groupRef = useRef<THREE.Group>(null);
    const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
    const coreRef = useRef<THREE.Mesh>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Colors
    const normalColor = useMemo(() => new THREE.Color("#3b82f6"), []);
    const hoverColor = useMemo(() => new THREE.Color("#ffffff"), []);

    // Keep track of current colors for smooth interpolation
    const currentColors = useMemo(() => {
        return skillsData.map(() => new THREE.Color("#3b82f6"));
    }, []);

    // Calculate node positions
    const nodePositions = useMemo(() => {
        return skillsData.map((_, i) => {
            // Create a nice spherical distribution using golden ratio spiral
            const phi = Math.acos(-1 + (2 * i) / skillsData.length);
            const theta = Math.sqrt(skillsData.length * Math.PI) * phi;
            const radius = 6;

            return new THREE.Vector3(
                radius * Math.cos(theta) * Math.sin(phi),
                radius * Math.sin(theta) * Math.sin(phi),
                radius * Math.cos(phi)
            );
        });
    }, []);

    // Initialize instanced mesh matrices and colors
    useEffect(() => {
        if (!instancedMeshRef.current) return;
        const dummy = new THREE.Object3D();
        for (let i = 0; i < skillsData.length; i++) {
            dummy.position.copy(nodePositions[i]);
            dummy.lookAt(0, 0, 0); // Nodes face the core
            dummy.updateMatrix();
            instancedMeshRef.current.setMatrixAt(i, dummy.matrix);
            instancedMeshRef.current.setColorAt(i, normalColor);
        }
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
        instancedMeshRef.current.instanceColor!.needsUpdate = true;
    }, [nodePositions, normalColor]);

    useFrame((state, delta) => {
        // Pulse the core
        if (coreRef.current && coreRef.current.material instanceof THREE.ShaderMaterial) {
            coreRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
        }

        // Update node glow shader time
        if (instancedMeshRef.current && instancedMeshRef.current.material instanceof THREE.ShaderMaterial) {
            instancedMeshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
        }

        // Smooth color transition for hover
        let needsColorUpdate = false;
        for (let i = 0; i < skillsData.length; i++) {
            const targetColor = hoveredId === i ? hoverColor : normalColor;
            if (!currentColors[i].equals(targetColor)) {
                currentColors[i].lerp(targetColor, 15 * delta);
                instancedMeshRef.current?.setColorAt(i, currentColors[i]);
                needsColorUpdate = true;
            }
        }
        if (needsColorUpdate && instancedMeshRef.current?.instanceColor) {
            instancedMeshRef.current.instanceColor.needsUpdate = true;
        }
    });

    const handlePointerOver = (e: any) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
        if (e.instanceId !== undefined) {
            setHoveredId(e.instanceId);
        }
    };

    const handlePointerOut = () => {
        document.body.style.cursor = "auto";
        setHoveredId(null);
    };

    const handleClick = (e: any) => {
        e.stopPropagation();
        if (e.instanceId !== undefined) {
            onSkillClick(skillsData[e.instanceId]);
        }
    };

    return (
        <group ref={groupRef}>
            {/* Central Glowing Core */}
            <mesh ref={coreRef}>
                <sphereGeometry args={[2, 64, 64]} />
                <shaderMaterial
                    transparent
                    depthWrite={false}
                    uniforms={{ uTime: { value: 0 } }}
                    vertexShader={`
            varying vec2 vUv;
            varying vec3 vNormal;
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
                    fragmentShader={`
            varying vec2 vUv;
            varying vec3 vNormal;
            uniform float uTime;
            
            // Simplex noise to make the core turbulent
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
            float snoise(vec2 v) {
              const vec4 C = vec4(0.211324865405187,  0.366025403784439, -0.577350269189626, 0.024390243902439);
              vec2 i  = floor(v + dot(v, C.yy) );
              vec2 x0 = v -   i + dot(i, C.xx);
              vec2 i1;
              i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
              vec4 x12 = x0.xyxy + C.xxzz;
              x12.xy -= i1;
              i = mod289(i);
              vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
              vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
              m = m*m;
              m = m*m;
              vec3 x = 2.0 * fract(p * C.www) - 1.0;
              vec3 h = abs(x) - 0.5;
              vec3 ox = floor(x + 0.5);
              vec3 a0 = x - ox;
              m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
              vec3 g;
              g.x  = a0.x  * x0.x  + h.x  * x0.y;
              g.yz = a0.yz * x12.xz + h.yz * x12.yw;
              return 130.0 * dot(m, g);
            }

            void main() {
              vec3 color = vec3(0.0, 0.3, 1.0); // Base blue
              float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
              vec3 viewVector = vec3(0.0, 0.0, 1.0);
              float fresnel = dot(viewVector, vNormal);
              fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
              fresnel = pow(fresnel, 2.0);
              
              // Add noise 
              float noise = snoise(vNormal.xy * 3.0 + uTime * 0.5) * 0.5 + 0.5;
              vec3 glow = color * fresnel * 2.0 * pulse * noise;
              
              float stripe = sin(vUv.y * 50.0 + uTime * 5.0) * 0.5 + 0.5;
              color += vec3(0.1, 0.8, 1.0) * stripe * 0.2;
              
              gl_FragColor = vec4(color + glow, 0.9 * fresnel);
            }
          `}
                />
            </mesh>

            {/* Orbiting Skill Nodes */}
            <instancedMesh
                ref={instancedMeshRef}
                args={[undefined, undefined, skillsData.length]}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={handleClick}
            >
                <sphereGeometry args={[0.3, 32, 32]} />
                <shaderMaterial
                    transparent
                    uniforms={{ uTime: { value: 0 } }}
                    vertexShader={`
              varying vec2 vUv;
              varying vec3 vNormal;
              varying vec3 vViewPosition;
              varying vec3 vColor;
            
              void main() {
                vUv = uv;

                #ifdef USE_INSTANCING_COLOR
                  vColor = instanceColor;
                #else
                  vColor = vec3(0.23, 0.51, 0.96); // Fallback normal color
                #endif
            
                // Use mat3(instanceMatrix) to properly rotate normals for instances
                #ifndef USE_INSTANCING
                  mat4 instanceMatrix = mat4(1.0);
                #endif

                vNormal = normalize(normalMatrix * mat3(instanceMatrix) * normal);
                vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
                vViewPosition = -mvPosition.xyz;
                gl_Position = projectionMatrix * mvPosition;
              }
           `}
                    fragmentShader={`
              varying vec2 vUv;
              varying vec3 vNormal;
              varying vec3 vViewPosition;
              varying vec3 vColor;
              uniform float uTime;
            
              void main() {
                vec3 normal = normalize(vNormal);
                vec3 viewDir = normalize(vViewPosition);                 
                float fresnel = dot(normal, viewDir);
                fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
                fresnel = pow(fresnel, 2.0);
                
                // Add a gentle hover pulse independently mapped across nodes based on color brightness
                float p = sin(uTime * 4.0) * 0.2 + 0.8;
                
                vec3 baseColor = vColor * 0.4; // dark base
                vec3 glowColor = vColor * fresnel * 1.5 * p;
                
                gl_FragColor = vec4(baseColor + glowColor, 0.9);
              }
           `}
                />
            </instancedMesh>

            {/* HTML Labels for each Skill */}
            {skillsData.map((skill, i) => (
                <group key={skill.id} position={nodePositions[i]}>
                    <Html distanceFactor={25} center className="pointer-events-none">
                        <div
                            className="select-none font-sans font-bold tracking-widest uppercase transition-all duration-300"
                            style={{
                                textShadow: hoveredId === i
                                    ? "0 0 20px rgba(255,255,255,1), 0 0 10px rgba(255,255,255,0.8)"
                                    : "0 0 10px rgba(59,130,246,0.8)",
                                color: hoveredId === i ? "#fff" : "rgba(255,255,255,0.6)",
                                fontSize: hoveredId === i ? "1.2rem" : "0.9rem",
                                transform: hoveredId === i ? "scale(1.1)" : "scale(1)"
                            }}
                        >
                            {skill.name}
                        </div>
                    </Html>
                </group>
            ))}
        </group>
    );
}
