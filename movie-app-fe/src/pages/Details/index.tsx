import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { baseApi } from "../../api/axiosInstance";

function Details() {
	const params = useParams()

	useEffect(() => {
		fetchMovieDetails();
	}, [params])

	const fetchMovieDetails = async () => {
		const response = await baseApi.get(`/3/movie/${params.id}?language=en-US`)
		console.log(response.data)
	} 

	return (
		<div>Details</div>
	)
}

export default Details