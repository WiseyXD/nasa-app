import { useState } from "react";
import Astro from "./assets/astronaut.png";
import Header from "./Components/Header";
import Body from "./Components/Body";
import News from "./Components/News";
import Footer from "./Components/Footer";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="bodyBG min-h-screen">
				<div className="border-b border-gray-300">
					<Header />
				</div>
				<div>
					<Body />
				</div>
			</div>
			<div className="bg-[#1E1E1E]">
				<News />
			</div>
			<Footer />
		</>
	);
}

export default App;
