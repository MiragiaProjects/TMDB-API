import { useQuery } from "react-query";
import TMDB from "../services/TMDB";

const useTopratedMovies = () => {
    return useQuery(['movie'], TMDB.getToplistedMovies)
}

export default useTopratedMovies