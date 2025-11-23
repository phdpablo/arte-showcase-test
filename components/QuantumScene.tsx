/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Box, Torus, Sphere, Stars, Environment, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing JSX type definitions for Three.js elements
// We augment both the global JSX namespace and the React module's JSX namespace
// to ensure compatibility with different TypeScript/React configurations.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      tubeGeometry: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      tubeGeometry: any;
    }
  }
}

const NetworkNode = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.1;
      ref.current.rotation.x = t * 0.2;
      ref.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Icosahedron ref={ref} args={[1, 0]} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.2}
        metalness={0.8}
        wireframe
      />
    </Icosahedron>
  );
};

const ConnectionLine = ({ start, end }: { start: [number, number, number], end: [number, number, number] }) => {
    const curve = useMemo(() => new THREE.LineCurve3(new THREE.Vector3(...start), new THREE.Vector3(...end)), [start, end]);
    
    return (
        <mesh>
            <tubeGeometry args={[curve, 20, 0.02, 8, false]} />
            <meshBasicMaterial color="#0D232C" transparent opacity={0.2} />
        </mesh>
    )
}

export const NetworkBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <NetworkNode position={[0, 0, 0]} color="#0D232C" scale={1.5} />
          <NetworkNode position={[-3, 2, -2]} color="#F18C22" scale={0.8} />
          <NetworkNode position={[3, -2, -2]} color="#F18C22" scale={0.8} />
          <NetworkNode position={[-2, -2.5, 1]} color="#0D232C" scale={0.6} />
          <NetworkNode position={[2.5, 2, 1]} color="#0D232C" scale={0.6} />
          
          {/* Connections */}
          <ConnectionLine start={[0,0,0]} end={[-3,2,-2]} />
          <ConnectionLine start={[0,0,0]} end={[3,-2,-2]} />
          <ConnectionLine start={[-3,2,-2]} end={[-2,-2.5,1]} />
          <ConnectionLine start={[3,-2,-2]} end={[2.5,2,1]} />
        </Float>

        <Environment preset="city" />
        <Stars radius={100} depth={50} count={800} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
};

export const StructureBackground: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 2, 6], fov: 40 }}>
        <ambientLight intensity={1} />
        <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} color="#F18C22" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0D232C" />
        <Environment preset="studio" />
        
        <Float rotationIntensity={0.2} floatIntensity={0.1} speed={0.5}>
          <group position={[0, -1, 0]}>
            {/* Base Platform */}
            <Cylinder args={[2, 2, 0.2, 64]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#0D232C" metalness={0.8} roughness={0.2} />
            </Cylinder>

            {/* Central Column (Container) */}
            <Box args={[1, 1.5, 1]} position={[0, 0.85, 0]}>
                <meshStandardMaterial color="#F18C22" metalness={0.6} roughness={0.2} transparent opacity={0.3} />
            </Box>
            <Box args={[0.95, 1.45, 0.95]} position={[0, 0.85, 0]}>
                 <meshStandardMaterial color="#fff" wireframe />
            </Box>

            {/* Orbiting Elements (Tools) */}
            <group position={[0, 1, 0]} rotation={[0, 0, Math.PI/6]}>
                <Torus args={[1.8, 0.05, 16, 100]} rotation={[Math.PI/2, 0, 0]}>
                    <meshStandardMaterial color="#0D232C" />
                </Torus>
                <Sphere args={[0.2]} position={[1.8, 0, 0]}>
                    <meshStandardMaterial color="#F18C22" />
                </Sphere>
            </group>
             <group position={[0, 1, 0]} rotation={[0, 0, -Math.PI/6]}>
                <Torus args={[2.2, 0.02, 16, 100]} rotation={[Math.PI/2, 0, 0]}>
                    <meshStandardMaterial color="#888" />
                </Torus>
                 <Sphere args={[0.15]} position={[-2.2, 0, 0]}>
                    <meshStandardMaterial color="#0D232C" />
                </Sphere>
            </group>

            {/* Data Blocks */}
            <Box args={[0.2, 0.3, 0.05]} position={[0, 0.5, 0.3]}>
                <meshStandardMaterial color="#fff" />
            </Box>
            <Box args={[0.2, 0.3, 0.05]} position={[0.1, 0.6, -0.2]}>
                <meshStandardMaterial color="#fff" />
            </Box>
             <Box args={[0.2, 0.3, 0.05]} position={[-0.15, 0.7, 0.1]}>
                <meshStandardMaterial color="#fff" />
            </Box>

          </group>
        </Float>
      </Canvas>
    </div>
  );
}