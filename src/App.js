import { React, useState } from "react";


import StartPage from "./components/StartPage/StartPage.js";
import InGamePage from "./components/InGamePage/InGamePage.js";

export default function App() {
    const [actualPage, setActualPage] = useState('start');
     
    return (
        <div className="main-container" >
            { actualPage === 'start' ? <StartPage setPage={setActualPage}/> : <InGamePage /> }            
        </div>
    );
}
    