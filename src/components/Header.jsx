import "./Header.css";
import Search from "./Search";
import NavBar from "./NavBar";

function Header() {
    return (
      <header>
        <div className='logo'> 
          <p>Pokédex</p>
        </div>
        <Search />
        <NavBar />
      </header>
    );
}

export default Header;