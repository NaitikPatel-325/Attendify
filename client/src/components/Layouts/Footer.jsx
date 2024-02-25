import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const [isFooterFixed, setIsFooterFixed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isFixed = window.scrollY + window.innerHeight >= document.body.offsetHeight;
            setIsFooterFixed(isFixed);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const footerClasses = `w-full bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col ${
        isFooterFixed ? 'fixed bottom-0' : 'relative'
    }`;

    return (
        <div className={footerClasses}>
            <div className='flex flex-row text-white pt-2'>
                <div className='w-1/2 pl-4 flex flex-col'>
                    <div>
                        Contact us
                    </div>
                    <div className='flex flex-row'>
                        <div><i className="fa-solid fa-envelope"></i></div>
                        <div className='pl-2'><Link to='#' className='hover:underline'>abc123@gmail.com</Link></div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-end pr-2'>Developed by, </div>
                    <div className='flex justify-end pr-2'>Naitik Patel, Dhruv Patel, Apeksha Shah.</div>
                </div>
            </div>
            <div className='text-white flex justify-center'>
                <div><i className="fa-regular fa-copyright"></i>2024 Attendify. All rights reserved.</div>
            </div>
        </div>
    );
};
