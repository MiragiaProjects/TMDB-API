import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY



const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint)
    console.log(response.data)
    return response.data
}


// Get list of Cinema-movies
export const getCinemaMovies =  () => {
    return get(`/movie/now_playing?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`)

}

// Get list of Popular-movies
export const getPopularMovies =  () => {
    return get(`/movie/popular?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`)
    
}

// Get list of Toplisted-movies
export const getToplistedMovies = () => {
    return get(`/movie/top_rated?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`)
}

// Get list of Genre
export const getGenre =  (genre, page) => {
    return get(`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genre}&page=${page}`)
}

export const getGenres = () => {
    return get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
}

// Get a movie
export const getMovie = async (id) => {
    return get(`/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)
}

// Get an actor
export const getActor = (id) => {
    return get(`/person/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)
}
