export default function LightningLogo({display}) {
    return (
        <div className={`big-logo ${display}`}>
            <img src="assets/images/logo.png" alt="lightning logo" />
        </div>
    );
}