import { useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";

const Billiard: React.FC = () => {
  const { scene } = useGLTF("./models/billiard.glb");

  return useMemo(() => <primitive object={scene} />, [scene]);
};

export default Billiard;

useGLTF.preload("./models/billiard.glb");
