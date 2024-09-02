const Loader = () => {
	return (
		<div className="flex items-center justify-center h-screen dark:bg-portfolio-black bg-portfolio-antiFlashWhite">
		<div className="relative">
			<div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-portfolio-black"></div>
			<div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-portfolio-orange animate-spin">
			</div>
		</div>
	</div>
	);
};

export default Loader;
