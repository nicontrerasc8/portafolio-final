"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Color, Group, Vector3 } from "three";
import { useReducedMotion } from "framer-motion";

type Node = {
  position: Vector3;
  size: number;
  color: string;
};

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
];

function GraphNodes({ animate }: { animate: boolean }) {
  const group = useRef<Group>(null);
  const nodes: Node[] = useMemo(
    () => [
      { position: new Vector3(0, 1.8, 0), size: 0.26, color: "#35f2c6" },
      { position: new Vector3(-2, 0.8, 0.4), size: 0.18, color: "#7aa7ff" },
      { position: new Vector3(2, 0.7, -0.5), size: 0.18, color: "#7aa7ff" },
      { position: new Vector3(-2.6, -0.8, -0.2), size: 0.14, color: "#f8c56a" },
      { position: new Vector3(2.6, -0.7, 0.1), size: 0.14, color: "#f8c56a" },
      { position: new Vector3(-1.4, -1.8, 0.2), size: 0.1, color: "#ffffff" },
      { position: new Vector3(1.4, -1.9, -0.1), size: 0.1, color: "#ffffff" },
    ],
    []
  );

  useFrame(({ clock }) => {
    if (!group.current || !animate) return;
    group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
  });

  return (
    <group ref={group}>
      {edges.map(([a, b], index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={
                new Float32Array([
                  nodes[a].position.x,
                  nodes[a].position.y,
                  nodes[a].position.z,
                  nodes[b].position.x,
                  nodes[b].position.y,
                  nodes[b].position.z,
                ])
              }
              itemSize={3}
              count={2}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#1e2438" />
        </line>
      ))}
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position} scale={node.size}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial color={node.color} emissive={node.color} />
        </mesh>
      ))}
    </group>
  );
}

export default function OwnershipGraph() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="h-[320px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#06080f] md:h-[380px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        frameloop={reduceMotion ? "demand" : "always"}
      >
        <color attach="background" args={[new Color("#06080f")]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 6, 4]} intensity={0.9} />
        <GraphNodes animate={!reduceMotion} />
        <OrbitControls
          enableZoom={false}
          autoRotate={!reduceMotion}
          autoRotateSpeed={0.4}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
