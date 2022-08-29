import { useQuery } from "react-query";
import TMDB from "../services/TMDB";

const useCinemaMovies = () => {
    return useQuery(['movie'], TMDB.getCinemaMovies)
}

export default useCinemaMovies