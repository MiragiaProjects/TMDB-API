import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useQuery } from 'react-query'
import MovieCard from '../components/MovieCard'
import TMDBAPI from '../services/TMDB'

const ToplistedMoviesPage = () => {
    const { isLoading, isError, error, data} = useQuery('movie', TMDBAPI.getToplistedMovies)
  return (
    <Container>
    <h2>Toplisted Movies</h2>

    {isLoading && (<p className='my-3'>Loading...</p>)}

    {isError && ( <Alert variant="danger">
        <h4>Ops, error!</h4>
        <p>{error.message}</p>
    </Alert>
    )}

    {data && (
      <>
      <Row>

        {data.map( movie => (
          <Col lg={3} md={4} sm={6} key={movie.id}>
            <MovieCard movie={movie}/>
          </Col>
          
        ))}
      </Row>
      </>
    )}

    </Container>
  )
}

export default ToplistedMoviesPage