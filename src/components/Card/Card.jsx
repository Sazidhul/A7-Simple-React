import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";


const Card = ({ card, handleBookMark, handleMarkAsRead }) => {
  //  console.log(card)


  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm  gap-4 mb-5 border-2">
        <figure>
          <img
            className="w-[150px] h-[150px] overflow-hidden rounded-md "
            src={card.image}
            alt="Movie"
          />
        </figure>

        <div className="grid grid-cols-4 items-center gap-7 w-full">
          <h2 className="font-bold">{card.title}</h2>
          <h3>${card.currentBidPrice}</h3>
          <p>{card.timeLeft}</p>
          <div className="justify-self-center ">
            <button  
              onClick={() => {
                handleBookMark(card);
                handleMarkAsRead(card.currentBidPrice);
              }}
            >
              <MdOutlineFavoriteBorder size={25}  />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
