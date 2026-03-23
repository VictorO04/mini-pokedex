import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <a href="/">Home</a>
        </nav>
    );
}

export default NavBar;