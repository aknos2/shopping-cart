import { FacebookIcon, InstagramIcon, YoutbeIcon } from '../../others/Icons';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <h3 className='no-select'>LOGO</h3>
                    <div className={styles.iconsWrap}>
                        <InstagramIcon />
                        <FacebookIcon className={styles.facebookIcon}/>
                        <YoutbeIcon className={styles.youtubeIcon}/>
                    </div>
                </div>

                <div className={styles.containerRight}>
                    <div className={styles.content}>
                        <ul>
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                            <li>News</li>
                            <li>Meet the Team</li>
                            <li className={styles.credits}>Credits</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyrightWrap}>
                    <small>Copyright ©︎LOGO by Aknos2</small>
            </div>
        </footer>
    )
}

export default Footer;