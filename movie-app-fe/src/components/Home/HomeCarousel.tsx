import React, { useEffect, useState } from 'react'
import { FiThumbsUp } from "react-icons/fi";
import axios from 'axios'
import { imagepath } from '../../utils/constant';
import { baseApi } from '../../api/axiosInstance';

function HomeCarousel() {

    interface CarouselMovies {
        backdrop_path: string;
        poster_path: string;
        title: string;
        overview: string;
        vote_count: string;
    }

    const [carouselMovies, setCarouselMovies] = useState<CarouselMovies[]>([])

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
        <div className='relative'>
            <div className="relative w-[900px]">
                <img src={imagepath + carouselMovies[0]?.backdrop_path} className='w-full aspect-[7/4]' alt="" />
                <div className="absolute bottom-0 h-24 w-full _carouselGradient"></div>
            </div>
            <div className="absolute bottom-0 flex px-4 gap-4 items-end">
                <img src={imagepath + carouselMovies[0]?.poster_path} alt="Poster" className='w-[160px] aspect-[4/5]' />
                <div className="flex flex-col gap-1">
                    <h1 className='text-4xl text-white text-zinc-400'>{carouselMovies[0]?.title}</h1>
                    <h2 className='w-[500px] text-xl line-clamp-3 text-zinc-400'>{carouselMovies[0]?.overview}</h2>
                    <div className="flex items-center gap-1 text-zinc-400 text-xl">
                        <FiThumbsUp />
                        <h3 className='text-lg'>{carouselMovies[0]?.vote_count}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCarousel