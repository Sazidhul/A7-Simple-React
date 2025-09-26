import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Blogs = () => {

      // Now we have to store the data by using useState
       const[blogs, setBlogs] = useState([])

   // this useEffect is use for calling the fake data
   useEffect(()=>{
      fetch("blogs.json")
      .then((res)=> res.json())
      .then((data)=> setBlogs(data))
   },[])

   console.log(blogs)

   return (
      <div>
         <h1>total: {blogs.length}</h1>
         <div>
            {
               blogs.map((items)=> <Card card={items}></Card>)
            }
         </div>
      </div>
   );
};

export default Blogs;