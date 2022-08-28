import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

const apiKey = '?api_key=' + API_KEY


const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint)
    return response.data.results
}


// Get list of Cinema-movies
const getCinemaMovies = async () => {
    return get(`/movie/now_playing${apiKey}&include_adult=false`)

}

// Get list of Popular-movies
const getPopularMovies = async () => {
    return get(`/trending/all/week${apiKey}&include_adult=false`)
    
}

// Get list of Toplisted-movies
const getToplistedMovies = async () => {
    return get(`/movie/top_rated${apiKey}&include_adult=false`)
    
}

// Get list of Genre
const getGenre = async (genre, page) => {
    return get(`/discover/movie${apiKey}language=en-US&sort_by=popularity.desc&include_adult=false&with_geners=${genre}&page${page}`)
}

const getGenres = () => {
    return get(`/genre/movie/list${apiKey}&language=en-US`)
}

// Get a movie
const getMovie = async (id) => {
    return get(`/movie/${id}${apiKey}&include_adult=false&append_to_response=credits`)
}

// Get an actor
const getActor = async (id) => {
    return get(`/person/${id}${apiKey}&append_to_response=movie_credits&include_adult=false&language=en-US`)
}


export default {
    getCinemaMovies,
    getPopularMovies,
    getToplistedMovies,
    getGenre,
    getGenres,
    getMovie,
    getActor,
}