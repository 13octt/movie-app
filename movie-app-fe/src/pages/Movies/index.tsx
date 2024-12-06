import { useState } from "react"
import { Category } from "../../utils/constant"

function Movies() {
	const [filter, setFilter] = useState(Category[0])
	const toggleSelection = (item: string) => {
		setFilter(item)
		console.log("item", item)
	}
	return (
		<div className="w-[90%] mx-auto mt-4">
			<h1 className="text-3xl font-bold text-yellow-500">Explore Movies</h1>
			<div className="flex mt-2">
				{
					Category.map((item, index) => (
						<div key={index}>
							<button
								onClick={() => { toggleSelection(item) }}
								className="text-base font-semibold w-44 h-10 hover:bg-[#121212]">{item}</button>
							<div className={`h-0.5 bg-blue-400  mx-auto ${filter === String(item) ? "w-full" : "w-0"} duration-500`}></div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Movies