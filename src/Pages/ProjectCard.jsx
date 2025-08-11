import React from "react";
import { Link } from "react-router";

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
        image: "https://i.ibb.co/7VbtJj3/event.jpg",
        shortDesc: "Plan and manage events with ease."
    }
];

const ProjectCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mx-w-4xl mx-auto  gap-6 p-6">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="card bg-base-100 shadow-lg hover:shadow-xl transition"
                >
                    <figure>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-80 w-full object-cover"
                        />
                    </figure>
                    <div className="card-body bg-slate-800">
                        <h2 className="card-title text-white">{project.title}</h2>
                        <button className="rounded-2xl btn w-80 text-center text-lime-400 bg-slate-700">{project.shortDesc}</button>
                        <div className="card-actions justify-end">
                            <Link
                                to={`/projectCardDetails/${project.id}`}
                                className="btn btn-primary"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;
