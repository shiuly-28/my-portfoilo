import React from 'react';
import logo from '../assets/logo1.png';
import { FaEnvelope, FaHome, FaLaptopCode, FaUser } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black w-full text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

                {/* Logo Section */}
                <div className="flex-1">
                    <div className="flex items-center text-center  gap-3">
                        <img src={logo} alt="Logo" className="h-12 w-12  rounded-full shadow-md" />

                    </div>
                    <p className="text-gray-400 text-sm">
                        Passionate MERN Stack Developer crafting modern & responsive web apps.
                    </p>
                </div>

                {/* Quick Access Links */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3">Quick Access</h2>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="/" className="flex hover:text-white transition gap-2"><FaHome />Home</a></li>
                        <li><a href="aboutUs" className="flex hover:text-white transition gap-2"><FaUser />About</a></li>
                        <li><a href="skills" className="flex hover:text-white transition gap-2"><FaLaptopCode />Skills</a></li>
                        <li><a href="contact" className="flex hover:text-white transition gap-2"><FaEnvelope />Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
                    <ul className="text-gray-300 space-y-2 text-sm">
                        <li>📍 Kishoregonj, Dhaka, Bangladesh</li>
                        <li>✉️ shulybd1245@gmail.com</li>
                        <li>📞 +8801757321528</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-10 text-gray-500 text-sm">
                © {new Date().getFullYear()} Sheauly Akhter. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
