"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, useCursor, Float, Stars } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Node({ position, color, size = 0.1 }: { position: [number, number, number]; color: string; size?: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  useCursor(hovered);

  useFrame((state) => {
    if (mesh.current) {
      // subtle pulse
      const t = state.clock.getElapsedTime();
      mesh.current.scale.setScalar(hovered ? 1.5 : 1 + Math.sin(t * 2 + position[0]) * 0.1);
    }
  });

  return (
    <Sphere
      ref={mesh}
      args={[size, 16, 16]}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        emissive={hovered ? color : "#000000"}
        emissiveIntensity={hovered ? 2 : 0}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function Connections({ points, color }: { points: [number, number, number][]; color: string }) {
  // Generate lines between nearby points
  const lines = useMemo(() => {
    const l: [number, number, number][] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = new THREE.Vector3(...points[i]).distanceTo(new THREE.Vector3(...points[j]));
        if (dist < 2.5) { // Threshold for connection
          l.push(points[i]);
          l.push(points[j]);
        }
      }
    }
    return l;
  }, [points]);

  return (
    <Line
      points={lines}
      color={color}
      opacity={0.15}
      transparent
      lineWidth={1}
    />
  )
}

function SceneContent() {
  const group = useRef<THREE.Group>(null);

  // Generate random nodes representing "Data Points" or "System Modules"
  const nodes = useMemo(() => {
    const temp: { pos: [number, number, number]; color: string; size: number }[] = [];
    const colors = ["#5eead4", "#818cf8", "#ffffff"]; // Accent 1, Accent 2, White

    for (let i = 0; i < 25; i++) {
      temp.push({
        pos: [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 0.08 + 0.04,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {nodes.map((n, i) => (
          <Node key={i} position={n.pos} color={n.color} size={n.size} />
        ))}
        <Connections points={nodes.map(n => n.pos)} color="#818cf8" />
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#5eead4" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#818cf8" />
        <SceneContent />
      </Canvas>
    </div>
  );
}
