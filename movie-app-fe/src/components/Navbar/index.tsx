import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-[#121212] py-2">
            <div className="flex justify-between items-center w-[80%] mx-auto">
                <div className="flex space-x-16">
                    <Link to="/">
                        <div className="flex flex-col text-yellow-500">
                            <h1 className="text-[18px] leading-4">ALLABOUT</h1>
                            <h1 className="text-[24px] leading-5 font-semibold">MOVIES</h1>
                        </div>
                    </Link>
                    <Link to="/movies">
                        <button className="text-[18px] text-yellow-500 hover:underline">EXPLORE</button>
                    </Link>
                </div>
                <div className="">
                    <input
                        placeholder="search"
                        className="w-[500px] h-10 bg-black text-[#c2c2c2] text-lg outline-none px-4 placeholder:text-[#646464] rounded-xl"
                        type="text" />
                </div>

            </div>
        </nav>
    )
}

export default Navbar