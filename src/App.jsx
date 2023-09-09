import { useState } from "react";
import Astro from "./assets/astronaut.png";
import Header from "./Components/Header";
import Body from "./Components/Body";
import News from "./Components/News";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Quiz from "./Components/Quiz";
import Map from "./Components/Map";
import Example from "./Components/Example";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Forecast from "./Components/Forecast";

function App() {
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
			element: <Example />,
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
