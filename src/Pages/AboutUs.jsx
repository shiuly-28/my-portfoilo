import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center  px-4 py-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center glass p-10 rounded-2xl shadow-lg"
            >
                <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
                <p className="text-base-content text-lg leading-relaxed">
                    Hello! I'm <span className="font-semibold text-accent">Sheauly Akhter</span>, a passionate and aspiring <strong>MERN Stack Developer</strong> from Bangladesh. I love turning ideas into real-world, interactive web applications using modern technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. I'm also a proud member of the <strong>Programming Hero Community</strong>, where I continuously sharpen my skills and help others grow.
                </p>

                <p className="mt-4 text-base-content text-lg leading-relaxed">
                    With a strong foundation in <strong>JavaScript</strong> and a curious mind, I enjoy building projects that solve problems and provide great user experiences. I’m currently looking for opportunities where I can contribute, learn, and grow as a developer.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutUs