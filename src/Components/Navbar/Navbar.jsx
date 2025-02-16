// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '@mui/material';
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

  const isMobile = isXsScreen || isSmScreen || isMdScreen || isLgScreen;

  return (
    <nav className='w-full bg-nates-dark-blue text-white flex flex-row justify-between items-center'>
      {/* Logo on large screens */}
      {!isMobile && (
        <div>
          <Link to='/'>
            <img
              src='../images/logos/nates-logo.webp'
              alt="Nate's Logo"
              loading="lazy"
              width="200"    // explicit intrinsic width
              height="100"   // explicit intrinsic height
              className='h-28 ml-2'
              // Optionally, add srcSet for higher resolution:
              // srcSet="../images/logos/nates-logo.webp 1x, ../images/logos/nates-logo@2x.webp 2x"
            />
          </Link>
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <ul className='h-28 flex flex-row justify-between items-center gap-x-48 mr-4'>
          <li className='nav-link text-xl'>
            <Link to='/'>Home</Link>
          </li>
          <li
            className='relative nav-link text-thin text-xl'
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link to='/fence-types'>Fence Types</Link>
            {showDropdown && (
              <ul className="absolute bg-white mt-1 p-2 rounded-lg shadow-lg blue-border forefront">
                <li className='dropdown-item'>
                  <Link to="/fence-details/cedar">Cedar</Link>
                </li>
                <li className='dropdown-item'>
                  <Link to="/fence-details/vinyl">Vinyl</Link>
                </li>
                <li className='dropdown-item'>
                  <Link to="/fence-details/ornamental">Ornamental</Link>
                </li>
                <li className='dropdown-item no-bottom'>
                  <Link to="/fence-details/chain-link">Chain Link</Link>
                </li>
              </ul>
            )}
          </li>
          <li className='nav-link text-xl'>
            <Link to='/about'>About</Link>
          </li>
          <li style={{ height: '50%' }}>
            <Link data-react-snap-ignore to='/quote'>
              <Button
                style={{
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
                onMouseEnter={e => (e.target.style.opacity = 0.8)}
                onMouseLeave={e => (e.target.style.opacity = 1)}
              >
                Instant Quote
              </Button>
            </Link>
          </li>
        </ul>
      )}

      {/* Logo on mobile screens */}
      {isMobile && (
        <div>
          <Link to='/'>
            <img
              src='../images/logos/nates-logo.webp'
              alt="Nate's Logo"
              loading="lazy"
              width="200"    // explicit intrinsic width
              height="100"   // explicit intrinsic height
              className='h-28 ml-2'
              // Optionally, add srcSet for higher resolution versions
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
