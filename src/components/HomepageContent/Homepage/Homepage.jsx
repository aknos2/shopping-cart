import { useState, useEffect, useCallback, useRef } from 'react';
import './homepage.css';
import Header from "../Header/Header";
import NewArrivals from '../NewArrivals/NewArrivals';
import Sales from '../Sales/Sales';
import FollowUsBanner from '../FollowUsBanner/FollowUsBanner';
import MainCredits from './MainCredits';
import FindUsHere from '../FindUsHere/FindUsHere';
import Footer from '../Footer/Footer';

const Homepage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const newArrivalsRef = useRef(null);


    const backgroundImages = [
        'url(./src/assets/sofas/main-sofa2-high.webp',
        'url(./src/assets/sofas/main-sofa3-high.jpg)',
        'url(./src/assets/sofas/main-sofa1-high.jpg)',
    ];

    const rotateImage = useCallback(() => {
        setIsTransitioning(true);
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        
        // Reset transition flag after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1000); // Match this with your CSS transition time
    }, [backgroundImages.length]);

    // Set up automatic rotation
    useEffect(() => {
        const interval = setInterval(rotateImage, 8000);
        return () =>  clearInterval(interval);

    }, [rotateImage]);

    // Handle manual navigation
    const goToImage = (index) => {
        if (index !== currentImageIndex && !isTransitioning) {
            setIsTransitioning(true);
            setCurrentImageIndex(index);
            
            setTimeout(() => {
                setIsTransitioning(false);
            }, 1000);
        }
    };

    return (
        <>
        <Header />
            <div 
                className='homepage-container'
                style={{ 
                    backgroundImage: backgroundImages[currentImageIndex]
                }}
            >
                <div className="carousel-indicators">
                    {backgroundImages.map((_, index) => (
                        <button 
                            key={index}
                            className={`carousel-dot ${currentImageIndex === index ? 'active' : ''}`}
                            onClick={() => goToImage(index)}
                        />
                    ))}
                </div>
                <MainCredits currentImageIndex={currentImageIndex} />
                <FollowUsBanner />
            </div>
            <NewArrivals ref={newArrivalsRef}/>
            <Sales />
            <FindUsHere />
            <Footer />
        </>
    )
}

export default Homepage;