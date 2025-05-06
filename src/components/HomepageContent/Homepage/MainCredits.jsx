import './homepage.css'

const MainCredits = ({ currentImageIndex = 0 }) => {
    const photoCredits = [
        { 
            authorName: 'carolzise', 
            authorLink: 'https://pixabay.com/users/carolzise-7249478/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3678961', 
            pixabayLink: 'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3678961' 
        },
        { 
            authorName: 'AI_Solution', 
            authorLink: 'https://pixabay.com/users/ai_solution-731298/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2657172', 
            pixabayLink: 'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2657172"' 
        },
        { 
            authorName: 'pixabay', 
            authorLink: 'https://pixabay.com/', 
            pixabayLink: 'https://pixabay.com/photos/sofa-furniture-house-2155865/' 
        },
    ];

    return (
        <div className="main-container">
            <span className="photo-credit">
                <p>
                    Image by <a href={photoCredits[currentImageIndex].authorLink} target="_blank" rel="noopener noreferrer">{photoCredits[currentImageIndex].authorName}</a> from <a href={photoCredits[currentImageIndex].pixabayLink} target="_blank" rel="noopener noreferrer">Pixabay</a>
                </p>
            </span>
        </div>
    )
}

export default MainCredits;