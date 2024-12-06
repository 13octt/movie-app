import { Category } from "../../utils/constant"

function Movies() {
	return (
		<div className="w-[90%] mx-auto mt-4">
			<h1 className="text-3xl font-bold text-yellow-500">Explore Movies</h1>
			{
				Category.map((item, index) => (
					<div key={index} className="">{item}</div>
				))
			}
		</div>
	)
}

export default Movies