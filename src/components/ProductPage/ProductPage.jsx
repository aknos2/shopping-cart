import './productPage.css';
import { useParams } from "react-router-dom";
import { twoSeaterSofas } from "../ShopPages/TwoSeater/twoSeaterSofas";
import Button from '../others/Button';
// Import other sofa data as needed

const ProductPage = () => {
    const { productId } = useParams();
    
    // Find the product from the relevant data source
    const findProduct = () => {
        // Look for product by productId in twoSeaterSofas
        return twoSeaterSofas.find(sofa => sofa.productId === productId);
    };
    
    const product = findProduct();
    
    if (!product) {
        return <div>Product not found</div>;
    }
    
    return (
        <div className="product-page">
            <div className="product-details">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    
                    {/* Display sub images if they exist */}
                    {product.subImages && (
                        <div className="sub-images-container">
                            {Object.entries(product.subImages).map(([key, imageSrc]) => (
                                <div className="product-sub-image-wrap" key={key}>
                                    <img src={imageSrc} alt={`${product.title} view ${key}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="product-info">
                    <h2>{product.title}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className='product-id'>Product ID: {product.productId}</p>
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
                    <div className='cart-btn-wrap'>
                        <Button text="Add to Cart" className='buy-button' />
                        <Button text="Add heart" className='add-favorite-button' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;