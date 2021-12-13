import { React, useState } from "react";

import { CardFrontSide, CardBackSide } from "./CardSides.js";

export default function Flashcard({gameState, setGameState}) {

    const [cardSide, setCardSide] = useState('front');
    const [borderColor, setBorderColor] = useState('')
    
    return (
        <div className={`flashcard-frame ${borderColor}`}>
            {cardSide === 'front' ?
                <CardFrontSide
                    gameState={gameState}
                    setGameState={setGameState}
                    cardSide={cardSide}
                    setCardSide={setCardSide}
                    setBorderColor={setBorderColor}
                />
                :
                <CardBackSide
                    gameState={gameState}
                    setGameState={setGameState}
                    cardSide={cardSide}
                    setCardSide={setCardSide}
                    setBorderColor={setBorderColor}
                />
            }
        </div>
    );
}