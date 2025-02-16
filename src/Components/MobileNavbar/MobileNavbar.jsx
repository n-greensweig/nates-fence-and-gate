import React, { useState, useEffect, useRef } from 'react';
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
  const closeButtonRef = useRef(null);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  useEffect(() => {
    // When the menu opens, focus the close button to direct keyboard focus to new content.
    if (menuOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [menuOpen]);

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
      background: '#222222', // Darker background for improved contrast.
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    bmItemList: {
      color: '#ffffff',
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

  // Inline style for a visually hidden heading (screen-reader only)
  const visuallyHiddenStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0,
  };

  return (
    <nav aria-label="Mobile Navigation">
      <Menu
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        styles={styles}
        customBurgerIcon={false}
        customCrossIcon={false}
        role="navigation"
      >
        {/* Visually hidden heading for accessibility */}
        <h2 style={visuallyHiddenStyle}>Main Menu</h2>

        <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1400 }}>
          <Button
            onClick={closeMenu}
            style={{ color: 'white', minWidth: 'auto', padding: '8px' }}
            type="button"
            aria-label="Close menu"
            ref={closeButtonRef}
          >
            <CloseIcon style={{ fontSize: '2rem' }} />
          </Button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
          <li
            style={{
              borderBottom: '1px solid white',
              width: '100%',
              padding: '10px 0',
            }}
            role="menuitem"
          >
            <Link
              to="/"
              onClick={closeMenu}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                width: '100%',
                display: 'block',
              }}
            >
              Home
            </Link>
          </li>
          <li
            style={{
              borderBottom: '1px solid white',
              width: '100%',
              padding: '10px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            role="menuitem"
          >
            <Link
              to="/fence-types"
              onClick={closeMenu}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                flex: 1,
              }}
            >
              Fence Types
            </Link>
            <button
              onClick={toggleDropdown}
              type="button"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label={showDropdown ? 'Collapse fence types' : 'Expand fence types'}
              aria-expanded={showDropdown}
            >
              {showDropdown ? (
                <KeyboardArrowDownIcon style={{ fontSize: '1.5rem', color: '#ffffff' }} />
              ) : (
                <KeyboardArrowRightIcon style={{ fontSize: '1.5rem', color: '#ffffff' }} />
              )}
            </button>
          </li>
          {showDropdown && (
            <ul
              style={{
                background: '#ffffff',
                color: '#000000',
                marginTop: '1rem',
                padding: '0.5rem',
                borderRadius: '5px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                width: '100%',
              }}
              role="menu"
            >
              <li
                role="menuitem"
                style={{ padding: '8px 0', borderBottom: '1px solid #ccc' }}
              >
                <Link
                  to="/fence-details/cedar"
                  onClick={closeMenu}
                  style={{
                    color: '#000000',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Cedar
                </Link>
              </li>
              <li
                role="menuitem"
                style={{ padding: '8px 0', borderBottom: '1px solid #ccc' }}
              >
                <Link
                  to="/fence-details/vinyl"
                  onClick={closeMenu}
                  style={{
                    color: '#000000',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Vinyl
                </Link>
              </li>
              <li
                role="menuitem"
                style={{ padding: '8px 0', borderBottom: '1px solid #ccc' }}
              >
                <Link
                  to="/fence-details/ornamental"
                  onClick={closeMenu}
                  style={{
                    color: '#000000',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Ornamental
                </Link>
              </li>
              <li role="menuitem" style={{ padding: '8px 0' }}>
                <Link
                  to="/fence-details/chain-link"
                  onClick={closeMenu}
                  style={{
                    color: '#000000',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Chain Link
                </Link>
              </li>
            </ul>
          )}
          <li
            style={{
              borderBottom: '1px solid white',
              width: '100%',
              padding: '10px 0',
              marginBottom: '20px',
            }}
            role="menuitem"
          >
            <Link
              to="/about"
              onClick={closeMenu}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                width: '100%',
                display: 'block',
              }}
            >
              About
            </Link>
          </li>
          <li role="menuitem" style={{ width: '100%' }}>
            <Link
              data-react-snap-ignore
              to="/quote"
              onClick={closeMenu}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <Button
                style={{
                  backgroundColor: '#0283AB', // Button now has a colored background for better contrast.
                  color: 'white',
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
                type="button"
                aria-label="Get an instant quote"
              >
                Instant Quote
              </Button>
            </Link>
          </li>
        </ul>
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
        type="button"
        aria-label={menuOpen ? 'Close main menu' : 'Open main menu'}
      >
        {menuOpen ? (
          <MenuOpenIcon style={{ color: 'white', fontSize: '2.5rem' }} />
        ) : (
          <MenuIcon style={{ color: 'white', fontSize: '2.5rem' }} />
        )}
      </Button>
    </nav>
  );
}

export default MobileNavbar;
