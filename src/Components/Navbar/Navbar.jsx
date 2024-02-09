import React from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'; // import for routing
import './Navbar.css';

const Navbar = () => {
    return (
        <Router>
            <nav className='w-full bg-nates-dark-blue text-white flex flex-row justify-between'>
                <div>
                    <Link to='/'>
                        <img src='../images/logos/nates-logo.jpg' className='h-28 ml-2'></img>
                    </Link>
                </div>
                <ul className='h-28 flex flex-row justify-between items-center gap-x-48'>
                    <li className=''>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/fence-types'>
                            Fence Types
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/quote'>
                            Instant Quote
                        </Link>
                    </li>
                </ul>
            </nav>
        </Router>
    );
};

export default Navbar;