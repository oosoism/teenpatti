import React from "react";
import Card from "./Card";

const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const Deck = () => {
  const cards = suits.flatMap(suit => values.map(value => ({ suit, value })));

  return (
    <div className="relative w-32 h-40">
      {cards.map((card, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transform: `translate(${index * 2}px, ${index * 2}px)`,
            zIndex: index,
          }}
        >
          <Card suit={card.suit} value={card.value} />
        </div>
      ))}
    </div>
  );
};

export default Deck;
