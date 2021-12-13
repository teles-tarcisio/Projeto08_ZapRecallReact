import imgFFIcon from "../../assets/images/next.png";


export default function BigButton({setPage}) {

    return (
        <div className="big-button" onClick={() => setPage('ingame')}>
            <h1>Praticar React</h1>
            <img src={imgFFIcon} alt="fast forward icon" />
        </div>
    );
}