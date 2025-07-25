import { useLoaderData } from 'react-router-dom'
import axios from 'axios';

import EventsList from '../components/EventsList';

function EventsPage() {
    const fetchedEvents = useLoaderData();
    return (
        <EventsList events={fetchedEvents} />
    );
}

export default EventsPage;

export const eventsLoader = async () => {
    const eventsList = await axios.get('http://localhost:8080/events');
    if (!eventsList) {
        throw new Response(
            JSON.stringify({
                message: 'Internal Server Error'
            }),
            {
                status: 500
            }
        )
    }
    return eventsList.data.events;
}
