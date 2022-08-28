import React from 'react'
import { useParams, Link} from 'react-router-dom'
import { useQuery } from 'react-query'
import { getMovie} from '../services/TMDB'
import Container  from 'react-bootstrap/Container'
import Alert  from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'



const MoviePage = () => {
    const { movie_id } = useParams()
    
    const { data, isLoading, error, isError} = useQuery(['movie', movie_id], () => getMovie(movie_id))

  return (
    <Container>
    <h3>Movie Page</h3>
    {isLoading && (<p className='my-3'>Loading ...</p>)}

    {isError && 
        <Alert>
            <p>Oh no, error!</p>
            <p>{error.message}</p>
        </Alert>}

        {data &&
        <>
            <div>
        
                <h3>{data.title}</h3>

                {data.poster_path &&(
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                )}
                <div className='d-flex flex-column'>
                    <p>Genre:{data.genres.map(genre => genre.name)}</p>
                    <p>Released:{data.release_date}</p>
                    <p>Rating: {data.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{data.overview}</p>
                </div>
            </div>

            <div>
                <h3>Cast</h3>
                <div className='d-flex'>
                    {data.credits.cast.map(cast => (
                        <Card key={cast.id} className='w-20'>
                            {cast.profile_path && (
                                <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} />
                            )}
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title>{cast.name}</Card.Title>
                                <Card.Text>{cast.character}</Card.Text>
                                <Button as={Link} to={`/actor/${cast.id}`} variant="primary">Read more ....</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

        </>
        }
    </Container>
  )
}

export default MoviePage