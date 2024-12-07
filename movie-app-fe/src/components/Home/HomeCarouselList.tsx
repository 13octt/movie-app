import { CarouselMovieType } from "../../utils/constant"
import CarouselMiniCard from "./CarouselMiniCard"

interface HomeCarouselListProps {
    next: number[]
    carouselMovies: CarouselMovieType[]
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {
    return (
        <div>
            <h1 className='text-yellow-500 font-bold text-xl'>Up next</h1>
            {
                next.map((item, ind) => (
                    <CarouselMiniCard carouselMovies={carouselMovies} item={item} ind={ind} />
                ))
            }
        </div>
    )
}

export default HomeCarouselList