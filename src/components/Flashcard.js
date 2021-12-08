export default function Flashcard() {
    const flashCardInfo = {
        totalQuestions: 8,
        question: "O que é JSX?",
    }

    return (
        <div className="flashcard-frame">
            <h2>1/{flashCardInfo.totalQuestions}</h2>
            <h3>{flashCardInfo.question}</h3>
            <img src="assets/images/turn.png" alt="arrow turn" />
        </div>
    );
}