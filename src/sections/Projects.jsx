import React from "react";
import { myProjects } from "../constants/index.js";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import { Suspense } from "react";
import DemoComputers from "../Components/DemoComputers.jsx";
const Projects = () => {
  const projectCount = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <h2 className="head-text">My Workk</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt={`${currentProject.title} spotlight`}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}>
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt={`${currentProject.title} logo`}
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag) => (
                <div key={tag.id} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <span>Check Live Site</span>
              <img
                src="/assets/arrow-up.png"
                alt="Open in new tab"
                className="w-3 h-3"
              />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
              aria-label="Previous project">
              <img src="/assets/left-arrow.png" alt="Previous" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
              aria-label="Next project">
              <img
                src="/assets/right-arrow.png"
                alt="Next"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div
          className=" border border-black-300 rounded-lg
                  shadow-2xl shadow-black-200 bg-black-200 h-96 lg:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={1.8}
                  position={[0, -3, 0]}
                  rotation={[0, -0.1, 0]}>
                  <OrbitControls
                    maxPolarAngle={Math.PI / 2}
                    enableZoom={false}
                  />
                  <DemoComputers />
                </group>
              </Suspense>
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
