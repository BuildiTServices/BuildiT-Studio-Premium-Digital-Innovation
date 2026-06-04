import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

const Box = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      {/* Brutalist sleek material */}
      <meshStandardMaterial 
        color="#ffffff" 
        roughness={0.2} 
        metalness={0.8} 
        envMapIntensity={1}
      />
    </mesh>
  );
};

const RotatingCubeGrid = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.15;
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  const boxes = [];
  const spacing = 1.0; // The distance between cube centers (0.8 size + 0.2 gap)
  const offset = 1; // 3x3x3 grid (-1, 0, 1)

  for (let x = -offset; x <= offset; x++) {
    for (let y = -offset; y <= offset; y++) {
      for (let z = -offset; z <= offset; z++) {
        boxes.push(
          <Box key={`${x}-${y}-${z}`} position={[x * spacing, y * spacing, z * spacing]} />
        );
      }
    }
  }

  return (
    <group ref={groupRef}>
      {boxes}
    </group>
  );
};

const CubeWithGaps = ({ className }) => {
  return (
    <div className={className || "w-full h-[500px] md:h-[600px] mt-16 relative z-20 cursor-grab active:cursor-grabbing"}>
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
        <Environment preset="city" />
        <RotatingCubeGrid />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};

export default CubeWithGaps;
