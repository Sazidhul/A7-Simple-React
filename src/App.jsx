import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Navbar/Banner'
import Blogs from './components/Blogs/Blogs'

import { MdOutlineFavoriteBorder } from "react-icons/md";
import FavCard from './components/Card/FavCard'

import { toast, ToastContainer } from "react-toastify";

function App() {
  
//  storing the updated money
  const [readingCourt, setReadingCount] = useState(0);
 // add money 
  const handleMarkAsRead = (money)=>{
    const totalMoney = readingCourt + money;
    setReadingCount(totalMoney);

  }

  // decrease  money
  const handleRemove = (money)=>{
    const removeMoney = readingCourt - money;
    setReadingCount(removeMoney);
    
  }


    // store data by useState
  const [bookmarked, setBookmarked] = useState([]);

    // add the Card
  const handleBookMark = (card) =>{
    const isExist = bookmarked.find(item => item.id == card.id);
      toast( '🦄 item Added to your Favorite Lists')
    // console.log(isExist);
    if(!isExist){
      setBookmarked([...bookmarked,card])
    }
    else{
        alert("already Existed")
    }
      
  };

  // Delete the card 
  const handleDelete = (id)=>{
    console.log(id);
    const newCart = bookmarked.filter(item=> item.id !=id);
    setBookmarked(newCart);
  }
 
  return (
    <>
    <ToastContainer />
      <Navbar></Navbar>
      <Banner></Banner>

     
        <div className='w-11/12 mx-auto mt-5'>
          <h1 className='font-bold text-5xl text-blue-950'>Active Auctions</h1>
          <p className='text-2xl'>Discover and bid on extraordinary items</p>
        </div>
        

      {/* layout  */}

      <div className="main-container  flex  w-11/12 mx-auto mt-10 justify-around gap-8">
        <div className="left-container w-[70%]  list bg-base-100 rounded-box shadow-md">
             
               <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
             
        </div>

        <div className="right-container w-[30%] list bg-base-400 rounded-box shadow-lg ">
          <div className='flex items-center gap-5 justify-center'>
            <MdOutlineFavoriteBorder  size={30} />
          <h1 className='text-center font-bold text-4xl text-blue-950 '> 
             Favorite Items</h1>
          </div>

            <h2 className='font-bold text-3xl w-70% text-center mt-2.5'>Total bids Amount : ${readingCourt} </h2>
          {
            bookmarked.map((marked)=> <FavCard FavCard={marked} handleDelete={handleDelete}  handleRemove={handleRemove}> </FavCard>)

          }
          
        </div>
      </div>

    </>
  )
}

export default App
