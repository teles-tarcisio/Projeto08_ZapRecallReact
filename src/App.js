import { React, useState } from "react";

import Header from "./components/Header.js";
import LightningLogo from "./components/LightningLogo";
import BigButton from "./components/BigButton.js";
import Flashcard from "./components/Flashcard";

export default function App() {
    const [hidden, setHidden] = useState(true);

    function hideItems() {
        const newHidden = !hidden;
        setHidden(newHidden);
    }
 
    return (
        <div className="main-container" >
            <Header display={hidden} />

            <LightningLogo display={hidden} />
            <BigButton display={hidden} parentFunction={hideItems} />

            <Flashcard display={hidden} />
        </div>
    );
}
