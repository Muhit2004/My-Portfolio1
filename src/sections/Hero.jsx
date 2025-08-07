import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../Components/CanvasLoader.jsx";

import Button from "../Components/Button.jsx";
import Computer from "../Components2/canvas/computers.jsx";

const Hero = () => {
  return (
    <section className="min-h-screen w-full border-2 border-black-100 flex flex-col relative">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Muhit<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Projects & Learning in the process
        </p>
      </div>

      <div
        className="w-full h-full inset-0 absolute 
                sm:h-[calc(100%-75px)]  
                md:h-[calc(100%-76px)]          
                lg:h-[calc(100%-75px)]">
        <section className="relative mx-auto h-screen w-full">
          <Computer />
        </section>
        <div
          className=" bottom-0
      left-0 rignt-0 w-full
        items-center justify-center py-2 m-1 mx-auto">
          <a href="#content" className="w-fit">
            <Button
              name="Let's work Together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
