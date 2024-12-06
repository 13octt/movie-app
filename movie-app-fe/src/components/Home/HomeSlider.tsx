import { useEffect, useState } from 'react'
import HomeCarousel from './HomeCarousel';
import { baseApi } from '../../api/axiosInstance';
import { CarouselMovie } from '../../utils/constant';
import HomeCarouselList from './HomeCarouselList';

function HomeSlider() {

    const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);
    const [nextMovie, setNextMovie] = useState<number[]>([]);
    const [selected, setSelected] = useState(0);

    console.log(carouselMovies.length);


    useEffect(() => {
        if (carouselMovies.length) {
            const index1 = (selected + 1) % carouselMovies.length;
            const index2 = (selected + 2) % carouselMovies.length;
            const index3 = (selected + 3) % carouselMovies.length;
            setNextMovie([index1, index2, index3]);
        }
    }, [carouselMovies, selected]);

    useEffect(() => {
        const myCarousel = document.getElementById("carouselExample")

        const handleSlide=(event: any) => {
            console.log(event.from, "---", event.to)
            setSelected (event.to)
        }

        if (myCarousel) {
            myCarousel.addEventListener('slid.bs.carousel', handleSlide)
        }

        return () => {
            myCarousel?.removeEventListener('slid.bs.carousel', handleSlide)
        }
    })

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
                <HomeCarouselList next={nextMovie} carouselMovies={carouselMovies} />
            </div>
        </div>
    )
}

export default HomeSlider