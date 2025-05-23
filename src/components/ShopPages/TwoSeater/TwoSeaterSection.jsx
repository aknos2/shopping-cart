import Header from "../../HomepageContent/Header/header"
import styles from './twoSeaterSection.module.css'
import { twoSeaterSofas } from "./twoSeaterSofas";

const TwoSeaterSection = () => {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <h1>2-Seater-Sofas</h1>
            <div className={styles.headerImage}></div>
            <div className={styles.itemsContainer}>
                {twoSeaterSofas.map((sofa, index) => (
                    <div className={styles.card} key={index}>
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
                ))}
            </div>
        </div>
        </>
    )
}

export default TwoSeaterSection;