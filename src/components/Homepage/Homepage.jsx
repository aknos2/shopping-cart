import './homepage.css';
import Header from "../Header/Header";
import SideMenu from "../Side-Menu/SideMenu";
import Main from './main';
import SalesList from '../SalesList/SalesList';

const Homepage = () => {
    return (
        <>
        <Header />
        <main>
            <div className="homepage-container">
                <SideMenu />
                <Main />
            </div>
            <SalesList />
        </main>
        </>
    )
}

export default Homepage;