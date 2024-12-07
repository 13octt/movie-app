import { useState } from "react"
import { FiThumbsUp } from "react-icons/fi"
import { Link } from "react-router-dom"
import { imagepath } from "../../utils/constant"
import { CarouselMovieType } from "../../utils/constant"

interface CarouselMiniCardProps {
    carouselMovies: CarouselMovieType[];
    item: number;
    ind: number;

}

function CarouselMiniCard({ carouselMovies, item, ind }: CarouselMiniCardProps) {
    const [hover, setHover] = useState<number | null>(null)

    return (
        <Link key={ind} to={`/details/${carouselMovies[item].id}`}>
            <div className="flex gap-2"
                onMouseEnter={() => setHover(ind)}
                onMouseLeave={() => setHover(null)}
            >

                <img src={imagepath + carouselMovies[item]?.poster_path} className="w-[100px]" alt="" />
                <div className="flex flex-col justify-between py-2">
                    <div className="leading-5">
                        <h1 className={`${hover === ind ? "underline" : ""}`}>{carouselMovies[item]?.title}</h1>
                        <h1 className="text-md text-zinc-300 line-clamp-3">{carouselMovies[item]?.overview}</h1>
                    </div>
                    <div className="flex gap-1 text-center ">
                        <FiThumbsUp />
                        <h2>{carouselMovies[item]?.vote_count}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CarouselMiniCard