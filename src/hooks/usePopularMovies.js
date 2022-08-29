import { useQuery } from "react-query";
import TMDB from "../services/TMDB";

const usePopularMovies = (id) => {
    return useQuery(['movie'], TMDB.getPopularMovies)
}

export default usePopularMovies