import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import './Header.css'
import hphoto from '../../assets/Rent-a-house.png'

const Header = () => {
    const list = <>
        <li><NavLink to='/'>Home</NavLink></li>

        <li><NavLink to='/houses'>Houses</NavLink></li>
        <li><NavLink to='/Sliderhouse'>SliderHouse</NavLink></li>
        


    </>
    return (
        <div>
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {list}

                        </ul>
                    </div>
                    <Link to='/houses'><img className='h-36 w-36' src={hphoto}alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}

                    </ul>
                </div>
                
                <Link to='/houses' className="btn btn-ghost text-xl bg-linear-to-r from-cyan-500 to-blue-500">https://www.easyrenthouse.com</Link>
                <div className="navbar-end flex">
                    <Link to='/Login'><a className="btn bg-linear-to-r from-cyan-500 to-blue-100">Login</a></Link>
                    <Link to='/register'><a className="btn bg-linear-to-r from-cyan-500 to-blue-100">Register</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;