import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

//get list of movies in cinema right now
const getCinemaMovies = async () => {
    return getCinemaMovies(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&include_adult=false`)
}

// get list of popular movies
const getPopularMovies = async () => {
    return getPopularMovies(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&include_adult=false`)
}

// get list of Toplisted movies
const getToplistedMovies = async () => {
    return getToplistedMovies(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&include_adult=false`)
}

export default {
    getCinemaMovies,
    getPopularMovies,
    getToplistedMovies,
}