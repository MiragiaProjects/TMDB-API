import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import CinemaMoviesPage from './pages/CinemaMoviesPage'
import PopularMoviesPage from './pages/PopularMoviesPage'
import ToplistedMoviesPage from './pages/ToplistedMoviesPage'

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
			</Routes>
		</div>
	)
}

export default App
