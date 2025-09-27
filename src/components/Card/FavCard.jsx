import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
const FavCard = ({FavCard, handleDelete}) => {
   // console.log(FavCard)
   return (
      <div className='mt-6'>
        <div className="flex items-center border rounded-xl p-4 shadow-md max-w-xl bg-white h-80%">
  
  <img 
    src={FavCard.image} 
    alt="Sample" 
    className="w-20 h-20 object-cover rounded-xl border" 
  />

 
  <div class="ml-4 space-y-2 ">
      <div class="flex justify-between items-center ">
         <div>
       <h1 class="text-1xl font-bold line-clamp-1 ">{FavCard.title}</h1>
    <h2 class="text-xl font-semibold">${FavCard.currentBidPrice}</h2>
    <h3 class="text-lg text-gray-600">Bids: {FavCard.bidsCount}</h3>
   </div>
   <div className='flex items-center '>
      <button onClick={()=>handleDelete(FavCard.id)} class=" text-2xl cursor-pointer ">
 <MdOutlineCancel  />
      </button>
      
   </div>
      </div>

   
  </div>


</div>

      </div>
   );
};

export default FavCard;