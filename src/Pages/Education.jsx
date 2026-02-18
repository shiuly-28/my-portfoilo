import React from 'react';
import { motion } from 'framer-motion';

// --- BACKGROUND ANIMATION ---
const BackgroundAnimation = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1], 
                    rotate: [0, 45, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.5, 1], 
                    x: [0, -50, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[130px]"
            />
        </div>
    );
};

const Education = () => {
    const skills = ['Empathy', 'Problem Solving', 'Human Behavior', 'UX Research'];

    return (
        <section id="education" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
            <BackgroundAnimation />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Academic <span className="text-lime-400 italic font-serif">Journey</span>
                    </h3>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-[2px] w-12 bg-lime-500/50"></div>
                        <div className="w-3 h-3 rotate-45 border-2 border-lime-500"></div>
                        <div className="h-[2px] w-12 bg-lime-500/50"></div>
                    </div>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Glowing Border Effect on Hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500/20 to-blue-500/20 rounded-[3.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    
                    <div className="relative p-8 md:p-16 rounded-[3.5rem] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden">
                        <div className="grid md:grid-cols-12 gap-12 items-start">
                            
                            {/* Left Side: Status & Icon */}
                            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-lime-400/20 to-lime-600/5 rounded-3xl flex items-center justify-center border border-lime-500/30 group-hover:rotate-6 transition-transform duration-500">
                                        <span className="text-5xl">🎓</span>
                                    </div>
                                    <motion.div 
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="absolute -top-2 -right-2 bg-lime-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter"
                                    >
                                        Active
                                    </motion.div>
                                </div>
                                
                                <h3 className="text-3xl font-bold text-white mb-2">Master's Degree</h3>
                                <div className="inline-flex items-center gap-2 text-lime-400 font-mono text-xs tracking-widest uppercase py-2 rounded-full">
                                    <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
                                    Graduated
                                </div>
                            </div>

                            {/* Right Side: content */}
                            <div className="md:col-span-8 space-y-8">
                                <div>
                                    <h4 className="text-4xl font-bold text-white mb-2">Social Work</h4>
                                    <p className="text-xl text-gray-400 font-medium">
                                        Gurudayal Government College, <span className="text-lime-400">Kishoregonj</span>
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-gray-300 text-lg leading-relaxed font-light">
                                        My background in <span className="text-white font-semibold">Social Work</span> provides a unique perspective on <span className="underline decoration-lime-500 underline-offset-8">User Experience</span>. I don't just write code; I design solutions by understanding human needs through empathy and behavioral logic.
                                    </p>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                                        Bridging the gap between social sciences and modern technology to build applications that are both functional and meaningful.
                                    </p>
                                </div>

                                {/* Tags with Motion */}
                                <div className="flex flex-wrap gap-3 pt-6">
                                    {skills.map((skill) => (
                                        <motion.span 
                                            key={skill}
                                            whileHover={{ y: -3, backgroundColor: "rgba(163, 230, 53, 0.1)" }}
                                            className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 uppercase font-bold tracking-widest transition-colors hover:text-lime-400 hover:border-lime-500/50 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;