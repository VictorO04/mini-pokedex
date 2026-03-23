import styles from "./Header.module.css";
import Search from "./Search";
import NavBar from "./NavBar";

function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}> 
          <p>Pokédex</p>
        </div>
        <Search />
        <NavBar />
      </header>
    );
}

export default Header;