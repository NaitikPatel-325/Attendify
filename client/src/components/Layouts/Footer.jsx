import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='fixed bottom-0 w-full bg-gradient-to-r from-gray-700 to-gray-900 flex flex-row pb-20 text-white'>
            <div className='text-xl w-1/2 pl-4 flex flex-col'>
                <div>
                Contact us
                </div>
                <div><i class="fa-solid fa-envelope"></i></div>
            </div>
            <div className='w-1/2'>


            </div>
        </div>
    );
};
