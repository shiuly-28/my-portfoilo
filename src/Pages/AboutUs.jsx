import { motion } from "framer-motion";

// ---------- Editable content ----------


const profile = {
    name: "Halima Akhter Shiuly",
    role: "Frontend Developer",
    location: "Sylhet, Bangladesh",
    email: "shulybd1245@gmail.com",
    availability: "Open to freelance & full-time roles",
    photoUrl: "", 
};

const quickFacts = [
    { label: "Based in", value: profile.location },
    { label: "Email", value: profile.email },
    { label: "Status", value: profile.availability },
    { label: "Core stack", value: "MERN + Next.js" },
];

const journey = [
    {
        year: "Start",
        title: "Began learning web development",
        desc: "Started with HTML, CSS and JavaScript fundamentals.",
    },
    {
        year: "Growth",
        title: "Moved into the MERN stack",
        desc: "Built full-stack apps with React, Node.js, Express and MongoDB.",
    },
    {
        year: "Now",
        title: "Building production-ready apps",
        desc: "Working with Next.js, TypeScript, JWT auth, and payment integrations like Stripe.",
    },
];

const interests = [
    "Clean UI",
    "Problem Solving",
    "Open Source",
    "Reading",
    "System Design",
];

// ---------- Animation variants ----------

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ---------- Component ----------

const AboutMe = () => {
    const initials = profile.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <section
            id="about-me"
            className="min-h-screen py-16 md:py-24 px-6 text-white font-sans"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-bold text-center mb-14"
                >
                    About <span className="text-teal-400">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-12 gap-10">
                    {/* Left: Profile card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-2xl font-bold text-teal-300 mb-4 overflow-hidden">
                            {profile.photoUrl ? (
                                <img
                                    src={profile.photoUrl}
                                    alt={profile.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                initials
                            )}
                        </div>
                        <h3 className="text-lg font-semibold">{profile.name}</h3>
                        <p className="text-teal-400 text-sm mb-6">{profile.role}</p>

                        <div className="w-full space-y-3 text-left">
                            {quickFacts.map((fact) => (
                                <div key={fact.label} className="text-sm">
                                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                                        {fact.label}
                                    </p>
                                    <p className="text-gray-200">{fact.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Story + Journey + Interests */}
                    <div className="md:col-span-8 flex flex-col gap-10">
                        <motion.div variants={itemVariants}>
                            <p className="text-gray-300 leading-relaxed">
                                I build web applications end to end — from designing clean,
                                usable interfaces to wiring up the backend that powers them.
                                My focus is the MERN stack, paired with Next.js and TypeScript
                                for larger, production-grade projects. I care about writing
                                code that's easy to maintain and interfaces that feel
                                effortless to use.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-5">
                                My Journey
                            </h4>
                            <div className="space-y-6 border-l border-white/10 pl-6">
                                {journey.map((step) => (
                                    <div key={step.title} className="relative">
                                        <span className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-teal-400" />
                                        <p className="text-xs text-teal-400 font-medium mb-1">
                                            {step.year}
                                        </p>
                                        <h5 className="text-white font-semibold text-sm md:text-base">
                                            {step.title}
                                        </h5>
                                        <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                                Beyond Code
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((interest) => (
                                    <span
                                        key={interest}
                                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-gray-300"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;