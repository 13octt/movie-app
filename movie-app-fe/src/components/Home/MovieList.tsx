import { imagepath, MovieCard } from "../../utils/constant";

interface MovieListProps {
	movies: MovieCard[];
}

function MovieList({ movies }: MovieListProps) {
	return (
		<div className="my-14">
			<h1 className="text-3xl font-bold text-yellow-500 my-3">Top Rated Movie</h1>
			<div className="row row-cols-6">
				{
					movies.length > 0 && movies.map((data, index) => (
						<div key={index} className="">
							<div className="relative">
								<img src= {imagepath + data.poster_path} alt="/" />
								<div className="absolute w-full h-20 _carouselGradient bottom-6"></div>
							</div>

						</div>
					))					
				}
			</div>
		</div>
	)
}

export default MovieList