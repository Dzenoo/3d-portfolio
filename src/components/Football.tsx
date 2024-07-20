import { useGLTF } from "@react-three/drei";
import React from "react";

const Football: React.FC = () => {
  const { scene } = useGLTF("./models/football.glb");

  return <primitive object={scene} />;
};

export default Football;

useGLTF.preload("./models/football.glb");
