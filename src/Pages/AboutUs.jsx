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
        <section id="about" className="relative min-h-screen flex items-center justify-center py-12 md:py-24 px-4 overflow-hidden font-sans">
            
            {/* --- Animated Background Glows --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[5%] left-[5%] w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-yellow-500/10 rounded-full blur-[80px] md:blur-[110px]"
                ></motion.div>
                <motion.div 
                    animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[5%] right-[5%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-lime-500/10 rounded-full blur-[90px] md:blur-[130px]"
                ></motion.div>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
            >
                {/* --- Left Column: Hero Story --- */}
                <motion.div 
                    variants={itemVariants} 
                    className="lg:col-span-7 p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative flex flex-col justify-between shadow-2xl group overflow-hidden"
                >
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-lime-500/10 rounded-full blur-2xl group-hover:bg-lime-500/20 transition-all duration-700"></div>

                    <div>
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-10 group-hover:border-lime-500/50 transition-all duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lime-500 md:w-8 md:h-8">
                                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-tight">
                            Crafting Digital <br />
                            <span className="text-white/20 group-hover:text-white/40 transition-colors duration-700">Interacti</span>
                            <span className="text-lime-400 italic">øns</span>
                        </h2>
                        
                        <div className="h-1 w-20 md:h-1.5 md:w-24 bg-gradient-to-r from-lime-500 to-transparent mb-6 md:mb-10 rounded-full"></div>

                        <div className="space-y-4 md:space-y-6 max-w-xl">
                            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
                                I'm <span className="text-white font-medium italic underline decoration-lime-500/30 underline-offset-8">Halima Akhter Shiuly</span>, 
                                a Frontend Developer focused on blending <span className="text-white">aesthetics</span> with <span className="text-lime-400">performance</span>.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg">
                                Using the MERN stack, I transform complex ideas into intuitive, high-performance web experiences.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 md:gap-8 mt-10 md:mt-14 pt-8 md:pt-10 border-t border-white/5">
                        <div className="bg-white/[0.03] border border-white/5 px-6 py-4 md:px-10 md:py-6 rounded-2xl md:rounded-3xl backdrop-blur-md">
                            <h4 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">50+</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2 font-black">Projects Built</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 px-6 py-4 md:px-10 md:py-6 rounded-2xl md:rounded-3xl backdrop-blur-md">
                            <h4 className="text-3xl md:text-5xl font-bold text-lime-400 tracking-tighter italic">Always</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2 font-black">Learning</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- Right Column: Tech Grid --- */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
                    
                    {[
                        { title: "JavaScript", label: "Logic Building", icon: "JS", color: "bg-yellow-400", text: "text-yellow-400" },
                        { title: "React.js", label: "UI Library", icon: "⚛", color: "bg-blue-400", text: "text-blue-400" },
                        { title: "Next.js", label: "Framework", icon: "N_", color: "bg-white", text: "text-white" },
                        { title: "Tailwind", label: "Modern CSS", icon: "≈", color: "bg-cyan-400", text: "text-cyan-400" }
                    ].map((tech, idx) => (
                        <motion.div 
                            key={idx}
                            variants={itemVariants} 
                            whileHover={{ y: -5 }}
                            className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative group flex flex-col justify-between overflow-hidden items-center"
                        >
                            <div className={`absolute top-0 left-1/4 right-1/4 h-[1px] md:h-[2px] ${tech.color} blur-[1px] opacity-50`}></div>
                            <div>
                                <span className={`${tech.text} text-4xl md:text-3xl mb-2 md:mb-4 inline-block`}>{tech.icon}</span>
                                <h4 className="text-white font-bold text-5xl text-base md:text-lg">{tech.title}</h4>
                            </div>
                            <p className="text-[9px] md:text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-tighter">{tech.label}</p>
                        </motion.div>
                    ))}

                    {/* Glassy CTA Button */}
                    <motion.div 
                        variants={itemVariants}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="col-span-2 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl flex items-center justify-between group cursor-pointer relative overflow-hidden shadow-2xl transition-all duration-500"
                    >
                        <div className="flex items-center gap-3 md:gap-5 relative z-10">
                            <div className="flex flex-col gap-1">
                                <div className="relative flex h-2 w-2 md:h-3 md:w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-lime-500"></span>
                                </div>
                                <div className="w-7 h-7 md:w-9 md:h-9 border border-white/10 rounded-full flex items-center justify-center bg-white/5">
                                    <span className="text-[10px] font-black text-white italic">Go</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-2xl font-black text-white leading-none group-hover:text-lime-400 transition-colors uppercase tracking-tight">Hire Me /</h4>
                                <p className="text-[10px] md:text-sm text-gray-400 font-bold mt-1">Get in touch</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-lime-500 group-hover:text-black transition-all duration-500">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="md:w-6 md:h-6">
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