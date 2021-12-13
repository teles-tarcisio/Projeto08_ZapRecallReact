import { React, useState } from "react";

import AnswerButtons from "./AnswerButtons.js";
import imgTurnArrow from "../../assets/images/turn.png";

function CardFrontSide(props) {
  const {gameState, setGameState, cardSide,
    setCardSide, setBorderColor, deck,
    questionCounter, setQuestionCounter} = props;

  return (
      <div className="card-front-side">
          <h1>{questionCounter}/{deck.length}</h1>
          <h2>{deck[questionCounter - 1]}</h2>          
          <img src={imgTurnArrow} alt="arrow turn" onClick={() => props.setCardSide('back')}/>
      </div>
  );
}


function CardBackSide(props) {
  const {gameState, setGameState, setCardSide, borderColor, setBorderColor, deck, questionCounter, setQuestionCounter, setZeroErrors} = props;

  function nextQuestion() {
    setGameState('answered');
    setQuestionCounter(questionCounter + 1);
    if (borderColor === 'red') {
      setZeroErrors(false);
    }
    setCardSide('front');
    setGameState('asking');
  }

  return (
      <div className="card-back-side">
          <h1>{questionCounter}/{deck.length}</h1>
          <h3>{deck[questionCounter - 1]}</h3>            

          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</h4>

          {gameState === 'asking' ?
            <AnswerButtons
              setGameState={setGameState}
              setBorderColor={setBorderColor}
            />
            :
            <img src={imgTurnArrow} alt="arrow turn" onClick={nextQuestion}/>
          }
      </div>
  );
}

export {CardFrontSide, CardBackSide};