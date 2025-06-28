import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        
        <footer className="bg-gray-900 text-white py-8">

            <div className="w-full h-[2px] bg-gray-700"></div>

            <div className="max-w-4xl mx-auto text-center px-4 mt-6">
                {/* Name */}
                <h2 className="text-2xl font-semibold mb-2">Sheauly Akhter</h2>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-4">
                    <a
                        href="https://github.com/sheauly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaGithub size={26} />
                    </a>
                    <a
                        href="https://www.facebook.com/sheauly.akhter.7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaFacebook size={26} />
                    </a>
                    
                        href="https://www.linkedin.com/in/sheauly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaLinkedinIn size={26} />
                    </a>
                </div>

                {/* Bottom Text */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Sheauly Akhter. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
