import { FacebookIcon, InstagramIcon, YoutbeIcon } from '../../others/Icons';
import styles from './follow-us.module.css';

const FollowUsBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logos}>
                    <InstagramIcon className='instagran-icon'/>
                    <FacebookIcon className='facebook-icon'/>
                    <YoutbeIcon className='youtube-icon'/>
                </div>
            </div>
        </div>
    )
}

export default FollowUsBanner;