import React from 'react';
import logo from '../assets/logo.png'
import { FaHome, FaUser, FaLaptopCode, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdContactEmergency } from 'react-icons/md';
import resume from '../assets/Sheauly.pdf'
import { NavLink } from 'react-router';




const Nabver = () => {
    const navItems = <>
        <NavLink
            to="/"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center cursor-pointer gap-2"
        >
            <FaHome /> Home <span className="ml-2"></span>
        </NavLink>

        <NavLink
            to="aboutUs"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center cursor-pointer gap-2"
        >
            <FaUser />About Us <span className="ml-2"></span>
        </NavLink>

        <NavLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center cursor-pointer gap-2"
        >
            <FaLaptopCode />My Skills <span className="ml-2 gap-2"></span>
        </NavLink>

        <NavLink
            to="education"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center cursor-pointer gap-2"
        >
            <FaGraduationCap />Education <span className="ml-2"></span>
        </NavLink>

        <NavLink
            to="project"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center cursor-pointer gap-2"
        >
            <FaProjectDiagram />Project <span className="ml-2"></span>
        </NavLink>

        <NavLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center cursor-pointer gap-2"
        >
            <FaEnvelope /> Contact <span className="m-2 "></span>
        </NavLink>
    </>

    return (
        <div className="navbar rounded-2xl mt-4 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <img className='h-20 ' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume} download className="btn btn-secondary text-black italic font-semibold"><FaDownload />Download Resume </a>
            </div>
        </div>
    );
};

export default Nabver;