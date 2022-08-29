import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown  from 'react-bootstrap/Dropdown'
import { Link, NavLink } from 'react-router-dom'
import { getGenres} from '../services/TMDB'
import { useQuery } from 'react-query'

const Navigation = () => {
	const {data} = useQuery(['genres'], getGenres)
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">The Movie DB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
						{data && (
							<Dropdown>
								<Dropdown.Toggle variant="dark" id="dropdown-basic">Genres</Dropdown.Toggle>
								<Dropdown.Menu>
									{data.genres.map(genre => (
										<Dropdown.Item value="1" key={genre.id} size="sm" as={NavLink} to={`/genres/${genre.id}`}>{genre.name}</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
						)}
						<Nav.Link as={NavLink} end to="/now_playing">In Cinema</Nav.Link>
						<Nav.Link as={NavLink} end to="/top_rated">Top Rated</Nav.Link>
						<Nav.Link as={NavLink} end to="/popular">Popular</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
