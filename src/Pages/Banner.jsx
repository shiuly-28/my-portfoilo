import React from 'react';
import image from '../assets/sheauly.png';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="hero bg-base-100">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center gap-10">
                <img
                    src={image}
                    className="w-48 sm:w-64 lg:w-72 rounded-full border-4 border-blue-400 shadow-lg"
                    alt="Sheauly Akhter"
                />
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-blue-600">Hi, I'm Sheauly Akhter</h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-2">MERN Stack Developer</h2>
                    <p className="py-6 text-gray-600 leading-relaxed">
                        I'm from Kishoregonj and have completed my Master's degree. I specialize in full-stack web development using MongoDB, Express.js, React.js, and Node.js (MERN stack).
                        I love building modern, responsive web applications that solve real-world problems.
                    </p>
                    {/* <a href="https://github.com/sheauly" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-black"> */}
                    <div className='flex gap-4 '>
                    <a
                            href="https://github.com/sheauly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-black"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a
                            href="https://www.facebook.com/sheauly.akhter.7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            <FaFacebook size={30} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sheauly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900"
                        >
                            <FaLinkedinIn size={30} />
                        </a>
                    </div>
                    <div className='mt-4'>
                        <a href="/resume.pdf" download >
                            <button className="btn btn-primary">Download Resume</button>
                        </a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
