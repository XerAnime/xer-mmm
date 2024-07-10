"use client";
import {
	MangareaderInfo,
	FlamecomicsInfo,
	Mangapill,
	Mangaworld,
} from "./types";
import { imageFetcher } from "./request";
import ImageDisplay from "./imagesDisplay";

import { SetStateAction, useEffect, useState } from "react";

const ChapterSelector = ({
	data,
	provider,
}: {
	data: MangareaderInfo | FlamecomicsInfo | Mangapill | Mangaworld;
	provider: string;
}) => {
	const [showImages, setImages] = useState<JSX.Element>(<></>);
	const [loading, setLoading] = useState<JSX.Element>(<></>);
	const [nextId, setNextId] = useState<number>(0);
	const [currentChapter, setCurrentChapter] = useState<string>("");

	const firstId = data.results.chapters[0].id;
	useEffect(() => {
		setTimeout(function () {
			getImages(firstId);
		}, 500);
		setCurrentChapter(data.results.chapters[0].title);
	}, [firstId]);

	const imagesLoading = (message: string) => (
		<div className="toast toast-end">
			<div className="alert alert-info">
				<span>{message}</span>
			</div>
		</div>
	);

	const imageLoaded = (message: string) => (
		<div className="toast toast-end">
			<div className="alert alert-success">
				<span>{message}</span>
			</div>
		</div>
	);

	const getImages = async (id: string) => {
		var loading = (
			<span className="loading loading-infinity loading-lg mt-2"></span>
		);
		setImages(loading);
		setLoading(imagesLoading(`Loading Images.`));
		const data = await imageFetcher(id, provider);
		const format = await ImageDisplay(data, provider);
		setImages(format);
		setLoading(imageLoaded("Images loaded successfully."));
		setTimeout(function () {
			setLoading(<></>);
		}, 2000);
	};

	return (
		<div>
			<select
				className="select select-bordered w-full"
				onChange={async (event) => {
					const selectedKey: SetStateAction<string> | undefined =
						event.target.options[event.target.selectedIndex].dataset
							.key;
					const nextIndex = selectedKey ? Number(selectedKey) + 1 : 1;
					setNextId(nextIndex);
					setCurrentChapter(
						data.results.chapters[Number(selectedKey)].title
					);
					getImages(event.target.value);
				}}
			>
				{data.results.chapters &&
					data.results.chapters.map((item, index) => (
						<option value={item.id} data-key={index} key={index}>
							{item.title}
						</option>
					))}
			</select>
			<p className="p-1 text-sm m-0 mt-1">Reading {currentChapter}</p>
			<div className="flex items-center flex-col justify-center">
				<button
					className="btn btn-neutral btn-sm mt-2 w-full"
					onClick={async () => {
						await getImages(data.results.chapters[nextId].id);
						setCurrentChapter(data.results.chapters[nextId].title);
						setNextId(nextId + 1);
					}}
				>
					Next Chapter
				</button>
				<div
					className="w-full flex flex-col items-center"
					onClick={(e) => e.preventDefault()}
				>
					{showImages}
				</div>
				<button
					className="btn btn-neutral btn-sm mt-2 w-full"
					onClick={async () => {
						await getImages(data.results.chapters[nextId].id);
						setCurrentChapter(data.results.chapters[nextId].title);
						setNextId(nextId + 1);
					}}
				>
					Next Chapter
				</button>
			</div>
			{loading}
		</div>
	);
};

export default ChapterSelector;
