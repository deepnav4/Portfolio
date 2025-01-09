import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  
  // Add error handling for model loading
  useEffect(() => {
    return () => {
      if (earth) {
        earth.scene.traverse((node) => {
          if (node.isMesh) {
            node.geometry.dispose();
            node.material.dispose();
          }
        });
      }
    };
  }, [earth]);

  return (
    <primitive 
      object={earth.scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0}
      dispose={null}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 780px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true 
      }}
      camera={{
        fov: isMobile ? 55 : 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [-3, 2, 4] : [-4, 3, 6],
      }}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: isMobile ? "300px" : "500px",
        maxHeight: isMobile ? "300px" : "500px",
        margin: "auto"
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[1, 1, 1]} 
          intensity={2} 
          castShadow 
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          dampingFactor={0.05}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// Prevent unnecessary re-downloads of the Earth model
useGLTF.preload("./planet/scene.gltf");

export default EarthCanvas;