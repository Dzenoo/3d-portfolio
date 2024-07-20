import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useClick } from "@/hooks/useClick";

const clickableItems = [
  { name: "text010", url: "https://github.com/Dzenoo" },
  {
    name: "text011",
    url: "https://www.linkedin.com/in/dzenis-gudzevic-41460b244/",
  },
];

const About: React.FC = () => {
  const { scene } = useGLTF("./models/about.glb");

  useClick(clickableItems);

  return useMemo(() => <primitive object={scene} />, [scene]);
};

export default About;

useGLTF.preload("./models/about.glb");
