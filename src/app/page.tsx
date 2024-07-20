"use client";

import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Environment, MapControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import About from "@/components/About";
import Billiard from "@/components/Billiard";
import Calisthenics from "@/components/Calisthenics";
import Football from "@/components/Football";
import Name from "@/components/Name";
import Plane from "@/components/Plane";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import gsap from "gsap";
import LoadingScreen from "@/components/shared/LoadingScreen";
import Lights from "@/components/setup/Lights";

const Home: React.FC = () => {
  const [showScene, setShowScene] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    setShowScene(true);
  };

  useEffect(() => {
    if (showScene) {
      gsap.to(sceneRef.current, {
        duration: 1,
        opacity: 1,
      });
    }
  }, [showScene]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {!showScene && <LoadingScreen onEnter={handleEnter} />}
      <div
        ref={sceneRef}
        style={{
          opacity: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {showScene && (
          <Canvas
            gl={{ antialias: true }}
            flat
            camera={{ far: 500, near: 0.1, fov: 55, position: [7, 5, -17] }}
          >
            <fog attach="fog" args={["#4a5fff", 10, 70]} />

            <color args={["#4a5fff"]} attach="background" />

            <Environment preset="apartment" />
            <Lights />

            <React.Suspense fallback={null}>
              <Plane />
              <Name />
              <Calisthenics />
              <Billiard />
              <Football />
              <Skills />
              <About />
              <Projects />
            </React.Suspense>

            <MapControls
              target={[2, 0, -25]}
              enableDamping
              minDistance={5}
              maxDistance={20}
              zoomSpeed={0.5}
              mouseButtons={{
                LEFT: THREE.MOUSE.PAN,
                RIGHT: undefined,
              }}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={0}
            />
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default Home;
