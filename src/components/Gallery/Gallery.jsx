import React from "react";
// import "./Gallery.css";
import { images } from "./images";
import Card from "./Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Gallery() {
	return (
		<section className="Gallery" id="gallery">
			<h2 className="text-3xl font-bold text-center mt-8 mb-4">
				Captivating Connections: A Gallery of Community Impact
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
				{images.map((image) => (
					<SwiperSlide className="!w-auto">
						<img
							src={image.src}
							alt=""
							className="h-96 w-auto mx-auto"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
