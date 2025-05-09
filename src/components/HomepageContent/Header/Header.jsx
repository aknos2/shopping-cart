import Button from '../../others/Button';
import { AccountIcon, CartIcon, MenuIcon } from '../../others/Icons';
import SideMenu from '../Side-Menu/SideMenu';
import './header.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSideMenu, setSideMenu] = useState(false);
    const menuContainerRef = useRef(null);

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
                        <p>SHOP</p>
                    </div>
                    {isSideMenu && (
                        <div className="side-menu-container">
                            <SideMenu />
                        </div>
                    )}
                </div>
                <Link className="logo-link" to="/">LOGO</Link>
                <div className='nav-links right'>
                    <Link to="cart"><CartIcon className='cart-icon'/></Link>
                    <AccountIcon className='account-icon'/>
                </div>
            </nav>
        </header>
    )
}

export default Header;