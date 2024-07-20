import { useClick } from "@/hooks/useClick";
import { useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";

const clickableItems = [
  { name: "text", url: "https://mysticmesh-ai.com/" },
  {
    name: "text001",
    url: "https://headphones-website-gold.vercel.app/",
  },
  { name: "text002", url: "https://drink-website-ivory.vercel.app/" },
];

const Projects: React.FC = () => {
  const { scene } = useGLTF("./models/projects.glb");

  useClick(clickableItems);

  return useMemo(() => <primitive object={scene} />, [scene]);
};

export default Projects;

useGLTF.preload("./models/projects.glb");
