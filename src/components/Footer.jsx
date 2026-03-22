import "./Footer.css";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    return (
        <footer>
            <nav className="links">
                <a href="https://github.com/VictorO04" target="_blank"><BiLogoGithub size={30} color="white" /></a>
                <a href="https://github.com/VictorO04" target="_blank"><FaLinkedinIn size={30} color="white" /></a>
            </nav>
            <div className="texto">
                <p>Copyright ©2026; desenvolvido por Victor</p>
            </div>
        </footer>
    );
}

export default Footer;