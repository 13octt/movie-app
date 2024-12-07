import { useEffect, useState } from "react"
import { category, MovieCardType } from "../../utils/constant"
import { baseApi } from "../../api/axiosInstance"
import MovieList from "../../components/Home/MovieList"
import LoadMoreBtn from "../../components/Button/LoadMoreBtn"

interface pageType {
	[key: string]: number
}

function Movies() {
	const [filter, setFilter] = useState(category[0].name)
	const [nowPlaying, setNowPlaying] = useState<MovieCardType[]>([])
	const [popular, setPopular] = useState<MovieCardType[]>([])
	const [topRated, setTopRated] = useState<MovieCardType[]>([])
	const [upcoming, setUpcoming] = useState<MovieCardType[]>([])
	const [pages, setPages] = useState<pageType>({ "now_playing": 1, "popular": 1, "top_rated": 1, "upcoming": 1, })

	const toggleSelection = (item: string) => {
		setFilter(item)
	}

	const fetchMovies = async (path: string, pages: number) => {
		try {
			const response = await baseApi.get(`/3/movie/${path}?language=en-US&page=${pages}`)
			console.log(path)
			switch (path) {
				case "now_playing":
					setNowPlaying(prev => [...prev, ...response.data.results])
					break;
				case "popular":
					setPopular(prev => [...prev, ...response.data.results])
					break;
				case "top_rated":
					setTopRated(prev => [...prev, ...response.data.results])
					break;
				case "upcoming":
					setUpcoming(prev => [...prev, ...response.data.results])
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
		fetchMovies(current[0].path, 1);
	}, [filter])

	const handleLoadMore = () => {
		const currentCategory = category.find(item => item.name == filter)
		if (currentCategory) {
			setPages(prev => ({
				...prev, [currentCategory.path]: prev[currentCategory.path] + 1
			}))
			fetchMovies(currentCategory.path, pages[currentCategory.path] + 1)
		}
	}

	return (
		<div className="w-[90%] mx-auto mt-4">
			<h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-yellow-500">Explore Movies</h1>
			<div className="flex flex-wrap mt-2">
				{
					category.map((item, ind) => (
						<div key={ind}>
							<button
								onClick={() => { toggleSelection(item.name) }}
								className="md:text-base sm:text-sm text-xs font-semibold lg:w-44 md:w-40 sm:w-36 h-10 p-2 hover:bg-[#121212]">{item.name}</button>
							<div className={`h-0.5 bg-blue-400  mx-auto ${filter === item.name ? "w-full" : "w-0"} duration-500`}></div>
						</div>
					))
				}
			</div>
			{
				filter === "Now Playing" && <MovieList movies={nowPlaying} />
			}
			{
				filter === "Popular" && <MovieList movies={popular} />
			}
			{
				filter === "Top Rated" && <MovieList movies={topRated} />
			}
			{
				filter === "Upcoming" && <MovieList movies={upcoming} />
			}
			<div onClick={() => { handleLoadMore() }}>
				<LoadMoreBtn />
			</div>
		</div>
	)
}

export default Movies