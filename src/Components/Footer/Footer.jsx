// import React from 'react';
// import { Link } from 'react-router-dom';
// import SmartphoneIcon from '@mui/icons-material/Smartphone';
// import { Typography } from '@mui/material';

// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className='bg-gradient-to-r from-nates-dark-blue to-nates-light-blue text-white flex flex-col md:flex-row pt-8 pb-16 justify-center items-center'>
//       <div className='w-full md:w-1/3 flex flex-col items-center text-center md:text-left pb-8 md:pb-0'>
//         <h3 className='text-3xl md:text-5xl font-bold mb-4'>Contact</h3>
//         <Typography style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#102942', padding: '20px' }}>
//           <a href="tel:612-702-8681">
//             <SmartphoneIcon style={{ fill: '#0283AB' }} />{' '}
//             <span className='hover text-nates-accent'>Call or text: 612-702-8681</span></a>
//         </Typography>
//         <div className='mt-4 flex flex-col md:flex-row md:justify-between gap-4'>
//           <Link to='/' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Home</Link>
//           <Link to='/fence-types' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Fence Types</Link>
//           <a href='https://www.google.com/search?q=nates+fence+and+gate&oq=nates&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIUCAEQRRgUGDkYgwEYhwIYsQMYgAQyDwgCEAAYFBiHAhiLAxiABDINCAMQLhivARjHARiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEHODM4ajFqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x52b33be89d42efcd:0xfa2f5923965e7add,1,,,,' target='_blank' className='hover text-nates-accent'>Google Reviews</a>
//           <Link to='/quote' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Instant Quote</Link>
//           <Link to='/about' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>About</Link>
//         </div>
//       </div>

//       <div className='w-full md:w-1/3 flex justify-center'>
//         <Link to='/' onClick={() => window.scrollTo(0, 0)}>
//           <img src='../images/logos/nates-logo.jpg' alt="Nate\'s Fence & Gate Logo" className='h-48 md:h-64 mx-auto opacity-80 hover:opacity-100 transition duration-300 ease-in-out' />
//         </Link>
//       </div>

//       <div className='w-full md:w-1/3 flex flex-col items-center text-center md:text-left pt-8 md:pt-0'>
//         <h3 className='text-3xl md:text-5xl font-bold mb-4'>Service Areas</h3>
//         <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
//           <p>Blaine</p>
//   <p>Brooklyn Center</p>
//   <p>Brooklyn Park</p>
//   <p>Circle Pines</p>
//   <p>Columbia Heights</p>
//   <p>Coon Rapids</p>
//   <p>Crystal</p>
//   <p>Falcon Heights</p>
//   <p>Fridley</p>
//   <p>Golden Valley</p>
//   <p>Lexington</p>
//   <p>Lino Lakes</p>
//   <p>New Brighton</p>
//   <p>Minneapolis</p>
//   <p>Richfield</p>
//   <p>Robbinsdale</p>
//   <p>Roseville</p>
//   <p>Shoreview</p>
//   <p>St. Louis Park</p>
//   <p>White Bear Lake</p>
//         </div>
//       </div>

//       <div className='w-full mt-auto text-center py-4'>
//         <p className='text-sm text-nates-gray'>&copy; {new Date().getFullYear()} Nate's Fence & Gate. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Typography } from '@mui/material';

import './Footer.css'; // Assuming your styles are here

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-nates-dark-blue to-nates-light-blue text-white pt-8 pb-16 flex flex-col md:flex-row items-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'> {/* Adjust gaps as needed */}

                {/* Contact & Navigation */}
                <section className='w-full md:w-auto contact-section-container'> {/* New container */}
                    <h3 className='text-2xl md:text-3xl font-bold mb-4'>Get in Touch!</h3>
                    <div className='flex items-center text-center md:text-left gap-4 pb-4 md:pb-0 md:mb-14'>
                        <SmartphoneIcon fontSize='large' style={{ fill: '#0283AB' }} />
                        <Typography className='ml-2'>
                            <a href="tel:612-702-8681" className='call-to-action'>
                                Call or Text: 612-702-8681
                            </a>
                        </Typography>
                    </div>
                    <nav> {/* Added for semantic clarity */}
                        <ul className='flex flex-col md:flex-row gap-4 text-base' style={{ width: 'fit-content', }}>
                            <li><Link to='/' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Home</Link></li>|
                            <li><Link to='/fence-types' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Fence Types</Link></li>|
                            <li><a href='https://www.google.com/search?q=nates+fence+and+gate&oq=nates&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIUCAEQRRgUGDkYgwEYhwIYsQMYgAQyDwgCEAAYFBiHAhiLAxiABDINCAMQLhivARjHARiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEHODM4ajFqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x52b33be89d42efcd:0xfa2f5923965e7add,1,,,,' target='_blank' className='hover text-nates-accent'>Google Reviews</a></li>|
                            <li><Link to='/quote' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>Instant Quote</Link></li>|
                            <li><Link to='/about' onClick={() => window.scrollTo(0, 0)} className='hover text-nates-accent'>About</Link></li>
                        </ul>
                    </nav>
                </section>

                {/* Logo */}
                <div className='text-center h-24 md:h-32 mx-auto md:mx-0'>
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <img src='../images/logos/nates-logo.jpg' alt="Nate's Fence & Gate Logo" className='h-24 md:h-32 inline-block opacity-100 hover:opacity-80 transition duration-300 ease-in-out' />
                    </Link>
                    <p className='text-sm text-nates-gray mt-2'>&copy; {new Date().getFullYear()} Nate's Fence & Gate. All Rights Reserved.</p>
                </div>

                {/* Service Areas */}
                <section className='w-full md:w-auto md:mr-auto'> {/* Adjusted classes to move the service locations list to the left */}
                    <h3 className='text-2xl md:text-3xl font-bold mb-4'>We Serve:</h3>
                    <ul className='grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-4 gap-y-1 md:gap-y-1 text-base text-sm' style={{ fontSize: '13px' }}>
                        { /* Consider adjusting columns on both viewports */}
                        <li>Blaine</li>
                        <li>Brooklyn Center</li>
                        <li>Brooklyn Park</li>
                        <li>Circle Pines</li>
                        <li>Columbia Heights</li>
                        <li>Coon Rapids</li>
                        <li>Crystal</li>
                        <li>Falcon Heights</li>
                        <li>Fridley</li>
                        <li>Golden Valley</li>
                        <li>Lexington</li>
                        <li>Lino Lakes</li>
                        <li>New Brighton</li>
                        <li>Minneapolis</li>
                        <li>Richfield</li>
                        <li>Robbinsdale</li>
                        <li>Roseville</li>
                        <li>Shoreview</li>
                        <li>St. Louis Park</li>
                        <li>White Bear Lake</li>
                    </ul>
                </section>

            </div>
        </footer>
    );
};

export default Footer;
