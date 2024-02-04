import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mobility Vehicle Sales - Adelaide, South Australia",
	description:
		"Mobility Vehicle Sales deals with a range of imported accessible vehicles and welcab, such as Toyota, Nissan, and Daihatsu.",
};

export default function Home() {
	return (
		<>
			<ScrollUp />
			<Hero />
			<Carousel />
			<Features />
			<AboutSectionOne />
			{/* 
      <Video />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
		</>
	);
}
