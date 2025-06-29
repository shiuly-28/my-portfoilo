import React from 'react';
import { FaGithub, FaPaperclip } from 'react-icons/fa';

const ProjectCards = () => {
    const projects = [
        {
            title: 'Management Restaurant',
            image: 'https://i.ibb.co/twdM8Jv1/fresh-fruity-dessert-wooden-table-generated-by-ai-188544-19761.jpg',
            link: 'https://assignment-11-resturent.web.app/',
            code: 'https://github.com/sheauly/assignment-10-client',
            LiveDemo: 'https://assignment-9-c71f8.web.app/',
            description: 'A full-stack restaurant management app with food listing, ordering, and admin dashboard.',
        },
        {
            title: 'Roommate Finder',
            image: 'https://i.ibb.co/PnC81d4/images-3.jpg',
            link: 'https://roommate-finder-project.web.app/',
            code: 'https://github.com/sheauly',
            LiveDemo: 'https://assignment-9-c71f8.web.app/',
            description: 'Find and connect with compatible roommates. Includes post listings and like system.',
        },
        {
            title: 'Event Management',
            image: 'https://i.ibb.co/yBXm4RcD/Dps-Jaipur.jpg',
            link: 'https://assignment-9-c71f8.web.app/',
            code: 'https://github.com/sheauly',
            LiveDemo:'https://assignment-9-c71f8.web.app/',
            description: 'Manage and book events with an interactive UI and protected routes.',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10 max-w-6xl mx-auto">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
                >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                    <div className="p-4  space-y-3">
                        <h3 className="text-white font-bold text-center">{project.title}</h3>
                        <p className="text-sm text-white text-center">{project.description}</p>
                        <div className="flex justify-center gap-4 mt-2">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 p-2 px-4 py-1 bg-primary text-white rounded hover:bg-primary-focus transition"
                            >
                                <FaPaperclip />Live Demo
                            </a>
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" flex  gap-3 p-3 px-4 py-1 bg-secondary text-white rounded hover:bg-secondary-focus transition"
                            >
                                <FaGithub />Code
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;
