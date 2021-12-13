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
    const text = props.children[0];
    const borderColor = props.children[1];
    const state = props.children[2];
    const setState = props.children[4];
    const setBorderColor = props.children[5];

    function answerType(type) {
        if (borderColor === "#000000") {
            setBorderColor("black");
        }
        if (borderColor === "#F74848") {
            setBorderColor("red");
        }
        if (borderColor === "#62DB38") {
            setBorderColor("green");
        }
        if (borderColor === "#FFEF61") {
            setBorderColor("yellow");
        }
    }

   return (
        <li className="small-button" onClick={() => answerType(borderColor)}>
            <h5>{text}</h5>
        </li>
    );
}

export default function AnswerButtons({state, setState, setBorderColor}) {
    return (
        <ul className="answer-buttons">
            {answerButtons.map((answer) => (
                <SmallButton>
                    {answer.text}
                    {answer.borderColor}
                    {state} {setState}
                    {setBorderColor}
                </SmallButton>)
            )}
        </ul>


    );
}