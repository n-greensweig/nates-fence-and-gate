import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import { slide as Menu } from 'react-burger-menu'; // Import the slide animation

// Import icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MobileNavbar() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleStateChange = state => setMenuOpen(state.isOpen);
    const closeMenu = () => {
        setMenuOpen(false);
        setShowDropdown(false);
    }

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
            fontSize: '1.15em',
        },
        bmItemList: {
            color: '#fff',
            padding: '0.8em',
            display: 'flex',
            flexDirection: 'column', // Align items vertically
            alignItems: 'flex-start', // Center align items horizontally
            justifyContent: 'flex-start',
        },
        bmItem: {
            display: 'inline-block',
            marginBottom: '10px',
            justifyContent: 'left',
            fontSize: '2rem',
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
                <Link to="/" onClick={closeMenu} style={{ borderBottom: '1px solid white', width: '100%', textAlign: 'left' }}>Home</Link>
                <div style={{ borderBottom: '1px solid white', width: '100%', textAlign: 'left', }}>
                    <Link to="/fence-types" onClick={closeMenu}>
                        Fence Types
                    </Link>
                    {showDropdown ? <KeyboardArrowDownIcon onClick={toggleDropdown} style={{ fontSize: '2rem', textAlign: 'end' }} /> : <KeyboardArrowRightIcon onClick={toggleDropdown} style={{ fontSize: '2rem', textAlign: 'end' }} />}
                </div>
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
                <Link to="/about" onClick={closeMenu} style={{ borderBottom: '1px solid white', width: '100%', textAlign: 'left', marginBottom: '20px', }}>About</Link>
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
                        height: '4rem',
                        width: '100%',
                        transition: 'opacity 0.3s',
                    }}
                        onMouseEnter={e => e.target.style.opacity = 0.8}
                        onMouseLeave={e => e.target.style.opacity = 1}
                    >
                        <h1>Instant Quote</h1>
                    </Button>
                </Link>
            </Menu>
        </div>
    );
}

export default MobileNavbar;