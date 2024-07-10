/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "mangareader.tv",
			},
			{
				hostname: "flamecomics.me",
			},
			{
				hostname: "cm.blazefast.co",
			},
			{
				hostname: "flamecomics.com",
			},
			{
				hostname: "sup-proxy.zephex0-f6c.workers.dev",
			},
			{
				hostname: "cdn.readdetectiveconan.com",
			},
			{
				hostname: "manga-scrapers.onrender.com",
			},
			{
				hostname: "cdn.mangaworld.ac",
			},
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

export default nextConfig;
