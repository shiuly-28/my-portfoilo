import React, { useEffect, useState } from 'react';
import Nabver from '../../shared/Nabver';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Footer';
import Background from '../../Pages/Background';
import Loading from '../../Loading';
// import { div } from 'framer-motion/client';

const MainLayOut = () => {
    const[loading, setLoading] = useState(true);

    useEffect (() => {
        const timer = setTimeout (() => {

            setLoading(false)
        }, 2000)
        return () =>clearTimeout (timer)
    }, []) 
    if(loading){
        return <div><Loading/></div>
    }
    
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