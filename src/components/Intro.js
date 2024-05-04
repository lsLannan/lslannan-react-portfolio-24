import '../styles/Intro.css';

export default function Intro() {
    return (
        <div className="intro-container" id="about-me">
            <div className="info">
                    <h1>Liberty Lannan</h1>
                    <h2>Front End Development</h2>
                <p>
                <i class="fa-solid fa-hand-sparkles"></i> I'm Liberty, a final year Computer Science undergraduate with a passion for turning
                    ideas into interactive, user-centric experiences. Eager to begin on a career in
                    Front-End Development, I bring a blend of technical proficiency, passion for 
                    accessibility and a keen eye for design.
                </p>

                <span className="links">
                    <a href='../images/Liberty-S-Lannan-CV-24.docx' download><button className='cta-btn'>check out my cv</button></a>
                    <a href='https://github.com/lsLannan' target='_blank' rel="noreferrer"><p>or my github</p></a>
                </span>
            </div>
            <div className="profile">
                <span className='circle'>
                    <img className="profile-pic" src={require('../images/picrew-icon-lully-plain.png')} alt="blue haired avatar"/>
                </span>
            </div>
            
        </div>
    );
}