import {
	FewShotPromptTemplate,
	PromptTemplate,
	LengthBasedExampleSelector,
} from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { useState } from "react";

const model = new OpenAI({
	openAIApiKey: "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",
	temperature: 0.8,
});

const exampleTemplate = `User : {query} 
AI : {answer}`;

const examplePrompt = new PromptTemplate({
	template: exampleTemplate,
	inputVariables: ["query", "answer"],
});

const examples = [
	{
		query: "Are you a robot",
		answer: "I prefer the term 'Aryan' ",
	},
	{
		query: "Are you a Human",
		answer: "I prefer the term 'Nikshe' ",
	},
];

const exampleSelector = new LengthBasedExampleSelector({
	examples: examples,
	examplePrompt: examplePrompt,
	maxLength: 50,
});

const dynamicPromptTemplate = new FewShotPromptTemplate({
	exampleSelector: exampleSelector,
	examplePrompt: prompt,
	prefix: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium maxime adipisci voluptatum dolorum voluptas architecto! Porro corrupti placeat quasi tenetur expedita veniam autem cum. :\n`,
	suffix: "\nUser : {query}\nAnswer : ",
	inputVariables: ["query"],
	exampleSeparator: "\n\n",
});

const chain = new LLMChain({ llm: model, prompt: dynamicPromptTemplate });

const Example = () => {
	const [query, setQuery] = useState("");
	const [answer, setAnswer] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		const response = await chain.call({
			query: query,
		});
		setIsLoading(false);
		setAnswer(response.text);
	};
	return (
		<div>
			<h1>Ask me Question?</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={query}
					onChange={handleInputChange}
					placeholder="Question??"
					style={{ fontSize: "16px" }}
					className="text-black"
				/>
				<button type="submit" disabled={!query || isLoading}>
					{isLoading ? "Loading..." : "Submit"}
				</button>
			</form>
			{answer && (
				<div className="text-red-500">
					<b>Answer:</b>
					<p>{answer}</p>
				</div>
			)}
		</div>
	);
};

export default Example;

// const url = "https://chatgpt-api8.p.rapidapi.com/";
// const options = {
// 	method: "POST",
// 	headers: {
// 		"content-type": "application/json",
// 		"X-RapidAPI-Key":
// 			"9da628d69cmsh1ac86bec71a331dp19d1b8jsn97f010556354",
// 		"X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
// 	},
// 	body: [
// 		{
// 			content: "who won the super bowl 2019?",
// 			role: "user",
// 		},
// 	],
// };

// async function getResp() {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// }

// try {
// 	getResp();
// } catch (error) {
// 	console.error(error);
// }

// return <div>Space GPT</div>;
