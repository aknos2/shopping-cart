import { useCallback, useEffect, useState } from 'react';
import './carousel.css';

const Carousel = ({
    images,
    interval = 5000,
    onImageChange = () => {},
    children
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const rotateImage = useCallback(() => {
        setIsTransitioning(true);
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
        onImageChange(newIndex);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 1000);
    }, [images.length, currentImageIndex, onImageChange]);

    useEffect(() => {
        const timer = setInterval(rotateImage, interval);
        return () => clearInterval(timer);
    }, [rotateImage, interval]);

    const goToImage = (index) => {
        if (index !== currentImageIndex && !isTransitioning) {
            setIsTransitioning(true);
            setCurrentImageIndex(index);
            onImageChange(index);

            setTimeout(() => {
                setIsTransitioning(false);
            }, 1000);
        }
    }

    return (
        <div className='carousel-container'
        >
            {children}

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button 
                        key={index}
                        className={`carousel-dot ${currentImageIndex === index ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel;