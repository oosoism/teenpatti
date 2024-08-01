import React from "react";

const Card = ({ suit, value }) => {
  const suitSymbols = {
    hearts: "♥",
    diamonds: "♦",
    clubs: "♣",
    spades: "♠",
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 w-24 h-32 flex flex-col justify-between items-center text-center bg-white">
      <div className="text-2xl">{value}</div>
      <div className={`text-3xl ${suit === "hearts" || suit === "diamonds" ? "text-red-500" : "text-black"}`}>
        {suitSymbols[suit]}
      </div>
      <div className="text-2xl">{value}</div>
    </div>
  );
};

export default Card;
