import './productPage.css';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { twoSeaterSofas } from "../ShopPages/TwoSeater/twoSeaterSofas";
import { threeSeaterSofas } from "../ShopPages/ThreeSeater/threeSeaterSofas";
import { fourSeaterSofas } from "../ShopPages/FourSeater/fourSeaterSofas";
import Button from '../others/Button';
import { useCart } from '../CartPage/CartContext';
import { HeartIcon } from '../others/Icons';

const ProductPage = () => {
    const { productId } = useParams();
    const { addToCart, cartItems } = useCart(); 
    
    const findProduct = () => {
        // Look for product by productId in all sofa collections
        return twoSeaterSofas.find(sofa => sofa.productId === productId) ||
               threeSeaterSofas.find(sofa => sofa.productId === productId) ||
               fourSeaterSofas.find(sofa => sofa.productId === productId);
    };
    
    const product = findProduct();
    
    // State to manage the currently displayed main image and selected color
    const [mainImage, setMainImage] = useState(product?.image || '');
    const [selectedColor, setSelectedColor] = useState('default');
    
    // State to track quantity
    const [quantity, setQuantity] = useState(1);
    // State to show confirmation message
    const [showConfirmation, setShowConfirmation] = useState(false);
    
    // Handle click on subimage
    const handleSubImageClick = (imageSrc) => {
        setMainImage(imageSrc);
    };
    
    // Handle color selection
    const handleColorSelection = (color) => {
        if (product.colors && product.colors[color]) {
            setSelectedColor(color);
            setMainImage(product.colors[color]);
        }
    };
    
    // Handle adding product to cart
    const handleAddToCart = () => {
        // Create a new product object with the selected color
        const productToAdd = {
            ...product,
            image: mainImage, // Use the currently selected image
            selectedColor: selectedColor // Add the selected color to the cart item
        };
        
        addToCart(productToAdd, quantity);
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
                    {product.colors && (
                        <div className="sub-images-container">   
                            {/* Map through other subImages */}
                            {Object.entries(product.colors).map(([key, imageSrc]) => (
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

                    <div className='color-selector'>
                        <p>Color</p>
                        <div className='color-wrap'>
                            {Object.keys(product.colors || {}).map((color) => (
                                <Button 
                                    key={color}
                                    className={`${color}-color ${selectedColor === color ? 'active' : ''}`}
                                    onClick={() => handleColorSelection(color)}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="product-price">${product.price}</p>
                    
                    {/* Quantity selector */}
                    <div className="quantity-selector">
                        <label htmlFor="quantity"></label>
                        <div className="quantity-controls">
                            <Button 
                                text="-"
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                disabled={quantity <= 1}/>
                            <input 
                                type="number" 
                                id="quantity" 
                                min="1" 
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            />
                            <Button 
                                text="+" 
                                onClick={() => setQuantity(prev => prev + 1)}/>
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
                        <div className='add-favorite-button'> 
                            <HeartIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;