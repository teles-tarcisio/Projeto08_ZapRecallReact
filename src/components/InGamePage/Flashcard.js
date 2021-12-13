import { React, useState } from "react";

import { CardFrontSide, CardBackSide } from "./CardSides.js";

export default function Flashcard() {
    const [cardSide, setCardSide] = useState('front');

    return (
        <div className="flashcard-frame">
            { cardSide === 'front' ? <CardFrontSide setSide={setCardSide}/> : <CardBackSide side={cardSide} setSide={setCardSide}/> }
        </div>
    );
}