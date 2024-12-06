import { useEffect, useState } from "react"
import { category, CategoryType } from "../../utils/constant"
import { baseApi } from "../../api/axiosInstance"

function Movies() {
	const [filter, setFilter] = useState(category[0].name)
	const [nowPlaying, setNowPlaying] = useState<CategoryType[]>([])
	const [popular, setPopular] = useState<CategoryType[]>([])
	const [topRated, setTopRated] = useState<CategoryType[]>([])
	const [upcoming, setUpcoming] = useState<CategoryType[]>([])

	const toggleSelection = (item: string) => {
		setFilter(item)
	}

	const fetchMovies = async (path: string) => {
		try {
			const response = await baseApi.get(`/3/movie/${path}?language=en-US&page=1`)
			console.log(path)
			switch (path) {
				case "now_playing":
					setNowPlaying(response.data.results)
					console.log(response)
					break;
				case "popular":
					setPopular(response.data.results)
					console.log(response)
					break;
				case "top_rated":
					setTopRated(response.data.results)
					console.log(response)
					break;
				case "upcoming":
					setUpcoming(response.data.results)
					console.log(response)
					break;
				default:
					break;
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const current = category.filter(item => item.name == filter)
		fetchMovies(current[0].path);
	}, [filter])

	return (
		<div className="w-[90%] mx-auto mt-4">
			<h1 className="text-3xl font-bold text-yellow-500">Explore Movies</h1>
			<div className="flex mt-2">
				{
					category.map((item, index) => (
						<div key={index}>
							<button
								onClick={() => { toggleSelection(item.name) }}
								className="text-base font-semibold w-44 h-10 hover:bg-[#121212]">{item.name}</button>
							<div className={`h-0.5 bg-blue-400  mx-auto ${filter === item.name ? "w-full" : "w-0"} duration-500`}></div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Movies