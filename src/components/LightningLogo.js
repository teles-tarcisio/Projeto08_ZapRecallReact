export default function LightningLogo({display}) {
    return (
        <div className={display ? "big-logo" : "big-logo hidden"}>
            <img src="assets/images/logo.png" alt="lightning logo" />
        </div>
    );
}