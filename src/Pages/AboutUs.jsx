import { motion } from "framer-motion";

const AboutUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 px-6 text-white font-sans overflow-hidden">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center text-white mb-10 z-10">
                🚀 <span className="text-lime-400">My Skills</span>
            </h2>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
                
                {/* --- Left Column: Hero Story --- */}
                <motion.div 
                    variants={itemVariants} 
                    className="lg:col-span-7 flex flex-col justify-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Crafting Digital <span className="text-lime-400">Interactions</span>
                    </h2>
                    
                    <div className="space-y-4 max-w-xl text-gray-300 font-light text-base md:text-lg leading-relaxed">
                        <p>
                            I'm <span className="text-white font-medium">Halima Akhter Shiuly</span>, 
                            a Frontend Developer focused on blending clean aesthetics with seamless performance.
                        </p>
                        <p className="text-gray-400">
                           Using the MERN stack and modern frameworks like Next.js and TypeScript, I transform complex architectural challenges into intuitive, high-performance web experiences. From implementing secure JWT authentication and role-based access control to
                            integrating seamless payment gateways like Stripe and managing large-scale database operations with MongoDB, I focus on building scalable, production-ready applications.
                        </p>
                    </div>

                    <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">50+</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-medium">Projects Built</p>
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-lime-400 tracking-tight">MERN</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-medium">Core Stack</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- Right Column: Tech Grid & CTA --- */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                        {[
                            { title: "JavaScript", label: "Logic Building", icon: "JS", text: "text-yellow-400" },
                            { title: "TypeScript", label: "Type Safety", icon: "TS", text: "text-blue-500" },
                            { title: "React.js", label: "UI Library", icon: "⚛", text: "text-blue-400" },
                            { title: "Next.js", label: "Framework", icon: "N_", text: "text-white" },
                            { title: "Tailwind", label: "Modern CSS", icon: "≈", text: "text-cyan-400" }
                        ].map((tech, idx) => (
                            <motion.div 
                                key={idx}
                                variants={itemVariants} 
                                whileHover={{ y: -4 }}
                                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between h-32 transition-colors hover:border-white/10"
                            >
                                <span className={`${tech.text} text-2xl inline-block font-mono font-bold`}>{tech.icon}</span>
                                <div>
                                    <h4 className="text-white font-semibold text-sm md:text-base">{tech.title}</h4>
                                    <p className="text-[10px] text-gray-500 mt-0.5 font-medium tracking-wide">{tech.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Minimalist CTA Button */}
                    <motion.div 
                        variants={itemVariants}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="p-5 rounded-2xl border border-lime-500/20 bg-lime-500/[0.02] hover:bg-lime-500/[0.05] flex items-center justify-between group cursor-pointer transition-all duration-300 mt-2"
                    >
                        <div className="flex items-center gap-4">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                            </div>
                            <div>
                                <h4 className="text-sm md:text-base font-semibold text-white group-hover:text-lime-400 transition-colors">Hire Me / Get in touch</h4>
                            </div>
                        </div>
                        <div className="text-gray-400 group-hover:text-lime-400 group-hover:translate-x-1 transition-all duration-300">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default AboutUs;