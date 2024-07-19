"use client";

import Lights from "@/components/Lights";
import Name from "@/components/Name";
import Plane from "@/components/Plane";
import { Environment, MapControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function Home() {
  return (
    <Canvas
      shadows
      flat
      camera={{ far: 1000, near: 0.1, fov: 55, position: [7, 5, -17] }}
    >
      <fog attach="fog" args={["#4a5fff", 10, 70]} />

      <color args={["#4a5fff"]} attach="background" />

      <Environment preset="apartment" />
      <Lights />

      <Plane />
      <Name />

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
  );
}
