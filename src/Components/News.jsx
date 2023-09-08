import { MdOutlineRocketLaunch } from "react-icons/md";
export default function News() {
	return (
		<div className="max-w-full w-3/4 mx-auto my-0 flex flex-col justify-center items-center py-3">
			<h1 className="text-3xl font-semibold my-3">Space News</h1>
			<div className="grid grid-cols-3">
				<div className="flex flex-col border py-4 px-3 rounded-lg hover:scale-95 duration-300 ease-in-out gap-3 cursor-pointer">
					<h1 className="text-2xl underline">Titlte</h1>
					<div className="flex justify-between">
						<h3 className="text-md flex gap-2 items-center">
							{<MdOutlineRocketLaunch size={18} />}Author
						</h3>
						<h3 className="text-md">published At</h3>
					</div>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis eveniet placeat quidem labore officiis quod
						error fuga? Ea quidem quo nemo ratione quas quia eaque
						tempora eligendi totam, asperiores sequi, ab dolorum
						temporibus assumenda, facere corporis praesentium
						similique eos error.
					</p>
				</div>
			</div>
		</div>
	);
}
