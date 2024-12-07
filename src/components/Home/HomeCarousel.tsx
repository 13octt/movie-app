import { Link } from 'react-router-dom';
import { imagepath } from '../../utils/constant';
import { CarouselMovieType } from '../../utils/constant'
import { FiThumbsUp } from "react-icons/fi";

interface HomeCarouselProps {
    carouselMovies: CarouselMovieType[];
}

function HomeCarousel({ carouselMovies }: HomeCarouselProps) {
    return (
        <div className="carousel-inner h-full">
            {
                carouselMovies.map((movie, ind) => (
                    <Link key={ind} to={`/details/${movie.id}`}>
                        <div className={`carousel-item ${ind == 0 ? "active" : ""} h-full`}>
                            <div className="relative h-full">
                                <img src={imagepath + movie?.backdrop_path} className='w-full h-full object-cover min-h-[300px]' alt="" />
                                <div className={`absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2] `}></div>
                                <div className="absolute bottom-0 h-24 w-full _carouselGradient"></div>
                            </div>
                            <div className="absolute bottom-0 md:flex px-4 gap-4 items-end">
                                <img src={imagepath + movie?.poster_path} alt="Poster" className='md:w-[160px] w-[120px] aspect-[4/5]' />
                                <div className="flex flex-col gap-1">
                                    <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white text-zinc-400'>{movie?.title}</h1>
                                    <h2 className='w-[95%] lg:text-xl md:text-lg tex-md line-clamp-3 text-zinc-400'>{movie?.overview}</h2>
                                    <div className="flex items-center gap-1 text-zinc-400 lg:text-xl md:text-md text-sm">
                                        <FiThumbsUp />
                                        <h3>{movie?.vote_count}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HomeCarousel