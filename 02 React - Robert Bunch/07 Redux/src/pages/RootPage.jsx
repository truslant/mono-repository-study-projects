import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom"


const RootPage = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default RootPage;


