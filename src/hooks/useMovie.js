import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const useMovie = (id) => {
    return useQuery(['movie', id], () => TMDB.getMovie(id))
}

export default useMovie