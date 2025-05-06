import { useRef, useState } from 'react';
import './new-arrivals.css';
import { newSofaAds } from './new-sofas';
import Button from '../../others/Button';

const NewArrivalsPopUp = () => {
    return (
        <div className="new-arrivals-popup">
            <p>New Arrivals</p>
        </div>
    )
}

const NewArrivalsWrap = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const containerRef = useRef(null);
    const totalCards = newSofaAds.length;
    const cardRef = useRef(null);
  
    const handleScroll = (direction) => {
      if (!containerRef.current) return;
  
      const cardWidth = cardRef.current?.getBoundingClientRect().width ?? 0;
      const gap = 80;
      const scrollAmount = cardWidth + gap;
  
      setImageIndex(prev => {
        let newIndex = direction === 'left' ? prev - 1 : prev + 1;
        newIndex = Math.max(0, Math.min(newIndex, totalCards - 1));
  
        containerRef.current.scrollLeft = newIndex * scrollAmount;
        return newIndex;
      });
    };
  
    return (
      <div className="carousel-container">
        {imageIndex > 0 && (
          <Button 
            text="<" 
            className="left-btn-scroll" 
            onClick={() => handleScroll('left')} 
          />
        )}
  
        <div className="scroll-container" ref={containerRef}>
          <div className="new-card-wrapper">
            {newSofaAds.map((item, index) => (
              <div
                className="new-card"
                key={index}
                ref={index === 0 ? cardRef : null} // only assign to first card
                style={{ backgroundImage: item.backgroundImage }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {imageIndex < totalCards - 1 && (
          <Button 
            text=">" 
            className="right-btn-scroll" 
            onClick={() => handleScroll('right')} 
          />
        )}
      </div>
    );
  };
  

const NewArrivals = () => {
    return (
        <section>
            <div className="new-arrivals-container">
                <NewArrivalsPopUp />
                <h2>New Arrivals</h2>
                <NewArrivalsWrap />
            </div>
        </section>
    );
};

export default NewArrivals;