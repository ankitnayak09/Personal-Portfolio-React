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
			{/* <div class="row">
				<div class="column">
					{images["column1"].map((img) => (
						<Card img={img} />
					))}
				</div>
				<div class="column">
					{images["column2"].map((img) => (
						<Card img={img} />
					))}
				</div>
				<div class="column">
					{images["column3"].map((img) => (
						<Card img={img} />
					))}
				</div>
			</div> */}
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
					<SwiperSlide>
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
