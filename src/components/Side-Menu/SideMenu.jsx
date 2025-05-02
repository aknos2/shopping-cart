import './side-menu.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <label htmlFor="search">Search</label>
            <input type="search" />
        </div>
    )
}

const SideMenu = () => {
    return (
        <div className="search-container">
            <h2>Search for an item</h2>
            <SearchBar />

        </div>
    )
}

export default SideMenu;