import { Outlet } from 'react-router-dom'
import Header from '../components/Header';

const IndexRootPage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default IndexRootPage;