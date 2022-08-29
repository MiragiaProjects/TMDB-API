import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import CinemaMoviesPage from './pages/CinemaMoviesPage'
import PopularMoviesPage from './pages/PopularMoviesPage'
import ToplistedMoviesPage from './pages/ToplistedMoviesPage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import GenrePage from './pages/GenrePage'


function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/now_playing" element={<CinemaMoviesPage />} />
				<Route path="/popular" element={<PopularMoviesPage />} />
				<Route path="/top_rated" element={<ToplistedMoviesPage />}/>
				<Route path="/movie/:movie_id" element={<MoviePage/>} />
				<Route path="/actor/:actor_id" element={<ActorPage/>} />
				<Route path="/genres/:genre_id" element={<GenrePage/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
