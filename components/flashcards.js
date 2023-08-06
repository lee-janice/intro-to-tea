import React from "react";
import Flashcard from "./flashcards/flashcard";

const Flashcards = function ({ cards }) {
    console.log(cards);
    return (
        <div className="flashcards">
            {cards.map((card, i) => {
                return <Flashcard card={card} />;
            })}
        </div>
    );
};

export default Flashcards;
