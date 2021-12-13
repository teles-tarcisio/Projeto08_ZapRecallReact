import { React, useState } from "react";


import StartPage from "./components/StartPage/StartPage.js";
import InGamePage from "./components/InGamePage/InGamePage.js";


const flashCardDecks = [
    [
        "pergunta 001 ?",
        "pergunta 002 ?",
        "pergunta 003 ?",
        "pergunta 004 ?",
        "pergunta 005 ?",
        "pergunta 006 ?",
        "pergunta 007 ?",
        "pergunta 008 ?"
    ],
    [
        "pergunta 101 ?",
        "pergunta 102 ?",
        "pergunta 103 ?",
        "pergunta 104 ?",
        "pergunta 105 ?",
        "pergunta 106 ?",
        "pergunta 107 ?",
        "pergunta 108 ?",
        "pergunta 109 ?",
        "pergunta 110 ?",
        "pergunta 111 ?"
    ]
];


export default function App() {
    const [actualPage, setActualPage] = useState('start');
    const [questionCounter, setQuestionCounter] = useState(1);
     
    return (
        <div className="main-container" >
            { actualPage === 'start' ? <StartPage setPage={setActualPage}/> : <InGamePage 
                deck={flashCardDecks[0]}
                questionCounter={questionCounter}
                setQuestionCounter={setQuestionCounter}
            /> }            
        </div>
    );
}
    