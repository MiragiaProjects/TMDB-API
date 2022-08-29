import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import MovieCard from '../components/MovieCard'
import { getCinemaMovies } from '../services/TMDB'
import { useQuery } from 'react-query'



const CinemaMoviesPage = () => {
    const {isLoading, isError, error, data} = useQuery(['cinemaMovies'], getCinemaMovies)
  return (
    <Container>
      <h1>Films in cinema right now</h1>
          {isLoading && (<p className='my-3'>Loading....</p>)}

          {isError && ( 
              <Alert variant="danger">
                <h3>Ops, eerror</h3>
                <p>{error.message}</p>
              </Alert>)}
      
        
          {data && <MovieCard data={data} />}
        
      
    </Container>
  )
}

export default CinemaMoviesPage