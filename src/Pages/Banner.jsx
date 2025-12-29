import React from 'react';
import image from '../assets/sheauly.png';
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center py-12 px-4  overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                
                {/* Text Content Section */}
                <div className="text-center lg:text-left flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-lime-500 font-mono tracking-widest mb-2 uppercase text-sm">
                            Available for Work
                        </h3>
                        
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
                            Hi, I'm <br />
                            <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                                Halima Akhter Shiuly
                            </span>
                        </h1>

                        <div className="h-12 mt-4">
                            <h2 className="font-bold text-2xl sm:text-3xl text-gray-300">
                                <Typewriter
                                    words={[
                                        "Junior MERN Stack Developer",
                                        "Frontend Specialist",
                                        "React Developer",
                                        "Problem Solver"
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </h2>
                        </div>

                       <p className="mt-6 text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg">
                         Based in Kishoregonj, Bangladesh. I am a passionate 
                        <span className="text-lime-500 font-semibold"> Frontend Developer</span> specializing in the 
                         <span className="text-white font-medium italic underline decoration-lime-500/30 underline-offset-4"> MERN Stack</span>. 
                        I thrive on turning complex logic into elegant, responsive, and user-centric digital solutions.
                        </p>

                        {/* Social & CTA Buttons */}
                        <div className="flex flex-wrap gap-5 justify-center lg:justify-start mt-10">
                         

                            <div className="flex gap-4 items-center">
                                <a href="https://github.com/shiuly-28" target="_blank" rel="noopener noreferrer" 
                                   className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-lime-500 hover:border-lime-500 transition-all">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/halima-akhter-shiuly/" target="_blank" rel="noopener noreferrer" 
                                   className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-lime-500 hover:border-lime-500 transition-all">
                                    <FaLinkedinIn size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex-1 flex justify-center lg:justify-end"
                >
                    {/* Animated Background Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-lime-500/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

                    <div className="relative group">
                        {/* Glass Border Frame */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-lime-500/20 to-blue-500/20 rounded-[3rem] blur-sm group-hover:blur-md transition-all duration-500"></div>
                        
                        <div className="relative w-64 sm:w-80 md:w-96 aspect-square overflow-hidden rounded-[2.5rem] border-2 border-white/10 shadow-2xl">
                            <img
                                src={image}
                                alt="Halima Akhter Shiuly"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        
                        {/* Floating Experience Badge */}
                        {/* <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl border border-white/10 shadow-xl hidden md:block"
                        >
                            <p className="text-lime-500 font-bold text-xl leading-none">Frontend and MERN</p>
                            <p className="text-white text-[10px] uppercase tracking-widest mt-1">Specialist</p>
                        </motion.div> */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;