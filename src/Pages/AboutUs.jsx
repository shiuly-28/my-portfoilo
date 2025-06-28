import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16" id="about">
            <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">About Me</h2>

            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                    Hello! I'm <span className="font-semibold text-blue-700">Sheauly Akhter</span>, a passionate and enthusiastic <span className="font-semibold">MERN Stack Developer</span> from Kishoregonj, Bangladesh. I have completed my Master’s degree and have been deeply involved in the world of web development ever since.
                </p>

                <p>
                    My programming journey began out of curiosity and quickly turned into a strong passion. I started with basic HTML & CSS, then gradually moved on to JavaScript and React. With time, I explored backend technologies like Node.js, Express.js, and MongoDB. The MERN stack has become my favorite toolset to build modern, scalable, and user-friendly web applications.
                </p>

                <p>
                    I truly enjoy solving real-world problems through code. Whether it's building a full-stack application from scratch or optimizing frontend performance, I love every step of the development process. Clean, responsive UI and user experience design are especially close to my heart.
                </p>

                <p>
                    Outside of programming, I love <span className="italic">listening to music</span>, <span className="italic">traveling</span>, and occasionally <span className="italic">painting</span>. These hobbies help me stay creative and bring fresh ideas into my coding life. I believe in continuous learning and always strive to grow both personally and professionally.
                </p>

                <p>
                    I'm excited about collaborating with other developers, working on innovative projects, and making a positive impact through technology. Thank you for taking the time to learn about me!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
