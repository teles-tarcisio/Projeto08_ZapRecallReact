import imgFFIcon from "../../assets/images/next.png";


export default function BigButton({setPage}) {

    function clicked() {
        alert("clicked!");
        console.log(setPage);
        setPage('ingame');
    }


    return (
        <div className="big-button" onClick={clicked}>
            <h1>Praticar React</h1>
            <img src={imgFFIcon} alt="fast forward icon" />
        </div>
    );
}