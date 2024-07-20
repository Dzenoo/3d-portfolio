import React from "react";

const Lights: React.FC = () => {
  return (
    <>
      <ambientLight color="#ffffff" intensity={0.5} />
      <directionalLight color="#ffffff" intensity={1} position={[5, 15, 10]} />
    </>
  );
};

export default Lights;
