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
				<Route path="*" element={<NotFound />} />
				<Route path="/movie/now_playing" element={<CinemaMoviesPage />} />
				<Route path="/movie/popular" element={<PopularMoviesPage />} />
				<Route path="/movie/top_rated" element={<ToplistedMoviesPage />}/>
				<Route path="/movie/:id" element={<MoviePage/>} />
				<Route path="/actor/:id" element={<ActorPage/>} />
				<Route path="/genres/:id" element={<GenrePage/>} />
			</Routes>
		</div>
	)
}

export default App
