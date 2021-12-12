import Header from "./Header.js";
import Flashcard from "./Flashcard.js";

import "./ingamepage.css";

export default function InGamePage() {
  return(
    <div className="in-game-page">
      <Header />
      <Flashcard />
    </div>
  );
}