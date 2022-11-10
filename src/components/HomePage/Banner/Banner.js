import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Banner = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="p-6 py-12 dark:bg-yellow-400 dark:text-gray-900">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">ISP {' '}
                        <br className="sm:hidden" />REVIEW-2022
                    </h2>


                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Welcome to ISP Review Platform</span>

                        <span className="font-bold text-lg">{user?.email}</span>
                    </div>

                </div>
            </div>
            <p><small>Carnival Internet User Review</small> <br />
                ➊ Cloud Internet have 2 types of packages. <span className='font-bold'>i- Home Package,</span> <span className='font-bold'>ii- Corporate Package</span>
                <br />➋ we let our consumers revieweing and updating some of their packages
            </p>
        </div>
    );
};

export default Banner;