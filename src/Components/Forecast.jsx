import { useState, useEffect } from "react";

export default function Forecast() {
	const [coords, setCoords] = useState({ lat: "", lon: "" });
	const [city, setCity] = useState("");
	const [ans, setAns] = useState("");
	const [isLoaded, setIsLoaded] = useState(true);

	function celsius(num) {
		return Math.floor(num - 273.15);
	}

	async function resultData() {
		const data = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${
				coords.lat
			}&lon=${coords.lon}&appid=${"2aab295c1e12a99da425ebfae1d5e0be"}`
		);
		const resp = await data.json();
		console.log(resp);
		setAns(resp);
		setIsLoaded(true);
		console.log(ans);
	}
	async function testData() {
		try {
			const response = await fetch(
				`https://api.api-ninjas.com/v1/geocoding?city=${city}`,
				{
					method: "GET",
					headers: {
						"X-Api-Key": "Ul0m7HjUTnQ01rmYkHxfvw==CeVr2KYEnTVt5kW4",
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const result = await response.json();
			console.log(result[0]);
			setCoords({
				lat: result[0].latitude,
				lon: result[0].longitude,
			});
			resultData();
		} catch (error) {
			console.error("Error:", error);
		}
	}

	function submitForm(e) {
		e.preventDefault();
		testData();
		setCity("");
		setIsLoaded(false);
	}

	// useEffect(() => {
	// 	testData();
	// }, []);

	return (
		<div className="flex flex-col justify-center items-center mt-6">
			<div>
				<h1 className="text-3xl font-bold">Forecaster</h1>
			</div>
			<div className="max-w-full mx-auto w-1/2 my-0 mt-6 text-xl">
				{isLoaded ? (
					<>
						<form className="bg-black flex flex-col">
							<div className="flex flex-col pl-6">
								<label htmlFor="">City </label>
								<input
									type="text"
									placeholder="Enter City..."
									className="w-1/2 text-black"
									onChange={(e) => setCity(e.target.value)}
									value={city}
								/>
								<button onClick={(e) => submitForm(e)}>
									Submit
								</button>
							</div>
						</form>
						<div className="bg-slate-700 pl-6 flex flex-col gap-3">
							<h3>Name of the City - {ans.name}</h3>
							<h3>
								Current Teamprature - {celsius(ans.main.temp)} C
							</h3>
							<h3>
								Max Temprature - {celsius(ans.main.temp_max)} C
							</h3>
							<h3>
								Max Temprature - {celsius(ans.main.temp_min)} C
							</h3>
							<h3>Humidity - {ans.main.humidity} %</h3>
						</div>
					</>
				) : (
					<div role="status">
						<svg
							aria-hidden="true"
							className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span className="sr-only">Loading...</span>
					</div>
				)}
			</div>
		</div>
	);
}
