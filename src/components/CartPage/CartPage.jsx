import Button from '../others/Button';
import { useCart } from './CartContext';
import styles from './cartPage.module.css';
import { Link, useNavigate } from 'react-router-dom';


const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, shippingFee} = useCart();
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate("/");
    }

    return (
        <div className={styles.container}>
            <h2>Shopping Cart</h2>
                {cartItems.map((item) => (
                    <>
                     <div className={styles.quantity}>
                             <h3>Quantity: {item.quantity}</h3>
                     </div>
                     <div className={styles.contentWrap}>                   
                       
                        <div key={item.productId} className={styles.cardItem}>
                            <div className={styles.cardImage}>
                              <img src={item.image} alt={item.title} />
                            </div>

                            <div className={styles.cardItemMiddleContent}>
                                <div className={styles.cardDetails}>
                                    <h3>{item.title}</h3>
                                    <p className={styles.cardSize}>{item.size}</p>
                                    <p className={styles.cardPrice}>${(item.price * item.quantity).toFixed(2)} / Item</p>
                                    <p className={styles.cardCode}>Code: {item.productId}</p>
                                </div>
                                <div className={styles.cardQuantity}>
                                    <Button text="-" onClick={() => updateQuantity(item.productId, item.quantity - 1)} />
                                    <span className={styles.itemQuantity}>{item.quantity}</span>
                                    <Button text="+" onClick={() => updateQuantity(item.productId, item.quantity + 1)} />
                                </div>
                            </div>
                           
                            <div className={styles.cardItemRightContent}>
                                <p>Subtotal: ${item.price}</p>
                                 <Button className={styles.removeBtn} text="delete" onClick={() => removeFromCart(item.productId)} />
                            </div>
                        </div>
    
                        <div className={styles.priceContainer}>
                            <div className={styles.priceWrap}>
                                <h2>Summary</h2>
                                <div className={styles.itemPrice}>
                                    <p>{item.quantity} item</p>
                                    <p>${item.price.toFixed(2)}</p>
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
                            <Button className={styles.continueShoppingBtn} 
                                    text="Continue shopping" 
                                    onClick={handleContinueShopping}
                            />
                        </div>

                    {/*cart products here*/}
                    {cartItems.length === 0 && (
                        <div className={styles.productsContent}>
                            <p>Your cart is empty</p>
                        </div>
                    )}
            </div>
            </>
                    ))}

        </div>
    )
}

export default CartPage;