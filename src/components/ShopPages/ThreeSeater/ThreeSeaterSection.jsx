import styles from './threeSeaterSection.module.css'
import { threeSeaterSofas } from "./threeSeaterSofas";
import { Link } from 'react-router-dom';

const ThreeSeaterSection = () => {
    return (
        <>
        <div className={styles.container}>
            <h1>3-Seater-Sofas</h1>
            <div className={styles.headerImage}></div>
            <div className={styles.itemsContainer}>
                {threeSeaterSofas.map((sofa, index) => (
                    <Link 
                        to={`/threeseatersofas/${sofa.productId}`} 
                        className={styles.cardLink}
                        key={index}
                    >
                    <div className={styles.card} key={index}>
                        <img src={sofa.image} alt={`Three seater sofa ${index + 1}`}/>
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

export default ThreeSeaterSection;