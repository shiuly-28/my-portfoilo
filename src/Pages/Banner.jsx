import React from 'react';
import image from '../assets/sheauly.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="py-12 px-4">
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
                        className="w-60 sm:w-80 md:w-96 lg:w-[400px] rounded-full border-4 border-white shadow-xl object-cover"
                    />
                </motion.div>

                {/* Text Content Section */}
                <div className="text-center lg:text-left mt-8 lg:mt-0">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-white">
                        Hi, I'm Sheauly Akhter
                    </h1>

                    <div className="mt-3">
                        <h1 className="font-bold text-2xl text-purple-400">
                            <Typewriter
                                words={["I'M A MERN Stack Developer"]}
                                loop={false}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                    </div>

                    <p className="py-6 text-white leading-relaxed max-w-xl mx-auto lg:mx-0">
                        I'm from Kishoregonj and have completed my Master's degree. I specialize in full-stack web development using MongoDB, Express.js, React.js, and Node.js (MERN stack).
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
                        <a href="https://www.linkedin.com/in/sheauly" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
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
                            <a href="/resume.pdf" download>
                                <button className="btn btn-secondary shadow-md hover:shadow-xl transition-all duration-300">
                                    Hire Me
                                </button>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <a href="/resume.pdf" download>
                                <button className="btn btn-secondary shadow-md hover:shadow-xl transition-all duration-300">
                                    Download
                                </button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
