import React from 'react';

const ProjectCards = () => {
    const projects = [
        {
            title: 'Management Resturent',
            image: 'https://i.ibb.co/twdM8Jv1/fresh-fruity-dessert-wooden-table-generated-by-ai-188544-19761.jpg',
            link: 'https://assignment-11-resturent.web.app/',
        },
        {
            title: 'Roomate Finder',
            image: 'https://i.ibb.co/PnC81d4/images-3.jpg',
            link: 'https://roommate-finder-project.web.app/',
        },
       
        {
            title: 'Event Managemnt',
            image: 'https://i.ibb.co/yBXm4RcD/Dps-Jaipur.jpg',
            link: 'https://assignment-9-c71f8.web.app/',
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
                    <div className="p-4 bg-base-100">
                        <h3 className="text-lg font-bold text-center">{project.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;
