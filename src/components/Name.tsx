import React from "react";
import { useGLTF } from "@react-three/drei";

const Name: React.FC = () => {
  const { scene } = useGLTF("./models/name.glb");

  return <primitive scale={1} position={[0, 0, -0.5]} object={scene} />;
};

export default Name;

useGLTF.preload("./models/name.glb");
