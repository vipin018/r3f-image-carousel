import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense } from "react";
import * as THREE from "three";
import { ImageCarousel } from "./ImageCarousel";

export const Experience = () => {
  const { scene } = useThree();

  const sampleImages = [
    "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1643646736753-04809d58cbf9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1643304187561-022272be30ca?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1684868623487-681b0e249c1f?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583492651495-010313cd52fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1753362770775-2f9b5c95a263?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1750055688308-0afb6311b9fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664073171417-31b266b230a4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  ]


  const controls = useControls({
    // Carousel settings
    radius: { value: 4.5, min: 3, max: 12, step: 0.1 },

    // Image settings
    imageWidth: { value: 1.9, min: 1, max: 8, step: 0.1 },
    imageHeight: { value: 1.4, min: 1, max: 10, step: 0.1 },

    // Visual settings
    cornerRadius: { value: 0.05, min: 0, max: 0.5, step: 0.01 },
    bendAmount: { value: 0.1, min: 0, max: 2, step: 0.05 },
    backgroundColor: "#e2e2e2",

    // Opacity settings
    centerOpacity: { value: 1.0, min: 0.1, max: 1.0, step: 0.05 },
    adjacentOpacity: { value: 0.9, min: 0.1, max: 1.0, step: 0.05 },
    farOpacity: { value: 0.8, min: 0.0, max: 1.0, step: 0.05 },

    // Physics settings
    friction: { value: 90, min: 80, max: 99, step: 1 },
    wheelSensitivity: { value: 100, min: 1, max: 500, step: 5 },
    dragSensitivity: { value: 300, min: 1, max: 1000, step: 10 },
    enableSnapping: true,
  });

  // Update scene background color
  scene.background = new THREE.Color(controls.backgroundColor);

  return (
    <>
      <Suspense
        fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="gray" />
          </mesh>
        }
      >
        <ImageCarousel
          images={sampleImages}
          radius={controls.radius}
          imageWidth={controls.imageWidth}
          imageHeight={controls.imageHeight}
          cornerRadius={controls.cornerRadius}
          bendAmount={controls.bendAmount}
          centerOpacity={controls.centerOpacity}
          adjacentOpacity={controls.adjacentOpacity}
          farOpacity={controls.farOpacity}
          friction={controls.friction / 100}
          wheelSensitivity={controls.wheelSensitivity}
          dragSensitivity={controls.dragSensitivity}
          enableSnapping={controls.enableSnapping}
        />
      </Suspense>
    </>
  );
};
