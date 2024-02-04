import Image from "next/image";
import React from "react";
const list = [
	{ src: "/carLogo/alphard.png" },
	{ src: "/carLogo/cube.png" },
	{ src: "/carLogo/noah.jpg" },
	{ src: "/carLogo/porte.png" },
	{ src: "/carLogo/ractis.jpg" },
	{ src: "/carLogo/vellfire.jpg" },
	{ src: "/carLogo/voxy.png" },
	{ src: "/carLogo/hiace.png" },
];

const Carousel = () => {
	return (
		<div className="flex w-full items-center justify-center pt-6">
			<div className="flex h-20 max-w-screen-2xl space-x-4  overflow-hidden shadow-inner shadow-white lg:h-auto">
				<div className="animate-loop-scroll flex flex-shrink-0 flex-grow-0 space-x-4">
					{list.map((item, index) => (
						<Image
							key={index + "a"}
							src={item.src}
							alt="logo"
							width={200}
							height={100}
							className="h-20 w-40 lg:h-full lg:w-60 "
							style={{ objectFit: "contain" }}
						/>
					))}
				</div>
				<div className="animate-loop-scroll flex flex-shrink-0 flex-grow-0  space-x-4">
					{list.map((item, index) => (
						<Image
							key={index + "b"}
							src={item.src}
							alt="logo"
							width={200}
							height={50}
							className="h-20 w-40 lg:h-full lg:w-60 "
							style={{ objectFit: "contain" }}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
