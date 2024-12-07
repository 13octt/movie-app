import { useEffect, useState } from "react"
import { baseApi } from "../../api/axiosInstance"
import { MovieCardType } from "../../utils/constant"
import MovieList from "../Home/MovieList"

function SimilarMovie({ movieId }: { movieId: string }) {
	const [movies, setMovies] = useState<MovieCardType[]>([])

	const fetchSimilarMovies = async () => {
		const response = await baseApi.get(`/3/movie/${movieId}/similar?language=en-US&page=1`)
		console.log("Similar Movie ", response.data.results)
		setMovies(response.data.results)
	}

	useEffect(() => {
		fetchSimilarMovies();
	}, [movieId])

	return (
		<div>
			<MovieList movies={movies} title="Similar Movies" />
		</div>
	)
}

export default SimilarMovie