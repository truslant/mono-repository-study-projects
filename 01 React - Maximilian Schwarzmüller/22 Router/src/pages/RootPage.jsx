import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const RootPage = () => {
    return (
        <>
            <nav>
                <MainNavigation />
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootPage