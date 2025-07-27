import { useRouteLoaderData, Link } from 'react-router-dom'
import apiKey from '../utilities/config'

const HomePage = () => {
    const data = useRouteLoaderData('home');
    const imageUrl = "http://image.tmdb.org/t/p/w300";


    console.log("Response:", data);

    const posters = data.results.map((movie) => (
        <div className='col s3' key={movie.id}>
            <Link to={`/about/${movie.id}`}>
                <img src={`${imageUrl}${movie.poster_path}`} />
            </Link>
        </div>
    ))
    return (
        <>
            <div className='row'>
                {posters}
            </div>
        </>

    )
}

export default HomePage

export const nowPlayingLoader = async ({ request, params }) => {

    const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";

    const response = await fetch(`${nowPlayingUrl}?api_key=${apiKey.apiKey}`)

    return await response.json()
}