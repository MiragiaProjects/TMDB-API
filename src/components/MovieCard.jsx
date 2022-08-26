import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

const MovieCard = ({ movie }) => {
    return(
        <Card className='mb-4'>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{`Released in: ${movie.release_date}`}</Card.Text>
                <Card.Text> <Link to={`/movie/${movie.id}`}>Read more here ...</Link></Card.Text>
            </Card.Body>

        </Card>

    )
}
export default MovieCard