import { Outlet } from "react-router-dom";
import Header from "../components/HomepageContent/Header/header";

const RootLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;