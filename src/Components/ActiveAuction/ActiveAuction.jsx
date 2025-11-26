import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Cart from '../Cart/Cart';


const ActiveAuction = ({ displayMsg, displayRemove }) => {

    
    
    const [items, setItems] = useState([]);
    const [added, setAdded] = useState([]);
    // const [inCart, setInCart] = useState([])
    const [price, setPrice] = useState(0);
    

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    // console.log(items);
    // const storeCart = [];
    const handleBtnClick = (id) => {
        // console.log(item);

        // added.filter(addedPro => addedPro.id !== item.id ? setAdded([...added, item]) : setAdded([...added]));
        
        // if(!inCart.includes(item)){
        //     setInCart([...inCart, item]);
        // }

        if (!added.includes(id)) {
            setAdded([...added, id]);
        }
        let currentClickPrice;
        currentClickPrice = items.find(item=>(item.id === id));
        
        setPrice(price + currentClickPrice.currentBidPrice);
            
        
        // console.log(price);
        
        // sendToCart(item);

        // storeCart.push(item);
        // handleIncreasePrice();
    }
    // console.log(inCart);

   
    // useEffect(()=>{
    //     // let priceMoney = 0;
    //     let priceMoney = inCart.map(item => priceMoney += item.currentBidPrice);
    //     setPrice(priceMoney);
    // },[inCart])

    // const handleIncreasePrice = () =>{
    //     let addedPrice = 0;
    //     for(const money of inCart){
    //         addedPrice += money.currentBidPrice;
    //         console.log(money);
    //     }
    //     setPrice(addedPrice);
    //     // console.log(price);
    // }

    const handleReducePrice = (id) =>{
        const crossProduct = items.find(item=>item.id === id);
        const afterReduce = price - crossProduct.currentBidPrice;
        setPrice(afterReduce);
    }
    
    
    const handleCrossButton = (id) =>{
        console.log("Cross clicked", id);
        let remainingItems = [];
        remainingItems = added.filter(remain=>remain !== id);
        setAdded(remainingItems);
        console.log(remainingItems);
        // setAdded(remainingItems);
        // for(const id of added){
        //     if()
        // }
    }


    return (
        <div className='flex gap-6 align-middle mx-auto '>
            <div className=" flex-2 overflow-x-auto bg-white w-[750px] rounded-3xl p-8 border border-black">
                <table className="table ">
                    {/* head */}
                    <thead >
                        <tr>
                            <th className=' border-b border-black'>Items </th>
                            <th className=' border-b border-black'>Current Bid</th>
                            <th className=' border-b border-black'>Time Left</th>
                            <th className=' border-b border-black'>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}

                        {
                            items.map(item => (
                                <tr key={item.id}>

                                    <td className=' border-b border-black'>
                                        <div className="flex items-center gap-3 w-9/12">
                                            <div className="avatar">
                                                <div className=" h-16 w-16">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' border-b border-black'>
                                        {item.currentBidPrice}

                                    </td>
                                    <td className=' border-b border-black'>{item.timeLeft}</td>
                                    <th className={`border-b border-black `}>
                                        
                                        <span className={`${added.includes(item.id) ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                                            <button className={`btn btn-ghost btn-xs `} disabled={added.includes(item.id)} onClick={() => { handleBtnClick(item.id); displayMsg() }}>
                                                {
                                                    // <FaRegHeart size={23} />
                                                    // added.map(AddedProduct =>{
                                                    //     AddedProduct.id === item.id ? <FaHeart color='red' size={23} /> : <FaRegHeart size={23} />
                                                    // })
                                                    // added.map(addedProduct => addedProduct.id === item.id ? <FaHeart color='red' size={23} /> : <FaRegHeart size={23} />)
                                                    added.includes(item.id) ? <FaHeart color='red' size={23} /> : <FaRegHeart size={23} />


                                                }

                                            </button>
                                            
                                        </span>
                                        
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
            
            <div className='flex-1  bg-white rounded-3xl h-[80%] p-8 space-y-8'>
                <h2 className='flex gap-2.5 text-blue-400 text-4xl justify-center'><FaRegHeart size={35} />Favorite Items</h2>
                <hr className=' border-2' />
                <div className='cart-container flex flex-col gap-8  bg-white'>

                    
                    <div className={`flex flex-col justify-center items-center space-y-10 w-fit ${added.length > 0? "hidden" : ""}`}>
                        <h3 className=' text-3xl'>No Favorites Yet</h3>
                        <p className=' text-center text-[#0E2954] text-xl'>Click the heart icon on any item to add it to your favorites</p>
                    </div>

                    {
                        items.map(item => <Cart displayRemove={displayRemove} key={`cart-${item.id}`} handleReducePrice={handleReducePrice} added={added} item={item} handleCrossButton={handleCrossButton}></Cart>)
                    }

                    
                </div>
                <hr className='border-2' />
                <div className='flex justify-between gap-10'>
                    
                    <h2 className=' text-2xl '>Total Bids Amount:</h2>
                    <h2 className='text-2xl '>${price}</h2>
                </div>
            </div>

        </div>
    );
};

export default ActiveAuction;