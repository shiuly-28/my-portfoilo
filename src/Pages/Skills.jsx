import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaFireAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: 'CSS / Tailwind', icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
    { name: 'JavaScript', icon: <TbBrandJavascript className="text-yellow-400 text-5xl" /> },
    { name: 'React Router', icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { name: 'Express.js', icon: <SiExpress className="text-white text-5xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-5xl" /> },
    { name: 'Firebase', icon: <FaFireAlt className="text-yellow-500 text-5xl" /> },
];

const cardVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.3,
            duration: 0.6,
        },
    },
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-4 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                    🚀 <span className="text-lime-400">My Skills</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={`
                                bg-slate-800 text-gray-200 p-6 rounded-xl flex flex-col items-center gap-3
                                cursor-pointer
                               hover:bg-primary/10 hover:shadow-[0_0_15px_3px_lime] transition duration-300
                            `}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={cardVariants}
                        >
                            <div>{skill.icon}</div>
                            <p className="text-base font-semibold text-center">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Skills;
