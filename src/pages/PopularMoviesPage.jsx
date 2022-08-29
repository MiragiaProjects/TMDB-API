import React from 'react'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TMDBAPI from '../services/TMDB'
import Alert from 'react-bootstrap/Alert'
import MovieCard from '../components/MovieCard'

const PopularMoviesPage = () => {

    const { isLoading, isError, error, data} = useQuery('movie', TMDBAPI.getPopularMovies)
  
    return (
      <Container>
      <div>PopularMoviesPage</div>
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