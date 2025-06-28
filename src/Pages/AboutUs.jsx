import React from 'react';
import image from '../assets/sheauly.png';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className="mt-10 h-[700px]  px-4">
            <div className="hero  p-20 from-gray-800 via-gray-700 to-gray-800 rounded-xl ">
                <div className="hero-content flex-col lg:flex-row items-center gap-10">
                    {/* Profile Image */}
                    <img
                        src={image}
                        alt="Sheauly Akhter"
                        className="w-40 sm:w-56 lg:w-64 rounded-full border-4 border-lime-400 "
                    />

                    {/* Animated Text Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-black bg-opacity-60 text-white rounded-lg p-6 shadow-lg max-h-[420px] overflow-y-auto text-justify leading-relaxed space-y-4 w-full lg:w-3/4 cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.01]"
                    >
                        {/* Gradient on Click */}
                        <div className="absolute inset-0 opacity-0 group-active:opacity-100 bg-gradient-to-br from-lime-400 via-blue-500 to-purple-500 rounded-lg z-[-1] transition-opacity duration-700 blur-sm"></div>

                        <p>
                            Hello! I'm <span className="text-lime-400 font-semibold">Sheauly Akhter</span>, a passionate and enthusiastic MERN Stack Developer from Kishoregonj, Bangladesh. I have completed my Master’s degree and have been deeply involved in the world of web development ever since.
                        </p>
                        <p>
                            My programming journey began out of curiosity and quickly turned into a strong passion. I started with basic HTML & CSS, then gradually moved on to JavaScript and React. With time, I explored backend technologies like Node.js, Express.js, and MongoDB.
                        </p>
                        <p>
                            I truly enjoy solving real-world problems through code. Whether it's building a full-stack application from scratch or optimizing frontend performance, I love every step of the development process. Clean, responsive UI and UX design are especially close to my heart.
                        </p>
                        <p>
                            Outside of programming, I love listening to music, traveling, and occasionally painting. These hobbies help me stay creative and bring fresh ideas into my coding life.
                        </p>
                        <p>
                            I'm excited about collaborating with other developers, working on innovative projects, and making a positive impact through technology. Thank you for taking the time to learn about me!
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
