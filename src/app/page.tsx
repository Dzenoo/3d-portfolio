"use client";

import Lights from "@/components/Lights";
import Name from "@/components/Name";
import Plane from "@/components/Plane";
import { Environment, MapControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Canvas
      flat
      shadows
      camera={{ far: 1000, near: 0.1, fov: 55, position: [7, 5, -17] }}
    >
      <Environment preset="apartment" />
      <Lights />

      <Plane />
      <Name />

      <MapControls target={[2, 0, -25]} />
    </Canvas>
  );
}
