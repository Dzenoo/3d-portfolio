import { useGLTF } from "@react-three/drei";
import React from "react";

const Skills: React.FC = () => {
  const { scene } = useGLTF("./models/skills.glb");

  return <primitive object={scene} />;
};

export default Skills;

useGLTF.preload("./models/skills.glb");
