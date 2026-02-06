import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated Helix Component
function AnimatedHelix() {
  const groupRef = useRef();
  const particleCount = 200;
  
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 4;
      const radius = 2.5;
      temp.push({
        position: [
          Math.cos(angle) * radius,
          (i / particleCount) * 8 - 4,
          Math.sin(angle) * radius
        ],
        scale: Math.random() * 0.15 + 0.05
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.3;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial
            color="#ff6b35"
            emissive="#ff6b35"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

// Rotating Ring Component
function RotatingRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.5;
      ring1Ref.current.rotation.y = time * 0.3;
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.4;
      ring2Ref.current.rotation.z = time * 0.2;
    }
    
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = time * 0.6;
      ring3Ref.current.rotation.z = -time * 0.3;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3, 0.15, 16, 100]} />
        <meshStandardMaterial
          color="#1e293b"
          transparent
          opacity={0.3}
          wireframe
          emissive="#1e293b"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.5, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#ff6b35"
          transparent
          opacity={0.25}
          wireframe
          emissive="#ff6b35"
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.5, 0.12, 16, 100]} />
        <meshStandardMaterial
          color="#64748b"
          transparent
          opacity={0.2}
          wireframe
          emissive="#64748b"
          emissiveIntensity={0.2}
        />
      </mesh>
    </>
  );
}

// Distorted Morphing Sphere
function MorphingSphere() {
  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#ff6b35"
          transparent
          opacity={0.4}
          distort={0.6}
          speed={4}
          roughness={0}
          metalness={1}
          emissive="#ff6b35"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Main ThreeDivider component
const ThreeDivider = ({ className = '', type = 'helix' }) => {
  return (
    <div className={`w-full h-48 relative overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ff6b35" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#1e293b" />
        <spotLight
          position={[0, 10, 5]}
          angle={0.5}
          penumbra={1}
          intensity={1.5}
          color="#ffffff"
        />

        {type === 'helix' && <AnimatedHelix />}
        {type === 'rings' && <RotatingRings />}
        {type === 'sphere' && <MorphingSphere />}
        
        {/* Render all by default if no type specified */}
        {!type && (
          <>
            <AnimatedHelix />
            <RotatingRings />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default ThreeDivider;
