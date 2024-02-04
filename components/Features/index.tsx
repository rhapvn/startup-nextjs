import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
	return (
		<>
			<section id="features" className="py-16 md:py-20 lg:py-28">
				<div className="container">
					<SectionTitle title="Concierge" paragraph="" center />

					<div className=" flex w-full flex-col lg:flex-row-reverse">
						<div className="w-full px-4 lg:w-1/3 lg:px-0">
							<Image src="/headShot.png" alt="logo" width={200} height={50} className="w-full " />
							<div className=" flex justify-center text-3xl">Andrew Coxon</div>
						</div>
						<div className="w-full p-4 text-2xl lg:w-2/3">
							<div className="space-y-4 rounded-sm border border-slate-200 p-4">
								<p> Our service is free with no obligation, but want to find the perfect vehicle for you.</p>

								<p className="hidden lg:block">
									We stock popular models such as the Toyota Porte, Alphard, Vellfire as well as Nissan, Mazda and VW.{" "}
								</p>

								<p>
									You can try fantastic vehicles, or we are happy to visit you and demonstrate the wonderful features
									and benefits. As we have seen various needs and cases for 25 years, we can suggest the best option for
									your situation.
								</p>

								<p className="hidden lg:block">
									For interstate buyers, vehicles can be transported all over Australia to your door, or we can pick you
									up at the Adelaide Airport. You can drive home in your new vehicle.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Features;
