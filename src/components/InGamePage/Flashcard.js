import { React, useState } from "react";

import { CardFrontSide, CardBackSide } from "./CardSides.js";

export default function Flashcard() {
    const [cardSide, setCardSide] = useState('front');
    const [borderColor, setBorderColor] = useState("");

    return (
        <div className={`flashcard-frame ${borderColor}`}>
            { cardSide === 'front' ? <CardFrontSide setSide={setCardSide}/> : <CardBackSide side={cardSide} setSide={setCardSide} setBorderColor={setBorderColor}/> }
        </div>
    );
}