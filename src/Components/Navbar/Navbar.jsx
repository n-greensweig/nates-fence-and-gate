import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-nates-dark-blue text-white flex flex-row justify-between'>
            <div>
                <img src='../images/nates-logo.jpg' className='h-28 ml-2'></img>
            </div>
            <ul className='h-28 flex flex-row justify-between items-center gap-x-48'>
                <li className=''>
                    Home
                </li>
                <li className=''>
                    About
                </li>
                <li lassName=''>
                    Fence Types
                </li>
                <li className=''>
                    Instant Quote
                </li>
                <li className='mr-10'>
                    FAQ
                </li>


            </ul>
        </nav>
    );
};

export default Navbar;