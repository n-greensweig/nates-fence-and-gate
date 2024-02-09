import React from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'; // import for routing
import './Navbar.css';
import { Button } from '@mui/material';

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
                        <Link to='/fence-types'>
                            Fence Types
                        </Link>
                    </li>
                    <li className='' style={{ height: '50%' }}>
                        <Link to='/quote'>
                            <Button style={{
                                backgroundColor: 'white',
                                color: '#0283AB',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid #0283AB',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                padding: '0 1rem',
                                textTransform: 'none', // Set text transform to none
                                transition: 'opacity 0.3s', // Add transition for opacity
                            }}
                                onMouseEnter={e => e.target.style.opacity = 0.8} // Set opacity to 70%
                                onMouseLeave={e => e.target.style.opacity = 1} // Reset opacity to 100%
                            >
                                Instant Quote
                            </Button>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </Router>
    );
};

export default Navbar;