export default function BigButton({display, parentFunction}) {

    /*
    TODO: generalize button :
        use props to change button contents and color!!
    */

    return (
        <div className={display ? "big-button" : "big-button hidden"} onClick={parentFunction}>
            <h1>Praticar React</h1>
            <img src="assets/images/next.png" alt="fast forward icon" />
        </div>
    );
}