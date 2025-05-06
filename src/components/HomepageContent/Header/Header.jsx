import Button from '../../others/Button';
import SideMenu from '../Side-Menu/SideMenu';
import './header.css';
import { useState, useRef } from 'react';

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
                    <Button text="SHOP" onClick={toggleSideMenu}/>
                    {isSideMenu && (
                        <div className="side-menu-container">
                            <SideMenu />
                        </div>
                    )}
                </div>
                <h1>LOGO</h1>
                <div className='nav-links right'>
                    <a href="##">CART</a>
                    <a href="##">Login</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;