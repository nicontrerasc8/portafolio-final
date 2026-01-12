// components/ThreeBackground.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import ParticleField from './Particles';


export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        className="bg-transparent"
      >
        <color attach="background" args={['#000000']} />
        <ParticleField />
      </Canvas>
    </div>
  );
}