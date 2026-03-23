import styles from "./CardPokemon.module.css";

function CardPokemon(props) {
    return (
        <div className={styles.cardContainer}>
            <img src={props.pokemon.foto} alt={props.pokemon.nome} />
            <h2>{props.pokemon.nome}</h2>
            <p>{props.pokemon.tipo}</p>
            <p>{props.pokemon.poder}</p>
        </div>
    )
}

export default CardPokemon;