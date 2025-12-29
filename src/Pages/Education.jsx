import React from 'react';
import { motion } from 'framer-motion';

// --- BACKGROUND ANIMATION: Floating color blobs ---
const BackgroundAnimation = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Blue Glow */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1], 
                    x: [0, 80, 0], 
                    y: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[100px]"
            />
            
            {/* Lime Glow */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.3, 1], 
                    x: [0, -100, 0], 
                    y: [0, 80, 0] 
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[110px]"
            />
        </div>
    );
};

// --- MAIN EDUCATION COMPONENT ---
const Education = () => {
    return (
        <section id="education" className="relative py-24 px-6 overflow-hidden">
            
            {/* Call to Background Animation */}
            <BackgroundAnimation />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                        Academic <span className="text-lime-400 italic">Journey</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-lime-500 mx-auto rounded-full shadow-[0_0_15px_rgba(163,230,53,0.5)]"></div>
                </motion.div>

                {/* Glassy Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative p-8 md:p-14 rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl overflow-hidden group"
                >
                    <div className="grid md:grid-cols-12 gap-10 items-center relative z-10">
                        {/* Left Info: Icon & Degree */}
                        <div className="md:col-span-4 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                             <div className="w-20 h-20 bg-lime-500/10 rounded-3xl flex items-center justify-center mb-4 border border-lime-500/20 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                <span className="text-4xl text-white">🎓</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Master's Degree</h3>
                            <p className="text-lime-400 font-mono text-[10px] mt-2 tracking-[0.2em] uppercase bg-lime-500/10 px-4 py-1.5 rounded-full border border-lime-500/20">
                                Completed
                            </p>
                        </div>

                        {/* Right Details: College & Bio */}
                        <div className="md:col-span-8 space-y-6">
                            <div>
                                <h4 className="text-3xl font-bold text-white tracking-tight">Social Work</h4>
                                <p className="text-xl text-lime-400/80 mt-1 font-medium italic">Gurudayal Government College</p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    My background in Social Work provides a unique perspective on <span className="text-white font-medium italic underline decoration-lime-500/30 underline-offset-4">User Experience</span>. I don't just write code; I design solutions by understanding human needs through empathy and behavioral logic.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    Based in <span className="text-white font-medium">Kishoregonj, Dhaka</span>, I am dedicated to bridging the gap between social sciences and modern technology to build applications that are both functional and meaningful.
                                </p>
                            </div>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                {['Empathy', 'Problem Solving', 'Human Behavior', 'UX Research'].map((skill) => (
                                    <span key={skill} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase font-bold tracking-widest hover:border-lime-500/50 hover:text-white transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;