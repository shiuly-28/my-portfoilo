import React from "react";
import { useParams, Link, Route } from "react-router";
import { FaCheckCircle, FaExternalLinkAlt, FaGithub, FaLightbulb, FaLink } from "react-icons/fa";


const projects = [
     {
    id: 1,
    title: "PayMate (Team Project)",
    image: "https://i.postimg.cc/Z50jnHnp/Screenshot-2025-11-06-174036.png",
    shortDesc: "A secure digital wallet for sending, receiving, and managing money anytime.",
    description: "PayMate is a secure and user-friendly digital wallet system where users can create accounts, transfer money, make payments, and view their transaction history in real time. The project includes secure authentication, instant balance updates, and a fully responsive interface for smooth usage across devices.",
    github: "https://github.com/mithun41/digital-wallet-client",
    live: "https://digital-wallet-paymate.netlify.app/"
},
{
    id: 2,
    title: "SwiftPick",
    image: "https://i.postimg.cc/g24JFwy5/Screenshot-2026-07-07-161545.png",
    description: "Full-stack grocery delivery app with real-time tracking, Socket.io live location, Stripe payment, and role-based dashboard for user, admin & delivery boy.",
    github: "https://github.com/shiuly-28/swiftcart",
    live: "https://swiftcart-nine-eta.vercel.app/"
},
    {
    id: 3,
    title: "WriteFlow Ai",
    image: "https://i.postimg.cc/bYFp73ND/Screenshot-2026-07-07-211658.png",
    description: "An advanced AI-powered content generation platform featuring dynamic templates, smart prompt engineering, and an intuitive user dashboard.",
    github: "https://github.com/shiuly-28/writeflow-ai",
    live: "https://writeflow-ai-sand.vercel.app/"
},
    {
        id: 4,
        title: "Pet Adoption",
        image: "https://i.ibb.co.com/4wMf0qPV/Screenshot-11.png",
        description: "A pet adoption platform with booking and verification features.",
        github: "https://github.com/sheauly/assignment-12-client-adoption",
        live: "https://pet-adoption-pink.vercel.app/"
    },
   
];

const ProjectCardDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <p className="text-center mt-10">Project not found</p>;
    }


return (
        <div className="max-w-7xl mx-auto mt-8  p-6 shadow-lg hover:bg-primary/10 hover:shadow-[0_0_30px_3px_lime] transition duration-300">
            <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full h-80 object-cover mb-6"
            />
            <h1 className="text-3xl italic text-white font-bold mb-4">{project.title}</h1>
            <p className="mb-6 italic text-white">{project.description}</p>
            <h2 className="text-lime-500  flex font-semibold italic gap-1"><FaLink className="text-lime-500 mt-1" /> Tan Stack:</h2>

            <div className="flex flex-wrap gap-3">
    <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">Next.js</button>
    <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">TypeScript</button>
    <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">MongoDB</button>
    <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">Socket.io</button>
    <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">Stripe</button>
    <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">Redux</button>
    <button className="italic rounded-2xl bg-slate-700 p-2 text-lime-500 mt-3">Tailwind CSS</button>
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
