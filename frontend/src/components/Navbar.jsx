import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

// A professional and modern SVG component for the logo
const DocFindLogo = ({ className, onClick }) => (
  <div 
    className={`flex items-center gap-3 cursor-pointer font-bold text-primary group ${className}`} 
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick && onClick();
      }
    }}
  >
    <div className="relative">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="36" 
        height="36" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <path d="M10 12l2.5-4 2.5 4-2.5 4-2.5-4Z" fill="currentColor" />
      </svg>
      <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
    <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
      DocFind
    </span>
  </div>
);

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const { token, setToken, userData } = useContext(AppContext);

    const logout = () => {
        localStorage.removeItem('token');
        setToken(false);
        navigate('/login');
    };

    return (
        <div className='flex items-center justify-between text-xs py-3 mb-4 border-b border-b-[#ADADAD]'>
            {/* Logo */}
            <DocFindLogo onClick={() => navigate('/')} className='w-32' />

            {/* Desktop Navigation Links */}
            <ul className='md:flex items-start gap-4 font-medium hidden'>
                <NavLink to='/'>
                    <li className='py-0.5'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-0.5'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-0.5'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-0.5'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            {/* User Profile & Mobile Menu */}
            <div className='flex items-center gap-3 '>
                {token && userData ? (
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-7 rounded-full' src={userData.image} alt="User profile" />
                        <img className='w-2' src={assets.dropdown_icon} alt="Dropdown icon" />
                        <div className='absolute top-0 right-0 pt-12 text-sm font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-40 bg-gray-50 rounded flex flex-col gap-3 p-3'>
                                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className='bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block'>Create account</button>
                )}
                <img onClick={() => setShowMenu(true)} className='w-5 md:hidden' src={assets.menu_icon} alt="Menu icon" />

                {/* Mobile Menu */}
                <div className={`md:hidden ${showMenu ? 'fixed w-full h-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300 ease-in-out`}>
                    <div className='flex items-center justify-between px-4 py-5'>
                        <DocFindLogo className='w-28' />
                        <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-6' alt="Close menu" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-4 px-4 text-base font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-3 py-1.5 rounded-full inline-block'>HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-3 py-1.5 rounded-full inline-block'>ALL DOCTORS</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-3 py-1.5 rounded-full inline-block'>ABOUT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-3 py-1.5 rounded-full inline-block'>CONTACT</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;