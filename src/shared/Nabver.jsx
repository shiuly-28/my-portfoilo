import React from 'react';
import logo from '../assets/logo.png'
import { FaGooglePlus, FaHome, FaProjectDiagram, FaRProject, FaUserAlt } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdContactEmergency } from 'react-icons/md';

const Nabver = () => {
    const navItems = <>
        
        <li><navLink to="/aboutUs"><FaGooglePlus />AboutUs</navLink></li>
        <li><navLink to="/contact"><MdContactEmergency />Contact</navLink></li>
        <li><navLink to="/skill"><FaRProject />Skill</navLink></li>
        <li><navLink to="/protfolio"><FaUserAlt />Protfolio</navLink></li>
    </>
    return (
        <div className="navbar rounded-2xl mt-6 text-white">
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
                <a className="btn">Button</a>
            </div>
      </div>
    );
};

export default Nabver;