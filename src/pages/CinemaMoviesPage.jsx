import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import useCinemaMovies from '../hooks/useCinemaMovies'


const CinemaMoviesPage = () => {
    const {isLoading, isError, error, data:movie} = useCinemaMovies()
  return (
    <Container>
      <h1>Films in cinema right now</h1>
      {isLoading && (<p className='my-3'>Loading....</p>)}

      {isError && ( <Alert variant="danger">
        <h3>Ops, eerror</h3>
        <p>{error.message}</p>
      </Alert>)}
      <Row>
        
          {movie && <MovieCard data={movie} />}
        
      </Row>
    </Container>
  )
}

export default CinemaMoviesPage