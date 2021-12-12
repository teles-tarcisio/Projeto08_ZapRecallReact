import { useState } from "react";

import SmallButton from "./SmallButton.js";

import imgTurnArrow from "../../assets/images/turn.png";


const flashCardInfo = {
    totalQuestions: 8,
    question: "O que é JSX?",
}

const answerButtons = [
    {
        buttonText: "Aprendi agora",
        borderColor: "#000000"
    },
    {
        buttonText: "Não lembrei",
        borderColor: "#F74848"
    },
    {
        buttonText: "Lembrei com esforço",
        borderColor: "#62DB38"
    },
    {
        buttonText: "Zap!",
        borderColor: "#FFEF61"
    }
];

function CardFrontSide() {
    return (
        <div className="card-front-side">
            <h1>1/{flashCardInfo.totalQuestions}</h1>

            <h2>{flashCardInfo.question}</h2>
            
            <img src={imgTurnArrow} alt="arrow turn" />
        </div>
    );
}

function CardBackSide() {
    return (
        <div className="card-back-side">
            <h1>1/{flashCardInfo.totalQuestions}</h1>
            <h3>{flashCardInfo.question}</h3>

            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</h4>

            <ul className="answer-buttons">
                {answerButtons.map((buttonInfo) => (
                    <SmallButton buttonText={buttonInfo.buttonText} />)
                )}
            </ul>
        </div>
    );
}


export default function Flashcard() {
    return (
        <div className="flashcard-frame">
            <CardFrontSide />

            {/* <CardBackSide /> */}
        </div>
    );
}