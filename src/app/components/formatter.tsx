import { Results } from "./types";

import Image from "next/image";
import Link from "next/link";

const ResultsFormatter = async (data: Results, provider: string) => {
	var mangapillCondition: boolean;
	if (provider == "mangapill") {
		mangapillCondition = true;
	}

	return (
		<div className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-5 md:grid-cols-3 scroll-smooth">
			{data &&
				data.results.map((item, index) => (
					<div
						key={index}
						className="card card-compact bg-base-100 w-48 shadow-lg hover:scale-95 transition ease-in-out duration-200 cursor-pointer"
					>
						<figure>
							<Image
								src={
									mangapillCondition
										? `https://manga-scrapers.onrender.com/${provider}/images/${item.image}`
										: item.image
								}
								alt="Manga Poster"
								width={150}
								height={200}
								className="h-64 w-auto"
								priority
							></Image>
						</figure>
						<div className="card-body">
							<p className="text-xl font-semibold text-center max-h-20 h-auto overflow-auto">
								{item.title}
							</p>
							<p className="text-sm text-gray-500">
								Status: {item.status}
							</p>
							<p className="text-sm text-gray-500">
								Chapters: {item.chapters || "?"}
							</p>
							<p className="text-sm text-gray-500">
								Genre: {item.genres ? item.genres[0] : "?"}
							</p>
							<div className="card-actions justify-end">
								<Link href={`/read/${provider}/${item.id}`}>
									<button className="btn btn-primary btn-sm">
										Read more
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ResultsFormatter;
