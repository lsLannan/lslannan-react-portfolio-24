import '../styles/Header.css';

function Header() {
    return (
        <nav>
            <ul>
                <li className="lslannan">Lslannan</li>
                <li><a href="#about-me">about me</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>
                <button className='dark-btn' title='dark mode' disabled><img src={require("../images/icons8-light-48.png")} alt='light bulb' aria-label='dark mode toggle'/></button>
            </ul>
        </nav>
    );
}

export default Header;