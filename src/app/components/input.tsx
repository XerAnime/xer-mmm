"use client";

import { SetStateAction, useState } from "react";

import { fetchData } from "./request";
import ResultsFormatter from "./formatter";

const MangaInput = () => {
	const [searchTitle, setSearchTitle] = useState<string>("");
	const [providers, setProvider] = useState<string>("mangapill");
	const [results, setResults] = useState<JSX.Element>(<></>);

	const handleChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setProvider(event.target.value);
		console.log(`Selected: ${event.target.value}`);
	};

	const makeRequest = async (event: {
		key: string;
		code: string | number;
	}) => {
		if (!searchTitle) {
			return;
		}

		if (
			event.code === "Enter" ||
			event.key === "Enter" ||
			event.code === 13
		) {
			setResults(
				<span className="loading loading-infinity loading-lg text-info mt-4"></span>
			);
			const data = await fetchData(searchTitle, providers);
			const format = await ResultsFormatter(data, providers);
			setResults(format);
		}
	};

	return (
		<main>
			<div className="flex flex-row items-center justify-center mt-4 p-0.5">
				<input
					type="search"
					placeholder="Search for mangas here"
					onChange={(event) => {
						setSearchTitle(event.target.value);
					}}
					onKeyDown={async (event) => await makeRequest(event)}
					className="input input-bordered w-full max-w-md"
				/>
				<select
					className="select select-bordered max-w-xs ml-1"
					onChange={handleChange}
				>
					<option value="mangapill">Mangapill</option>
					<option value="mangareader">Mangareader</option>
					<option value="flamescans">Flamecomics</option>
					<option value="mangaworld - italian">mangaworld</option>
				</select>
			</div>
			<div className="flex items-center justify-center">{results}</div>
		</main>
	);
};

export default MangaInput;
