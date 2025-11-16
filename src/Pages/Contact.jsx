import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaFacebook, FaLinkedinIn, FaWhatsappSquare } from 'react-icons/fa';

import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const handleSend = (e) => {
        e.preventDefault();

        const form = e.target;
        console.log(import.meta.env.VITE_service_id,
            import.meta.env.VITE_template_id,
            form,
            import.meta.env.VITE_public_id,);
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
                    timer: 1500,
                    showConfirmButton: false,
                    position: 'top-end'
                });
                // form.reset();
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to send',
                    text: err.text || 'Something went wrong!',
                });
            });
    };

    return (
        <div className="px-4 py-12 md:px-10  max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Contact Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-xl shadow-lg p-6 space-y-4 bg-gray-500 input-bordered w-full rounded-xl p-5 hover:shadow-[0_0_30px_3px_lime] transition duration-300"
                >
                    <h3 className="text-2xl font-bold text-lime-500">My Information</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                        <p className="flex items-center gap-3 bg-gray-800 text-white input-bordered w-full rounded-xl p-5">WhatsApp: +8801757321528</p>
                        <p className="flex items-center gap-3 bg-gray-800 text-white input-bordered w-full rounded-xl p-5">Email: shulybd1245@gmail.com</p>
                    </div>
                    <div className="flex gap-4 justify-center lg:justify-start bg-gray-800 text-white input-bordered w-full rounded-xl p-6">
                        <a href="https://github.com/shiuly-28" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaGithub size={30} /></a>
                        <a href="https://www.linkedin.com/in/halima-akhter-shiuly/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedinIn size={30} /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaWhatsappSquare size={30} /></a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="rounded-xl shadow-lg p-6 space-y-4 bg-gray-500 input-bordered w-full rounded-xl p-5 hover:shadow-[0_0_30px_3px_lime] transition duration-300"
                >
                    <h3 className="text-2xl font-bold text-lime-500">Send a Message</h3>
                    <form onSubmit={handleSend} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input bg-gray-800 text-white input-bordered w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="input bg-gray-800 text-white input-bordered w-full"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            className="textarea bg-gray-800 text-white textarea-bordered w-full"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-green-500 p-5 rounded text-white font-semibold w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
