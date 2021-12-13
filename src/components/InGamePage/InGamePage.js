import { React, useState } from "react";

import Header from "./Header.js";
import Flashcard from "./Flashcard.js";

import "./ingamepage.css";

export default function InGamePage({deck}) {
  const totalQuestions = deck.length;

  const [counter, setCounter] = useState(0);

  return(
    <div className="in-game-page">
      <Header />
      <Flashcard counter={counter} deck={deck}/>
    </div>
  );
}