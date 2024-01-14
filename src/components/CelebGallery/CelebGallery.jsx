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
			<h2 className="text-xl md:text-3xl font-bold text-center mt-8 mb-4">
				Inspiration: Youtubers and Youth Icons
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
					delay: 2000,
					disableOnInteraction: true,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper h-40 md:h-full"
			>
				{celebrityImages.map((image) => (
					<SwiperSlide className="!w-auto">
						<div className="relative">
							<img
								src={image.src}
								alt=""
								className="h-40 md:h-96 w-auto mx-auto object-contain"
							/>
							<p className="text-xs line-clamp-2 md:line-clamp-none absolute bottom-0 w-full text-white bg-[rgba(0,0,0,0.5)] text-center">
								{image.caption}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
