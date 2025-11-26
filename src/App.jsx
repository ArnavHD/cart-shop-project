
import './App.css'
import Hero from './Components/hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import ActiveAuction from './Components/ActiveAuction/ActiveAuction';
// import { useState } from 'react';
// import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);


function App() {

  const displayMsg = () => {
          toast("Item Added To Your Favorite List!!");
          // toast(<Msg />) would also work
      };

  const displayRemove = () =>{
    toast.warn("Item Removed From Favorites!!");
  }

  // const [count, setCount] = useState(1);

  // const counterIncrease = (added) =>{
    
  //   console.log(added.length + 1);
    
  // }
  // const counterDecrease = (added) =>{
    
  //   setCount(count - 1);
  //   console.log(count);
  // }
  

  return (
    <>

      {/* <div className=' bg-[#000000]'> */}
      <Navbar></Navbar>
      <Hero></Hero>

      <div className=' ml-36 mt-32 mb-8'>
          <h2 className=' text-4xl mb-5'>Active Auctions</h2>
        <p className='text-[#0E2954]'>Discover and bid on extraordinary items</p>
      </div>

      <div className='table-cart-container mx-36'>
        <ActiveAuction displayMsg={displayMsg} displayRemove={displayRemove} ></ActiveAuction>
      </div>

      <ToastContainer />

    {/* </div> */}
      
      
    </>
  )
}

export default App
