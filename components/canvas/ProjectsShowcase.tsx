"use client";

import { useRef, useMemo, useCallback, memo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Project } from "@/lib/projectsData";
import ProjectNode from "./ProjectNode";

interface ProjectsShowcaseProps {
    repos: Project[];
    activeRepo: Project | null;
    onProjectClick: (repo: Project) => void;
}

const ProjectsShowcase = memo(({ repos, activeRepo, onProjectClick }: ProjectsShowcaseProps) => {
    const { camera } = useThree();
    const groupRef = useRef<THREE.Group>(null);

    // Stable camera targets using useRef — created once, never disposed
    const targetPosition = useRef(new THREE.Vector3(0, 2, 12));
    const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));

    // Completely deterministic positioning (no Math.random)
    const repoPositions = useMemo(() => {
        return repos.map((_, i) => {
            const angle = (i / repos.length) * Math.PI * 2;
            const radius = 6;
            const yOffset = (i % 2 === 0 ? 0.6 : -0.6);
            return [
                Math.cos(angle) * radius,
                yOffset,
                Math.sin(angle) * radius
            ] as [number, number, number];
        });
    }, [repos]);

    const handleNodeClick = useCallback((repo: Project, localPositionArray: [number, number, number]) => {
        onProjectClick(repo);

        if (!groupRef.current) return;

        const localPos = new THREE.Vector3(...localPositionArray);
        const worldPos = localPos.applyMatrix4(groupRef.current.matrixWorld);

        const offset = new THREE.Vector3(2, 0, 4);
        targetPosition.current.copy(worldPos).add(offset);
        lookAtTarget.current.copy(worldPos);
    }, [onProjectClick]);

    // Stable animation loop
    useFrame((_state, delta) => {
        if (!groupRef.current) return;

        if (!activeRepo) {
            targetPosition.current.set(0, 2, 12);
            lookAtTarget.current.set(0, 0, 0);

            // Smoothly rotate the group of nodes when no project is selected
            groupRef.current.rotation.y += delta * 0.1;
        } else {
            // Smoothly brake rotation when zooming in
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.05);

            // Continuously update gaze target based on the settling group rotation
            const activeIndex = repos.findIndex(r => r.id === activeRepo.id);
            if (activeIndex !== -1) {
                const localPos = new THREE.Vector3(...repoPositions[activeIndex]);
                const worldPos = localPos.applyMatrix4(groupRef.current.matrixWorld);

                lookAtTarget.current.copy(worldPos);

                const offset = new THREE.Vector3(3, 0, 5);
                targetPosition.current.copy(worldPos).add(offset);
            }
        }

        // Smoothly interpolate camera position and target
        camera.position.lerp(targetPosition.current, 0.05);
        camera.lookAt(lookAtTarget.current);
    });

    return (
        <group ref={groupRef}>
            {repos.map((repo, i) => (
                <ProjectNode
                    key={repo.id}
                    repo={repo}
                    position={repoPositions[i]}
                    isActive={activeRepo?.id === repo.id}
                    onClick={() => handleNodeClick(repo, repoPositions[i])}
                />
            ))}
        </group>
    );
});

ProjectsShowcase.displayName = "ProjectsShowcase";

export default ProjectsShowcase;
