import React from "react";
import { useParams, Link, Route } from "react-router";
import { FaCheckCircle, FaExternalLinkAlt, FaGithub, FaLightbulb, FaLink } from "react-icons/fa";


const projects = [

    {
        id: 1,
        title: "Management Restaurant",
        image: "https://i.ibb.co.com/N2yKb69m/Black-Orange-Special-Menu-Restaurant-Banner.png",
        description: "Full-stack restaurant management system with menu, order, and admin panel.",
        github: "https://github.com/sheauly/assignment-11--client",
        live: "https://management-restaurant-nine.vercel.app/"
    },
    {
        id: 2,
        title: "Roommate Finder",
        image: "https://i.ibb.co.com/vvLydmHj/banner-3-P-AICWdo.jpg",
        description: "Platform to find compatible roommates with filtering and chat system.",
        github: " https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-sheauly",
        live: "https://roommate-finder-project.web.app/auth/login"
    },
    {
        id: 3,
        title: "Pet Adoption",
        image: "https://i.ibb.co.com/4wMf0qPV/Screenshot-11.png",
        description: "A pet adoption platform with booking and verification features.",
        github: "https://github.com/sheauly/assignment-12-client-adoption",
        live: "https://assignment-12-client-79f74.web.app/"
    },
    {
        id: 4,
        title: "Event Manager",
        image: "https://i.ibb.co.com/SwmVds08/Screenshot-13.png",
        description: "Manage events, bookings, and ticket sales easily.",
        github: "https://github.com/programming-hero-web-course1/b11a9-react-authentication-sheauly",
        live: "https://assignment-9-c71f8.web.app/"
    }
];


const ProjectCardDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <p className="text-center mt-10">Project not found</p>;
    }


    return (
        <div className="max-w-7xl mx-auto  p-6 shadow-lg hover:bg-primary/10 hover:shadow-[0_0_30px_3px_lime] transition duration-300">
            <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full h-80 object-cover mb-6"
            />
            <h1 className="text-3xl italic text-white font-bold mb-4">{project.title}</h1>
            <p className="mb-6 italic text-white">{project.description}</p>
            <h2 className="text-lime-500  flex font-semibold italic gap-1"><FaLink className="text-lime-500 mt-1" /> Tan Stack:</h2>

            <div className="flex gap-3">
                <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">React</button>
                <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">Firebase Authentication,</button>
                <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">Tailwind CSS</button>
                <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">DaisyUI</button>

            </div>
            <h1 className="flex italic font-bold p-2 text-lime-500 gap-1"> <FaCheckCircle className="text-lime-500 mt-1" />Challenges:</h1>
            <p className="text-white italic p-2">Implementing protected routes, managing install/uninstall state with Firestore, and session-based review system.</p>
            <h1 className="flex italic font-bold p-2 text-lime-500 gap-1"><FaLightbulb className="text-lime-500 mt-1" />Future Plan: </h1>
            <p className="text-white italic p-2">Add dynamic search and filtering, enhance UI with animations, and integrate real-time notifications using Firebase Cloud Messaging.</p>
            <div className="flex gap-4 mt-2">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn bg-lime-500 rounded-2xl">
                    <FaExternalLinkAlt /> Veiw More
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn bg-amber-300 rounded-2xl btn-outline">
                    <FaGithub />Source Code
                </a>

            </div>

        </div>
    );
};

export default ProjectCardDetails;
