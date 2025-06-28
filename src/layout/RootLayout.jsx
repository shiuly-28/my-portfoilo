import React from 'react';
import { Outlet } from 'react-router';
import Nabver from '../shared/Nabver';

const RootLayout = () => {
    return (
        <div className='w-11/12 mx-w-xl mx-auto'>
            <header>
                <Nabver></Nabver>
            </header>
            <main className='bg-gray-100 mt-6'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default RootLayout;