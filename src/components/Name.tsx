import React from "react";
import { useGLTF } from "@react-three/drei";

const Name: React.FC = () => {
  const { scene } = useGLTF("./models/name.glb");

  return <primitive object={scene} />;
};

export default Name;

useGLTF.preload("./models/name.glb");
