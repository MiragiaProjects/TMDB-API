import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import MovieCard from '../components/MovieCard'
import TMDBAPI from '../services/TMDB'


const CinemaMoviesPage = () => {
    const {isLoading, isError, error, data} = useQuery('movie' , () => TMDBAPI.getCinemaMovies )
  return (
    <Container>
      <h1>Films in cinema right now</h1>
      {isLoading && (<p className='my-3'>Loading....</p>)}

      {isError && ( <Alert variant="danger">
        <h3>Ops, eerror</h3>
        <p>{error.message}</p>
      </Alert>)}

      {data && (
        <>
        <Row>
          {data.map( movie => (

            <Col lg={3} md={4} sm={6} key={movie.id}>
              <MovieCard movie={movie} />
            </Col>

          ))}
        </Row>
        </>
      )}


    </Container>
  )
}

export default CinemaMoviesPage