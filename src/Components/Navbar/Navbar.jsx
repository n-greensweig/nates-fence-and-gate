import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import './Navbar.css';
import { Button } from '@mui/material';
import { slide as Menu } from 'react-burger-menu'; // Import the slide animation

import MobileNavbar from '../MobileNavbar/MobileNavbar';

// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Router>
            <nav className='w-full bg-nates-dark-blue text-white flex flex-row justify-between items-center'>
                {isXsScreen || isSmScreen || isMdScreen || isLgScreen ? null : <div>
                    <Link to='/'>
                        <img src='../images/logos/nates-logo.jpg' className='h-28 ml-2 '></img>
                    </Link>
                </div>}

                {isXsScreen || isSmScreen || isMdScreen || isLgScreen ? <MobileNavbar /> :

                    <ul className='h-28 flex flex-row justify-between items-center gap-x-48 mr-4'>
                        <li className='nav-link text-xl'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='relative nav-link text-thin text-xl' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to='/fence-types'>Fence Types</Link>
                            {showDropdown && (
                                <ul className="absolute bg-white mt-1 p-2 rounded-lg shadow-lg blue-border forefront">
                                    <Link to="/fence-details/cedar">
                                        <li className='dropdown-item'>Cedar</li>
                                    </Link>
                                    <Link to="/fence-details/vinyl">
                                        <li className='dropdown-item'>Vinyl</li>
                                    </Link>
                                    <Link to="/fence-details/ornamental">
                                        <li className='dropdown-item'>Ornamental</li>
                                    </Link>
                                    <Link to="/fence-details/chain-link">
                                        <li className='dropdown-item no-bottom'>Chain Link</li>
                                    </Link>
                                </ul>
                            )}
                        </li>
                        <li className='nav-link text-xl'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li style={{ height: '50%' }}>
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
                                    textTransform: 'none',
                                    transition: 'opacity 0.3s',
                                }}
                                    onMouseEnter={e => e.target.style.opacity = 0.8}
                                    onMouseLeave={e => e.target.style.opacity = 1}
                                >
                                    Instant Quote
                                </Button>
                            </Link>
                        </li>
                    </ul>
                }
                {isXsScreen || isSmScreen || isMdScreen || isLgScreen ? <div>
                    <Link to='/'>
                        <img src='../images/logos/nates-logo.jpg' className='h-28 ml-2 '></img>
                    </Link>
                </div> : null}
            </nav>
        </Router>
    );
};

export default Navbar;