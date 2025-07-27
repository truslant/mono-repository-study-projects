
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventsPage, { eventsLoader } from './pages/EventsPage';
import EventDetailPage, { eventLoader } from './pages/EventDetailPage';
import NewEventPage, { formAction } from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootPage from './pages/RootPage';
import RootEventsPage from './pages/RootEventsPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <RootEventsPage />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: formAction,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventLoader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: 'edit', element: <EditEventPage /> },
            ]
          }
        ]
      },
    ]
  },
])


function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;