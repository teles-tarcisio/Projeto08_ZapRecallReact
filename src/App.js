import LightningLogo from "./shared/LightningLogo.js";
import Flashcard from "./Flashcard.js";
function LaunchButton() {
    return (
        <div className="launch-game">
            <input type="button" value="Praticar React" />
            <img src="assets/images/next.png" alt="fast forward icon" />
        </div>
    );
}

function Header() {
    return(
        <header>
            <img src="assets/images/logo-mini.png" alt="lightning mini logo"/>
        </header>
    );
}

export default function App() {
    return (
        <>
          <Header />  
            <div className="main-container">
                {/*
                <>
                    <LightningLogo />
                    <LaunchButton />
                </>
                */}
                <Flashcard />
            </div>
        </>
    );
}