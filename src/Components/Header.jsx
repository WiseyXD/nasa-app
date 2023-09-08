import React from "react";
import Logo from "../assets/logo.png";
export default function Header() {
	return (
		<div>
			<div className="max-w-full w-3/4 mx-auto my-0 ">
				<div className="flex justify-between items-center py-6 px-4 ">
					<div>
						<a href="">
							<img src={Logo} alt="" className="" />
						</a>
					</div>
					<div>
						<ul className="flex gap-5">
							<li className="text-xl uppercase">Trivia</li>
							<li className="text-xl uppercase">Space-Gallery</li>
							<li className="text-xl uppercase">Space-gpt</li>
							<li className="text-xl uppercase">Forecast</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
