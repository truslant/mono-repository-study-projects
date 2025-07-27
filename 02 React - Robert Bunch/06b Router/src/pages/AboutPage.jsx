import { useRouteLoaderData } from 'react-router-dom'
import apiKey from '../utilities/config'

const AboutPage = () => {

    const data = useRouteLoaderData('about')
    const imageUrl = "http://image.tmdb.org/t/p/w300";
    console.log('Single movie data:', data);

    return (
        <>
            <h1>{data.original_title}</h1>
            <img src={`${imageUrl}${data.poster_path}`} />
        </>
    )
}

export default AboutPage

export const singleMovieLoader = async ({ request, params }) => {
    const { movieId } = params;
    console.log(params);
    const singleMovieUrl = "https://api.themoviedb.org/3/movie/"

    const data = await fetch(`${singleMovieUrl}${movieId}?api_key=${apiKey.apiKey}`);

    return await data.json()
}