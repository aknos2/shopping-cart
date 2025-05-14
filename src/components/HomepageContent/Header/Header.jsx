import { useCart } from '../../CartPage/CartContext';
import { AccountIcon, CartIcon, HeartIcon, MenuIcon, SearchIcon } from '../../others/Icons';
import SideMenu from '../Side-Menu/SideMenu';
import './header.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSideMenu, setSideMenu] = useState(false);
    const menuContainerRef = useRef(null);
    const {cartItems} = useCart();
    const totalCartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleSideMenu = () => {
        setSideMenu(prev => !prev);
    }    
    
    const handleMouseEnter = () => {
        setSideMenu(true);
    }
    
    const handleMouseLeave = () => {
        setSideMenu(false);
    }
    
    return (
        <header>
            <nav>
                <div 
                    className='nav-links left'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={menuContainerRef}
                >       
                    <div className='shop-btn-wrap'>
                        <MenuIcon onClick={toggleSideMenu}/>
                        <p className='no-select'>SHOP</p>
                    </div>
                    {isSideMenu && (
                        <div className="side-menu-container">
                            <SideMenu />
                        </div>
                    )}
                </div>
                <Link className="logo-link no-select" to="/">LOGO</Link>
                <div className='nav-links right'>
                    <AccountIcon className='account-icon'/>
                    <HeartIcon className='heart-icon'/>
                    <div className='cart-icon-wrap'>
                        <Link to="cart"><CartIcon className='cart-icon'/>
                         {cartItems.length > 0 && <span className="cart-count no-select">{totalCartItemCount}</span>}
                         </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;