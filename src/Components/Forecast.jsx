import { useState, useEffect } from "react";

export default function Forecast() {
	const [coords, setCoords] = useState({ lat: "", lon: "" });
	const [city, setCity] = useState("");
	const [ans, setAns] = useState("");
	const [isLoaded, setIsLoaded] = useState(true);
	const url = `https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=${city}&days=3`;
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42047b4750msh234436c97fc8894p1a2e84jsn3df40fb61052',
		'X-RapidAPI-Host': 'apjoy-weather-forecast.p.rapidapi.com'
	}
};
	// function celsius(num) {
	// 	return Math.floor(num - 273.15);
	// }

	async function resultData() {
		const data = await fetch(url, options);
		const resp = await data.json();
		console.log(resp);
		setAns(resp);
		setIsLoaded(true);
		console.log(ans);
	}
	// async function testData() {
	// 	try {
	// 		const response = await fetch(
	// 			`https://api.api-ninjas.com/v1/geocoding?city=${city}`,
	// 			{
	// 				method: "GET",
	// 				headers: {
	// 					"X-Api-Key": "Ul0m7HjUTnQ01rmYkHxfvw==CeVr2KYEnTVt5kW4",
	// 					"Content-Type": "application/json",
	// 				},
	// 			}
	// 		);

	// 		if (!response.ok) {
	// 			throw new Error(`HTTP error! Status: ${response.status}`);
	// 		}

	// 		const result = await response.json();
	// 		console.log(result[0]);
	// 		setCoords({
	// 			lat: result[0].latitude,
	// 			lon: result[0].longitude,
	// 		});
	// 		resultData();
	// 	} catch (error) {
	// 		console.error("Error:", error);
	// 	}
	// }

	function submitForm(e) {
		e.preventDefault();
		resultData();
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
						<form className="bg-black flex flex-col py-5">
							<div className="flex px-6 justify-between">
							
								<input
									type="text"
									placeholder="Enter City..."
									className="w-1/2 rounded-full px-3 text-black"
									onChange={(e) => setCity(e.target.value)}
									value={city}
								/>
								<button onClick={(e) => submitForm(e)} className=" text-black bg-white hover:bg-gray-500 hover:text-black duration:200 px-6 py-2 rounded-full ease-in-out">
									Submit
								</button>
							</div>
						</form>
						<div className="bg-slate-700 pl-6 flex flex-col gap-3 py-3">
							<h3>Name of the City - {ans.city.name}</h3>
							<h3>
								Current Teamprature - {ans.list[0].main.temp} C
							</h3>
							<h3>
								Max Temprature - {(ans.list[0].main.temp_max)} C
							</h3>
							<h3>
								Min Temprature - {(ans.list[0].main.temp_min)} C
							</h3>
							<h3>Humidity - {ans.list[0].main.humidity} %</h3>
						</div>
					</>
				) : (
					<div role="status" className="w-full flex justify-center">
						<svg
							aria-hidden="true"
							className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black"
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
