"use server";

import {
	Results,
	FlamecomicsInfo,
	MangareaderInfo,
	Mangapill,
	Mangaworld,
} from "./types";

const parent_url = (provider: string, title: string) => {
	return `https://manga-scrapers.onrender.com/${provider}/search/${title}`;
};

export const fetchData = async (title: string, provider: string) => {
	const res = await fetch(parent_url(provider, title), {
		next: { revalidate: 21600 },
	});
	const data: Results = await res.json();
	return data;
};

export const fetchFlameInfo = async (id: string) => {
	const res = await fetch(
		`https://manga-scrapers.onrender.com/flamescans/info/${id}`,
		{ next: { revalidate: 21600 } }
	);
	const data: FlamecomicsInfo = await res.json();
	return data;
};

export const fetchMangareaderInfo = async (id: string) => {
	const res = await fetch(
		`https://manga-scrapers.onrender.com/mangareader/info/${id}`,
		{ next: { revalidate: 21600 } }
	);
	const data: MangareaderInfo = await res.json();
	return data;
};

export const fetchMangapillInfo = async (id: string) => {
	const res = await fetch(
		`https://manga-scrapers.onrender.com/mangapill/info/${id}`,
		{ next: { revalidate: 21600 } }
	);
	const data: Mangapill = await res.json();
	return data;
};

export const fetchMangaWorldInfo = async (id: string) => {
	const res = await fetch(
		`https://manga-scrapers.onrender.com/mangaworld/info/${id}`,
		{ next: { revalidate: 21600 } }
	);
	const data: Mangaworld = await res.json();
	return data;
};

export const imageFetcher = async (id: string, provider: string) => {
	const res = await fetch(
		`https://manga-scrapers.onrender.com/${provider}/pages/${id}`,
		{ cache: "force-cache" }
	);
	const data = await res.json();
	return data;
};

export const MangareaderLatest = async (type: string) => {
	const res = await fetch(
		`https://manga-scrapers.onrender.com/flamescans/sort/${type}`,
		{ next: { revalidate: 21600 } }
	);
	const data = await res.json();
	return data;
};
