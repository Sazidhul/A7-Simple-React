import React from 'react';

const Banner = () => {
   return (
      <div className='w-11/12 object-cover mx-auto '>
         <div
  className="hero "
  style={{ 
    backgroundImage:
      "url(https://res.cloudinary.com/dfbwnhqmy/image/upload/v1758823562/Banner-min_dg4iyu.jpg)",
      height: "400px",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content ">
    <div className=" mr-96">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-amber-50 text-black rounded-full border-0">Explore Auctions</button>
    </div>
  </div>
</div>
      </div>
   );
};

export default Banner;