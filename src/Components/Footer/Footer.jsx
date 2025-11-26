import React from 'react';
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className=' bg-white flex flex-col justify-center items-center pt-32 pb-32'>
            <div className="flex-1 mb-3">
                <a className="btn btn-ghost text-3xl"><div className='flex'><span className=' text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></div></a>
            </div>
            <div className='flex gap-4 mb-6'>
                <h2 className=' text-2xl'>Bid.</h2>
                <h2 className=' text-2xl'>Win.</h2>
                <h2 className=' text-2xl'>Own.</h2>
            </div>
            <div className='flex mb-8'>
                <h3 className=' text-xl'>Home</h3>
                <h3 className=' text-xl'>Auctions</h3>
                <h3 className=' text-xl'>Categories</h3>
                <h3 className=' text-xl'>How it works</h3>
            </div>
            <div>
                <h2 className=' text-sm flex gap-1 items-center'><AiOutlineCopyrightCircle />2025 AuctionHub. All rights reserved.</h2>
            </div>
        </div>
    );
};

export default Footer;