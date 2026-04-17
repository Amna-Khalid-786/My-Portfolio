"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const AvatarModel = () => {
    const headRef = useRef<THREE.Group>(null);
    const bodyRef = useRef<THREE.Group>(null);
    const rightArmRef = useRef<THREE.Group>(null);
    const leftArmRef = useRef<THREE.Group>(null);
    const screenLightRef = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        const { x, y } = state.mouse;
        const time = state.clock.elapsedTime;

        // Head tracking - subtle and smooth
        if (headRef.current) {
            headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, x * 0.4, 0.05);
            headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -y * 0.2, 0.05);
        }

        // Slight breathing
        if (bodyRef.current) {
            bodyRef.current.position.y = Math.sin(time * 2) * 0.01;
        }

        // Typing animation - more delicate
        if (rightArmRef.current && leftArmRef.current) {
            rightArmRef.current.rotation.x = -1.2 + Math.sin(time * 25) * 0.05;
            leftArmRef.current.rotation.x = -1.2 + Math.cos(time * 22) * 0.05;
        }

        // Screen pulse
        if (screenLightRef.current) {
            screenLightRef.current.intensity = 1.5 + Math.sin(time * 8) * 0.5;
        }
    });

    return (
        <group position={[0, -0.1, 0]} scale={1}>
            {/* Environment: Desk & Chair */}
            <group position={[0, 0, 0]}>
                {/* Desk */}
                <mesh position={[0, 0.35, 0.7]} receiveShadow>
                    <boxGeometry args={[1.8, 0.05, 1]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.3} />
                </mesh>
                <mesh position={[0.7, 0.15, 0.9]}>
                    <boxGeometry args={[0.05, 0.4, 0.4]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                <mesh position={[-0.7, 0.15, 0.9]}>
                    <boxGeometry args={[0.05, 0.4, 0.4]} />
                    <meshStandardMaterial color="#111" />
                </mesh>

                {/* Chair */}
                <group position={[0, 0.1, -0.4]}>
                    {/* Base */}
                    <mesh position={[0, 0.05, 0]}>
                        <boxGeometry args={[0.6, 0.08, 0.6]} />
                        <meshStandardMaterial color="#1e1e1e" />
                    </mesh>
                    {/* Backrest */}
                    <mesh position={[0, 0.6, -0.25]} rotation={[-0.1, 0, 0]}>
                        <boxGeometry args={[0.65, 0.9, 0.1]} />
                        <meshStandardMaterial color="#2d2da8" metalness={0.5} roughness={0.2} />
                    </mesh>
                    {/* Seat */}
                    <mesh position={[0, 0.2, 0]}>
                        <boxGeometry args={[0.65, 0.1, 0.65]} />
                        <meshStandardMaterial color="#2d2da8" />
                    </mesh>
                </group>
            </group>

            {/* Boy Avatar */}
            <group ref={bodyRef}>
                {/* Torso / Hoodie */}
                <mesh position={[0, 0.6, -0.1]}>
                    <capsuleGeometry args={[0.25, 0.4, 8, 16]} />
                    <meshStandardMaterial color="#4f46e5" roughness={0.8} />
                </mesh>
                {/* Hoodie Pocket */}
                <mesh position={[0, 0.5, 0.1]} rotation={[0.2, 0, 0]}>
                    <boxGeometry args={[0.2, 0.1, 0.05]} />
                    <meshStandardMaterial color="#4338ca" />
                </mesh>

                {/* Arms */}
                <group ref={leftArmRef} position={[-0.3, 0.6, 0.1]}>
                    <mesh rotation={[-1.2, 0, 0.2]}>
                        <capsuleGeometry args={[0.06, 0.4, 4, 8]} />
                        <meshStandardMaterial color="#4f46e5" />
                    </mesh>
                    {/* Hand */}
                    <mesh position={[0, -0.2, 0.15]}>
                        <sphereGeometry args={[0.04, 12, 12]} />
                        <meshStandardMaterial color="#ffdbac" />
                    </mesh>
                </group>
                <group ref={rightArmRef} position={[0.3, 0.6, 0.1]}>
                    <mesh rotation={[-1.2, 0, -0.2]}>
                        <capsuleGeometry args={[0.06, 0.4, 4, 8]} />
                        <meshStandardMaterial color="#4f46e5" />
                    </mesh>
                    {/* Hand */}
                    <mesh position={[0, -0.2, 0.15]}>
                        <sphereGeometry args={[0.04, 12, 12]} />
                        <meshStandardMaterial color="#ffdbac" />
                    </mesh>
                </group>
            </group>

            {/* Head Section */}
            <group ref={headRef} position={[0, 1.1, -0.1]}>
                {/* Face */}
                <mesh castShadow>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color="#ffdbac" roughness={0.4} />
                </mesh>

                {/* Eyes - Expressive Chibi Style */}
                <group position={[0, 0.05, 0.22]}>
                    {/* Left Eye */}
                    <group position={[-0.12, 0, 0]}>
                        <mesh>
                            <sphereGeometry args={[0.06, 16, 16]} />
                            <meshStandardMaterial color="#2d1c10" />
                        </mesh>
                        {/* Glint */}
                        <mesh position={[0.02, 0.02, 0.04]}>
                            <sphereGeometry args={[0.015, 8, 8]} />
                            <meshBasicMaterial color="white" />
                        </mesh>
                    </group>
                    {/* Right Eye */}
                    <group position={[0.12, 0, 0]}>
                        <mesh>
                            <sphereGeometry args={[0.06, 16, 16]} />
                            <meshStandardMaterial color="#2d1c10" />
                        </mesh>
                        {/* Glint */}
                        <mesh position={[0.02, 0.02, 0.04]}>
                            <sphereGeometry args={[0.015, 8, 8]} />
                            <meshBasicMaterial color="white" />
                        </mesh>
                    </group>
                </group>

                {/* Cap */}
                <group position={[0, 0.15, 0]}>
                    <mesh rotation={[-0.2, 0, 0]}>
                        <sphereGeometry args={[0.32, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
                        <meshStandardMaterial color="#1e1e1e" />
                    </mesh>
                    {/* Brim */}
                    <mesh position={[0, 0, 0.2]} rotation={[0.1, 0, 0]}>
                        <boxGeometry args={[0.4, 0.02, 0.3]} />
                        <meshStandardMaterial color="#111" />
                    </mesh>
                </group>

                {/* Headphones */}
                <group position={[0, 0, 0]}>
                    {/* Band */}
                    <mesh rotation={[0, 0, 0]}>
                        <torusGeometry args={[0.31, 0.04, 16, 32, Math.PI]} />
                        <meshStandardMaterial color="#111" metalness={0.8} />
                    </mesh>
                    {/* Left Cup */}
                    <mesh position={[-0.32, -0.05, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <cylinderGeometry args={[0.12, 0.12, 0.08, 32]} />
                        <meshStandardMaterial color="#4f46e5" metalness={0.8} />
                    </mesh>
                    {/* Right Cup */}
                    <mesh position={[0.32, -0.05, 0]} rotation={[0, -Math.PI / 2, 0]}>
                        <cylinderGeometry args={[0.12, 0.12, 0.08, 32]} />
                        <meshStandardMaterial color="#4f46e5" metalness={0.8} />
                    </mesh>
                </group>
            </group>

            {/* Laptop on Desk */}
            <group position={[0, 0.38, 0.6]} rotation={[-0.1, 0, 0]}>
                {/* Body */}
                <mesh castShadow>
                    <boxGeometry args={[0.8, 0.03, 0.55]} />
                    <meshStandardMaterial color="#222" metalness={0.9} />
                </mesh>
                {/* Screen */}
                <group position={[0, 0.3, -0.25]} rotation={[Math.PI / 2.3, 0, 0]}>
                    <mesh>
                        <boxGeometry args={[0.8, 0.02, 0.5]} />
                        <meshStandardMaterial color="#222" metalness={0.9} />
                    </mesh>
                    <mesh position={[0, 0.01, 0.01]}>
                        <planeGeometry args={[0.75, 0.45]} />
                        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={3} />
                    </mesh>
                    <pointLight ref={screenLightRef} position={[0, 0, 0.1]} color="#4f46e5" distance={1.2} />
                </group>
            </group>
        </group>
    );
};

export const CodingRobot3D = () => {
    return (
        <div className="w-full h-full min-h-[550px]">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0.8, 4.5]} fov={38} />
                
                {/* Soft Studio Lighting */}
                <ambientLight intensity={0.5} />
                <spotLight 
                    position={[10, 10, 10]} 
                    angle={0.15} 
                    penumbra={1} 
                    intensity={2} 
                    castShadow 
                    shadow-mapSize={[1024, 1024]}
                />
                <pointLight position={[-10, 5, -5]} intensity={0.5} color="#4f46e5" />
                <pointLight position={[0, 5, 10]} intensity={0.2} color="#ffffff" />
                
                {/* Subtle Rim Light to separate character from background */}
                <pointLight position={[0, 2, -5]} intensity={1.5} color="#4f46e5" />

                <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.1}>
                    <AvatarModel />
                </Float>
                
                {/* Ground Shadows */}
                <ContactShadows 
                    position={[0, -0.65, 0]} 
                    opacity={0.4} 
                    scale={10} 
                    blur={2.5} 
                    far={2} 
                />
                
                <Stars />
            </Canvas>
        </div>
    );
};

const Stars = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 400;
    
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const radius = 12;
        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);
            pos[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
            pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = radius * Math.cos(theta);
        }
        return pos;
    }, []);

    useFrame(() => {
        if (pointsRef.current) pointsRef.current.rotation.y += 0.0003;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
        </points>
    );
};
