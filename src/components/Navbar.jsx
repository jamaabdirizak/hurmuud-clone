import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [isSticky, setIsSticky] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setIsSticky(true) : setIsSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    
    const textColorClass = isSticky ? 'text-black' : 'text-gray-800'; 
    const iconColorClass = isSticky ? 'text-black' : 'text-gray-700';

    return (
        <div className={`
            flex justify-between items-center px-8 py-3 fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50
            ${isSticky ? 'bg-white shadow-lg' : 'bg-transparent'}
        `}>
            {/* Logo */}
            <Link to='/' className="flex items-center">
                <img src={logo} alt="logo" className='h-10 w-auto mr-2' /> 
                
            </Link>

            {/* Close Button (Mobile) */}
            <button
                onClick={toggleMenu}
                className={`md:hidden focus:outline-none p-2 rounded-md ${iconColorClass}`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                {isOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
            </button>

            {/* Desktop*/}
            <nav className='hidden md:flex items-center space-x-8'>
                <Link to='/' className={`font-normal text-lg ${textColorClass} hover:text-indigo-400 transition-colors`}>Home</Link>
                <Link to='/blog' className={`font-normal text-lg ${textColorClass} hover:text-indigo-400 transition-colors`}>Blog</Link>
                <Link to='/pricing' className={`font-normal text-lg ${textColorClass} hover:text-indigo-400 transition-colors`}>Pricing</Link>
                <Link to='/contact' className={`font-normal text-lg ${textColorClass} hover:text-indigo-400 transition-colors`}>Contact</Link>

                {/* Favorite Icon (Desktop) */}
                <Link to='/favorites' className={`${iconColorClass} hover:text-red-400 transition-colors`}>
                    <FaHeart className='w-6 h-6' />
                </Link>
                {/* Cart Icon (Desktop) */}
                <Link to='/cart' className={`${iconColorClass} hover:text-indigo-400 transition-colors`}>
                    <FaShoppingCart className='w-6 h-6' />
                </Link>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className={`
                    md:hidden absolute top-full left-0 w-full flex flex-col py-4 items-center space-y-4 shadow-md
                    ${isSticky ? 'bg-blue-700' : 'bg-white/90 backdrop-blur-sm'} {/* Adjusted mobile menu bg */}
                    text-gray-800 {/* Default text color for mobile menu */}
                `}>
                    <Link to='/' onClick={toggleMenu} className='font-normal text-lg hover:text-indigo-600 transition-colors'>Home</Link>
                    <Link to='/blog' onClick={toggleMenu} className='font-normal text-lg hover:text-indigo-600 transition-colors'>Blog</Link>
                    <Link to='/pricing' onClick={toggleMenu} className='font-normal text-lg hover:text-indigo-600 transition-colors'>Pricing</Link>
                    <Link to='/contact' onClick={toggleMenu} className='font-normal text-lg hover:text-indigo-600 transition-colors'>Contact</Link>

                    {/* Favorite Icon (Mobile) */}
                    <Link to='/favorites' onClick={toggleMenu} className='hover:text-red-600 transition-colors'>
                        <FaHeart className='w-6 h-6' />
                    </Link>
                    {/* Cart Icon (Mobile) */}
                    <Link to='/cart' onClick={toggleMenu} className='hover:text-indigo-600 transition-colors'>
                        <FaShoppingCart className='w-6 h-6' />
                    </Link>
                </nav>
            )}
            
        </div>
        
    );
};

export default Navbar;