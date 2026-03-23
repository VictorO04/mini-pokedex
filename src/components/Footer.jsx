import styles from "./Footer.module.css";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footerLinks}>
                <a href="https://github.com/VictorO04" target="_blank"><BiLogoGithub size={20} color="white" /></a>
                <a href="https://www.linkedin.com/in/victor-oliveira-3088a2349/" target="_blank"><FaLinkedinIn size={20} color="white" /></a>
            </nav>
            <div className={styles.footerText}>
                <p>Copyright ©2026; desenvolvido por Victor</p>
            </div>
        </footer>
    );
}

export default Footer;