import imgFFIcon from "../../assets/images/next.png";


export default function BigButton() {

    /*
    TODO: generalize button :
        use props to change button contents and color!!
    */

    return (
        <div className="big-button">
            <h1>Praticar React</h1>
            <img src={imgFFIcon} alt="fast forward icon" />
        </div>
    );
}