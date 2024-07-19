import { useGLTF } from "@react-three/drei";
import React from "react";

const Plane: React.FC = () => {
  const { scene } = useGLTF("./models/plane.glb");

  scene.traverse((object: any) => {
    if (object.isMesh) {
      object.receiveShadow = true;
      object.castShadow = true;
    }
  });

  return <primitive object={scene} />;
};

export default Plane;

useGLTF.preload("./models/plane.glb");
