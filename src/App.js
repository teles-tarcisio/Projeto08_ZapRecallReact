import LightningLogo from "./shared/LightningLogo.js";

function LaunchButton() {
    return (
        <div className="launch-game">
            <input type="button" value="Praticar React" />
            <img src="assets/images/next.png" alt="fast forward icon" />
        </div>
    );
}


export default function App() {
    return (
        <div className="main-container">
            <LightningLogo />
            <LaunchButton />
        </div>
    );
}