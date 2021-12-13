import { React, useState } from "react";

import AnswerButtons from "./AnswerButtons.js";
import imgTurnArrow from "../../assets/images/turn.png";

function CardFrontSide({setSide}) {
  return (
      <div className="card-front-side">
          <h1>1/8</h1>
          <h2>O que é JSX?</h2>          
          <img src={imgTurnArrow} alt="arrow turn" onClick={() => setSide('back')}/>
      </div>
  );
}

function CardBackSide({state, setState, setBorderColor}) {
  const [backState, setBackState] = useState('asking');
  
  return (
      <div className="card-back-side">
          <h1>1/8</h1>
          <h3>O que é JSX?</h3>            

          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</h4>

          { backState === 'asking' ?
            <AnswerButtons state={backState} setState={setBackState} setBorderColor={setBorderColor}/>
            :
            <img src={imgTurnArrow} alt="arrow turn" onClick={() => setBackState('asking')}/>
          }          
      </div>
  );
}

export {CardFrontSide, CardBackSide};