import EventItem from '../components/EventItem'
import { useLoaderData } from 'react-router-dom'

const EventDetailPage = () => {
    const data = useLoaderData();
    return (
        <>
            <EventItem event={data.event} />
        </>
    )
}

export default EventDetailPage;

export const eventLoader = async ({ req, params }) => {

    const { eventId } = params;
    const response = await fetch(`http://localhost:8080/events/${eventId}`)

    if (!response.ok) {
        return new Response({ message: 'Could not fetch data' }, { status: 500 })
    } else {
        return response;
    }
}