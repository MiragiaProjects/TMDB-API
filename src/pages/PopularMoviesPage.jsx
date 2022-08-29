import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import Alert from 'react-bootstrap/Alert'
import MovieCard from '../components/MovieCard'
import { getPopularMovies } from '../services/TMDB'

const PopularMoviesPage = () => {

    const { isLoading, isError, error, data} = useQuery(['popularMovies'], getPopularMovies)
  
    return (
      <Container>
      <h1>PopularMoviesPage</h1>
      {isLoading && (<p className='my-3'>Loading ....</p>)}
  
      {isError && (
        <Alert variant="danger">
          <h3>Ops, ERROR!</h3>
          <p>{error.message}</p>
          </Alert>)} 
  
          {data && <MovieCard data={data} /> }
  
      </Container>
    )
    }
  
  
  export default PopularMoviesPage