import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <section className="py-16 px-6  text-white">
            <motion.div
                onClick={handleClick}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{
                    scale: 1.02,
                    boxShadow: "", // indigo glow
                    backgroundColor: active ? "" : "", // indigo-800 or slate-800
                }}
                className={`max-w-4xl mx-auto p-8 rounded-xl transition-all duration-300 shadow-md cursor-pointer ${active ? 'bg-lime-800 text-white' : 'hover:bg-primary/10 hover:shadow-[0_0_10px_3px_lime] transition duration-300'
                    }`}
            >
                <h2 className="text-3xl font-bold text-lime-300 mb-6 text-center">
                    👩‍💻 Edocation
                </h2>

                <p className="text-gray-300 text-lg mb-4">
                    Hello! I'm <span className="text-white font-semibold">Sheauly Akhter</span>, a passionate and enthusiastic web developer based in <span className="text-white">Kishoregonj, Dhaka, Bangladesh</span>.
                </p>

                <p className="text-gray-300 text-lg mb-4">
                    I have successfully completed my Master’s degree in <span className="text-white font-medium">Social Work</span> from <span className="text-white font-medium">Gurudayal Government College</span>. Though my academic background is in social sciences, I followed my passion and transitioned into the world of technology as a <span className="text-white font-medium">developer</span>.
                </p>

                <p className="text-gray-300 text-lg">
                    I enjoy solving real-world problems through clean, efficient code and love building responsive, modern web applications. I am continuously learning and growing in the field of software development.
                </p>
            </motion.div>
        </section>
    );
};

export default Education;
