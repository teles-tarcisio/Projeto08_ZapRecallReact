import { React, useState } from "react";

import { CardFrontSide, CardBackSide } from "./CardSides.js";

export default function Flashcard({gameState, setGameState, deck, questionCounter, setQuestionCounter}) {

    const [cardSide, setCardSide] = useState('front');
    const [borderColor, setBorderColor] = useState('');
    const [zeroErrors, setZeroErrors] = useState(true);


    if(questionCounter === deck.length) {
        if (zeroErrors === true) {
            setGameState('success');
        }
        else {
            setGameState('failure');
        }
    }
    
    return (
        <div className={`flashcard-frame ${borderColor}`}>
            {cardSide === 'front' ?
                <CardFrontSide
                    gameState={gameState}
                    setGameState={setGameState}
                    cardSide={cardSide}
                    setCardSide={setCardSide}
                    setBorderColor={setBorderColor}
                    deck={deck}
                    questionCounter={questionCounter}
                    setQuestionCounter={setQuestionCounter}

                />
                :
                <CardBackSide
                    gameState={gameState}
                    setGameState={setGameState}
                    setCardSide={setCardSide}
                    borderColor={borderColor}
                    setBorderColor={setBorderColor}
                    deck={deck}
                    questionCounter={questionCounter}
                    setQuestionCounter={setQuestionCounter}
                    zeroErrors={zeroErrors}
                    setZeroErrors={setZeroErrors}
                />
            }
        </div>
    );
}