import { useState } from "react";
import Astro from "./assets/astronaut.png";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Hello</p>
			<img src={Astro} alt="" />
		</div>
	);
}

export default App;
