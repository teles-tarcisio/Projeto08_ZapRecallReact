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

function SmallButton({text, borderColor}) {
    return (
        <li className="small-button">
            <h5>{text}</h5>
        </li>
    );
}

export default function AnswerButtons() {
    return (
        <ul className="answer-buttons">
            {answerButtons.map((answer) => (
                <SmallButton text={answer.text} borderColor={answer.borderColor} />)
            )}
        </ul>


    );
}