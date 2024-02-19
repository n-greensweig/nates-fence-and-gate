import React from 'react';
import { Link } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Typography } from '@mui/material';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './Footer.css';

// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {

    const history = useHistory();
    const isQuoteOrAboutPage = history.location.pathname === '/quote' || history.location.pathname === '/about';

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <footer className={`bg-gradient-to-r from-nates-dark-blue to-nates-light-blue text-white pt-8 pb-8 flex flex-col md:flex-row items-center ${isQuoteOrAboutPage ? 'mt-0' : 'mt-16'}`}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'> {/* Adjust gaps as needed */}

                {/* Contact & Navigation */}
                {isXsScreen || isSmScreen ?

                    // Mobile view
                    <section className='w-full md:w-auto contact-section-container'>
                        <h3 className='text-2xl md:text-3xl font-bold mb-8'>Get in Touch!</h3>
                        <div className='flex items-center justify-center text-center md:text-left gap-4 pb-4 md:pb-0 md:mb-10'>
                            <a href="tel:612-702-8681" >
                                <SmartphoneIcon fontSize='large' style={{ fill: '#0283AB' }} />
                            </a>
                            <Typography className='ml-2'>
                                <a href="tel:612-702-8681" className='call-to-action'>
                                    Call or Text: 612-702-8681
                                </a>
                            </Typography>
                        </div>
                        <nav aria-label="Main Navigation" className="main-navigation">
                            <ul className='nav-list'>
                                <li className="nav-item">
                                    <Link to='/' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/fence-types' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Fence Types</Link>
                                </li>
                                <li className="nav-item">
                                    <a href='https://www.google.com/search?q=nates+fence+and+gate&oq=nates&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIUCAEQRRgUGDkYgwEYhwIYsQMYgAQyDwgCEAAYFBiHAhiLAxiABDINCAMQLhivARjHARiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEHODM4ajFqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x52b33be89d42efcd:0xfa2f5923965e7add,1,,,,' target='_blank' className='hover text-nates-accent'>Google Reviews</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/quote' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Instant Quote</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>About</Link>
                                </li>
                            </ul>
                        </nav>
                    </section> :

                    // Desktop view
                    <section className='w-full md:w-auto contact-section-container'> {/* New container */}
                        <h3 className='text-2xl md:text-3xl font-bold mb-8'>Get in Touch!</h3>
                        <div className='flex items-center justify-center text-center md:text-left gap-4 pb-4 md:pb-0 md:mb-10'>
                            <a href="tel:612-702-8681" >
                                <SmartphoneIcon fontSize='large' style={{ fill: '#0283AB' }} />
                            </a>
                            <Typography className='ml-2'>
                                <a href="tel:612-702-8681" className='call-to-action '>
                                    Call or Text: 612-702-8681
                                </a>
                            </Typography>
                        </div>
                        <nav> {/* Added for semantic clarity */}
                            <ul className='flex flex-col md:flex-row gap-4 text-base sm:ml-4' style={{ width: 'fit-content', }}>
                                <li><Link to='/' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Home</Link></li>|
                                <li><Link to='/fence-types' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Fence Types</Link></li>|
                                <li><a href='https://www.google.com/search?q=nates+fence+and+gate&oq=nates&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIUCAEQRRgUGDkYgwEYhwIYsQMYgAQyDwgCEAAYFBiHAhiLAxiABDINCAMQLhivARjHARiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEHODM4ajFqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x52b33be89d42efcd:0xfa2f5923965e7add,1,,,,' target='_blank' className='hover text-nates-accent'>Google Reviews</a></li>|
                                <li><Link to='/quote' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Instant Quote</Link></li>|
                                <li><Link to='/about' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>About</Link></li>
                            </ul>
                        </nav>
                    </section>
                }

                {/* Logo */}
                <div className='text-center h-24 md:h-32 mx-auto md:mx-0' style={{ width: 'fit-content', height: 'fit-content', margin: isXsScreen || isSmScreen ? '10px auto 10px auto' : '30px auto 0px auto'}}>
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <img src='../images/logos/nates-logo.jpg' alt="Nate's Fence & Gate Logo" className='h-24 md:h-32 inline-block opacity-100 hover:opacity-80 transition duration-300 ease-in-out' />
                    </Link>
                    <p className='text-sm text-nates-gray mt-2' style={{ width: '60%', textAlign: 'center', margin: '0 auto', }}>&copy; {new Date().getFullYear()} Nate's Fence & Gate. All Rights Reserved.</p>
                </div>

                {/* Service Areas */}
                <section className='w-full md:w-auto md:mr-auto md:mr-10'
                // style={{ border: '2px solid red', marginRight: '10px', }}
                > {/* Adjusted classes to move the service locations list to the left */}
                    <h3 className='text-2xl md:text-3xl font-bold mb-4'>Service Areas:</h3>
                    {isXsScreen || isSmScreen ? <ul className='grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-4 gap-y-1 md:gap-y-1 text-base text-sm' style={{ fontSize: '13px' }}>
                        { /* Consider adjusting columns on both viewports */}
                        <li>Blaine</li>
                        <li>Lexington</li>
                        <li>Brooklyn Center</li>
                        <li>Lino Lakes</li>
                        <li>Brooklyn Park</li>
                        <li>New Brighton</li>
                        <li>Circle Pines</li>
                        <li>Minneapolis</li>
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
                    </ul> :
                        <ul className='grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-4 gap-y-1 md:gap-y-1 text-left text-sm' style={{ fontSize: '13px' }}>
                            { /* Consider adjusting columns on both viewports */}
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
                            <li>New Brighton</li>
                            <li>Shoreview</li>
                            <li>Circle Pines</li>
                            <li>Fridley</li>
                            <li>Minneapolis</li>
                            <li>St. Louis Park</li>
                            <li>Columbia Heights</li>
                            <li>Golden Valley</li>
                            <li>Richfield</li>
                            <li>White Bear Lake</li>
                        </ul>}
                </section>

            </div>
        </footer>
    );
};

export default Footer;
