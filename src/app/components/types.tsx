export interface Results {
	status: Number;
	results: format[];
}

interface format {
	title: string;
	id: string;
	image: string;
	status: string;
	author?: string[];
	genres?: string[];
	chapters?: string;
}

export interface MangareaderInfo {
	status: Number;
	results: mangareaderesults;
}

interface mangareaderesults {
	image: string;
	title: string;
	status: string;
	author: string;
	genres: string;
	chapters: mangareaderchapter[];
}

interface mangareaderchapter {
	title: string;
	id: string;
}

export interface FlamecomicsInfo {
	status: Number;
	results: flamecomicsresults;
}

interface flamecomicsresults {
	image: string;
	title: string;
	genres: string[];
	description: string;
	type: string;
	status: string;
	year: string;
	author: string;
	artist: string;
	serialization: string;
	chapters: flamecomicschapters[];
}

interface flamecomicschapters {
	id: string;
	title: string;
}

export interface Mangapill {
	status: Number;
	results: mangapillinforesults;
}

interface mangapillinforesults {
	image: string;
	title: string;
	description: string;
	type: string;
	status: string;
	year: string;
	genres: string[];
	chapters: flamecomicschapters[];
}

export interface Mangaworld {
	status: Number;
	results: mangaworldresults;
}

interface mangaworldresults {
	title: string;
	"alt-title": string;
	image: string;
	type: string;
	description: string;
	status: string;
	author: string;
	artist: string;
	genres: string[];
	chapters: flamecomicschapters[];
}
