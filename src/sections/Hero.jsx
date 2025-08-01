import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import HackerRoom from '../Components/HackersRoom.jsx';
import CanvasLoader from '../Components/CanvasLoader.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';

const Hero = () => {
  const isSmall = useMediaQuery({minWidth: 440, maxWidth: 768});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full border-2 border-black-600 flex flex-col relative">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Muhit<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Projects & Learning in the process</p>
      </div>

      <div className="w-full h-[500px] sm:h-[500px]">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.5}
              maxDistance={20}
            />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.6, -3.6, 0.0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero