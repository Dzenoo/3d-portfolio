import { useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";

const Football: React.FC = () => {
  const { scene } = useGLTF("./models/football.glb");

  return useMemo(() => <primitive object={scene} />, [scene]);
};

export default Football;

useGLTF.preload("./models/football.glb");
