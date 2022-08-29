import { Link } from 'react-router-dom'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const MovieCard = ({ data }) => {
    return(
        <div className="d-flex flex-wrap justify-content-between">
            {data.results.map(res => (
                <Card className='w-25 p-3 mt-3' key={res.id}>
                    {res.poster_path && (
                        <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} />
                    )}
                    <Card.Body className='d-flex flex-column'>
                        <Card.Title>{res.title}</Card.Title>
                        <Card.Text>{res.release_date}</Card.Text>
                        <Button as={Link} to={`/movie/${res.id}`} variant="primary">Read more ...</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>

    )
}
export default MovieCard