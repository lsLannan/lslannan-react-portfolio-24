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
                <button className='dark-btn'>dark mode</button>
            </ul>
        </nav>
    );
}

export default Header;