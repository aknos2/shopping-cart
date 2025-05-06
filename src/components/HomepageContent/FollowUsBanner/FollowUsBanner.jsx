import styles from './follow-us.module.css';

const FollowUsBanner = () => {
    return (
        <div className={styles.container}>
            <h3>Subscribe here or</h3>
            <div className={styles.content}>
                <h3>Follow us</h3>
                <div className={styles.logos}>
                    <p>T</p>
                    <p>F</p>
                    <p>Y</p>
                </div>
            </div>
        </div>
    )
}

export default FollowUsBanner;