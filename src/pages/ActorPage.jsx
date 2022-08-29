import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import {getActor} from '../services/TMDB'
import { Card } from 'react-bootstrap'
import { useQuery } from 'react-query'


const ActorPage = () => {
    const { actor_id } = useParams()
    const { data, isLoading, isError, error} = useQuery(['actor', actor_id ], () => getActor(actor_id))

  return (
    <Container>
    <h1>Actor Page</h1>

    {isLoading && (<p className='my-3'>Loading ...</p>)}

    {isError && (<Alert>
        <p>Oh no, error!</p>
        <p>{error.message}</p>
    </Alert>)}

    {data && (
    <>
    <h1>{data.name}</h1>
    <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}/>
        <div>
            <p>From: {data.birthday}</p>
            <p>Born: {data.place_of_birth}</p>
            <p>About: {data.biography}</p>
            <h3>Films:</h3>
            <div>
                {data.credits.cast.map(cred =>(
                    <Card key={cred.id} className="w-20">
                        {cred.poster_path && (
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${cred.poster_path}`} />
                        )}
                        <Card.Body className='d-flex flex-column'>
                            <Card.Title>{cred.title}</Card.Title>
                            <Card.Text>{cred.character}</Card.Text>
                            <Button as={Link} to={`/movie/${cred.id}`} variant="primary">Read more....</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    </>
    )}
    </Container>

  )
}

export default ActorPage