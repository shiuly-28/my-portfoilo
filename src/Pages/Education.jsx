import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const educationData = [
    {
        degree: "Master of Arts (MA) in English",
        institution: "National University, Bangladesh",
        duration: "2020 – 2021",
        result: "CGPA: 3.75 out of 4.00",
    },
    {
        degree: "Bachelor of Arts (BA) in English",
        institution: "National University, Bangladesh",
        duration: "2016 – 2020",
        result: "CGPA: 3.60 out of 4.00",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Kishoregonj Govt. College",
        duration: "2014 – 2016",
        result: "GPA: 4.80 out of 5.00",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 0.7 },
    },
};

const Education = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle active card
    };

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-12">
                {/* Left Heading */}
                <div className="text-center bg-gray-800 lg:text-left space-y-6 rounded-xl shadow-md p-10 border-l-4 border-red-400 hover:shadow-xl transition">
                    <h2 className="text-4xl font-bold text-white leading-snug">
                        🎓 My Educational <span className="text-red-500">Background</span>
                    </h2>
                    <p className="text-white max-w-md">
                        I have completed my academic journey with distinction and built a solid foundation in language, logic, and development principles through formal education.
                    </p>
                </div>
                

                {/* Right Cards */}
                <div className="space-y-6 relative z-10">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`relative z-10 cursor-pointer rounded-xl shadow-md p-6 border border-red-400 transition-all duration-300 ${activeIndex === index ? "ring-4 ring-red-400 ring-opacity-30 bg-gray-900" : "bg-gray-800"
                                }`}
                            initial="hidden"
                            whileInView="visible"
                            whileTap={{ scale: 0.97 }}
                            viewport={{ once: true, amount: 0.4 }}
                            variants={cardVariants}
                        >
                            <h3 className="text-lg font-semibold text-white mb-1">{item.degree}</h3>
                            <p className="text-sm text-gray-300 mb-1">
                                <span className="font-medium">Institution:</span> {item.institution}
                            </p>
                            <p className="text-sm text-gray-300 mb-1">
                                <span className="font-medium">Duration:</span> {item.duration}
                            </p>
                            <p className="text-sm text-gray-300">
                                <span className="font-medium">Result:</span> {item.result}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
