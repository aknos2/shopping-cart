import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './side-menu.css';

const SofaMenu = () => {
    return (
        <div className='sofa-side-menu'>
            <div className='sofa-side-menu-content-a'>
                <Link to="twoseatersofas">2-seater</Link>
                <Link to="threeseatersofas">3-seater</Link>
                <Link to="fourseatersofas">4-seater</Link>
                <a href="##" style={{ pointerEvents: 'none', color: 'gray' }}>Modular sofas</a>
                <a href="##" style={{ pointerEvents: 'none', color: 'gray' }}>Sleeper sofas</a>
            </div>
        </div>
    )
}

const CouchMenu = () => {
    return (
        <div className='couch-side-menu'>
            <div className='sofa-side-menu-content-a'>
                <a href="##">Tuxedo</a>
                <a href="##">Lawson</a>
                <a href="##">Camelback</a>
            </div>
        </div>
    )
}

const ChairMenu = () => {
    return (
        <div className='chair-side-menu'>
            <div className='couch-side-menu-content-a'>
                <a href="##">Dining chairs/sofas</a>
                <a href="##">Lounge chairs</a>
            </div>
        </div>
    )
}

const CategoryCard = ({ className, text, onClick, onMouseEnter }) => {
    return (
        <button
            className={`category-search-card ${className}`}
            onClick={onClick}
            aria-label={`Select ${text}`}
            onMouseEnter={onMouseEnter}
        >
            <div className="glass-overlay">
                <p>{text}</p>
            </div>
        </button>
    );
};

const SideMenu = () => {
    const [activeMenu, setActiveMenu] = useState({
        sofa: false,
        couch: false,
        chair: false
    });
    const [isMobile, setIsMobile] = useState(false);

    // Add empty dependency array to prevent continuous rerenders
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const toggleMenu = (menuType) => {
        if (isMobile) {
            // On mobile: toggle the clicked menu, close others
            setActiveMenu(prev => ({
                sofa: menuType === 'sofa' ? !prev.sofa : false,
                couch: menuType === 'couch' ? !prev.couch : false,
                chair: menuType === 'chair' ? !prev.chair : false
            }));
        } else {
            // On desktop: just toggle the current menu
            setActiveMenu(prev => ({
                ...prev,
                [menuType]: !prev[menuType]
            }));
        }
    };

    // For desktop hover functionality
    const handleMouseEnter = (menuType) => {
        if (!isMobile) {
            setActiveMenu(prev => ({
                ...prev,
                [menuType]: true
            }));
        }
    };

    const handleMouseLeave = (menuType) => {
        if (!isMobile) {
            setActiveMenu(prev => ({
                ...prev,
                [menuType]: false
            }));
        }
    };

    return (
        <div className="search-container">
            <div className="category-search-wrap">
                <div
                    className="category-sofa-container"
                    onMouseLeave={() => handleMouseLeave('sofa')}
                >
                    <CategoryCard
                        className={`model-c ${activeMenu.sofa ? 'active' : ''}`}
                        text="LOIS Sofas"
                        onClick={() => toggleMenu('sofa')}
                        onMouseEnter={() => handleMouseEnter('sofa')}
                    />
                    {activeMenu.sofa && (
                        <div className="sofa-menu-wrapper">
                            <SofaMenu />
                        </div>
                    )}
                </div>
                <div
                    className="category-sofa-container"
                    onMouseLeave={() => handleMouseLeave('couch')}
                >
                    <CategoryCard
                        className={`model-b ${activeMenu.couch ? 'active' : ''}`}
                        text="LOIS Couches"
                        onClick={() => toggleMenu('couch')}
                        onMouseEnter={() => handleMouseEnter('couch')}
                    />
                    {activeMenu.couch && (
                        <div className="sofa-menu-wrapper">
                            <CouchMenu />
                        </div>
                    )}
                </div>
                <div
                    className="category-sofa-container"
                    onMouseLeave={() => handleMouseLeave('chair')}
                >
                    <CategoryCard
                        className={`model-a ${activeMenu.chair ? 'active' : ''}`}
                        text="LOIS Chairs"
                        onClick={() => toggleMenu('chair')}
                        onMouseEnter={() => handleMouseEnter('chair')}
                    />
                    {activeMenu.chair && (
                        <div className="sofa-menu-wrapper">
                            <ChairMenu />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideMenu;