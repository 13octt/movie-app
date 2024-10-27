import React from 'react'
import { FiThumbsUp } from "react-icons/fi";
function HomeCarousel() {
    return (
        <div className='relative'>
            <div className="relative w-[900px]">
                <div className="block bg-red-300 aspect-[7/4]"></div>
                <div className="absolute bottom-0 h-24 w-full _carouselGradient"></div>
            </div>
            <div className="absolute bottom-0 flex px-4 gap-4 items-end">
                <div className="block w-[160px] aspect-[4/5] bg-blue-400"></div>
                <div className="flex flex-col gap-1">
                    <h1 className='text-4xl text-white text-zinc-400'>Lorem, ipsum dolor.</h1>
                    <h2 className='w-[500px] text-xl line-clamp-3 text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et nisi, vero dolorum est eius corporis eveniet corrupti ipsa. Velit, odio itaque. Quos animi tempore nemo omnis itaque, minima doloremque.</h2>
                    <div className="flex items-center gap-1 text-zinc-400 text-xl">
                        <FiThumbsUp />
                        <h3 className='text-lg'>547</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCarousel