import { FacebookIcon, InstagramIcon, YoutbeIcon } from '../../others/Icons';
import styles from './follow-us.module.css';

const FollowUsBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logos}>
                    <InstagramIcon className={styles.InstagramIcon}/>
                    <FacebookIcon className={styles.facebookIcon}/>
                    <YoutbeIcon className={styles.youtubeIcon}/>
                </div>
            </div>
        </div>
    )
}

export default FollowUsBanner;