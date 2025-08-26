import Button from '../../others/Button';
import { LogoFour, LogoOne, LogoThree, LogoTwo } from '../../others/Logos';
import styles from './findUsHere.module.css';

const FindUsHere = () => {
    return (
        <div className={styles.container}>
            <h2>Find our products here</h2>
            <div className={styles.logoWrap}>
               <LogoOne />
               <LogoTwo />
               <LogoThree />
               <LogoFour />
            </div>
            <div className={styles.findRetailerWrap}>
                 <Button className={styles.findRetailerBtn} text="FIND A RETAILER"/>
            </div>
        </div>
    )
};


export default FindUsHere;