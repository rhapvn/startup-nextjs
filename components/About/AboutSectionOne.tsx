import Image from "next/image";
import { FC } from "react";

const aboutCardData = [
	{
		src: "/carImage/fairPrice.webp",
		title: "Fair Price",
		content: "We offer a fair price for all our vehicles.",
	},
	{
		src: "/carImage/quality.webp",
		title: "Quality",
		content: "Selected with care and 25 years of experience in Japanese car market.",
	},
	{
		src: "/carImage/needs.png",
		title: "Meat Your Needs",
		content: "Vehicles tailored to your needs and budget will be ready for you.",
	},
];

type AboutCardProps = {
	src: string;
	title: string;
	content: string;
};
const AboutCard: FC<AboutCardProps> = ({ src, title, content }) => {
	return (
		<div className="block max-w-96 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
			<div className=" flex flex-col items-center justify-center">
				<div className="flex w-full items-center justify-start">
					<h5 className="p-4 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{title}</h5>
				</div>
				<Image
					className="h-full max-h-full w-full max-w-full"
					src={src}
					alt=""
					width={200}
					height={160}
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className="p-6">
				<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 lg:text-xl">{content}</p>
			</div>
		</div>
	);
};

const AboutSectionOne = () => {
	return (
		<section id="about" className="flex w-full flex-col items-center justify-center pb-28 pt-16 md:pt-20 lg:pt-28">
			<div className="container flex w-full flex-col items-center justify-between gap-16">
				<div className="flex max-w-screen-2xl items-center justify-center">
					<div className={`wow fadeInUp mx-auto w-full text-center`} data-wow-delay=".1s">
						<h2 className=" text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
							Everything is for your mobility...
						</h2>
					</div>
				</div>
				<div className="flex w-full flex-col justify-between lg:flex-row">
					{aboutCardData.map((item, index) => (
						<AboutCard key={index + "aboutCard"} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutSectionOne;
