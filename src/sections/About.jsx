import React from "react";
import Globe from "react-globe.gl";
import arcs from "../constants/arcsData_300.json";
import Button from "../Components/Button.jsx";
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("themuhit123@gmail.com");

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };
    return (
        <section className="c-space my-20" id ="about">
            <div
                className="
grid xl:grid-cols-3
 xl:grid-rows-6

 md:grid-cols-2
 grid-cols-1
 gap-5
 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid1.png"
                            alt="grid-1"
                            className="w-full sm:h[276px] h-fit"
                        />

                        <div>
                            <p className="grid-headtext mt-8 sm:mt-16

">Hi, I'm Muhit</p>
                            <p className="grid-subtext ">
                                Passionate about building with code and learning fullstack web
                                development with the focus of animated 3D Websites and Java
                                while mastering DSA to solve real-world problems.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/GGrid2.png"
                            alt="grid-2"
                            className="w-full sm:h[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I'm actively learning JavaScript, React, and Java, with a
                                growing interest in interactive web design using Three.js and
                                making Projects as I learn.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4 ">
                    <div className="grid-container">
                        <div
                            className="rounded-xl w-full
                              sm:h-[326px] h-fit flex justify-center item-center bg-transparent">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAthmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                arcsData={arcs}
                                arcColor={(d) => d.color}
                                arcStroke={0.5}
                                arcDashLength={0.4}
                                arcDashGap={1}
                                arcDashInitialGap={() => Math.random()}
                                arcDashAnimateTime={4000}
                                labelsData={[
                                    {
                                        lat: 22.4272861,
                                        lng: 91.8248794,
                                        text: "Chittagong, Bangladesh, I'M HERE!",
                                        color: "white",
                                        size: 20,
                                    },
                                ]}
                            />
                        </div>

                        <div>
                            <p className="grid-headtext">
                                I work remotely from most of timeZone
                            </p>
                            <p className="grid-subtext">
                                I'm based in UAE, &nbsp; with remote work available
                            </p>
                            <a href="#contact">
                            <Button id="#contact" name="Contact Me" isBeam containerClass="w-full mt-10"/></a>
                        </div>
                    </div>
                </div>

                <div
                    className="xl:col-span-2
        xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid3.png"
                            alt="grid-3"
                            className="w-full sm:h[266px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">My Journey</p>
                            <p className="grid-subtext">
                                I started my journey in 2023, and since then, I've been
                                continuously learning and building projects to enhance my skill.
                                I love solving problems and building thing through code.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="xl:col-span-1
           xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px]sm:h[276px] h-fit object-cover
               sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>

                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                                    alt="copy"
                                />
                                <p
                                    className="lg:text-2xl md:text-xl font-medium
                text-grey_gradient text-white">
                                    themuhit123@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
