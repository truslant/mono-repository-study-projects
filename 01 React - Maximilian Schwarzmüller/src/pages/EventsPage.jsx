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
        throw new Error('No data found!')
    }
    return eventsList.data.events;
}
