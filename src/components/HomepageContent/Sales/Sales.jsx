import { useRef } from "react";
import './sales.css'
import Button from "../../others/Button";
import { salesSofas } from "./sales-sofas";

const SalesWrap = () => {

    const salesContainerRef = useRef(null);
    
    const handleScroll = (direction) => {
        if (!salesContainerRef.current) return;

        const cardWidth = window.innerWidth * 0.45;
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        salesContainerRef.current.scrollLeft += scrollAmount;
    };

    return (
        <div className="carousel-container">
            <Button 
                text="<" 
                className="left-btn-scroll" 
                onClick={() => handleScroll('left')}
            />
            
            <div className="scroll-container" ref={salesContainerRef}>
                <div className="sales-card-wrapper">
                    {salesSofas.map((item, index) => (
                        <div className="sales-card" key={index}>
                            {/* Separate div for image */}
                            <div 
                                className="sales-card-image" 
                                style={{backgroundImage: item.backgroundImage}}
                            ></div>
                            
                            {/* Separate div for content */}
                            <div className="sales-card-content">
                                <h3>{item.title}</h3>
                                <div className="sales-card-price-content">
                                 <p>Review stars</p>
                                <h3 className="sales-price">${item.price}</h3>
                            </div>
                            </div>
                    
                        </div>
                    ))}
                </div>
            </div>
            
            <Button 
                text=">" 
                className="right-btn-scroll" 
                onClick={() => handleScroll('right')}
            />
        </div>
    );
};

const Sales = () => {
    return (
        <section>
            <div className="sales-container">
                <h2>Ranking</h2>
                <SalesWrap />
            </div>
        </section>
    )
}

export default Sales;