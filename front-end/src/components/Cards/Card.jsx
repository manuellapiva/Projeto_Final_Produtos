import styles from './Card.module.css'

function Card ({ img, nome }) {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={img} alt={nome} />
            <h3 className={styles.nome}>{nome}</h3>
        </div>
    )
}

export default Card