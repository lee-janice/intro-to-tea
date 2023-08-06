import React, { useState } from "react";

const Flashcard = function ({ card }) {
    const [flipped, setFlipped] = useState(true);
    return (
        <div className="flashcard" onClick={() => setFlipped(!flipped)}>
            {flipped ? (
                <div className="front">
                    {card.bq ? (
                        <div className="question">
                            <b>{card.question}</b>
                        </div>
                    ) : (
                        <div className="question">{card.question}</div>
                    )}
                    {/* <div className="question">{card.question}</div> */}
                </div>
            ) : (
                <div className="back">
                    {card.ba ? (
                        <div className="answer">
                            <b>{card.answer}</b>
                        </div>
                    ) : (
                        <div className="answer">{card.answer}</div>
                    )}
                    {/* <div className="answer">{card.answer}</div> */}
                </div>
            )}
        </div>
    );
};

export default Flashcard;
