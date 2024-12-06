import { useEffect, useState } from 'react'
import HomeSlider from '../../components/Home/HomeSlider'
import { baseApi } from '../../api/axiosInstance'
import { MovieCardType } from '../../utils/constant'
import MovieList from '../../components/Home/MovieList'

function Home() {
	const [movies, setMovies] = useState<MovieCardType[]>([])
	const fetchMovies = async () => {
		try {
			const response = await baseApi.get('/3/movie/top_rated?language=en-US&page=1')
			console.log(`popular movie`, response.data.results)
			setMovies(response.data.results)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchMovies()
	}, [])

	return (
		<div className='w-[90%] mx-auto'>
			<HomeSlider />
			<MovieList movies={movies}/>
		</div>
	)
}

export default Home