import { FacebookIcon, InstagramIcon, SearchIcon, YoutbeIcon } from '../../others/Icons';
import styles from './bottomBanner.module.css';

const FollowUsBanner = () => {
    return (
            <div className={styles.content}>
                <div className={styles.logos}>
                    <InstagramIcon className={styles.InstagramIcon}/>
                    <FacebookIcon className={styles.facebookIcon}/>
                    <YoutbeIcon className={styles.youtubeIcon}/>
                </div>
            </div>
    )
}

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <SearchIcon />
            <label htmlFor="search"></label>
            <input type="search" placeholder='Search item...'/>
        </div>
    )
}

const BottomBanner = () => {
    return (
        <div className={styles.bottomBanner}>
            <SearchBar />
            <FollowUsBanner />
        </div>
    )
}

export default BottomBanner;