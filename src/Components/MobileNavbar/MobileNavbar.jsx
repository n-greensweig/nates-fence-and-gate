import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MobileNavbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleStateChange = (state) => setMenuOpen(state.isOpen);
    const closeMenu = () => {
        setMenuOpen(false);
        setShowDropdown(false);
    };

    const styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '30px',
            height: '24px',
            left: '20px',
            top: '20px',
        },
        bmBurgerBars: {
            background: '#ffffff',
            height: '3px',
        },
        bmCrossButton: {
            display: 'none',
        },
        bmCross: {
            background: '#bdc3c7',
        },
        bmMenuWrap: {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
        bmItemList: {
            color: '#fff',
            padding: '0.8em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: '100%',
        },
        bmItem: {
            display: 'inline-block',
            marginBottom: '10px',
            justifyContent: 'left',
            fontSize: '1.5rem',
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
        },
    };

    return (
        <div>
            <Menu
                isOpen={menuOpen}
                onStateChange={handleStateChange}
                styles={styles}
                customBurgerIcon={false}
                customCrossIcon={false}
            >
                <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1400 }}>
                    <Button onClick={closeMenu} style={{ color: 'white', minWidth: 'auto', padding: '8px' }}>
                        <CloseIcon style={{ fontSize: '2rem' }} />
                    </Button>
                </div>

                <Link
                    to="/"
                    onClick={closeMenu}
                    style={{ borderBottom: '1px solid white', width: '100%', textAlign: 'left', padding: '10px 0' }}
                >
                    Home
                </Link>
                <div
                    style={{
                        borderBottom: '1px solid white',
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                    }}
                >
                    <Link to="/fence-types" onClick={closeMenu} style={{ flex: 1 }}>
                        Fence Types
                    </Link>
                    {showDropdown ? (
                        <KeyboardArrowDownIcon
                            onClick={toggleDropdown}
                            style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                        />
                    ) : (
                        <KeyboardArrowRightIcon
                            onClick={toggleDropdown}
                            style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                        />
                    )}
                </div>
                {showDropdown && (
                    <ul className="menu-dropdown bg-white text-black mt-1 p-2 rounded-lg shadow-lg">
                        <Link to="/fence-details/cedar" onClick={closeMenu}>
                            <li className="dropdown-item">Cedar</li>
                        </Link>
                        <Link to="/fence-details/vinyl" onClick={closeMenu}>
                            <li className="dropdown-item">Vinyl</li>
                        </Link>
                        <Link to="/fence-details/ornamental" onClick={closeMenu}>
                            <li className="dropdown-item">Ornamental</li>
                        </Link>
                        <Link to="/fence-details/chain-link" onClick={closeMenu}>
                            <li className="dropdown-item">Chain Link</li>
                        </Link>
                    </ul>
                )}
                <Link
                    to="/about"
                    onClick={closeMenu}
                    style={{
                        borderBottom: '1px solid white',
                        width: '100%',
                        textAlign: 'left',
                        padding: '10px 0',
                        marginBottom: '20px',
                    }}
                >
                    About
                </Link>
                <Link to="/quote" onClick={closeMenu} style={{ width: '100%' }}>
                    <Button
                        style={{
                            backgroundColor: 'white',
                            color: '#0283AB',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid #0283AB',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            padding: '0.5rem 1rem',
                            textTransform: 'none',
                            height: '5rem',
                            width: '100%',
                            transition: 'opacity 0.3s',
                        }}
                        onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
                        onMouseLeave={(e) => (e.target.style.opacity = 1)}
                    >
                        Instant Quote
                    </Button>
                </Link>
            </Menu>

            <Button
                onClick={toggleMenu}
                style={{
                    position: 'absolute',
                    top: '30px',
                    left: '30px',
                    zIndex: 1000,
                    minWidth: '30px',
                    padding: '0',
                    background: 'none',
                    border: 'none',
                }}
            >
                {menuOpen ? (
                    <MenuOpenIcon style={{ color: 'white', fontSize: '2.5rem' }} />
                ) : (
                    <MenuIcon style={{ color: 'white', fontSize: '2.5rem' }} />
                )}
            </Button>
        </div>
    );
}

export default MobileNavbar;