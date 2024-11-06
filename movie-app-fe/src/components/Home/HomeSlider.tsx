import { useEffect, useState } from 'react'
import HomeCarousel from './HomeCarousel';
import { baseApi } from '../../api/axiosInstance';
import { CarouselMovie } from '../../utils/constant';
import HomeCarouselList from './HomeCarouselList';

function HomeSlider() {

    const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([])
    const [nextMovie, setNextMovie] = useState<number[]>([1, 2, 3])

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
        <div className="row">
            <div className='relative col-8'>

                <div id="carouselExample" className="carousel slide">
                    <HomeCarousel carouselMovies={carouselMovies} />

                </div>
            </div>

            <div className="col-4">
                <HomeCarouselList next = {nextMovie} carouselMovies={carouselMovies} />
            </div>
        </div>
    )
}

export default HomeSlider