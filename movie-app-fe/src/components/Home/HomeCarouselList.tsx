import { CarouselMovie } from "../../utils/constant"
import { imagepath } from "../../utils/constant"
interface HomeCarouselListProps {
    next : number[]
    carouselMovies: CarouselMovie[]
}

function HomeCarouselList({next, carouselMovies}: HomeCarouselListProps ) {
    console.log(next) 
  return (
    <div>
        <h1 className='text-yellow-500 font-bold text-xl'>Up next</h1>
        {
            next.map((item, index) =>(
                <img src={imagepath + carouselMovies[item]?.poster_path } className="w-[100px]" alt="" />
            ))
        }
    </div>
  )
}

export default HomeCarouselList