import { useGLTF } from "@react-three/drei";
import React from "react";

const Projects: React.FC = () => {
  const { scene } = useGLTF("./models/projects.glb");

  return <primitive object={scene} />;
};

export default Projects;

useGLTF.preload("./models/projects.glb");
