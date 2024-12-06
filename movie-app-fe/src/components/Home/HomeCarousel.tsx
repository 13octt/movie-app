import { imagepath } from '../../utils/constant';
import { CarouselMovieType } from '../../utils/constant'
import { FiThumbsUp } from "react-icons/fi";

interface HomeCarouselProps {
    carouselMovies: CarouselMovieType[];
}

function HomeCarousel({ carouselMovies }: HomeCarouselProps) {
    return (
        <div className="carousel-inner">
            {
                carouselMovies.map((movie, index) => (

                    <div key={index} className={`carousel-item ${index == 0 ? "active" : ""}  `}>
                        {
                            <div>
                                <div className="relative ">
                                    <img src={imagepath + movie?.backdrop_path} className='w-full aspect-[7/4]' alt="" />
                                    <div className={`absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2] `}></div>
                                    <div className="absolute bottom-0 h-24 w-full _carouselGradient"></div>
                                </div>
                                <div className="absolute bottom-0 flex px-4 gap-4 items-end">
                                    <img src={imagepath + movie?.poster_path} alt="Poster" className='w-[160px] aspect-[4/5]' />
                                    <div className="flex flex-col gap-1">
                                        <h1 className='text-4xl text-white text-zinc-400'>{movie?.title}</h1>
                                        <h2 className='w-[500px] text-xl line-clamp-3 text-zinc-400'>{movie?.overview}</h2>
                                        <div className="flex items-center gap-1 text-zinc-400 text-xl">
                                            <FiThumbsUp />
                                            <h3 className='text-lg'>{movie?.vote_count}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
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