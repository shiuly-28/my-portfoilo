import React from 'react';
import Marquee from 'react-fast-marquee';

const skills = [
    {
        name: "HTML",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Tailwind CSS",
        image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
        name: "JavaScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "React Router",
        image: "https://i.ibb.co/7xzFV2r8/download.png",
    },
    {
        name: "Node.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Express.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        name: "MongoDB",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "Firebase",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
];

const SkillMarquee = () => {
    return (
        <div className="py-10 px-4">
            <h2 className="text-3xl font-bold text-center text-lime-400 mb-8">🚀 Technologies I Use</h2>

            <Marquee gradient={false} speed={70} pauseOnHover={true}>
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="bg-lime-500 hover:bg-amber-500 rounded-xl shadow-md p-5 text-center mx-4 w-40 flex flex-col items-center transition-transform hover:-translate-y-1 duration-300"
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-14 h-14 mb-3 object-contain"
                        />
                        <p className="text-white text-sm font-semibold">{skill.name}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default SkillMarquee;
