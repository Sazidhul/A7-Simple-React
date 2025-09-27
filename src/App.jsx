import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Navbar/Banner'
import Blogs from './components/Blogs/Blogs'

import { MdOutlineFavoriteBorder } from "react-icons/md";
import FavCard from './components/Card/FavCard'

function App() {

    // store data by useState
  const [bookmarked, setBookmarked] = useState([]);

  const handleBookMark = (card) =>{
      setBookmarked([...bookmarked,card])
  }
 
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

     
        <div className='w-11/12 mx-auto mt-5'>
          <h1 className='font-bold text-5xl text-blue-950'>Active Auctions</h1>
          <p className='text-2xl'>Discover and bid on extraordinary items</p>
        </div>
        

      {/* layout  */}

      <div className="main-container  flex  w-11/12 mx-auto mt-10 justify-around gap-8">
        <div className="left-container w-[70%]  list bg-base-100 rounded-box shadow-md">
             
               <Blogs handleBookMark={handleBookMark}></Blogs>
             
        </div>

        <div className="right-container w-[30%] list bg-base-400 rounded-box shadow-lg ">
          <div className='flex items-center gap-5'>
            <MdOutlineFavoriteBorder  size={30} />
          <h1 className='text-center font-bold text-4xl text-blue-950'> 
             Favorite Items</h1>
          </div>

          {
            bookmarked.map((marked)=> <FavCard FavCard={marked}> </FavCard>)

          }
          
        </div>
      </div>

    </>
  )
}

export default App
