import LightningLogo from "./components/LightningLogo";
import BigButton from "./components/BigButton.js";
import Flashcard from "./components/Flashcard";


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
                    <BigButton />
                </>
                */}
                
                <Flashcard />
            </div>
        </>
    );
}