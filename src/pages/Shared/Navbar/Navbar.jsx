import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../assets/logo/navigaiton (2).png';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link className='flex items-center' to='/'>
                        <img className='h-10' src={logo} alt="GrowthPath Logo" />
                        <span className='text-xl text-amber-800 font-medium'>GrowthPath</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li 
                            onMouseEnter={() => setDropdownOpen(true)} 
                            onMouseLeave={() => setDropdownOpen(false)} 
                            className="relative"
                        >
                            <span>Book Designing</span>
                            {dropdownOpen && (
                                <ul className="absolute mt-8 w-48 bg-white text-black shadow-lg z-10">
                                    <li><Link className="block px-4 py-2 hover:bg-gray-400" >Cover Pages</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-400" >Layout Designing</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-400" >Graphical Works</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-400" >School Book Designing</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-400" >White Level Content</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to= "/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
