import axios from "axios";
import EventForm from "../components/EventForm"
import { redirect } from 'react-router-dom'

const NewEventPage = () => {
    return (
        <>
            <EventForm />
        </>
    )
}

export default NewEventPage;

export const formAction = async ({ request, params }) => {
    console.dir(request);
    const data = await request.formData();
    console.log(data);
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        data: data.get('date'),
        description: data.get('description'),
    }
    console.log(eventData);
    try {
        await axios.post('http://localhost:8080/events', eventData, {
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        throw new Response({ message: error.message || 'No data found' }, { status: error.status || 500 })
    }


    return redirect('/events');
}