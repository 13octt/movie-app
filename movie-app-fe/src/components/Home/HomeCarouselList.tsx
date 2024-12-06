import { useState } from "react"
import { CarouselMovieType } from "../../utils/constant"
import { imagepath } from "../../utils/constant"
import { FiThumbsUp } from "react-icons/fi"

interface HomeCarouselListProps {
    next: number[]
    carouselMovies: CarouselMovieType[]
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {
    const [hover, setHover] = useState<number | null>(null)
    return (
        <div>
            <h1 className='text-yellow-500 font-bold text-xl'>Up next</h1>
            {
                next.map((item, index) => (
                    <div key={index} className="flex gap-2"
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <img src={imagepath + carouselMovies[item]?.poster_path} className="w-[100px]" alt="" />
                        <div className="flex flex-col justify-between py-2">
                            <div className="leading-5">
                                <h1 className={`${hover === index ? "underline" : ""}`}>{carouselMovies[item]?.title}</h1>
                                <h1 className="text-md text-zinc-300 line-clamp-3">{carouselMovies[item]?.overview}</h1>
                            </div>
                            <div className="flex gap-1 text-center ">
                                <FiThumbsUp />
                                <h2>{carouselMovies[item]?.vote_count}</h2>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HomeCarouselList