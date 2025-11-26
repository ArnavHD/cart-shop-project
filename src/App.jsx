
import './App.css'
import Hero from './Components/hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import ActiveAuction from './Components/ActiveAuction/ActiveAuction';
// import { useState } from 'react';


function App() {

  // const [count, setCount] = useState(0);

  // const counterIncrease = () =>{
    
  //   setCount(count + 1);
  //   console.log(count);
  // }
  // const counterDecrease = () =>{
    
  //   setCount(count - 1);
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
        <ActiveAuction ></ActiveAuction>
      </div>

    {/* </div> */}
      
      
    </>
  )
}

export default App
