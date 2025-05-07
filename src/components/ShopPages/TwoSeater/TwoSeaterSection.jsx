import Header from "../../HomepageContent/Header/header"
import styles from './twoSeaterSection.module.css'
import { twoSeaterSofas } from "./twoSeaterSofas"
import { Link } from "react-router-dom"

const TwoSeaterSection = () => {
    return (
        <>
        <div className={styles.container}>
            <h1>2-Seater-Sofas</h1>
            <div className={styles.headerImage}></div>
            <div className={styles.itemsContainer}>
                {twoSeaterSofas.map((sofa, index) => (
                    <Link 
                        to={`/twoseatersofas/${sofa.productId}`} 
                        className={styles.cardLink}
                        key={index}
                    >
                        <div className={styles.card}>
                            <img src={sofa.image} alt={`Two seater sofa ${index + 1}`}/>
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

export default TwoSeaterSection;