import { useState } from "react";
import Astro from "./assets/astronaut.png";
import Header from "./Components/Header";
import Body from "./Components/Body";
import News from "./Components/News";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Quiz from "./Components/Quiz";
import Map from "./Components/Map";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Forecast from "./Components/Forecast";
import SpaceGPT from "./Components/SpaceGPT";
function App() {
	const [count, setCount] = useState(0);
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Body />,
		},
		{
			path: "/gallery",
			element: <Gallery />,
		},
		{
			path: "/quiz",
			element: <Quiz />,
		},
		{
			path: "/map",
			element: <Map />,
		},
		{
			path: "/forecast",
			element: <Forecast />,
		},
		{
			path: "/space",
			element: <SpaceGPT />,
		},
	]);

	return (
		<>
			<div className="bodyBG min-h-screen">
				<div className="border-b border-gray-300">
					<Header />
				</div>
				<div>
					<RouterProvider router={router} />
				</div>
			</div>

			<div>
				<Footer />
			</div>
		</>
	);
}

export default App;
