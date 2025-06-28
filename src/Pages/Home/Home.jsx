import React from 'react';
import Banner from '../banner';
import AboutUs from '../AboutUs'
import Skills from '../Skills';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            ,<div className="bg-gray-700">
                <AboutUs></AboutUs>
                <Skills></Skills>
            </div>
        </div>
    );
};

export default Home;