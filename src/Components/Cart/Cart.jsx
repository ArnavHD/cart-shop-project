import React from 'react';

const Cart = ({ added, item, handleCrossButton, handleReducePrice }) => {
    console.log(added);
    // console.log(item);
    return (


        added.some(cartedItem => cartedItem === item.id) ? (
            < div className={`flex items-center justify-between p-2 border border-black rounded-xl`} >
                <div>
                    <img className=' object-cover h-16 w-16' src={item.image} alt="" />
                </div>
                <div className=' flex-1 mx-4'>
                    <h3>{item.title}</h3>
                    <div className='flex justify-start gap-4'>
                        <h4>${item.currentBidPrice}</h4>
                        <h4>Bids:{item.bidsCount}</h4>
                    </div>
                </div>
                <button onClick={() => { handleCrossButton(item.id); handleReducePrice(item.id); }} className='btn'>X</button>
            </div >
        ) : null
        

        // < div className = {`flex items-center justify-between`} >
        //     <div>
        //         <img className=' object-cover h-16 w-16' src={item.image} alt="" />
        //     </div>
        //     <div>
        //         <h3>{item.title}</h3>
        //         <div className='flex justify-start gap-16'>
        //             <h4>${item.currentBidPrice}</h4>
        //             <h4>{item.bidsCount}</h4>
        //         </div>
        //     </div>
        //     <button onClick={handleCrossButton} className='btn'>X</button>
        // </div >
    );
};

export default Cart;