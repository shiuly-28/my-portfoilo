import React from 'react';
import logo from '../assets/logo.png'
import { FaDownload, FaGooglePlus, FaHome, FaProjectDiagram, FaRProject, FaUserAlt } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdContactEmergency } from 'react-icons/md';
import resume from '../assets/Sheauly.pdf'


const Nabver = () => {
    const navItems = <>

        <li><a to="/home"><FaHome />Home</a></li>
        <li><a to="/contact"><MdContactEmergency />Contact</a></li>
        <li><a to="/skill"><FaRProject />Skill</a></li>
        <li><a to="/project"><FaUserAlt />Project</a></li>
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
                <a href={resume} download className="btn btn-primary"><FaDownload />Download Resume </a>
            </div>
        </div>
    );
};

export default Nabver;