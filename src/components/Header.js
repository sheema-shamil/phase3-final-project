import trollFace from "../images/troll-face.png";
function Header() {
    return (
        <header className="header">
            <img src={trollFace} className="header-image" alt="troll face" />
            <h2 className="header-title">Meme Generator</h2>
            <button id="login"><a href="login-page-sable-nu.vercel.app">
Login
    </a></button>
        </header>
    );
}

export default Header;
