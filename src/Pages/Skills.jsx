import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaFireAlt,
    FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <IoLogoCss3 className="text-yellow-400 text-5xl" /> },
    { name: " Tailwind", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
    { name: "JavaScript", icon: <TbBrandJavascript className="text-yellow-400 text-5xl" /> },
    { name: "React Router", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-white text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
    { name: "Firebase", icon: <FaFireAlt className="text-yellow-500 text-5xl" /> },
    { name: "Firebase", icon: <FaGithub className="text-5xl" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-4 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                    🚀 <span className="text-lime-400">My Skills</span>
                </h2>

                {/* ১ম লাইন */}
                <motion.div
                    className="flex gap-6 mb-8"
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                    {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 text-gray-200 px-6 py-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer hover:bg-primary/10 hover:shadow-[0_0_15px_3px_lime] transition duration-300 min-w-[150px]"
                        >
                            <div>{skill.icon}</div>
                            <p className="text-base font-semibold text-center">{skill.name}</p>
                        </div>
                    ))}
                </motion.div>

                {/* ২য় লাইন */}
                <motion.div
                    className="flex gap-6"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                    {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 text-gray-200 px-6 py-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer hover:bg-primary/10 hover:shadow-[0_0_15px_3px_lime] transition duration-300 min-w-[150px]"
                        >
                            <div>{skill.icon}</div>
                            <p className="text-base font-semibold text-center">{skill.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
