import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaFireAlt,
    FaGithub,
    FaGitAlt,
    FaFigma,
    FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiNetlify } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

// ---------- Data ----------

const technicalSkills = [
    { name: "React.js", percent: 90 },
    { name: "Next.js", percent: 85 },
    { name: "JavaScript", percent: 92 },
    { name: "Node.js", percent: 85 },
    { name: "MongoDB", percent: 80 },
];

const professionalSkills = [
    { name: "Creativity", percent: 90 },
    { name: "Problem Solving", percent: 75 },
    { name: "Communication", percent: 65 },
    { name: "Teamwork", percent: 85 },
];

const skillGroups = [
    {
        title: "Frontend",
        items: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <IoLogoCss3 className="text-sky-500" /> },
            { name: "JavaScript", icon: <TbBrandJavascript className="text-yellow-400" /> },
            { name: "TypeScript", icon: <BiLogoTypescript className="text-[#3178C6]" /> },
            { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
            { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
            { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-white" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        ],
    },
    {
        title: "Tools & Platforms",
        items: [
            { name: "VS Code", icon: <BiLogoVisualStudio className="text-sky-400" /> },
            { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "Github", icon: <FaGithub className="text-white" /> },
            { name: "Firebase", icon: <FaFireAlt className="text-yellow-500" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
            { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
        ],
    },
];

// ---------- Small building blocks ----------

function SkillBar({ name, percent }) {
    return (
        <div className="mb-6 last:mb-0">
            <div className="flex justify-between mb-2 text-sm text-gray-200">
                <span>{name}</span>
                <span className="text-teal-400">{percent}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}

function SkillRing({ name, percent }) {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative w-28 h-28">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="8"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="url(#ring-gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    <defs>
                        <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2dd4bf" />
                            <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
                    {percent}%
                </div>
            </div>
            <p className="text-sm text-gray-300">{name}</p>
        </div>
    );
}

// ---------- Main component ----------

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    My <span className="text-teal-400">Skills</span>
                </h2>

                {/* Bars + Rings */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 mb-6">
                            Technical Skills
                        </h3>
                        {technicalSkills.map((skill) => (
                            <SkillBar key={skill.name} {...skill} />
                        ))}
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-200 mb-6 md:text-right">
                            Professional Skills
                        </h3>
                        <div className="grid grid-cols-2 gap-y-8 justify-items-center">
                            {professionalSkills.map((skill) => (
                                <SkillRing key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categorized icon grids */}
                <div className="space-y-10">
                    {skillGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-lg font-semibold text-gray-200 mb-4">
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex flex-col items-center justify-center gap-2 w-24 h-24 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="text-xs text-gray-300 text-center px-1">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
