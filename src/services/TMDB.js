import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

const apiKey = '?api_key=' + API_KEY


const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint)
    console.log(response)
    return response.data
}


// Get list of Cinema-movies
const getCinemaMovies =  () => {
    return get(`/movie/now_playing${apiKey}&include_adult=false&page=1`)

}

// Get list of Popular-movies
const getPopularMovies =  () => {
    return get(`/movie/popular${apiKey}&include_adult=false&page=1`)
    
}

// Get list of Toplisted-movies
const getToplistedMovies = () => {
    return get(`/movie/top_rated${apiKey}&include_adult=false&page=1`)
}

// Get list of Genre
export const getGenre =  (genre, page) => {
    return get(`/discover/movie/${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genre}&page=${page}`)
}

export const getGenres = () => {
    return get(`/genre/movie/list${apiKey}&language=en-US`)
}

// Get a movie
export const getMovie = async ({queryKey}) => {
    const [_key, {id}] = queryKey
    return get(`/movie/${id}?api_key=${API_KEY}&language=en-US&include_adult=false&append_to_response=credits`)
}

// Get an actor
const getActor = (id) => {
    return get(`/person/${id}${apiKey}&append_to_response=movie_credits&include_adult=false&language=en-US`)
}


export default {
    getCinemaMovies,
    getPopularMovies,
    getToplistedMovies,
    getActor,
}