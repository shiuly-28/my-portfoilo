import React from "react";
import { useParams, Link, Route } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const projects = [

    {
        id: 1,
        title: "Management Restaurant",
        image: "https://i.ibb.co.com/N2yKb69m/Black-Orange-Special-Menu-Restaurant-Banner.png",
        description: "Full-stack restaurant management system with menu, order, and admin panel.",
        github: "https://github.com/your-repo",
        live: "https://your-live-site.com"
    },
    {
        id: 2,
        title: "Roommate Finder",
        image: "https://i.ibb.co.com/vvLydmHj/banner-3-P-AICWdo.jpg",
        description: "Platform to find compatible roommates with filtering and chat system.",
        github: "https://github.com/your-repo",
        live: "https://your-live-site.com"
    },
    {
        id: 3,
        title: "Pet Adoption",
        image: "https://i.ibb.co.com/4wMf0qPV/Screenshot-11.png",
        description: "A pet adoption platform with booking and verification features.",
        github: "https://github.com/your-repo",
        live: "https://your-live-site.com"
    },
    {
        id: 4,
        title: "Event Manager",
        image: "https://i.ibb.co/7VbtJj3/event.jpg",
        description: "Manage events, bookings, and ticket sales easily.",
        github: "https://github.com/sheauly/assignment-12-client-adoption",
        live: "https://assignment-12-client-79f74.web.app/"
    }
];


const ProjectCardDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <p className="text-center mt-10">Project not found</p>;
    }


    return (
        <div className="max-w-7xl mx-auto shadow p-6">
            <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full h-80 object-cover mb-6"
            />
            <h1 className="text-3xl text-white font-bold mb-4">{project.title}</h1>
            <p className="mb-6 text-white">{project.description}</p>
            <h2 className="text-lime-500 font-semibold">Tan Stacq</h2>
            <button className="rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">React, Firebase Authentication, Tailwind CSS, DaisyUI</button>
            <div className="flex gap-4 mt-2">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <FaExternalLinkAlt /> Veiw More
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn bg-amber-300 btn-outline">
                    <FaGithub /> Details
                </a>

            </div>

        </div>
    );
};

export default ProjectCardDetails;
