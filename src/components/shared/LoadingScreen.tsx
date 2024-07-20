import React, { useState, useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

interface LoadingScreenProps {
  onEnter: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter }) => {
  const { progress, active } = useProgress();
  const [loaded, setLoaded] = useState(false);
  const loadingScreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progress === 100 && !active) {
      setLoaded(true);
    }
  }, [progress, active]);

  const handleEnter = () => {
    gsap.to(loadingScreenRef.current, {
      duration: 1,
      opacity: 0,
      onComplete: onEnter,
    });
  };

  return (
    <div
      ref={loadingScreenRef}
      className="fixed inset-0 flex items-center justify-center bg-blue-600 z-50"
    >
      {!loaded ? (
        <div className="text-white text-xl">
          Loading... {Math.round(progress)}%
        </div>
      ) : (
        <button
          onClick={handleEnter}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Enter Now
        </button>
      )}
    </div>
  );
};

export default LoadingScreen;
