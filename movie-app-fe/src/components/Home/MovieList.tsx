import { MovieCardType } from "../../utils/constant";
import MovieCard from "./MovieCard";

interface MovieListProps {
	movies: MovieCardType[];
}

function MovieList({ movies }: MovieListProps) {
	return (
		<div className="my-14">
			<h1 className="text-3xl font-bold text-yellow-500 my-3">Top Rated Movie</h1>
			<div className="row row-cols-6">
				{
					movies.length > 0 && movies.map((data, index) => (
						<MovieCard key={index} movieData={data}/>
					))
				}
			</div>
		</div>
	)
}

export default MovieList