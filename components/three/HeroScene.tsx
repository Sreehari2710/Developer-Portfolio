"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function VoxelMountainRange({
  z,
  color,
  emissive,
  count = 14,
  baseHeight = 3,
  spread = 1.3,
}: {
  z: number;
  color: string;
  emissive?: string;
  count?: number;
  baseHeight?: number;
  spread?: number;
}) {
  const data = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const x = (i - count / 2) * spread + (Math.random() - 0.5) * spread * 0.5;
        const h = baseHeight + Math.random() * baseHeight * 1.4;
        const w = spread * 0.9 + Math.random() * 0.6;
        return { x, h, w };
      }),
    [count, baseHeight, spread]
  );

  return (
    <group position={[0, -2.5, z]}>
      {data.map((m, i) => (
        <mesh key={i} position={[m.x, m.h / 2, 0]}>
          <boxGeometry args={[m.w, m.h, m.w]} />
          <meshStandardMaterial
            color={color}
            emissive={emissive ?? color}
            emissiveIntensity={0.15}
            flatShading
            roughness={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingIsland({
  position,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.y = position[1] + Math.sin(t) * 0.25;
    ref.current.rotation.y = Math.sin(t * 0.3) * 0.1;
  });

  const blocks = useMemo(
    () => [
      [0, 0, 0],
      [0.9, -0.2, 0.2],
      [-0.8, -0.15, -0.3],
      [0.2, -0.4, -0.7],
      [-0.3, 0.3, 0.5],
    ],
    []
  );

  return (
    <group ref={ref} position={position} scale={scale}>
      {blocks.map((b, i) => (
        <mesh key={i} position={b as [number, number, number]}>
          <boxGeometry args={[0.8, 0.5, 0.8]} />
          <meshStandardMaterial
            color={i === 0 ? "#3a2f55" : "#241c38"}
            flatShading
            roughness={0.85}
          />
        </mesh>
      ))}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.5]} />
        <meshStandardMaterial color="#2f6b3f" flatShading roughness={0.8} />
      </mesh>
      <pointLight position={[0, 1, 0]} color="#a855f7" intensity={2} distance={4} />
    </group>
  );
}

function VoxelCharacter() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = Math.sin(t * 1.2) * 0.04;
  });

  return (
    <group ref={ref} position={[1.3, -1.55, 0.4]} scale={0.42}>
      {/* head */}
      <mesh position={[0, 1.55, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#d9a066" flatShading />
      </mesh>
      {/* hair/cap */}
      <mesh position={[0, 1.78, 0]}>
        <boxGeometry args={[0.52, 0.12, 0.52]} />
        <meshStandardMaterial color="#3a2a1e" flatShading />
      </mesh>
      {/* torso */}
      <mesh position={[0, 1.0, 0]}>
        <boxGeometry args={[0.55, 0.75, 0.3]} />
        <meshStandardMaterial color="#3fa6a0" flatShading />
      </mesh>
      {/* left arm */}
      <mesh position={[-0.42, 1.0, 0]}>
        <boxGeometry args={[0.22, 0.75, 0.28]} />
        <meshStandardMaterial color="#d9a066" flatShading />
      </mesh>
      {/* right arm */}
      <mesh position={[0.42, 1.0, 0]}>
        <boxGeometry args={[0.22, 0.75, 0.28]} />
        <meshStandardMaterial color="#d9a066" flatShading />
      </mesh>
      {/* left leg */}
      <mesh position={[-0.15, 0.32, 0]}>
        <boxGeometry args={[0.24, 0.65, 0.28]} />
        <meshStandardMaterial color="#2b3a67" flatShading />
      </mesh>
      {/* right leg */}
      <mesh position={[0.15, 0.32, 0]}>
        <boxGeometry args={[0.24, 0.65, 0.28]} />
        <meshStandardMaterial color="#243059" flatShading />
      </mesh>
      {/* cliff block under feet */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[1.4, 0.3, 1.2]} />
        <meshStandardMaterial color="#4a4234" flatShading roughness={1} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.05) * 0.3;
    camera.position.y = 1.1 + Math.sin(t * 0.08) * 0.08;
    camera.lookAt(0.3, 0.4, -6);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.1, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#05060a"]} />
      <fog attach="fog" args={["#1a1330", 6, 20]} />
      <ambientLight intensity={0.55} color="#9b8ac4" />
      <directionalLight position={[-4, 4, 2]} intensity={1.3} color="#ff9d6c" />
      <directionalLight position={[3, 2, 5]} intensity={0.7} color="#a855f7" />

      <Stars radius={60} depth={30} count={1200} factor={2} fade speed={0.4} />
      <Sparkles count={40} scale={[10, 6, 10]} size={2} speed={0.3} color="#a855f7" />

      <VoxelMountainRange z={-11} color="#1c1830" emissive="#2a2348" count={12} baseHeight={5.5} spread={2} />
      <VoxelMountainRange z={-7} color="#2a2348" emissive="#3a2f5e" count={11} baseHeight={4} spread={1.7} />
      <VoxelMountainRange z={-3.5} color="#352a52" emissive="#5b3fae" count={9} baseHeight={2.6} spread={1.4} />

      <FloatingIsland position={[-3.4, 2.2, -5]} scale={0.9} speed={0.6} />
      <FloatingIsland position={[3.8, 2.8, -8]} scale={0.7} speed={0.5} />
      <FloatingIsland position={[-1.6, 3.6, -10]} scale={0.5} speed={0.8} />

      <VoxelCharacter />
      <CameraRig />
    </Canvas>
  );
}
