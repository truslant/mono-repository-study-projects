import { Link } from 'react-router-dom';

const EventsPage = () => {
    const eventsArray = [
        { id: 1, description: '1st event' },
        { id: 2, description: '2nd event' },
        { id: 3, description: '3rd event' },
    ]

    const events = eventsArray.map((event) => {
        return (
            <li>
                <Link
                    to={`${event.id}`}
                    relative='path'
                    key={event.id}>{event.description}</Link>
            </li >
        )
    })

    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {events}
            </ul>
        </>
    )
}

export default EventsPage;