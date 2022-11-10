import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // Function for logout
    const handleLogOut = () => {
        logOut()
            .then(toast('Good Bye , See You Soon'))
            .catch();
    }
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidde space-x-3 md:flex">
                    <Link rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 dark:text-yellow-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>

                    </Link>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to='/' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/services" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</Link>
                    </li>
                    {
                        user?.email ?
                            <>
                                <li className="flex">
                                    <Link rel="noopener noreferrer" onClick={handleLogOut} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Logout</Link>
                                </li>
                                <li className="flex">
                                    <Link rel="noopener noreferrer" to='/addservices' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ">Add Service</Link>
                                </li>
                                <li className="flex">
                                    <Link rel="noopener noreferrer" to="/reviews" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ">My Review</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="flex">
                                    <Link rel="noopener noreferrer" to='/login' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Sign In</Link>
                                </li>
                                <li className="flex">
                                    <Link rel="noopener noreferrer" to='/register' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Register</Link>
                                </li>
                            </>
                    }


                </ul>

                <ul className="items-stretch hidden space-x-3 md:flex">


                    <li className="flex">
                        <Link rel="noopener noreferrer" to='/blog' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
                    </li>
                </ul>
                <button title="Button" type="button" className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;