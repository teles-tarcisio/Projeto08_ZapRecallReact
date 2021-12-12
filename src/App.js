import { React, useState } from "react";


import StartPage from "./components/StartPage/StartPage.js";
import InGamePage from "./components/InGamePage/InGamePage.js";
export default function App() {
     
    return (
        <div className="main-container" >
            
            {/* <StartPage /> */}
            <InGamePage />
            
        </div>
    );
}
    