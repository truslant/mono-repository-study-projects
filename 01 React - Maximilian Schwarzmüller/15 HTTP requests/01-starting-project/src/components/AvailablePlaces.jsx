import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from './ErrorPage.jsx';
import { fetchLocations } from '../fetchLocations.js';

import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState();

  useEffect(() => {
    (async function () {
      setFetching(true);
      try {
        const result = await fetchLocations('http://localhost:3000/places')
        navigator.geolocation.getCurrentPosition((location) => {
          const newOrderLocations = sortPlacesByDistance(result.places, location.coords.latitude, location.coords.longitude)
          setAvailablePlaces(newOrderLocations)
          setFetching(false);
        }, () => {
          throw new Error('Unable to retreive location')
        })
      } catch (error) {
        setError(error)
        setFetching(false);
      }
    })()
  }, [])

  if (error) {
    return (
      <ErrorPage title="An error occurred!" message={error.message} />
    )
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={fetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
