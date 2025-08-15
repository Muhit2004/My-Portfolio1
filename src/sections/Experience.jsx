import React, {useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {workExperiences} from '../constants/index.js'
import Developer from '../Components/Developer'
import CanvasLoader from '../Components/CanvasLoader';
import { Suspense } from 'react';
import {OrbitControls} from '@react-three/drei'

const Experience = () => {

    // CHANGED: initialize with 'idle' so we have a valid initial animation
    const [animationName    , setAnimationName    ] = useState('idle');
    return (
        <section className="c-space my-20" id="work"> {/* ADDED: id to match navLinks (#work) */}
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>

                <div className="work-container">

                    <div className="work-canvas">

                        <Canvas>
                             <ambientLight intensity ={7}/>
                          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1}/>
                            <OrbitControls
                                enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            />
                            <Suspense fallback={<CanvasLoader/>}>
                                {/* Uses corrected prop `animationName` handled by Developer.jsx */}
                                <Developer position-y={-3} scale={3} animationName={animationName}/>
                            </Suspense>


                        </Canvas>


                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(
                                ({
                                     id, name, icon, title, pos, duration,animation
                                 }) => (
                                    <div key={id} className="work-content_container group"
                                         onClick={() => setAnimationName(animation)}
                                          onPointerOver={() => setAnimationName(animation)}
                                          onPointerOut={() => setAnimationName('idle')}>

                                        <div className="flex flex-col h-full justify-start items-start py-2">
                                            <div className="work-content_logo">
                                                <img
                                                    src={icon}
                                                    alt="logo"
                                                    className="w-full h-full"/>
                                            </div>
                                            <div className="work-content_bar">
                                            </div>
                                            <div className="sm:p-5 px-2.5 py-5">
                                                <p className="text-white-800 font-bold ">{name}</p>
                                                <p className="text-white-500 text-sm  mb-5">{pos}--{duration}</p>
                                                <p className="group-hover:text-white
                                                transition ease-in-out duration-500">{title}</p>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Experience
