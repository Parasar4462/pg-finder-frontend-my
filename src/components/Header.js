import React from 'react';

//import link
import { Link } from 'react-router-dom';

//import Logo

import Logo from '../assets/img/logo.svg'
const Header = () => {
  return <header className='py-4 border-b'>
    <div className='container mx-auto flex items-center justify-between '>
      {/* Logo */}
      <Link to='/'>
        <img src={Logo} alt=""/>
      </Link>

      {/* Navbar Links */}

      <nav className='hidden lg:flex items-center gap-6'>
        <Link to='/' className='text-gray-600 hover:text-gray-800 transition'>Home</Link>
        <Link to='/property' className='text-gray-600 hover:text-gray-800 transition'>Property</Link>
        <Link to='/about' className='text-gray-600 hover:text-gray-800 transition'>About</Link>
        <Link to='/contact' className='text-gray-600 hover:text-gray-800 transition'>Contact</Link>
      </nav>

      {/* buttones */}

      <div className='flex items-center gap-6'>
        <Link to='/Login' className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>Login in</Link>
      </div>

    </div>
  </header>;
};

export default Header;


