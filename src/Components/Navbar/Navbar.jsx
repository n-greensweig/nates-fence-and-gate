// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom'; // import for routing
// import './Navbar.css';
// import { Button } from '@mui/material';

// const Navbar = () => {

//     const [showDropdown, setShowDropdown] = useState(false);

//     const toggleDropdown = () => setShowDropdown(!showDropdown);

//     return (
//         <Router>
//             <nav className='w-full bg-nates-dark-blue text-white flex flex-row justify-between'>
//                 <div>
//                     <Link to='/'>
//                         <img src='../images/logos/nates-logo.jpg' className='h-28 ml-2 '></img>
//                     </Link>
//                 </div>
//                 <ul className='h-28 flex flex-row justify-between items-center gap-x-48 mr-4'>
//                     <li className='nav-link text-xl'>
//                         <Link to='/'>
//                             Home
//                         </Link>
//                     </li>

//                     {/* Dropdown on hover */}
//                     <li className='relative nav-link text-thin text-xl' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//                         <Link to='/fence-types'>
//                             Fence Types
//                         </Link>
//                         {showDropdown && (
//                             <ul className="absolute bg-white mt-1 p-2 rounded-lg shadow-lg blue-border forefront">
//                                 <Link to="/fence-details/cedar">
//                                     <li className='dropdown-item'>Cedar</li>
//                                 </Link>
//                                 <Link to="/fence-details/vinyl">
//                                     <li className='dropdown-item'>Vinyl</li>
//                                 </Link>
//                                 <Link to="/fence-details/ornamental">
//                                     <li className='dropdown-item'>Ornamental</li>
//                                 </Link>
//                                 <Link to="/fence-details/chain-link">
//                                     <li className='dropdown-item no-bottom'>Chain Link</li>
//                                 </Link>
//                             </ul>
//                         )}
//                     </li>
//                     <li className='nav-link text-xl'>
//                         <Link to='/about'>
//                             About
//                         </Link>
//                     </li>
//                     <li className='' style={{ height: '50%' }}>
//                         <Link to='/quote'>
//                             <Button style={{
//                                 backgroundColor: 'white',
//                                 color: '#0283AB',
//                                 height: '100%',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 border: '2px solid #0283AB',
//                                 fontWeight: 'bold',
//                                 borderRadius: '5px',
//                                 padding: '0 1rem',
//                                 textTransform: 'none', // Set text transform to none
//                                 transition: 'opacity 0.3s', // Add transition for opacity
//                             }}
//                                 onMouseEnter={e => e.target.style.opacity = 0.8} // Set opacity to 70%
//                                 onMouseLeave={e => e.target.style.opacity = 1} // Reset opacity to 100%
//                             >
//                                 Instant Quote
//                             </Button>
//                         </Link>
//                     </li>

//                 </ul>
//             </nav>
//         </Router>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import './Navbar.css';
import { Button } from '@mui/material';
import { slide as Menu } from 'react-burger-menu'; // Import the slide animation

// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Define styles for the burger menu
    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px',
        },
        bmBurgerBars: {
            background: '#fff'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    };

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Router>
            <nav className='w-full bg-nates-dark-blue text-white flex flex-row justify-between items-center'>
                {isXsScreen || isSmScreen ? null : <div>
                    <Link to='/'>
                        <img src='../images/logos/nates-logo.jpg' className='h-28 ml-2 '></img>
                    </Link>
                </div>}
                <Menu
                    isOpen={menuOpen}
                    onStateChange={handleStateChange}
                    styles={styles}
                    left>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/fence-types" onClick={toggleDropdown}>Fence Types</Link>
                    {showDropdown && (
                        <ul className="menu-dropdown bg-white text-black mt-1 p-2 rounded-lg shadow-lg">
                            <Link to="/fence-details/cedar" onClick={closeMenu}>
                                <li className='dropdown-item'>Cedar</li>
                            </Link>
                            <Link to="/fence-details/vinyl" onClick={closeMenu}>
                                <li className='dropdown-item'>Vinyl</li>
                            </Link>
                            <Link to="/fence-details/ornamental" onClick={closeMenu}>
                                <li className='dropdown-item'>Ornamental</li>
                            </Link>
                            <Link to="/fence-details/chain-link" onClick={closeMenu}>
                                <li className='dropdown-item'>Chain Link</li>
                            </Link>
                        </ul>
                    )}
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/quote" onClick={closeMenu}>
                        <Button style={{
                            backgroundColor: 'white',
                            color: '#0283AB',
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
                </Menu>
                {/* This ul will be hidden on smaller screens via CSS */}
                <ul className='h-28 flex flex-row justify-between items-center gap-x-48 mr-4 desktop-menu'>
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
                {isXsScreen || isSmScreen ? <div>
                    <Link to='/'>
                        <img src='../images/logos/nates-logo.jpg' className='h-28 ml-2 '></img>
                    </Link>
                </div> : null}
            </nav>
        </Router>
    );
};

export default Navbar;