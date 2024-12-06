import { useEffect, useState } from 'react'
import HomeSlider from '../../components/Home/HomeSlider'
import { baseApi } from '../../api/axiosInstance'
import { MovieCardType } from '../../utils/constant'
import MovieList from '../../components/Home/MovieList'
import LoadMoreBtn from '../../components/Button/LoadMoreBtn'

function Home() {
	const [movies, setMovies] = useState<MovieCardType[]>([])
	const [page, setPage] = useState(1)
	const fetchMovies = async (page: number) => {
		try {
			const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=${page}`)
			console.log(`popular movie`, response.data.results)
			setMovies(prev => [...prev, ...response.data.results])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchMovies(page)
	}, [page])

	const handlePageUpdate = () => {
		setPage(prev => prev + 1)
	}

	return (
		<div className='w-[90%] mx-auto mb-44'>
			<HomeSlider />
			<MovieList movies={movies} />
			<div onClick={() => { handlePageUpdate() }}>
				<LoadMoreBtn />
			</div>
		</div>
	)
}

export default Home