import { React, useState } from "react";

const answerButtons = [
    {
        text: "Aprendi agora",
        borderColor: "#000000"
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
    
    return (
        <li className="small-button" onClick={() => setState('answered')}>
            <h5>{text}</h5>
        </li>
    );
}

export default function AnswerButtons({state, setState}) {
    return (
        <ul className="answer-buttons">
            {answerButtons.map((answer) => (
                <SmallButton>
                    {answer.text}
                    {answer.borderColor}
                    {state} {setState}
                </SmallButton>)
            )}
        </ul>


    );
}