export default function Header({display}) {
    
    return(
        <header className={ display ? "hidden" : ""}>
            <img src="assets/images/logo-mini.png" alt="lightning mini logo"/>
        </header>
    );
}