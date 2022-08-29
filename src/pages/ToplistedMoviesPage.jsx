import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { useQuery } from 'react-query'
import MovieCard from '../components/MovieCard'
import { getToplistedMovies } from '../services/TMDB'

const ToplistedMoviesPage = () => {
    const { isLoading, isError, error, data} = useQuery(['toplistedMovies'], getToplistedMovies)
  return (
    <Container>
          <h2>Toplisted Movies</h2>

              {isLoading && (<p className='my-3'>Loading...</p>)}

              {isError && ( 
                  <Alert variant="danger">
                      <h4>Ops, error!</h4>
                      <p>{error.message}</p>
                  </Alert>
               )}

                {data && <MovieCard data={data} /> }

    </Container>
  )
}

export default ToplistedMoviesPage