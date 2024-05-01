import "../styles/Contact.css";

export default function Contact() {
    return (
        <div className="contact-container" id="contact">
            <h1>CONTACT ME</h1>

            <div className="contact">
                <a href="https://github.com/lsLannan"><p><i class="fa-brands fa-github"></i> Github </p></a>
                <a href="https://www.linkedin.com/in/liberty-l-02bb8326b/"><p><i class="fa-brands fa-linkedin"></i> LinkedIn </p></a>
                <a href="mailto:0x6omo8m4@mozmail.com?subject=Mail from Portfolio Site"><p><i class="fa-solid fa-envelope"></i> Email </p></a>
            </div>
        </div>
    );
}