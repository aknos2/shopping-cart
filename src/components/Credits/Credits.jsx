import styles from './credits.module.css';

const Credits = () => {
    return (
        <div className={styles.container}>
            <h2>Credits</h2>
            <div className={styles.content}>
                <ul>
                    <li>Image by <a href="https://pixabay.com/users/paxtondwight-33283857/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7759969">Paxton Dwight</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7759969">Pixabay</a></li>
                    <li>Image by <a href="https://pixabay.com/users/copyrightfreepictures-203/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=183453">CopyrightFreePictures</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=183453">Pixabay</a></li>
                    <li>Image by <a href="https://pixabay.com/users/dunbur-16945180/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7126713">john dunbur</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7126713">Pixabay</a></li>
                    <li><a target="_blank" href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Credits;