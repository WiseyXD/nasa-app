import { useState } from "react";
export default function Quiz() {
	const [showFinalResults, setFinalResults] = useState(false);
	const [score, setScore] = useState(0);
	const [showList, setShowList] = useState(false);
	const [CurrentQuestion, setCurrentQuestion] = useState(0);

	const questions = [
		{
			text: "The following is not NASA space shuttle?",
			options: [
				{ id: 0, text: "a) Discovery", isCorrect: false },
				{ id: 1, text: "b) Endeavour", isCorrect: false },
				{ id: 2, text: "c) Challenger", isCorrect: false },
				{ id: 3, text: "d) Fortuner", isCorrect: true },
			],
		},
		{
			text: "The first flight of the space shuttle program by NASA was launched in?",
			options: [
				{ id: 0, text: "1979", isCorrect: false },
				{ id: 1, text: "1980", isCorrect: false },
				{ id: 2, text: "1981", isCorrect: true },
				{ id: 3, text: "1982", isCorrect: false },
			],
		},
		{
			text: "The observation of objects in space is known as?",
			options: [
				{ id: 0, text: "Astronomy", isCorrect: true },
				{ id: 1, text: "Telescopy", isCorrect: false },
				{ id: 2, text: "Space Exploration", isCorrect: false },
				{ id: 3, text: "Meteorology", isCorrect: false },
			],
		},
		{
			text: "The first human-made object to orbit Earth?",
			options: [
				{ id: 0, text: "Apollo 1", isCorrect: false },
				{ id: 1, text: "Sputnik 1", isCorrect: true },
				{ id: 2, text: "Salyut 1", isCorrect: false },
				{ id: 3, text: "None Of The Above", isCorrect: false },
			],
		},
		{
			text: "First moon landing mission was launched by?",
			options: [
				{ id: 0, text: "USA", isCorrect: true },
				{ id: 1, text: "USSR", isCorrect: false },
				{ id: 2, text: "China", isCorrect: false },
				{ id: 3, text: "France", isCorrect: false },
			],
		},
		{
			text: "The first animal sent in orbit?",
			options: [
				{ id: 0, text: "Dog", isCorrect: true },
				{ id: 1, text: "Cat", isCorrect: false },
				{ id: 2, text: "Sheep", isCorrect: false },
				{ id: 3, text: "Goat", isCorrect: false },
			],
		},
		{
			text: "The first successful human spaceflight was?",
			options: [
				{ id: 0, text: "Sputnik 1", isCorrect: false },
				{ id: 1, text: "Sputnik 2", isCorrect: false },
				{ id: 2, text: "Apollo 1", isCorrect: false },
				{ id: 3, text: "Vostok 1", isCorrect: true },
			],
		},
		{
			text: "The first US person launched into space?",
			options: [
				{ id: 0, text: "Alan Shepherd", isCorrect: true },
				{ id: 1, text: "Neil Armstrong", isCorrect: false },
				{ id: 2, text: "John Glenn", isCorrect: false },
				{ id: 3, text: "None Of The Above", isCorrect: false },
			],
		},
		{
			text: "First woman in space?",
			options: [
				{ id: 0, text: "Valentina Tereshkova", isCorrect: true },
				{ id: 1, text: "Svetlana Savitskaya", isCorrect: false },
				{ id: 2, text: "Yelena Serova", isCorrect: false },
				{ id: 3, text: "Sally Ride", isCorrect: false },
			],
		},
		{
			text: "First artificial satellite of the moon",
			options: [
				{ id: 0, text: "Luna 2", isCorrect: false },
				{ id: 1, text: "Luna 8", isCorrect: false },
				{ id: 2, text: "Luna 9", isCorrect: false },
				{ id: 3, text: "Luna 10", isCorrect: true },
			],
		},
	];

	// Helper Functions
	const optionClicked = (isCorrect) => {
		console.log(isCorrect);
		if (isCorrect) {
			setScore(score + 1);
		}

		if (CurrentQuestion + 1 < questions.length) {
			setCurrentQuestion(CurrentQuestion + 1);
		} else {
			setFinalResults(true);
		}
	};

	const restartGame = () => {
		setScore(0);
		setCurrentQuestion(0);
		setFinalResults(false);
	};

	return (
		<div className="w-full flex flex-col justify-center items-center pb-4">
			<h1 className="text-3xl font-bold my-2">SPACE TRIVIA</h1>
			<div className="bg-black max-w-full mx-auto w-3/4 md:w-1/2 lg:[400px] my-0 mt-6 py-3 pb-6 text-xl flex flex-col justify-start items-center border">
				{/* 1.Header */}

				{/* 2. Current Score */}
				<h2 className="my-3 text-2xl font-semibold">
					Current Score: {score}
				</h2>

				{showFinalResults ? (
					/* 4. Final Result */
					<div className="flex flex-col justify-center items-center gap-3">
						<h1 className="text-xl font-semibold">Final Result</h1>
						<h2>
							{score} out of {questions.length} correct - (
							{(score / questions.length) * 100}%)
						</h2>
						<button
							className="bg-white text-black hover:text-white hover:bg-gray-500 duration-300 ease-in-out hover:cursor-pointer px-6 py-2 rounded-full"
							onClick={() => setShowList(!showList)}
						>
							{!showList ? "Show" : "Hide"} Answers
						</button>
						{showList ? (
							<ul className="flex flex-col">
								<li>Q1{")"}Fotuner</li>
								<li>Q2{")"}1981</li>
								<li>Q3{")"}Astronomy</li>
								<li>Q4{")"}Sputnik 1</li>
								<li>Q5{")"}USA</li>
								<li>Q6{")"}DOG</li>
								<li>Q7{")"}Vostok 1</li>
								<li>Q8{")"}Alan Shepherd</li>
								<li>Q9{")"}Valentina Tereshkova</li>
								<li>Q10{")"}Luna 10</li>
							</ul>
						) : null}
						<button
							onClick={() => restartGame()}
							className="bg-white text-black hover:text-white hover:bg-gray-500 duration-300 ease-in-out hover:cursor-pointer px-6 py-2 rounded-full"
						>
							Restart Game
						</button>
					</div>
				) : (
					/* 3. Question Card */
					<div className="flex flex-col gap-3 pl-3">
						<div className="flex gap-2">
							<h2>
								Q{CurrentQuestion + 1}
								{")"}
							</h2>
							<h3 className="question-text">
								{questions[CurrentQuestion].text}
							</h3>
						</div>
						<ul className="lg:grid lg:grid-cols-2 flex flex-col mt-5  justify-center items-center gap-5">
							{questions[CurrentQuestion].options.map(
								(option) => {
									return (
										<li
											onClick={() =>
												optionClicked(option.isCorrect)
											}
											key={option.id}
											className="text-black bg-white hover:bg-gray-500 hover:text-white hover:cursor-pointer px-3 py-2 rounded-full ease-in-out duration-200"
										>
											{option.text}
										</li>
									);
								}
							)}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
