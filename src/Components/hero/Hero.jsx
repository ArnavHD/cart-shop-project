import React from 'react';

const Hero = () => {
    return (
        <div className=" w-full h-[630px] bg-[url('https://i.ibb.co/6Rjh7wDy/Banner-min.jpg')] bg-cover bg-center">
            {/* <img className=' w-full h-[530px] object-center object-cover  overflow-hidden ' src="https://i.ibb.co/6Rjh7wDy/Banner-min.jpg" alt="" /> */}
            <div className='ml-36 pt-60'>
                <h1 className="text-white font-bold text-4xl mb-5">Bid on Unique Items from <br /> Around the World</h1>
                <p className='text-[#FFFFFFCC] mb-8'>Discover rare collectibles, luxury goods, and vintage <br/> treasures in our curated auctions</p>
                <button className="btn btn-neutral bg-white text-black rounded-4xl">Explore Auctions</button>

            </div>
        </div>
    );
};

export default Hero;