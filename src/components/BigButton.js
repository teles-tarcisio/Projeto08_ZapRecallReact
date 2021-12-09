export default function BigButton({parentFunction}) {

    /*
    TODO: generalize button :
        use props to change button contents and color!!
    */

    return (
        <div className="big-button" onClick={parentFunction}>
            <h1>Praticar React</h1>
            <img src="assets/images/next.png" alt="fast forward icon" />
        </div>
    );
}