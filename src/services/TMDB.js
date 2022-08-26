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

export default {
    getCinemaMovies,
    getPopularMovies,
    getToplistedMovies,
}