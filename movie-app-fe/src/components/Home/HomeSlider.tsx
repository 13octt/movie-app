import { useEffect, useState } from 'react'
import HomeCarousel from './HomeCarousel';
import { baseApi } from '../../api/axiosInstance';
import { CarouselMovie } from '../../utils/constant';

function HomeSlider() {

    const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([])

    const fetchUpcoming = async () => {
        try {
            const response = await baseApi.get("/3/movie/upcoming?language=en-US&page=1")
            console.log(response.data.results)
            setCarouselMovies(response.data.results)

        } catch (err) {
            console.log("fetch upcomming movies error", err)
        }
    }

    useEffect(() => {
        fetchUpcoming()
    }, [])

    return (
        <div className='relative w-[900px]'>

            <div id="carouselExample" className="carousel slide">
                <HomeCarousel carouselMovies={carouselMovies} />
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HomeSlider