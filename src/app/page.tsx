import Link from "next/link";
import MangaInput from "./components/input";

export default function Home() {
	return (
		<main>
			{/* Welcome */}
			<div className="flex flex-col items-center mt-4">
				<h3 className="font-semibold text-2xl lg:text-3xl">
					Welcome to MangaThingy
				</h3>
				<p className="text-xs mt-2 text-gray-600">
					your one stop for all your manga needs
				</p>

				<div className="mt-2">
					<Link href="/confused/popular">
						<button className="btn btn-sm btn-primary">
							Popular
						</button>
					</Link>
					<Link href="/confused/latest">
						<button className="btn btn-sm btn-info ml-2">
							Latest
						</button>
					</Link>
				</div>
			</div>

			<div>
				<MangaInput />
			</div>
		</main>
	);
}
