import Button from '../others/Button';
import { useCart } from './CartContext';
import styles from './cartPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TrashIcon } from '../others/Icons';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, shippingFee } = useCart();
    const navigate = useNavigate();
    const [lastVisitedPage, setLastVisitedPage] = useState("/");
    
    // Get the last visited page from session storage when component mounts
    useEffect(() => {
        const lastPage = sessionStorage.getItem('lastVisitedPage');
        if (lastPage) {
            setLastVisitedPage(lastPage);
        }
    }, []);

    const handleContinueShopping = () => {
        navigate(lastVisitedPage);
    };

    // Calculate total quantity of all items
    const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className={styles.container}>
            <h2>Shopping Cart</h2>

            {cartItems.length > 1 && (
<               div className={styles.quantity}>
                    <h3>Quantity: {totalItemCount}</h3>
                </div>
            )}
            
            {cartItems.length === 0 ? (
                // Empty cart view with same layout structure
                <div className={styles.contentWrap}>
                    <div className={styles.emptyCartMessage}>
                        <p>Your cart is empty</p>
                    </div>
                    
                    <div className={styles.priceContainer}>
                        <div className={styles.priceWrap}>
                            <h2>Summary</h2>
                            <div className={styles.itemPrice}>
                                <p>0 items</p>
                                <p>$0.00</p>
                            </div>
                            <div className={styles.itemPrice}>
                                <p>Shipping cost</p>
                                <p>$0.00</p>
                            </div>
                            <div className={styles.itemPrice}>
                                <h3>Total</h3>
                                <h3>$0.00</h3>
                            </div>
                        </div>
                        <Button className={`${styles.proceedBtn} ${styles.disabledBtn}`} text="Proceed" disabled />
                        <Button 
                            className={styles.continueShoppingBtn} 
                            text="Continue shopping" 
                            onClick={handleContinueShopping}
                        />
                    </div>
                </div>
            ) : (
                // Cart with items - fixed middle layout
                <div className={styles.cartWithItemsLayout}>
                    <div className={styles.itemsColumn}>
                        <div className={styles.itemsScroll}>
                            {cartItems.map((item) => (
                                <div key={item.productId}>
                                    <div className={styles.cardItem}>
                                        <div className={styles.cardImage}>
                                            <img src={item.image} alt={item.title} />
                                        </div>

                                        <div className={styles.cardItemMiddleContent}>
                                            <div className={styles.cardDetails}>
                                                <h3>{item.title}</h3>
                                                {item.selectedColor && (
                                                    <p className={styles.cardColor}>
                                                        Color: {item.selectedColor.charAt(0).toUpperCase() + item.selectedColor.slice(1)}
                                                    </p>
                                                )}
                                                <p className={styles.cardSize}>{item.size}</p>
                                                <p className={styles.cardPrice}>${item.price.toFixed(2)} / Item</p>
                                                <p className={styles.cardCode}>Code: {item.productId}</p>
                                            </div>
                                            <div className={styles.cardQuantity}>
                                                <Button text="-" onClick={() => updateQuantity(item.productId, item.quantity - 1)} />
                                                <span className={styles.itemQuantity}>{item.quantity}</span>
                                                <Button text="+" onClick={() => updateQuantity(item.productId, item.quantity + 1)} />
                                            </div>
                                        </div>
                                    
                                        <div className={styles.cardItemRightContent}>
                                            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                                             <TrashIcon className={styles.removeBtn}  onClick={() => removeFromCart(item.productId)}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Price container on the side */}
                    <div className={styles.priceContainer}>
                        <div className={styles.priceWrap}>
                            <h2>Summary</h2>
                            <div className={styles.itemPrice}>
                                <p>{totalItemCount} item{totalItemCount !== 1 ? 's' : ''}</p>
                                <p>${(cartTotal - shippingFee).toFixed(2)}</p>
                            </div>
                            <div className={styles.itemPrice}>
                                <p>Shipping cost</p>
                                <p>${shippingFee.toFixed(2)}</p>
                            </div>
                            <div className={styles.itemPrice}>
                                <h3>Total</h3>
                                <h3>${cartTotal.toFixed(2)}</h3>
                            </div>
                        </div>
                        <Button className={styles.proceedBtn} text="Proceed" />
                        <Button 
                            className={styles.continueShoppingBtn} 
                            text="Continue shopping" 
                            onClick={handleContinueShopping}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;