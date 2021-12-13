import { React, useState } from "react";

const answerButtons = [
    {
        text: "Aprendi agora",
        borderColor: "#000000",
    },
    {
        text: "Não lembrei",
        borderColor: "#F74848"
    },
    {
        text: "Lembrei com esforço",
        borderColor: "#62DB38"
    },
    {
        text: "Zap!",
        borderColor: "#FFEF61"
    }
];

function SmallButton(props) {
    console.log(props.children);
    const text = props.children[0];
    const borderColor = props.children[1];
    const setGameState = props.children[2];
    const setBorderColor = props.children[3];

    function answerType(type) {
        if (borderColor === "#000000") {
            setBorderColor("black");
            setGameState('answered');
        }
        if (borderColor === "#F74848") {
            setBorderColor("red");
            setGameState('answered');
        }
        if (borderColor === "#62DB38") {
            setBorderColor("green");
            setGameState('answered');
        }
        if (borderColor === "#FFEF61") {
            setBorderColor("yellow");
            setGameState('answered');
        }
    }

   return (
        <li className="small-button" onClick={() => answerType(borderColor)}>
            <h5>{text}</h5>
        </li>
    );
}

export default function AnswerButtons({setGameState, setBorderColor}) {
    return (
        <ul className="answer-buttons">
            {answerButtons.map((answer) => (
                <SmallButton>
                    {answer.text}
                    {answer.borderColor}
                    {setGameState}
                    {setBorderColor}
                </SmallButton>)
            )}
        </ul>


    );
}