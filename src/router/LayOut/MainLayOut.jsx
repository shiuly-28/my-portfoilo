import React from 'react';
import Nabver from '../../shared/Nabver';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Footer';

const MainLayOut = () => {
    return (
        <div className='w-11/12 mx-auto bg-gray-800'>
            {/* <Background></Background> */}
            <Nabver></Nabver>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;