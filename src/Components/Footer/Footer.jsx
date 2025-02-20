// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const noMargin = ['/quote', '/about', '/fence-types', '/fence-details/cedar'].includes(location.pathname);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-gradient-to-r w-full from-nates-dark-blue to-nates-light-blue text-white pt-8 pb-8 relative ${noMargin ? 'mt-0' : 'mt-16'}`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Layout: three columns */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center md:justify-between">
          {/* Left: Contact */}
          <div className="contact-left text-left">
            <h2 className="text-2xl md:text-3xl font-bold pl-8">Get in touch!</h2>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="tel:612-702-8681"
                aria-label="Call or Text Nate's Fence & Gate at 612-702-8681"
              >
                <SmartphoneIcon fontSize="large" style={{ fill: '#fff' }} />
              </a>
              <Typography>
                <a
                  href="tel:612-702-8681"
                  className="call-to-action"
                  aria-label="Call or Text Nate's Fence & Gate at 612-702-8681"
                >
                  Call or Text: 612-702-8681
                </a>
              </Typography>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="logo text-center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="../images/logos/nates-logo.webp"
                alt="Nate's Fence & Gate Logo"
                loading="lazy"
                width="200"
                height="100"
                className="h-24 md:h-32 inline-block opacity-100 hover:opacity-80 transition duration-300 ease-in-out"
              />
            </Link>
            <p className="text-sm text-nates-gray mt-2">
              &copy; {currentYear} Nate's Fence & Gate. All Rights Reserved.
            </p>
          </div>

          {/* Right: Navigation */}
          <div className="nav-right text-right">
            <nav aria-label="Main Navigation">
              <ul className="flex gap-4 justify-end">
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
          </div>
        </div>

        {/* Mobile Layout: Stack sections in order */}
        {isMobile && (
          <div className="md:hidden flex flex-col items-center space-y-6">
            {/* Contact Section: Header and Phone Buttons */}
            <div className="contact text-center">
              <h2 className="text-2xl font-bold mb-4">Get in touch!</h2>
              <div className="flex flex-row items-center gap-4">
                <a
                  href="tel:612-702-8681"
                  aria-label="Call or Text Nate's Fence & Gate at 612-702-8681"
                >
                  <SmartphoneIcon fontSize="large" style={{ fill: '#fff' }} />
                </a>
                <Typography>
                  <a
                    href="tel:612-702-8681"
                    className="call-to-action"
                    aria-label="Call or Text Nate's Fence & Gate at 612-702-8681"
                  >
                    Call or Text: 612-702-8681
                  </a>
                </Typography>
              </div>
            </div>

            {/* Logo Section */}
            <div className="logo text-center">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="../images/logos/nates-logo.webp"
                  alt="Nate's Fence & Gate Logo"
                  loading="lazy"
                  width="200"
                  height="100"
                  className="h-24 md:h-32 inline-block opacity-100 hover:opacity-80 transition duration-300 ease-in-out"
                />
              </Link>
              <p className="text-sm text-nates-gray mt-2">
                &copy; {currentYear} Nate's Fence & Gate. All Rights Reserved.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="nav text-center">
              <nav aria-label="Main Navigation">
                <ul className="flex flex-col items-center gap-2">
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
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
