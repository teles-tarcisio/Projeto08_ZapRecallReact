export default function SmallButton(props) {
    return (
        <li className="small-button">
            {console.log(props)}
            <h1>{props.buttonText}</h1>
        </li>
    );
}