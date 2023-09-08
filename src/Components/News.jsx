import React from "react";

export default function News() {
	return (
		<div className="max-w-full w-3/4 mx-auto my-0 flex flex-col justify-center items-center">
			<h1>Space News</h1>
			<div className="grid grid-cols-3">
				<div className="flex flex-col">
					<h1>Titlte</h1>
					<h3>Author</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex laboriosam qui deleniti autem omnis vitae. Cupiditate
						a itaque porro officiis.
					</p>
				</div>
			</div>
		</div>
	);
}
