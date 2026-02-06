import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Particle System Component
function ParticleField() {
  const points = useRef();
  const particleCount = 2000;

  const particles = useMemo(() => {
    const temp = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 50;
      temp[i3 + 1] = (Math.random() - 0.5) * 50;
      temp[i3 + 2] = (Math.random() - 0.5) * 30;
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#ff6b35"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Advanced Geometric Shapes with Distortion
function FloatingGeometry() {
  return (
    <>
      {/* Main Distorted Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]} position={[3, 2, -5]}>
          <MeshDistortMaterial
            color="#ff6b35"
            transparent
            opacity={0.3}
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Secondary Sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere args={[1, 32, 32]} position={[-4, -1, -3]}>
          <MeshDistortMaterial
            color="#1e293b"
            transparent
            opacity={0.25}
            distort={0.3}
            speed={1.5}
            roughness={0.3}
            metalness={0.6}
          />
        </Sphere>
      </Float>

      {/* Accent Sphere */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <Sphere args={[0.8, 32, 32]} position={[0, -2, -2]}>
          <MeshDistortMaterial
            color="#ff6b35"
            transparent
            opacity={0.35}
            distort={0.5}
            speed={3}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>
    </>
  );
}

// Dynamic Waves Component
function DynamicWaves() {
  const mesh = useRef();
  const count = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        pos[index] = (i - count / 2) * 0.2;
        pos[index + 1] = 0;
        pos[index + 2] = (j - count / 2) * 0.2;
      }
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      const positionAttribute = mesh.current.geometry.attributes.position;
      
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          const index = (i * count + j) * 3;
          const x = positionAttribute.array[index];
          const z = positionAttribute.array[index + 2];
          
          positionAttribute.array[index + 1] = 
            Math.sin(x * 0.5 + time) * 0.3 + 
            Math.cos(z * 0.5 + time * 0.7) * 0.2;
        }
      }
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count * count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#64748b"
        transparent
        opacity={0.4}
      />
    </points>
  );
}

// Main ThreeBackground component with scroll interaction
const ThreeBackground = ({ className = '' }) => {
  const canvasRef = useRef();

  // Check if device supports WebGL
  const supportsWebGL = useMemo(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  }, []);

  // Scroll-based camera movement
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = scrollY / 1000;
      
      if (canvasRef.current) {
        canvasRef.current.style.transform = `translateY(${scrollPercent * 50}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render if WebGL is not supported
  if (!supportsWebGL) {
    return null;
  }

  return (
    <div 
      ref={canvasRef}
      className={`absolute inset-0 ${className}`} 
      style={{ zIndex: 0, transition: 'transform 0.1s ease-out' }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff6b35" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#1e293b" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#ffffff"
        />

        {/* Star Field Background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={3000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5}
        />

        {/* Particle System */}
        <ParticleField />

        {/* Floating Distorted Geometries */}
        <FloatingGeometry />

        {/* Dynamic Wave Grid */}
        <DynamicWaves />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
