import { useGLTF } from "@react-three/drei";
import React from "react";

const Calisthenics: React.FC = () => {
  const { scene } = useGLTF("./models/calisthenics.glb");

  return <primitive object={scene} />;
};

export default Calisthenics;

useGLTF.preload("./models/calisthenics.glb");
