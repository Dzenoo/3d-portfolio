import React from "react";

const Lights: React.FC = () => {
  return (
    <>
      <ambientLight color="#ffffff" intensity={2} />
      <directionalLight
        color="#ffffff"
        intensity={1}
        position={[5, 15, 10]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default Lights;
