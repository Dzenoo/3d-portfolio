import { useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";

const Skills: React.FC = () => {
  const { scene } = useGLTF("./models/skills.glb");

  return useMemo(() => <primitive object={scene} />, [scene]);
};

export default Skills;

useGLTF.preload("./models/skills.glb");
