import React from 'react';
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm px-36 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl"><div className='flex'><span className=' text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></div></a>
                </div>
                <div className='flex flex-2 gap-10 mx-auto'>
                    <h3><a href="#">Home</a></h3>
                    <h3><a href="#">Auctions</a></h3>
                    <h3><a href="#">Categories</a></h3>
                    <h3><a href="#">How it works</a></h3>
                </div>
                <div className="">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <button><CiBellOn size={25} /></button>
                                {/* <span className="badge badge-sm indicator-item">5</span> */}
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;