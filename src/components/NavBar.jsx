import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <a href="/">Lista</a>
            <a href="/">Tipos</a>
        </nav>
    );
}

export default NavBar;