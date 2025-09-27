import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Blogs = ({handleBookMark,handleMarkAsRead}) => {

      // Now we have to store the data by using useState
       const[blogs, setBlogs] = useState([])

   // this useEffect is use for calling the fake data
   useEffect(()=>{
      fetch("blogs.json")
      .then((res)=> res.json())
      .then((data)=> setBlogs(data))
   },[])

   // console.log(blogs)

   return (
      <div>
         <div className='grid grid-cols-4 items-center gap-7 w-full '>
             <h1 className='justify-self-center-'>Items</h1>
             <h1 className='justify-self-center'>Current</h1>
             <h1 className='justify-self-center'>Time Left</h1>
             <h1 className='justify-self-center'>Bid Now</h1>

         </div>
        
         <div >
            {
            blogs.map((items)=> <Card card={items} handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Card>)
            }
         </div>
      </div>
   );
};

export default Blogs;