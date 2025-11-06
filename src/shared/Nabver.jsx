import React from 'react';
import logo from '../assets/logo2.png';
import { FaHome, FaUser, FaLaptopCode, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import resume from '../assets/Shiuly Resume .pdf';
import { NavLink } from 'react-router-dom';

const Nabver = () => {
    const navItems = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-colors duration-200 
                 ${isActive ? 'text-lime-500 font-bold' : 'text-white hover:text-secondary'}`
            }
        >
            <FaHome /> Home
        </NavLink>

        <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-colors duration-200
                 ${isActive ? 'text-lime-500 font-bold' : 'text-white hover:text-secondary'}`
            }
        >
            <FaUser /> About Us
        </NavLink>

        <NavLink
            to="/skills"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-colors duration-200
                 ${isActive ? 'text-lime-500 font-bold' : 'text-white hover:text-secondary'}`
            }
        >
            <FaLaptopCode /> My Skills
        </NavLink>

        <NavLink
            to="/education"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-colors duration-200
                 ${isActive ? 'text-lime-500 font-bold' : 'text-white hover:text-secondary'}`
            }
        >
            <FaGraduationCap /> Education
        </NavLink>

        <NavLink
            to="/project"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-colors duration-200
                 ${isActive ? 'text-lime-500 font-bold' : 'text-white hover:text-secondary'}`
            }
        >
            <FaProjectDiagram /> Project
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive }) =>
                `flex italic items-center cursor-pointer gap-2 px-3 py-2 transition-colors duration-200
                 ${isActive ? 'text-lime-500 font-bold' : 'text-white hover:text-secondary'}`
            }
        >
            <FaEnvelope /> Contact
        </NavLink>
    </>;

    return (
        <div className="navbar w-11/12 mx-auto rounded-2xl mt-4 text-white px-2 sm:px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-gray-700">
                        {navItems}
                    </ul>
                </div>
                <img className='h-12 sm:h-16 md:h-20' src={logo} alt="Logo" />
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            
            <div className="navbar-end">
                <a 
                    href={resume} 
                    download 
                    className="btn bg-gradient-to-r from-[#00CAFF] to-[#8a33ff] rounded-2xl text-black italic font-semibold 
                               text-xs sm:text-sm md:text-base px-2 sm:px-4 h-auto min-h-[2.5rem] sm:min-h-[3rem]"
                >
                    <FaDownload className="hidden sm:inline" /> 
                    <span className="hidden sm:inline">Download Resume</span>
                    <span className="sm:hidden">Resume</span>
                </a>
            </div>
        </div>
    );
};

export default Nabver;