import React from "react";
import Logo from "../assets/logo.png";

export default function Header() {
	return (
		<div>
			<div className="max-w-full w-3/4 mx-auto my-0 ">
				<div className="flex justify-between items-center py-6 px-4 ">
					<div>
						<a href="/">
							<img src={Logo} alt="" className="" />
						</a>
					</div>
					<div>
						<ul className="flex gap-5">
							<a href="/quiz">
								<li className="text-xl uppercase">Trivia</li>
							</a>
							<a href="/gallery">
								<li className="text-xl uppercase">
									Space-Gallery
								</li>
							</a>
							<a href="/space">
								<li className="text-xl uppercase">Space-gpt</li>
							</a>
							<a href="/forecast">
								<li className="text-xl uppercase">Forecast</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
