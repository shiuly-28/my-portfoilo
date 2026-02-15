import React from 'react';

import AboutUs from './AboutUs';
import Skills from './Skills';
import Education from './Education';
import ProjectCards from './ProjectCard';
import Contact from './Contact';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Skills></Skills>
            <Education></Education>
            <ProjectCards></ProjectCards>
            <Contact></Contact>
        </div>
    );
};

export default Home;

