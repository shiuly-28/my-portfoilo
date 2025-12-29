import React from 'react';
import logo from '../assets/logo2.png';
import { FaHome, FaUser, FaLaptopCode, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import resume from '../assets/Shiuly_Fronted_Resume.pdf';
import { NavLink } from 'react-router-dom';

const Nabver = () => {
    const navItems = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-all duration-300 rounded-lg
                 ${isActive ? 'text-lime-500 font-bold bg-white/5' : 'text-white hover:text-lime-400 hover:bg-white/5'}`
            }
        >
            <FaHome /> Home
        </NavLink>

        <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-all duration-300 rounded-lg
                 ${isActive ? 'text-lime-500 font-bold bg-white/5' : 'text-white hover:text-lime-400 hover:bg-white/5'}`
            }
        >
            <FaUser /> About
        </NavLink>

        <NavLink
            to="/skills"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-all duration-300 rounded-lg
                 ${isActive ? 'text-lime-500 font-bold bg-white/5' : 'text-white hover:text-lime-400 hover:bg-white/5'}`
            }
        >
            <FaLaptopCode /> Skills
        </NavLink>

        <NavLink
            to="/education"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-all duration-300 rounded-lg
                 ${isActive ? 'text-lime-500 font-bold bg-white/5' : 'text-white hover:text-lime-400 hover:bg-white/5'}`
            }
        >
            <FaGraduationCap /> Education
        </NavLink>

        <NavLink
            to="/project"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-all duration-300 rounded-lg
                 ${isActive ? 'text-lime-500 font-bold bg-white/5' : 'text-white hover:text-lime-400 hover:bg-white/5'}`
            }
        >
            <FaProjectDiagram /> Project
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-all duration-300 rounded-lg
                 ${isActive ? 'text-lime-500 font-bold bg-white/5' : 'text-white hover:text-lime-400 hover:bg-white/5'}`
            }
        >
            <FaEnvelope /> Contact
        </NavLink>
    </>;

    return (
        /* Sticky Wrapper with Glassmorphism */
        <nav className="sticky top-0 z-[100] w-full px-4 py-3 backdrop-blur-md border-b border-white/5">
            <div className="navbar max-w-7xl mx-auto p-0 min-h-fit">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#0a0a0a] rounded-2xl z-[1] mt-3 w-52 p-4 shadow-2xl border border-white/10 gap-2">
                            {navItems}
                        </ul>
                    </div>
                    {/* Logo with slight animation */}
                    <img className='h-10 sm:h-12 md:h-14 transition-transform hover:scale-105' src={logo} alt="Logo" />
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 text-sm">
                        {navItems}
                    </ul>
                </div>
                
                <div className="navbar-end">
                    <a 
                        href={resume} 
                        download 
                        className="btn border-none bg-gradient-to-r from-lime-400 to-emerald-500 hover:from-lime-500 hover:to-emerald-600 rounded-full text-black italic font-bold text-xs sm:text-sm px-4 sm:px-6 transition-all shadow-lg shadow-lime-500/20"
                    >
                        <FaDownload className="hidden sm:inline mr-2" /> 
                        <span>Resume</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nabver;