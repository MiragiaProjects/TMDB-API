import React from 'react'
import { useParams, Link} from 'react-router-dom'
import { useQuery } from 'react-query'
import { getMovie} from '../services/TMDB'
import Container  from 'react-bootstrap/Container'
import Alert  from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'
import useMovie from '../hooks/useMovie'


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
        <div className=''>
            <h1>{data.title}</h1>
            <div>
                {data && data.genres.map(genre =>
                    <span className='me-2' key={genre.id}>
                        <Link to={`/genres/${genre.id}`}>
                            {genre.name}
                        </Link>
                    </span>)}
            </div>
        </div>
        <div>
            <Image className='img-fluid me-3' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>

            <div>
                <p>Released in:{data.release_date}</p>
                <p>Runtime:{data.runtime} </p>
            </div>
        </div>

        <h3>Actors:</h3>
        {data.credits.cast.map(cast => (
            <div key={cast.id}>
                <CastCard cast={cast} />
            </div>
        ))}
        </>
        }
    </Container>
  )
}

export default MoviePage