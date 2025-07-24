import { useParams } from 'react-router-dom'

const EditEventPage = () => {
    const { eventId } = useParams();
    return (
        <>
            <h1>EditEventPage</h1>
            <p>Event ID: {eventId}</p>
        </>
    )
}

export default EditEventPage