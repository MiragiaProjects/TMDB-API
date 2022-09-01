import Container from 'react-bootstrap/Container'
import { getGenre, getGenres } from '../services/TMDB'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import MovieCard from '../components/MovieCard'

const GenrePage = () => {
    const [nameGenre, setNameGenre] = useState('')

    const [searchParams, setSearchParams] = useSearchParams({page: 1, genre_id: '',})

    const page = searchParams.get('page') ? Number(searchParams.get('page')) : null

    const { genre_id } = useParams()

    const {data, isLoading, error, isError, isSuccess} = useQuery(['genre', {genre_id, page}], () => getGenre(genre_id, page), {keepPreviousData: true})

    const getNameGenre = async () => {
        const allGenres = await getGenres()
        const thisGenre = allGenres.genres.find(genre1 => genre1.id == genre_id)
        setNameGenre(thisGenre.name)
    }

    useEffect(() => {
        setSearchParams({ genre_id, page})
        getGenre(genre_id, page)
        getNameGenre()
    }, [page, genre_id])


  return (
    <Container>

        <div>GenrePage</div>

            {isLoading && (<p>Loading ....</p>)}

            {isError && (<p>Ops! Error!{error.message}</p>)}

            {isSuccess && data && (
                <>
                    <h1>{nameGenre}</h1>

                        <MovieCard data={data} />

                        <Pagination 
                        page={page} 
                        numPages={data.total_pages} 
                        hasPreviousPage={data.page !== 1} 
                        onPreviousPage={() => setSearchParams({page: page -1})}
                        onNextPage={() => setSearchParams({ page: page + 1})} />
                </>
            )}


    </Container>
  )
}

export default GenrePage