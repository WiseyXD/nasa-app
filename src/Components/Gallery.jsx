import React, { useEffect, useState } from "react";
import { galleryAPI } from "../utils/api";
export default function Gallery() {
	const [list, setList] = useState([]);

	async function galleryData() {
		const resp = await fetch(galleryAPI);
		const data = await resp.json();
		setList(data);
	}
	console.log(list);

	useEffect(() => {
		galleryData();
	}, []);

	return (
		<div>
			<div className="max-w-full w-3/4 mx-auto my-0 text-center mt-6">
				<div className="my-4">
					<h1 className="text-3xl font-bold">Space Gallery</h1>
				</div>
				<div className="grid grid-cols-3 gap-5 pb-3 max-h-screen overflow-y-scroll">
					{list.map((li) => {
						return (
							<>
								<div className="bg-slate-950 flex flex-col h-[30rem] overflow-y-hidden gap-3">
									<div className="">
										<img src={li.url} alt="" className="" />
									</div>

									<div className="pl-3 flex flex-col gap-y-3 justify-start">
										<h1 className="text-2xl text-left">
											{li.title}
										</h1>
										<div className="flex gap-3">
											<h2>Clicked on : {li.date}</h2>
										</div>
										<p className="text-left">
											{li.explanation}
										</p>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
