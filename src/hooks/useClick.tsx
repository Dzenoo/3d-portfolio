import { useEffect, useState } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

interface ClickableItem {
  name: string;
  url: string;
}

const useClick = (clickableItems: ClickableItem[]) => {
  const { camera, scene } = useThree();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);
      intersects.forEach((intersect) => {
        const item = clickableItems.find(
          (item) => item.name === (intersect.object as THREE.Mesh).name
        );
        if (item) {
          window.open(item.url, "_blank");
        }
      });
    };

    const handleDocumentMouseMove = (event: MouseEvent) => {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);
      let isHovered = false;
      intersects.forEach((intersect) => {
        if (
          clickableItems.some(
            (item) => item.name === (intersect.object as THREE.Mesh).name
          )
        ) {
          isHovered = true;
        }
      });

      setHovered(isHovered);
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("mousemove", handleDocumentMouseMove);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("mousemove", handleDocumentMouseMove);
    };
  }, [camera, scene, clickableItems]);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return { hovered };
};

export { useClick };
