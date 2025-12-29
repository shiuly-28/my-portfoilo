import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsappSquare, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const handleSend = (e) => {
        e.preventDefault();
        const form = e.target;

        emailjs.sendForm(
            import.meta.env.VITE_service_id,
            import.meta.env.VITE_template_id,
            form,
            import.meta.env.VITE_public_id,
        )
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'I will get back to you soon.',
                timer: 2000,
                showConfirmButton: false,
                background: '#121212',
                color: '#fff',
                iconColor: '#a3e635'
            });
            form.reset();
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Failed to send',
                text: err.text || 'Something went wrong!',
                background: '#121212',
                color: '#fff'
            });
        });
    };

    return (
        <section id="contact" className="relative py-24 px-6 overflow-hidden ">
            {/* Inner Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lime-500/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                        Get In <span className="text-lime-400 italic">Touch</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-lime-500 mx-auto rounded-full shadow-[0_0_15px_rgba(163,230,53,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* --- Left Side: Contact Info --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                            
                            <div className="space-y-4">
                                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-500/30 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center text-lime-400 group-hover:scale-110 transition-transform">
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">WhatsApp</p>
                                        <p className="text-white font-medium">+880 1757-321528</p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-lime-500/30 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Me</p>
                                        <p className="text-white font-medium">shulybd1245@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="mt-10 pt-8 border-t border-white/5 flex gap-4">
                                {[
                                    { icon: <FaGithub />, link: "https://github.com/shiuly-28", color: "hover:text-white" },
                                    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/halima-akhter-shiuly/", color: "hover:text-blue-400" },
                                    { icon: <FaWhatsappSquare />, link: "#", color: "hover:text-lime-400" }
                                ].map((social, idx) => (
                                    <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" 
                                       className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-xl transition-all ${social.color} hover:bg-white/10 hover:-translate-y-1`}>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Right Side: Contact Form --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form onSubmit={handleSend} className="p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl space-y-5 relative overflow-hidden">
                            {/* Decorative Background Blob */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime-500/10 rounded-full blur-3xl"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-lime-500/50 transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-lime-500/50 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="How can I help you?"
                                    rows="5"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-lime-500/50 transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-5 rounded-2xl  text-white font-black uppercase tracking-widest text-sm shadow-[0_20px_40px_-10px_rgba(163,230,53,0.3)]  transition-all"
                            >
                                Send Message —&gt;
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;