import { Outlet } from 'react-router-dom'
import EventsNavigation from "../components/EventsNavigation"
const RootEventsPage = () => {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}
export default RootEventsPage