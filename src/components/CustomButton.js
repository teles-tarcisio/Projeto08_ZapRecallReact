export default function CustomButton() {
    const buttonContent = {
        text: "button_text",
        image: "assets/images/next.png"
    };

    //!! use props to change button contents and color!!

    return (
        <div className="custom-button">
            <h1>{buttonContent.text}</h1>
            <img src={buttonContent.image} alt="fast forward icon" />
        </div>
    );
}