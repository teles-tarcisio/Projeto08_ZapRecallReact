import { React, useState } from "react";

import Header from "./Header.js";
import Flashcard from "./Flashcard.js";

import "./ingamepage.css";

export default function InGamePage({deck, questionCounter, setQuestionCounter}) {
  const [gameState, setGameState] = useState('asking');

  let renderGamePage;
  
  if ((gameState === 'asking') || (gameState === 'answered')) {
    renderGamePage = <Flashcard gameState={gameState} setGameState={setGameState} deck={deck} questionCounter={questionCounter} setQuestionCounter={setQuestionCounter}
     />;
  }
  if (gameState === 'success') {
    renderGamePage = <>FINISHED: SUCCESS</>;
  }
  if (gameState === 'failure') {
    renderGamePage = <>FINISHED: FAILURE</>;
  }
  

  
  return(
    <div className="in-game-page">
      <Header />
      
      {renderGamePage}
    </div>
  );
}