import React from 'react';
import Nabver from '../../shared/Nabver';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Footer';
import Background from '../../Pages/Background';

const MainLayOut = () => {
    return (<>
        <Background></Background>
        <div >
            <Nabver></Nabver>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    </>
    );
};

export default MainLayOut;