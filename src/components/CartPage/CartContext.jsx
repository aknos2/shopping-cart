import { createContext, useContext, useState, useCallback, useMemo } from 'react';

// Create cart context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  // Add item to cart
  const addToCart = useCallback((product, quantity = 1) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(item => item.productId === product.productId);
      
      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        return [...prevItems, { ...product, quantity }];
      }
    });
  }, []);
  
  // Remove item from cart
  const removeFromCart = useCallback((productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
  }, []);
  
  // Update item quantity
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  }, [removeFromCart]);
  
  // Calculate total items in cart
  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);
  
  // Calculate subtotal (before shipping)
  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);
  
  // Calculate shipping fee
  const shippingFee = useMemo(() => {
    // Flat fee of $20 per item in cart
    return cartItems.reduce((total, item) => total + (20 * item.quantity), 0);
    
    // Alternative: Flat fee of $20 regardless of quantity
    // return cartItems.length > 0 ? 20 : 0;
    
    // Alternative: Free shipping over $100
    // const itemsTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    // return itemsTotal >= 100 ? 0 : 20;
  }, [cartItems]);
  
  // Calculate total (including shipping)
  const cartTotal = useMemo(() => {
    return subtotal + shippingFee;
  }, [subtotal, shippingFee]);
  
  // Memoize the context value
  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    subtotal,
    shippingFee,
    cartTotal
  }), [cartItems, addToCart, removeFromCart, updateQuantity, cartCount, subtotal, shippingFee, cartTotal]);
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};