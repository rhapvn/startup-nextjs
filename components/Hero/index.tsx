const Hero = () => {
	return (
		<>
			<section
				id="home"
				className="relative z-10 overflow-hidden bg-white bg-[url('/family-wheelchair-van-preowned-vehicle.webp')] bg-cover bg-center  pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[130px] xl:pb-[160px] xl:pt-[140px] 2xl:pb-[200px] 2xl:pt-[160px]"
			>
				<div className="container">
					<div className="-mx-4 flex flex-wrap">
						<div className="w-full px-4">
							<div className="wow fadeInUp mx-auto max-w-7xl   text-center" data-wow-delay=".2s">
								<h1 className="text mb-5 pb-10 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
									Mobility will get you anywhere
								</h1>
								<div className="flex flex-col items-end justify-center gap-2 ">
									<div className="mt-auto w-1/2 rounded-md border-2 border-white/30 bg-white/40 text-base !leading-relaxed text-black shadow-md shadow-slate-400 backdrop-blur-sm dark:text-body-color-dark sm:text-lg md:text-xl lg:w-1/3">
										<div>
											There is no one-size-fits-all model.<br></br> We match a vehicle exactly suitable to your needs.
											We assist you in making wheelchair vehicle travel possible.
										</div>
										<div>
											Imported vehicles are hand picked from Japan to our high standards, we have 25 years vehicle
											importing experience. Wheelchair accessible vehicles are always ready to go.
										</div>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
