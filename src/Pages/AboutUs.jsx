import { motion } from "framer-motion";

const AboutUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden font-sans">
            
            {/* Background Animated Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-yellow-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[40%] left-[30%] w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[80px]"></div>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 max-w-6xl w-full grid md:grid-cols-12 gap-6"
            >
                {/* --- Left Column: Hero Story --- */}
                <motion.div 
                    variants={itemVariants} 
                    className="md:col-span-7 p-10 md:p-14 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative flex flex-col justify-between shadow-2xl"
                >
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group hover:border-lime-500/50 transition-colors">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lime-500">
                                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Crafting Digital <br />
                            <span className="text-white/30">Interacti</span>
                            <span className="text-lime-400 italic">øns</span>
                        </h2>
                        
                        <div className="h-1.5 w-24 bg-gradient-to-r from-lime-500 to-transparent mb-10 rounded-full"></div>

                        <div className="space-y-6 max-w-lg">
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                Hi! I'm <span className="text-white font-medium italic underline decoration-lime-500/30 underline-offset-8">Halima Akhter Shiuly</span>, 
                                an aspiring Frontend Developer. I bridge design and clean code.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Turning complex problems into simple, beautiful, and intuitive web experiences through the MERN stack.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-10 mt-12 pt-10 border-t border-white/5">
                        <div className="bg-white/[0.03] border border-white/5 px-8 py-5 rounded-3xl backdrop-blur-md">
                            <h4 className="text-4xl font-bold text-white tracking-tighter">50+</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-black">Projects Built</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 px-8 py-5 rounded-3xl backdrop-blur-md">
                            <h4 className="text-4xl font-bold text-lime-400 tracking-tighter italic">Always</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-black">Learning</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- Right Column: Tech Grid --- */}
                <div className="md:col-span-5 grid grid-cols-2 gap-5">
                    
                    {/* JavaScript */}
                    <motion.div variants={itemVariants} className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative group">
                        <div className="absolute top-0 left-1/3 right-1/3 h-[2px] bg-yellow-400 blur-[1px]"></div>
                        <span className="bg-yellow-400 text-black font-black px-2 py-0.5 rounded text-xs mb-4 inline-block">JS</span>
                        <h4 className="text-white font-bold text-lg">JavaScript</h4>
                        <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-tighter">Logic Building</p>
                    </motion.div>

                    {/* React.js */}
                    <motion.div variants={itemVariants} className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative group">
                        <div className="absolute top-0 left-1/3 right-1/3 h-[2px] bg-blue-400 blur-[1px]"></div>
                        <span className="text-blue-400 text-3xl block mb-2">⚛</span>
                        <h4 className="text-white font-bold text-lg">React.js</h4>
                        <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-tighter">Library</p>
                    </motion.div>

                    {/* Next.js */}
                    <motion.div variants={itemVariants} className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative group">
                        <div className="absolute top-0 left-1/3 right-1/3 h-[2px] bg-white/40 blur-[1px]"></div>
                        <span className="text-white font-bold text-2xl block mb-3">N_</span>
                        <h4 className="text-white font-bold text-lg">Next.js</h4>
                        <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-tighter">Framework</p>
                    </motion.div>

                    {/* Tailwind */}
                    <motion.div variants={itemVariants} className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative group">
                        <div className="absolute top-0 left-1/3 right-1/3 h-[2px] bg-cyan-400 blur-[1px]"></div>
                        <span className="text-cyan-400 text-3xl block mb-2">≈</span>
                        <h4 className="text-white font-bold text-lg">Tailwind</h4>
                        <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-tighter">Modern UI</p>
                    </motion.div>

                    {/* Glassy Ready to Work CTA */}
                    <motion.div 
                        variants={itemVariants}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="col-span-2 p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl flex items-center justify-between group cursor-pointer relative overflow-hidden shadow-2xl transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-center gap-5 relative z-10">
                            <div className="flex flex-col gap-1.5">
                                <div className="flex gap-1.5">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                </div>
                                <div className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center bg-white/5">
                                    <span className="text-xs font-black text-white italic">3</span>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-white font-black text-2xl leading-none group-hover:text-lime-400 transition-colors">Ready to Work /</h4>
                                <p className="text-gray-400 text-sm font-bold mt-1 underline decoration-lime-500/20 underline-offset-4 group-hover:text-white transition-all">Click to Contact</p>
                            </div>
                        </div>

                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-lime-500 group-hover:text-black group-hover:border-lime-500 transition-all duration-500 shadow-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutUs;