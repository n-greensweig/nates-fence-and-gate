// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './Footer.css';

// Responsive imports
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const location = useLocation();
  const noMargin =
    location.pathname === '/quote' ||
    location.pathname === '/about' ||
    location.pathname === '/fence-types' ||
    location.pathname === '/fence-details/cedar';

  // Check the screen size for responsive design
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <footer
        className={`bg-gradient-to-r w-full from-nates-dark-blue to-nates-light-blue text-white pt-8 pb-8 flex flex-col md:flex-row items-center ${noMargin ? 'mt-0' : 'mt-16'
          } absolute`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact & Navigation */}
          {(isXsScreen || isSmScreen || isMdScreen || isLgScreen) ? (
            // Mobile view
            <section className="w-full md:w-auto contact-section-container">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-4">
                Get in Touch!
              </h2>
              <div className="flex items-center justify-center text-center md:text-left gap-4 pb-4 md:pb-0 md:mb-2">
                <a
                  href="tel:612-702-8681"
                  aria-label="Call or Text Nate's Fence & Gate at 612-702-8681"
                >
                  <SmartphoneIcon fontSize="large" style={{ fill: '#fff' }} />
                  <span className="sr-only">
                    Call or Text Nate's Fence & Gate at 612-702-8681
                  </span>
                </a>
                <Typography
                  className="ml-2"
                  style={{ fontSize: isMdScreen || isLgScreen ? '.7rem' : undefined }}
                >
                  <a
                    href="tel:612-702-8681"
                    className="call-to-action"
                    aria-label="Call or Text Nate's Fence & Gate at 612-702-8681"
                  >
                    Call or Text: 612-702-8681
                  </a>
                </Typography>
              </div>
              <nav aria-label="Main Navigation" className="main-navigation">
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link
                      to="/"
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover text-nates-accent"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/fence-types"
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover text-nates-accent"
                    >
                      Fence Types
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.google.com/search?q=nates+fence+and+gate&oq=nates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover text-nates-accent"
                      aria-label="Read Google Reviews for Nate's Fence & Gate"
                    >
                      Google Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      data-react-snap-ignore
                      to="/quote"
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover text-nates-accent"
                    >
                      Instant Quote
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about"
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover text-nates-accent"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          ) : (
            // Desktop view
            <section className="w-full md:w-auto contact-section-container">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Get in Touch!
              </h2>
              <div className="flex items-center justify-center text-center md:text-left gap-4 pb-4 md:pb-0 md:mb-10">
                <a
                  href="tel:612-702-8681"
                  aria-label="Call or Text Nate's Fence & Gate at 612-702-8681"
                >
                  <SmartphoneIcon fontSize="large" style={{ fill: '#fff' }} />
                  <span className="sr-only">
                    Call or Text Nate's Fence & Gate at 612-702-8681
                  </span>
                </a>
                <Typography className="ml-2">
                  <a
                    href="tel:612-702-8681"
                    className="call-to-action"
                    aria-label="Call or Text Nate's Fence & Gate at 612-702-8681"
                  >
                    Call or Text: 612-702-8681
                  </a>
                </Typography>
              </div>
              <nav aria-label="Main Navigation">
                <ul
                  className="flex flex-col md:flex-row gap-4 text-base sm:ml-4"
                  style={{ width: 'fit-content', marginRight: '1000px' }}
                >
                  <li>
                    <Link
                      to="/"
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover text-nates-accent"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/fence-types"
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover text-nates-accent"
                    >
                      Fence Types
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/search?q=nates+fence+and+gate&oq=nates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover text-nates-accent"
                      aria-label="Read Google Reviews for Nate's Fence & Gate"
                    >
                      Google Reviews
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/quote"
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover text-nates-accent"
                    >
                      Instant Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover text-nates-accent"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          )}

          {/* Logo */}
          <div
            className="text-center h-24 md:h-32 mx-auto md:mx-0"
            style={{
              width: 'fit-content',
              height: 'fit-content',
              margin: isXsScreen || isSmScreen || isMdScreen || isLgScreen ? '10px auto' : '30px auto 0px auto'
            }}
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="../images/logos/nates-logo.webp"
                alt="Nate's Fence & Gate Logo"
                loading="lazy"
                width="200" // intrinsic width in pixels
                height="100" // intrinsic height in pixels
                className="h-24 md:h-32 inline-block opacity-100 hover:opacity-80 transition duration-300 ease-in-out"
              // Optionally, add srcSet if you have higher resolution versions:
              // srcSet="../images/logos/nates-logo.webp 1x, ../images/logos/nates-logo@2x.webp 2x"
              />
            </Link>
            <p
              className="text-sm text-nates-gray mt-2"
              style={{ width: '60%', textAlign: 'center', margin: '0 auto' }}
            >
              &copy; {new Date().getFullYear()} Nate's Fence & Gate. All Rights Reserved.
            </p>
          </div>

          {/* Service Areas */}
          <section className="w-full">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                marginLeft: isXsScreen || isSmScreen || isMdScreen || isLgScreen ? undefined : '-15%'
              }}
            >
              Service Areas:
            </h2>
            {(isXsScreen || isSmScreen || isMdScreen || isLgScreen) ? (
              <ul
                className="grid grid-cols-2 md:grid-cols-2 gap-x-4 md:gap-x-4 gap-y-1 md:gap-y-1 text-base text-sm"
                style={{ fontSize: '13px' }}
              >
                <li>Blaine</li>
                <li>Lexington</li>
                <li>Brooklyn Center</li>
                <li>Lino Lakes</li>
                <li>Brooklyn Park</li>
                <li>Minneapolis</li>
                <li>Circle Pines</li>
                <li>New Brighton</li>
                <li>Columbia Heights</li>
                <li>Richfield</li>
                <li>Coon Rapids</li>
                <li>Robbinsdale</li>
                <li>Crystal</li>
                <li>Roseville</li>
                <li>Falcon Heights</li>
                <li>Shoreview</li>
                <li>Fridley</li>
                <li>St. Louis Park</li>
                <li>Golden Valley</li>
                <li>White Bear Lake</li>
              </ul>
            ) : (
              <ul
                className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-4 gap-y-1 md:gap-y-1 text-left text-sm"
                style={{ fontSize: '13px', height: '80%', marginLeft: '-15%' }}
              >
                <li>Blaine</li>
                <li>Coon Rapids</li>
                <li>Lexington</li>
                <li>Robbinsdale</li>
                <li>Brooklyn Center</li>
                <li>Crystal</li>
                <li>Lino Lakes</li>
                <li>Roseville</li>
                <li>Brooklyn Park</li>
                <li>Falcon Heights</li>
                <li>Minneapolis</li>
                <li>Shoreview</li>
                <li>Circle Pines</li>
                <li>Fridley</li>
                <li>New Brighton</li>
                <li>St. Louis Park</li>
                <li>Columbia Heights</li>
                <li>Golden Valley</li>
                <li>Richfield</li>
                <li>White Bear Lake</li>
              </ul>
            )}
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
