import "../styles/SkillBanner.css";

function SkillBanner() {
    return (
        <div className="skills" id="skills">
            <div className="skills-slide">
                    <p className="skill"><i className="fa-brands fa-html5"></i> HTML </p>
                    <p className="skill"><i className="fa-brands fa-css3-alt"></i> CSS </p>
                    <p className="skill"><i className="fa-brands fa-js"></i> JAVASCRIPT </p>
                    <p className="skill"><i className="fa-brands fa-php"></i> PHP </p>
                    <p className="skill"><i className="fa-brands fa-github"></i> GITHUB </p>
            </div>
            <div className="skills-slide">
                    <p className="skill"><i className="fa-brands fa-html5"></i> HTML </p>
                    <p className="skill"><i className="fa-brands fa-css3-alt"></i> CSS </p>
                    <p className="skill"><i className="fa-brands fa-js"></i> JAVASCRIPT </p>
                    <p className="skill"><i className="fa-brands fa-php"></i> PHP </p>
                    <p className="skill"><i className="fa-brands fa-github"></i> GITHUB </p>
            </div>
        </div>
    );
}

export default SkillBanner;