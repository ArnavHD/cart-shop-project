
import './App.css'
import Hero from './Components/hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import ActiveAuction from './Components/ActiveAuction/ActiveAuction';
// import { useState } from 'react';
// import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import { MdMargin } from 'react-icons/md';

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);


function App() {

  const [inCart, setInCart] = useState([]);

  const handleCount = (item) => {
    setInCart([...inCart, item]);
  }
  const reduceCount = (product) => {
    let remaining;
    remaining = inCart.filter(item => item !== product);
    setInCart([...remaining]);
  }

  const displayMsg = () => {
    toast("Item Added To Your Favorite List!!",{
      position: 'top-right',
      style:{top: "70px"},
    });
    // toast(<Msg />) would also work
  };

  const displayRemove = () => {
    toast.warn("Item Removed From Favorites!!", {
      position: 'top-right',
      style: { top: "70px" },
    });
  }

  // const [count, setCount] = useState(1);

  // const counterIncrease = (added) =>{

  //   console.log(added.length + 1);

  // }
  // const counterDecrease = (added) =>{

  //   setCount(count - 1);
  //   console.log(count);
  // }
  // console.log(inCart.length);

  return (
    <>

      <div >
        <Navbar inCart={inCart}></Navbar>
        <Hero></Hero>

        <div className=' ml-36 mt-32 mb-8'>
          <h2 className=' text-4xl mb-5'>Active Auctions</h2>
          <p className='text-[#0E2954]'>Discover and bid on extraordinary items</p>
        </div>

        <div className='table-cart-container mx-36'>
          <ActiveAuction handleCount={handleCount} reduceCount={reduceCount} displayMsg={displayMsg} displayRemove={displayRemove} ></ActiveAuction>
        </div>

        <ToastContainer />

        <Footer></Footer>

      </div>



    </>
  )
}

export default App
