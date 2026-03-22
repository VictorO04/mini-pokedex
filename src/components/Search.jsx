import "./Search.css";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
    return (
        <form className='pesquisa' action="">
            <IoSearchOutline size={25} color='white'/>
            <input type="text" placeholder='Digitar o nome do pokémon...'/>
        </form>
    );
}

export default Search;