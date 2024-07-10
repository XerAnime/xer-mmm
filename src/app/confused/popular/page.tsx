import ResultsFormatter from "../../components/formatter";
import { MangareaderLatest } from "../../components/request";
import Link from "next/link";

const FlamescansPopular = async () => {
	const data = await MangareaderLatest("popular");
	const format = await ResultsFormatter(data, "flamescans");

	return (
		<div className="flex flex-col items-center">
			<div className="breadcrumbs text-sm mt-4">
				<ul>
					<li>
						<Link href={"/"}>Homepage</Link>
					</li>
					<li>
						<a>Popular</a>
					</li>
				</ul>
			</div>
			<div className="flex items-center justify-center">{format}</div>
		</div>
	);
};

export default FlamescansPopular;
