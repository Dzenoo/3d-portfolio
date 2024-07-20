import { useGLTF } from "@react-three/drei";
import React from "react";

const About: React.FC = () => {
  const { scene } = useGLTF("./models/about.glb");

  return <primitive object={scene} />;
};

export default About;

useGLTF.preload("./models/about.glb");
