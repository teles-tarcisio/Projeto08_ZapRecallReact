import LightningLogo from "./LightningLogo.js";
import BigButton from "./BigButton.js";

import "./startpage.css";

export default function StartPage() {
  return(
    <div className="start-page">
      <LightningLogo  />
      <BigButton />
    </div>
  );
}