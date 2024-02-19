import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import { slide as Menu } from 'react-burger-menu'; // Import the slide animation
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function MobileNavbar() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleStateChange = state => setMenuOpen(state.isOpen);
    const closeMenu = () => setMenuOpen(false);

    // Define styles for the burger menu
    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px',
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
            padding: '0.8em',
            display: 'flex',
            flexDirection: 'column', // Align items vertically
            alignItems: 'center', // Center align items horizontally
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    };


    return (
        <div>
            {/* Trigger Button (use fixed positioning) */}
            <Button
                style={{ ...styles.bmBurgerButton, position: 'absolute', zIndex: 999 }}
                onClick={toggleMenu}
                startIcon={menuOpen ?
                    <MenuOpenIcon style={{ color: 'white', fontSize: '4rem' }} /> :
                    <MenuIcon style={{ color: 'white', fontSize: '4rem' }} />
                }
            >
                <i className="fas fa-bars" style={{ color: 'white', visibility: 'visible' }}></i>
            </Button>

            <Menu
                isOpen={menuOpen}
                onStateChange={handleStateChange}
                styles={styles}
                left
                className='hide'
                >
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
        </div>
    );
}

export default MobileNavbar;