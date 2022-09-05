import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import {getActor} from '../services/TMDB'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Button from 'react-bootstrap/Button'


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
    <div>
        <div className='d-flex'>
            <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}/>
                <div className='info-box'>
                    <p>Born: {data.birthday}</p>
                    <p>From: {data.place_of_birth}</p>
                    <p>About: {data.biography}</p>
                </div>
        </div>
            <hr />
            <h3>Films:</h3>
                <div className='List-Wrapper'>
                    {data.credits.cast.map(cred =>(
                        <ListGroup key={cred.id} className="w-20 filmCard">
                            {cred.poster_path && (
                                <img src={`https://image.tmdb.org/t/p/w300${cred.poster_path}`} />
                            )}
                                <ListGroupItem>{cred.title}</ListGroupItem>
                                <ListGroupItem>{cred.character}</ListGroupItem>
                                <Button as={Link} to={`/movie/${cred.id}`} variant="primary">Read more....</Button>
                        </ListGroup>
                    ))}
                </div>
        </div>
    </>
    )}
    </Container>

  )
}

export default ActorPage