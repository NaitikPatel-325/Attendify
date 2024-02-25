import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='bottom-0 w-full bg-gradient-to-r from-gray-800 to-gray-900  flex flex-col'>
            <div className='flex flex-row text-white pt-2'>
                <div className=' w-1/2 pl-4 flex flex-col'>
                    <div>
                    Contact us
                    </div>
                    <div className='flex flex-row'>
                        <div><i class="fa-solid fa-envelope"></i></div>
                        <div className='pl-2'><Link to='#' className='hover:underline'>abc123@gmail.com</Link></div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-end pr-2'>Developed by, </div>
                    <div className='flex justify-end pr-2'>Naitik Patel, Dhruv Patel, Apeksha Shah.</div>
                </div>
                <div><i class="fa-solid fa-envelope"></i></div>
            </div>
            <div className='text-white flex justify-center'>
                <div><i class="fa-regular fa-copyright"></i>2024 Attendify. All rights reserved.</div>
            </div>
        </div>
    );
};
