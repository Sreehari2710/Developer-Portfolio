"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Block({ color, emissive, hovered }: { color: string; emissive: string; hovered: boolean }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * (hovered ? 1.4 : 0.4);
    ref.current.rotation.x = hovered ? Math.sin(Date.now() * 0.001) * 0.15 : 0.3;
    const targetScale = hovered ? 1.18 : 1;
    ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
  });

  return (
    <mesh ref={ref} rotation={[0.3, 0.6, 0]}>
      <boxGeometry args={[1.3, 1.3, 1.3]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={hovered ? 1.1 : 0.35}
        roughness={0.35}
        metalness={0.2}
        flatShading
      />
    </mesh>
  );
}

export default function OreBlock3D({
  color,
  emissive,
  hovered,
}: {
  color: string;
  emissive: string;
  hovered: boolean;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 3.2], fov: 40 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 3, 4]} intensity={1.2} />
      <pointLight position={[0, 0, 2]} color={emissive} intensity={hovered ? 3 : 1.2} />
      <Block color={color} emissive={emissive} hovered={hovered} />
    </Canvas>
  );
}
