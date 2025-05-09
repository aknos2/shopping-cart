import styles from './fourSeaterSection.module.css'
import { fourSeaterSofas } from "./fourSeaterSofas";
import { Link } from 'react-router-dom';

const FourSeaterSection = () => {
    return (
        <>
        <div className={styles.container}>
            <h1>4-Seater-Sofas</h1>
            <div className={styles.headerImage}></div>
            <div className={styles.itemsContainer}>
                {fourSeaterSofas.map((sofa, index) => (
                    <Link 
                        to={`/fourseatersofas/${sofa.productId}`} 
                        className={styles.cardLink}
                        key={index}
                    >
                    <div className={styles.card} key={index}>
                        <img src={sofa.image} alt={`Four seater sofa ${index + 1}`}/>
                        <div className={styles.itemsContainerContent}>
                            <div className={styles.cardDescription}>
                                <h3>{sofa.title}</h3>
                                <p>{sofa.description}</p>
                            </div>
                            <div className={styles.cardPrice}>
                                <p>${sofa.price}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default FourSeaterSection;