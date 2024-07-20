import { useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";

const Calisthenics: React.FC = () => {
  const { scene } = useGLTF("./models/calisthenics.glb");

  return useMemo(() => <primitive object={scene} />, [scene]);
};

export default Calisthenics;

useGLTF.preload("./models/calisthenics.glb");
