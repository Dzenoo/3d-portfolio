import { useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";

const Plane: React.FC = () => {
  const { scene } = useGLTF("./models/plane.glb");

  return useMemo(() => <primitive object={scene} />, [scene]);
};

export default Plane;

useGLTF.preload("./models/plane.glb");
