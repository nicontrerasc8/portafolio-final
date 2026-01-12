// components/ParticleField.tsx
'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport, pointer } = useThree();
  
  const particleCount = 2000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Posiciones distribuidas en el espacio
      positions[i3] = (Math.random() - 0.5) * viewport.width * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * viewport.height * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      // Gradiente de colores azul-cyan
      const t = Math.random();
      colors[i3] = 0.2 + t * 0.4;     // R
      colors[i3 + 1] = 0.5 + t * 0.5; // G
      colors[i3 + 2] = 0.8 + t * 0.2; // B
    }
    
    return [positions, colors];
  }, [viewport]);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Movimiento ondulatorio
      const x = positions[i3];
      const y = positions[i3 + 1];
      
      positions[i3 + 2] = Math.sin(x * 0.3 + time) * 0.5 + Math.cos(y * 0.3 + time) * 0.5;
      
      // Interacción con el mouse
      const mouseX = pointer.x * viewport.width / 2;
      const mouseY = pointer.y * viewport.height / 2;
      
      const dx = x - mouseX;
      const dy = y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 3) {
        const force = (3 - distance) / 3;
        positions[i3] += dx * force * 0.01;
        positions[i3 + 1] += dy * force * 0.01;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.z = time * 0.05;
  });
  
  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}