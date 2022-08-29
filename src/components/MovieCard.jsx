import { Link } from 'react-router-dom'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const MovieCard = ({ data }) => {
    
    return(
        <div className="d-flex flex-wrap justify-content-between">
            {data.results.map(resu => (
                <Card className='w-15 p-3 mt-3 movieCard' key={resu.id}>
                    {resu.poster_path && (
                        <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${resu.poster_path}`} />
                    )}
                    <Card.Body className='d-flex flex-column'>
                        <Card.Title>{resu.title}</Card.Title>
                        <Card.Text>{resu.release_date}</Card.Text>
                        <Button className='mt-auto' as={Link} to={`/movie/${resu.id}`} variant="primary">Read more ...</Button>
                        
                    </Card.Body>
                </Card>
            ))}
        </div>

    )
}
export default MovieCard