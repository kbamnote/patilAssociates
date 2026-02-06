import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

// 3D Card Backdrop Component
function CardBackdrop({ color = '#ff6b35' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, -2]}>
        <torusGeometry args={[2, 0.3, 16, 100]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Orbiting Particles
function OrbitingParticles({ color = '#ff6b35' }) {
  const groupRef = useRef();
  const particleCount = 30;

  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2 + Math.random() * 0.5;
      temp.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2,
          Math.sin(angle) * radius
        ],
        scale: Math.random() * 0.1 + 0.05
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main 3D Card Effect Component
const ThreeCardEffect = ({ color = '#ff6b35', className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color={color} />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#ffffff" />
        
        <CardBackdrop color={color} />
        <OrbitingParticles color={color} />
      </Canvas>
    </div>
  );
};

export default ThreeCardEffect;
