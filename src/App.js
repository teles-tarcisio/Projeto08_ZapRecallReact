import { React, useState } from "react";

import Header from "./components/Header.js";
import LightningLogo from "./components/LightningLogo";
import BigButton from "./components/BigButton.js";
import Flashcard from "./components/Flashcard";

export default function App() {
    const [display, setDisplay] = useState("");

    function launchGame() {
        setDisplay("hidden");
    }

    return (
        <div className="main-container" >
            <Header display={display} />

            <LightningLogo display={display}/>
            <BigButton parentFunction={launchGame} />

            {/*
            <Flashcard display={display} />
            */}
        </div>
    );
}