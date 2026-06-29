import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// 3D Crystal Core component
function CrystalCore() {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth auto-rotation
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.2;
    wireframeRef.current.rotation.x = -time * 0.1;
    wireframeRef.current.rotation.y = -time * 0.15;
    
    // Float movement up and down
    meshRef.current.position.y = Math.sin(time * 1.5) * 0.15;
    wireframeRef.current.position.y = Math.sin(time * 1.5) * 0.15;
    
    // Gentle scale pulsing
    const scale = 1 + Math.sin(time * 3) * 0.03;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group>
      {/* Glow effect backplane */}
      <pointLight position={[0, 0, 0]} intensity={12} distance={8} color="#7C3AED" />
      <pointLight position={[0, 0, 0]} intensity={8} distance={8} color="#00D4FF" />
      
      {/* Solid Inner Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#0e172a"
          emissive="#7C3AED"
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Wireframe Outer Shield */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial
          color="#00D4FF"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

// Orbiting Holographic Rings
function HolographicRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotating orbits
    ring1Ref.current.rotation.x = time * 0.08;
    ring1Ref.current.rotation.y = time * 0.05;
    
    ring2Ref.current.rotation.x = -time * 0.05;
    ring2Ref.current.rotation.z = time * 0.08;
  });

  return (
    <group>
      {/* Outer Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.015, 8, 100]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.65} />
      </mesh>

      {/* Outer Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.2, 0.01, 8, 100]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// Particle System reacting to Mouse Pointer
function InteractiveParticles() {
  const pointsRef = useRef();
  const { size, viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  // Add event listener for mouse movement on window
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse positions between -1 and 1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particleCount = 800;
  const [positions, speeds] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      // Radial distribution
      const r = 2.5 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      speeds[i] = 0.05 + Math.random() * 0.15;
    }
    return [positions, speeds];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positionsAttr = pointsRef.current.geometry.attributes.position;
    
    // Mouse Parallax effect
    const targetX = mouse.current.x * 0.5;
    const targetY = mouse.current.y * 0.5;
    pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.x += (targetY - pointsRef.current.rotation.x) * 0.05;

    // Slow rotation
    pointsRef.current.rotation.z = time * 0.02;

    // Pulse slightly
    const scale = 1 + Math.sin(time * 0.5) * 0.05;
    pointsRef.current.scale.set(scale, scale, scale);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00D4FF"
        size={0.035}
        sizeAttenuation={true}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// A 3D Cybernetic Grid Floor
function GridFloor() {
  return (
    <gridHelper 
      args={[40, 40, '#7C3AED', 'rgba(22, 32, 51, 0.4)']} 
      position={[0, -3.5, 0]} 
      rotation={[0, 0, 0]}
    />
  );
}

export default function HeroThree() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full bg-[#070B14]">
      {/* ===== Cinematic Video Background ===== */}
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
          className="w-full h-full"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for text readability */}
        <div className="hero-video-overlay" />
      </div>

      {/* ===== 3D Canvas layered on top ===== */}
      <div className="absolute inset-0 z-[2]" style={{ mixBlendMode: 'screen', opacity: 0.6 }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.2} />
          
          {/* Lights for the volumetric feel */}
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#00D4FF" />
          <directionalLight position={[-5, 5, -5]} intensity={1} color="#7C3AED" />
          <directionalLight position={[0, -5, 0]} intensity={0.5} color="#14F195" />
          
          <CrystalCore />
          <HolographicRings />
          <InteractiveParticles />
          <GridFloor />
          
          {/* Adds stars in the deep background */}
          <Stars radius={100} depth={50} count={1500} factor={4} saturation={0.5} fade speed={1} />
        </Canvas>
      </div>

      {/* Scanline overlay for cinematic effect */}
      <div 
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 212, 255, 0.008) 3px, rgba(0, 212, 255, 0.008) 6px)',
        }}
      />
    </div>
  );
}
