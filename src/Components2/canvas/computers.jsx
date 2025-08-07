import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { calculateSizes } from "../../constants/index.js";
import { useMediaQuery } from "react-responsive";

import CanvasLoader from "../layout/Loader";
import { PerspectiveCamera } from "@react-three/drei";

import Target from "../../Components/Target.jsx";
import ReactLogo from "../../Components/ReactLogo.jsx";
import Cube from "../../Components/Cube.jsx";
import Rings from "../../Components/Rings.jsx";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isSmalll = useMediaQuery({ minWidth: 440, maxWidth: 768 });
  const isMobilee = useMediaQuery({ maxWidth: 768 });
  const isTablett = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmalll, isMobilee, isTablett);

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [19, 8, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[-10, 0, 10]} />

        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers scale={sizes.deskScale} position={sizes.deskPosition} />

          <group>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} scale={0.55} />
            <Cube position={sizes.cubePosition} scale={0.6} />
            <Rings position={sizes.ringPosition} />
          </group>
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;
