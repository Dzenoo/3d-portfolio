import { useGLTF } from "@react-three/drei";
import React from "react";

const Billiard: React.FC = () => {
  const { scene } = useGLTF("./models/billiard.glb");

  return <primitive object={scene} />;
};

export default Billiard;

useGLTF.preload("./models/billiard.glb");
