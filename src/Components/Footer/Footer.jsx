import React from 'react';
import { Link } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Typography } from '@mui/material';

import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-nates-dark-blue text-white flex flex-row justify-evenly border-t-8 border-nates-light-blue w-screen'>
            <div className='w-1/3 flex flex-col'>
                <h3 className='text-5xl'>Contact</h3>
                <div>
                    <Typography style={{
                        backgroundColor: 'white',
                        color: '#102942',
                        margin: '10% auto',
                        width: '50%',
                        padding: '5px',
                    }}>
                        <a href="tel:612-702-8681">
                            <SmartphoneIcon style={{ fill: '#0283AB' }} />{' '}
                            <span className='hover'>Call or text: 612-702-8681</span></a>
                    </Typography>
                </div>
                <div>
                    <p>
                        <Link to='/' onClick={() => window.scrollTo(0, 0)} className='hover'>
                            Home</Link> |{' '}
                        <Link to='/fence-types' onClick={() => window.scrollTo(0, 0)} className='hover'>
                            Fence Types</Link> |{' '}
                        <a href='https://www.google.com/search?q=nates+fence+and+gate&oq=nates&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIUCAEQRRgUGDkYgwEYhwIYsQMYgAQyDwgCEAAYFBiHAhiLAxiABDINCAMQLhivARjHARiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEHODM4ajFqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x52b33be89d42efcd:0xfa2f5923965e7add,1,,,,'
                            target='_blank' className='hover'>
                            Google Reviews</a> |{' '}
                        <Link to='/quote' onClick={() => window.scrollTo(0, 0)} className='hover'>
                            Instant Quote</Link> |{' '}
                        <Link to='/about' onClick={() => window.scrollTo(0, 0)} className='hover'>
                            About</Link>
                    </p>
                </div>
            </div>

            <div className='h-64 w-1/3'>
                <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                    <img src='../images/logos/nates-logo.jpg' className='h-64 mx-auto'></img>
                </Link>
            </div>

            <div className='h-64 flex flex-col w-1/3 justify-center'>
                <div className='mb-5'>
                    <h3 className='text-5xl'>Service Areas</h3>
                </div>
                <div className='flex flex-row justify-between mr-5 gap-2'>
                    <div style={{ textAlign: 'center' }}>
                        <p>Blaine</p>
                        <p>Brooklyn Center</p>
                        <p>Brooklyn Park</p>
                        <p>Circle Pines</p>
                        <p style={{ whiteSpace: 'nowrap' }}>Columbia Heights</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Coon Rapids</p>
                        <p>Crystal</p>
                        <p style={{ whiteSpace: 'nowrap' }}>Falcon Heights</p>
                        <p>Fridley</p>
                        <p>Golden Valley</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Lexington</p>
                        <p>Lino Lakes</p>
                        <p style={{ whiteSpace: 'nowrap' }}>New Brighton</p>
                        <p>Minneapolis</p>
                        <p>Richfield</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Robbinsdale</p>
                        <p>Roseville</p>
                        <p>Shoreview</p>
                        <p>St. Louis Park</p>
                        <p style={{ whiteSpace: 'nowrap' }}>White Bear Lake</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;