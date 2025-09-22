import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Management Restaurant",
        image: "https://i.ibb.co.com/N2yKb69m/Black-Orange-Special-Menu-Restaurant-Banner.png",
        shortDesc: "A full-stack restaurant management app."
    },
    {
        id: 2,
        title: "Roommate Finder",
        image: "https://i.ibb.co.com/vvLydmHj/banner-3-P-AICWdo.jpg",
        shortDesc: "React, Node.js, MongoDB, Firebase, Tailwind CSS, daisyUi"
    },
    {
        id: 3,
        title: "Pet Adoption",
        image: "https://i.ibb.co.com/4wMf0qPV/Screenshot-11.png",
        shortDesc: "Adopt pets easily from verified owners."
    },
    {
        id: 4,
        title: "Event Manager",
        image: "https://i.ibb.co.com/SwmVds08/Screenshot-13.png",
        shortDesc: "Plan and manage events with ease."
    }
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
        <div>
            <h2 className="text-3xl font-bold text-center text-white mb-5">
                🚀 <span className="text-lime-400">My Project</span>
            </h2>
            <p className="text-center text-gray-300 mb-5">
                Here are some of my recent works that showcase my skills and expertise.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto gap-6 p-15">
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
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-64 w-full object-cover"
                        />

                        {/* Button fixed middle of image */}
                        <Link
                            to={`/projectCardDetails/${project.id}`}
                            className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-lg shadow-md transition gap-1"
                        >
                            View Details<FaArrowRight className="mt-1" />
                        </Link>

                        {/* Card body */}
                        <div className="bg-slate-800 p-4 text-center">
                            <h2 className="text-lg font-bold text-white mb-2">{project.title}</h2>
                            <button className="rounded-2xl btn text-center text-lime-400 bg-slate-700">
                                {project.shortDesc}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCards;
