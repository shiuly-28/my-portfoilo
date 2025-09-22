import React from 'react';
import image from '../assets/sheauly.png';
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import { FaDownload, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import resume from '../assets/Shiuly Resume .pdf'

const Banner = () => {


    // const handleHireClick = () => {
    //     navigate('/contact');
    // };
    return (
        <div className="py-12 px-4 ">
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-10 max-w-6xl mx-auto">
                {/* Image Section */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 150 }}
                    className="rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                >
                    <img
                        src={image}
                        alt="Sheauly Akhter"
                        className="w-60 sm:w-80 md:w-96 lg:w-[400px] rounded-full border-4 border-white shadow-xl object-cover  transform hover:scale-[1.03] cursor-pointer hover:bg-primary/10 hover:shadow-[0_0_15px_3px_lime] transition duration-300"
                    />
                </motion.div>

                {/* Text Content Section */}
                <div className="text-center lg:text-left mt-8 lg:mt-0">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-white">
                        Hi, I'm  Sheauly Akhter
                    </h1>

                    <div className="mt-3">
                        <h1 className="font-bold text-2xl text-lime-500">

                            <Typewriter
                                words={[
                                    "Junior MERN Stack Developer",
                                    "Frontend Developer",
                                    "React Specilist"
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                    </div>

                    <p className="py-6 text-white leading-relaxed max-w-xl mx-auto lg:mx-0">
                        I'm from Kishoregonj and have completed my Master's degree. I specialize in Frontend web development using MongoDB, Express.js, React.js, and Node.js (MERN stack).
                        I love building modern, responsive web applications that solve real-world problems.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 justify-center lg:justify-start mb-4">
                        <a href="https://github.com/sheauly" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.facebook.com/sheauly.akhter.7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/halima-akhter-shiuly/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedinIn size={30} />
                        </a>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <a href="https://github.com/sheauly" download className="btn bg-lime-500 rounded-2xl shadow-md  active:scale-60 transform hover:scale-[1.04] cursor-pointer hover:bg-primary/10 hover:shadow-[0_0_10px_3px_lime] transition duration-300 text-black font-semibold italic">Hire Me

                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <a href={resume} download className="btn bg-amber-300 shadow-md rounded-2xl active:scale-60 transform hover:scale-[1.04] cursor-pointer hover:bg-primary/10 hover:shadow-[0_0_10px_3px_lime] transition duration-300 text-black italic font-semibold"><FaDownload />Download Resume
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
