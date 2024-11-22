import React, { useContext, useEffect, useState } from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Header.css'
import useCarts from '../../../Hooks/useCarts';
import useAdmin from '../../../Hooks/useAdmin';
import profile from '../../../assets/others/boy.png'

// https://daisyui.com/components/navbar/
// responsive (dropdown menu on small screen, center menu on large screen)
//fixed

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [carts, isLoading, refetch] = useCarts();
    const [isAdmin] = useAdmin(user?.email);
console.log(isAdmin)
    return (
        <div>
            <div className="header navbar absolute z-10 bg-transparent text-white">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-transparent menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 active-style">
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/contact">CONTACT US</NavLink></li>
                           
                            <li><NavLink to="/menu">OUR COLLECTION</NavLink></li>
                            <li><NavLink to="/shop">OUR SHOP</NavLink></li>
                            {user?.uid && !isAdmin && <li><NavLink className='pl-0 mr-5' to="/dashboard/mycart"><FaShoppingCart /><div className="badge bg-red-600 absolute top-2 left-3">{carts?.length ? carts.length : 0}</div></NavLink></li>}
                            {user?.uid ? (
                               
                               
                            <div className=" dropdown dropdown-end w-full ml-5">
                                <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">
                                <div className='rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' >
                                        <div>
                                            <img   src={user?.photoURL || profile} alt="photoURL" />
                                        </div>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="bg-black menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
                                    
                                    <li className='cursor-pointer ml-5'  onClick={logOut}> 
                                       
                                            
                                           
                                        
                                            SIGN OUT
                                        
                                        
                                    </li>
                                </ul>
                                </div>
                        

                               
                            ) : (
                                <NavLink className="ml-5" to="/login">
                                    SIGN IN
                                </NavLink>
                            )}
                        </ul>
                    </div>
                    <a className="btn btn-ghost uppercase text-xl font-serif ">
                        <div>
                            UrbanNest
                            <small className='block text-xs font-thin ml-2' style={{ letterSpacing: '8px' }}>Furniture</small>
                        </div>
                    </a>
                </div>
                <div className="hidden lg:flex px-4">
                    <ul className="menu menu-horizontal px-1 active-style">
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/contact">CONTACT US</NavLink></li>

                        <li><NavLink to="/menu">OUR COLLECTION</NavLink></li>
                        <li><NavLink  to="/shop">OUR SHOP</NavLink></li>
                        
                        {user?.uid && !isAdmin && <li><NavLink className='pl-0 mr-5' to="/dashboard/mycart"><FaShoppingCart /><div className="badge bg-red-600 absolute top-2 left-3">{carts?.length ? carts.length : 0}</div></NavLink></li>}

                        

                    </ul>
                    <div className="dropdown dropdown-end w-16  ">
                        <label tabIndex={0} className=" m-1">
                            {user?.uid
                                ? (
                                    <div>
                                    <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">
                                   
                                    <div className='rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' >
                                        <div>
                                            <img   src={user?.photoURL || profile} alt="photoURL" />
                                        </div>
                                    </div>
                                    
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   
                                    <li><NavLink to="/dashboard" >DASHBOARD</NavLink></li>
                                    <li className='ml-5 mb-4 cursor-pointer' onClick={logOut} > 
                                  
                                            SIGN OUT
                                        
                                    </li>
                                </ul>
                                   </div>
                                )
                                :  
                                <button >
                                    <NavLink to="/login">SIGN IN</NavLink></button>
                            }
                        </label>
                        {/* <ul tabIndex={0} className="active-style dropdown-content menu p-2 shadow rounded-box w-52 border-gray-100 border-2">
                            {user?.uid && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
                            <li>
                                {user?.uid ? (
                                    <button
                                        onClick={logOut}
                                    >
                                        Sign Out
                                    </button>
                                ) : (
                                    <NavLink to="/login">
                                        Login
                                    </NavLink>
                                )}
                            </li>
                        </ul> */}
                    </div>

                </div>
            </div>
        </div>
       
    );
};

export default Header;