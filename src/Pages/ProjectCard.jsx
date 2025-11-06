import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Paymet(Team)",
        image: "https://i.postimg.cc/Z50jnHnp/Screenshot-2025-11-06-174036.png",
        shortDesc: "Plan and manage events with ease.",
        skills: ["React.js", "Node.js", "MongoDB", "JWT", "Firebase", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "Management Restaurant",
        image: "https://i.postimg.cc/Sx9dXS2b/Screenshot-17.png",
        shortDesc: "A full-stack restaurant management app.",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase", "Stripe"]
    },
    {
        id: 3,
        title: "Roommate Finder",
        image: "https://i.ibb.co.com/vvLydmHj/banner-3-P-AICWdo.jpg",
        shortDesc: "Find perfect roommates with ease.",
        skills: ["React.js", "Node.js", "MongoDB", "Firebase", "Tailwind CSS", "JWT"]
    },
    {
        id: 4,
        title: "Pet Adoption",
        image: "https://i.ibb.co.com/4wMf0qPV/Screenshot-11.png",
        shortDesc: "Adopt pets easily from verified owners.",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe"]
    },
    
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const ProjectCards = () => {
    return (
        <div className="py-6 sm:py-10 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-3 sm:mb-5">
                🚀 <span className="text-lime-400">My Projects</span>
            </h2>
            <p className="text-center text-gray-300 mb-6 sm:mb-10 px-4 text-sm sm:text-base">
                Here are some of my recent works that showcase my skills and expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-11/12 max-w-7xl mx-auto gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="relative bg-base-100 shadow-lg rounded-lg overflow-hidden hover:shadow-[0_0_30px_3px_lime] transition duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-48 sm:h-56 md:h-64 w-full object-cover"
                            />
                        </div>

                        {/* Card Body */}
                        <div className="bg-slate-800 p-4 sm:p-5">
                            {/* Project Title */}
                            <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">
                                {project.title}
                            </h2>
                            
                            {/* Short Description */}
                            <p className="text-gray-300 text-center text-xs sm:text-sm mb-3 sm:mb-4">
                                {project.shortDesc}
                            </p>
                            
                            {/* Skills Tags */}
                            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4">
                                {project.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium rounded-full 
                                                   bg-gradient-to-r from-purple-600 to-purple-800 text-white 
                                                   border border-purple-400 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* View Details Button */}
                            <div className="flex justify-center">
                                <Link
                                    to={`/projectCardDetails/${project.id}`}
                                    className="flex items-center justify-center gap-1 sm:gap-2
                                               bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                                               hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 
                                               text-white px-6 sm:px-8 py-2 sm:py-2.5
                                               rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] 
                                               hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] 
                                               transition-all duration-300 font-bold text-xs sm:text-sm
                                               border-2 border-white/30
                                               hover:scale-105 transform"
                                >
                                    See Details <FaArrowRight className="animate-pulse" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCards;