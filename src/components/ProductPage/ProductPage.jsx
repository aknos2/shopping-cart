import './productPage.css';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { twoSeaterSofas } from "../ShopPages/TwoSeater/twoSeaterSofas";
import Button from '../others/Button';
import { useCart } from '../CartPage/CartContext';

const ProductPage = () => {
    const { productId } = useParams();
    const { addToCart, cartItems } = useCart(); // Use the cart context
    
    // Find the product from the relevant data source
    const findProduct = () => {
        // Look for product by productId in twoSeaterSofas
        return twoSeaterSofas.find(sofa => sofa.productId === productId);
    };
    
    const product = findProduct();
    
    // State to manage the currently displayed main image
    const [mainImage, setMainImage] = useState(product?.image || '');
    // State to track quantity
    const [quantity, setQuantity] = useState(1);
    // State to show confirmation message
    const [showConfirmation, setShowConfirmation] = useState(false);
    
    // Handle click on subimage
    const handleSubImageClick = (imageSrc) => {
        setMainImage(imageSrc);
    };
    
    // Handle adding product to cart
    const handleAddToCart = () => {
        addToCart(product, quantity);
        setShowConfirmation(true);
        
        // Hide confirmation after 3 seconds
        setTimeout(() => {
            setShowConfirmation(false);
        }, 3000);
    };
    
    // Check if product is already in cart
    const isInCart = cartItems.some(item => item.productId === productId);
    
    if (!product) {
        return <div>Product not found</div>;
    }
    
    return (
        <div className="product-page">
            <div className="product-details">
                <div className="product-image">
                    {/* Main image - uses the state value */}
                    <img 
                        src={mainImage} 
                        alt={product.title} 
                        className="main-product-image"
                    />
                    {/* Display sub images if they exist */}
                    {product.subImages && (
                        <div className="sub-images-container">
                            {/* Add the main product image as first thumbnail */}
                            <div 
                                className={`product-sub-image-wrap ${mainImage === product.image ? 'active' : ''}`}
                                onClick={() => handleSubImageClick(product.image)}
                            >
                                <img src={product.image} alt={`${product.title} main view`} />
                            </div>
                            
                            {/* Map through other subImages */}
                            {Object.entries(product.subImages).map(([key, imageSrc]) => (
                                <div 
                                    className={`product-sub-image-wrap ${mainImage === imageSrc ? 'active' : ''}`}
                                    key={key}
                                    onClick={() => handleSubImageClick(imageSrc)}
                                >
                                    <img src={imageSrc} alt={`${product.title} view ${key}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="product-info">
                    <h2>{product.title}</h2>
                    <p className="product-description">{product.description}</p>
                    <p>Product Code: {product.productId}</p>
                    <div className='dimensions'>
                        <div className='size'>
                           <p>Size</p>
                           <p>+</p>
                        </div>
                        <div className='materials'>
                           <p>Materials</p>
                           <p>+</p>
                        </div>
                    </div>
                    <p className="product-price">${product.price}</p>
                    
                    {/* Quantity selector */}
                    <div className="quantity-selector">
                        <label htmlFor="quantity">Quantity:</label>
                        <div className="quantity-controls">
                            <button 
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <input 
                                type="number" 
                                id="quantity" 
                                min="1" 
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            />
                            <button onClick={() => setQuantity(prev => prev + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    
                    {/* Add to cart confirmation */}
                    {showConfirmation && (
                        <div className="add-to-cart-confirmation">
                            Product added to cart!
                        </div>
                    )}
                    
                    <div className='cart-btn-wrap'>
                        <Button 
                            text={isInCart ? "Add More to Cart" : "Add to Cart"} 
                            className='buy-button'
                            onClick={handleAddToCart}
                        />
                        <Button text="heart" className='add-favorite-button' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;