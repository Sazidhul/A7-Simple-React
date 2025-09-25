import React from 'react';

const Banner = () => {
   return (
      <div>
         <div
  className="hero min-h-lvh"
  style={{ 
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content ">
    <div className="max-w-max mr-96">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items <br /> from Around the World</h1>
      <p className="mb-5">
       Discover rare collectibles, luxury goods, and vintage <br />treasures in our curated auctions
      </p>
      <button className="btn w-3xs font-bold bg-amber-50 text-black rounded-full border-0">Explore Auctions</button>
    </div>
  </div>
</div>
      </div>
   );
};

export default Banner;