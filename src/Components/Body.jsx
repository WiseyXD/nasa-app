import React from "react";
import Astro from "../assets/astronaut.png";
import News from "./News";
export default function Body() {
	return (
		<>
			<div className="my-20">
				<div className="max-w-full w-3/4 mx-auto my-0">
					<div className="flex justify-between items-center ">
						<div className="basis-1/2">
							<h2 className="text-2xl font-semibold">
								Space Exploration Technologies Corp. trading as
								SpaceX, is a private American aerospace
								manufacturer headquartered California.
							</h2>
							<button className="bg-white text-black mt-10 px-6 py-1 rounded-full text-xl">
								Get Started
							</button>
						</div>
						<div className="basis-1/2">
							<img src={Astro} alt="" className="w-[80%]" />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#1E1E1E]">
				<News />
			</div>
		</>
	);
}
