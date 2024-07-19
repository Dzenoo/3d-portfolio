import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import { Mesh } from "three";

const Billiard: React.FC = () => {
  const { scene } = useGLTF("./models/billiard.glb");

  useEffect(() => {
    scene.traverse((object) => {
      if ((object as Mesh).isMesh) {
        const mesh = object as Mesh;

        mesh.receiveShadow = true;

        mesh.castShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
};

export default Billiard;

useGLTF.preload("./models/billiard.glb");
