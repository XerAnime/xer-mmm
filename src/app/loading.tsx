const Loading = async () => {
	return (
		<div className="h-dvh flex flex-row items-center justify-center">
			<span className="loading loading-ball loading-xs"></span>
			<span className="loading loading-ball loading-sm"></span>
			<span className="loading loading-ball loading-md"></span>
			<span className="loading loading-ball loading-lg"></span>
		</div>
	);
};

export default Loading;
