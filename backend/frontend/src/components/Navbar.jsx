// Navbar.js
import React, { useState, useContext } from 'react';
import { HiHomeModern } from "react-icons/hi2";
import { CardContext } from '../context/CardContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cardItems } = useContext(CardContext);

    return (
        <div className='bg-green-600 w-full h-20 flex items-center justify-between px-4 md:px-14'>
            <div className='text-white text-lg font-bold'>Online Platform</div>
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}></path>
                    </svg>
                </button>
            </div>
            <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-green-600 md:bg-transparent w-64 md:w-auto z-10 p-5 md:p-0`}>
                <ul className='flex flex-col md:flex-row gap-5 items-center text-white text-sm font-bold cursor-pointer'>
                    <Link to="/">
                        <li className='md:ml-5'>All</li>
                    </Link>
                    <li className='md:ml-5'>Products</li>
                    <Link to='/Signin'>
                        <li className='bg-green-100 p-2 rounded-md text-black px-10 hover:bg-green-900 transition-all ease-linear hover:text-white md:ml-5'>Sign in</li>
                    </Link>
                    <Link to='/Login'>
                        <li className='bg-green-100 p-2 rounded-md text-black px-10 hover:bg-green-900 transition-all ease-linear hover:text-white md:ml-5'>Login</li>
                    </Link>
                    <li className='relative md:ml-5'>
                        <Link to="/another">
                            <HiHomeModern size={30} />
                        </Link>
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>{cardItems?.length}</span>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Navbar;
