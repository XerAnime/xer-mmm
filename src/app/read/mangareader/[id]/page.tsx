import { fetchMangareaderInfo } from "@/app/components/request";
import ChapterSelector from "@/app/components/chapterSelection";

import Image from "next/image";

const MangareaderInfoPage = async ({ params }: { params: { id: string } }) => {
	const data = await fetchMangareaderInfo(params.id);
	return (
		<div className="p-2 lg:w-7/12 m-auto">
			<div className="flex flex-row items-center shadow-2xl p-1">
				<Image
					src={data.results.image}
					width={150}
					height={200}
					alt="Manga Poster"
					className="rounded-md"
				></Image>
				<div className="flex flex-col pl-2">
					<p className="text-3xl font-semibold">
						{data.results.title}
					</p>
					<div className="flex flex-row">
						<div className="badge badge-primary badge-outline">
							{data.results.status}
						</div>
					</div>
				</div>
			</div>

			{/* Tabs */}
			<div role="tablist" className="tabs tabs-lifted tabs-lg mt-1">
				<input
					type="radio"
					name="my_tabs_2"
					role="tab"
					className="tab"
					aria-label="Genres"
				/>
				<div
					role="tabpanel"
					className="tab-content bg-base-100 border-base-300 rounded-box p-6"
				>
					Genres: {data.results.genres}
				</div>

				<input
					type="radio"
					name="my_tabs_2"
					role="tab"
					className="tab"
					aria-label="Chapters"
					defaultChecked
				/>
				<div
					role="tabpanel"
					className="tab-content bg-base-100 border-base-300 rounded-box p-2"
				>
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">Select chapter</span>
							<span className="label-text-alt">
								{data.results.chapters.length} Chapters found
							</span>
						</div>
						<ChapterSelector data={data} provider="mangareader" />
					</label>
				</div>
			</div>
		</div>
	);
};

export default MangareaderInfoPage;
