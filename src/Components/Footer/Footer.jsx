import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-nates-dark-blue text-white flex flex-row justify-evenly border-t-8 border-nates-light-blue mt-14'>
            <div className='h-64 w-1/3'>
                <h3 className='text-5xl'>Contact</h3>
            </div>

            <div className='h-64 w-1/3'>
                <img src='../images/logos/nates-logo.jpg' className='h-64 mx-auto'></img>
            </div>

            <div className='h-64 flex flex-col w-1/3 justify-center'>
                <div className='mb-5'>
                    <h3 className='text-5xl'>Service Areas</h3>
                </div>
                <div className='flex flex-row justify-between mr-5 gap-1'>
                    <div style={{ textAlign: 'center' }}>
                        <p>Blaine</p>
                        <p>Brooklyn Center</p>
                        <p>Brooklyn Park</p>
                        <p>Circle Pines</p>
                        <p>Columbia Heights</p>
                    </div>
                    <div  style={{ textAlign: 'center' }}>
                        <p>Coon Rapids</p>
                        <p>Crystal</p>
                        <p>Falcon Heights</p>
                        <p>Fridley</p>
                        <p>Golden Valley</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Lexington</p>
                        <p>Lino Lakes</p>
                        <p>New Brighton</p>
                        <p>Minneapolis</p>
                        <p>Richfield</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Robbinsdale</p>
                        <p>Roseville</p>
                        <p>Shoreview</p>
                        <p>St. Louis Park</p>
                        <p>White Bear Lake</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;