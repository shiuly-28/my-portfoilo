import React from 'react';
import image from '../assets/sheauly.png';
import headerImage from '../assets/banner.jpg';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <div
            className="hero h-[700px] bg-no-repeat bg-cover bg-bottom"
            style={{
                backgroundImage: `url(${headerImage})`,
            }}
        >
            <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center gap-10 px-4 py-12 w-full">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 150 }}
                    className="rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                >
                    <img
                        src={image}
                        alt="Sheauly Akhter"
                        className="w-full sm:w-64 lg:w-72 h-full rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </motion.div>
                <div>
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold text-blue-600 "
                        initial={{ opacity: 0, y: -80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 100,
                        }}
                        viewport={{ once: true, amount: 0.6 }}
                    >
                        Hi, I'm Sheauly Akhter
                    </motion.h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-2">MERN Stack Developer</h2>
                    <p className="py-6 text-gray-600 leading-relaxed">
                        I'm from Kishoregonj and have completed my Master's degree. I specialize in full-stack web development using MongoDB, Express.js, React.js, and Node.js (MERN stack).
                        I love building modern, responsive web applications that solve real-world problems.
                    </p>

                    {/* Social Icons */}
                    <div className='flex gap-4'>
                        <a
                            href="https://github.com/sheauly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700  hover:text-black"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a
                            href="https://www.facebook.com/sheauly.akhter.7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-black"
                        >
                            <FaFacebook size={30} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sheauly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-black"
                        >
                            <FaLinkedinIn size={30} />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <div className='flex gap-4'>
                        <div className="flex gap-4">
                            <motion.div
                                className="mt-4"
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
                        </div>
                        <div className="flex gap-4">
                            <motion.div
                                className="mt-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <a href="/resume.pdf" download>
                                    <button className="btn btn-secondary shadow-md hover:shadow-xl transition-all duration-300">
                                        Dawonload
                                    </button>
                                </a>
                            </motion.div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
