import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='bg-white dark:bg-gray-900 flex flex-col fixed bottom-0 w-full overflow-hidden '>
            <div className='text-white flex justify-center items-center h-full'>
                Developed by,
                Naitik Patel,
                Dhruv Patel,
                Apeksha Shah. 
            </div>
            <div className='text-white flex justify-center items-center'>
                <i className="far fa-copyright"></i> 2024 <Link to="/" className='underline'>
               Attendify.
            </Link> All Rights Reserved
            </div>
        </div>
    );
};
