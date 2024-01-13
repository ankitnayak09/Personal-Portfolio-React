import React from "react";
// import "./Gallery.css";
import Card from "./Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { celebrityImages } from "../Gallery/images";

export default function CelebGallery() {
	return (
		<section className="Gallery" id="gallery">
			<h2 className="text-3xl font-bold text-center mt-8 mb-4">
				Faces of Inspiration: A Gallery of Collaboration and Connection
			</h2>
			<Swiper
				slidesPerView={"auto"}
				centeredSlides={true}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{celebrityImages.map((image) => (
					<SwiperSlide className="!w-auto">
						<div className="relative">
							<img
								src={image.src}
								alt=""
								className="h-96 w-auto mx-auto"
							/>
							<p className="absolute bottom-0 w-full text-white bg-[rgba(0,0,0,0.5)] text-center">
								{image.caption}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
