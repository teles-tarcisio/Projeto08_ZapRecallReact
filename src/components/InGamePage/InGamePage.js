import { React, useState } from "react";

import Header from "./Header.js";
import Flashcard from "./Flashcard.js";

import "./ingamepage.css";

export default function InGamePage() {
  const [gameState, setGameState] = useState('asking');
  
  return(
    <div className="in-game-page">
      <Header />
      {(gameState === 'asking') || (gameState === 'answered') ?
        <Flashcard gameState={gameState} setGameState={setGameState} />
        :
        <>FINISHED SUCCESS/FAILURE</>
      }
    </div>
  );
}