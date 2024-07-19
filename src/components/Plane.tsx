import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import { Mesh } from "three";

const Plane: React.FC = () => {
  const { scene } = useGLTF("./models/plane.glb");

  useEffect(() => {
    scene.traverse((object) => {
      if ((object as Mesh).isMesh) {
        const mesh = object as Mesh;

        if (mesh.name === "plane001") {
          mesh.receiveShadow = true;
        } else if (mesh.name.includes("tree")) {
          mesh.castShadow = true;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
};

export default Plane;

useGLTF.preload("./models/plane.glb");
