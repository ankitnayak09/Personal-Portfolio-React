import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { celebrityImages, facultyImages } from "../Gallery/images";

export default function CollegeGallery() {
	return (
		<section className="Gallery" id="gallery">
			<h2 className="text-xl md:text-3xl font-bold text-center mt-8 mb-4">
				Institutional Leaders: University's Inspiring Minds
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
				className="mySwiper h-60 md:h-auto"
			>
				{facultyImages.map((image) => (
					<SwiperSlide className="!w-auto">
						<div className="relative">
							<img
								src={image.src}
								alt=""
								className="h-60 md:h-96 w-auto mx-auto"
							/>
							<p className="text-xs md:text-base absolute bottom-0 w-full text-white bg-[rgba(0,0,0,0.5)] text-center">
								{image.caption}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
