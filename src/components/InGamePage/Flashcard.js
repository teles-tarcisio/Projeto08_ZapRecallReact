import { useState } from "react";

import AnswerButtons from "./AnswerButtons.js";

import imgTurnArrow from "../../assets/images/turn.png";


const flashCardQuestions = [
    "pergunta 01 ?",
    "pergunta 02 ?",
    "pergunta 03 ?",
    "pergunta 04 ?",
    "pergunta 05 ?",
    "pergunta 06 ?",
    "pergunta 07 ?",
    "pergunta 08 ?"
];

function CardFrontSide() {
    return (
        <div className="card-front-side">
            <h1>1/8</h1>
            <h2>O que é JSX?</h2>          
            <img src={imgTurnArrow} alt="arrow turn" />
        </div>
    );
}

function CardBackSide() {
    return (
        <div className="card-back-side">
            <h1>1/8</h1>
            <h3>O que é JSX?</h3>            

            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</h4>

            <AnswerButtons />

            
        </div>
    );
}


export default function Flashcard() {
    return (
        <div className="flashcard-frame">
            {/* <CardFrontSide /> */}

            <CardBackSide />
        </div>
    );
}