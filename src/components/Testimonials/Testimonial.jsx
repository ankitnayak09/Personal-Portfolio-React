import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import testimonial1 from "../../img/testimonial1.jpeg";
import testimonial2 from "../../img/testimonial2.jpeg";
import testimonial3 from "../../img/testimonial3.webp";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
	const clients = [
		{
			img: testimonial1,
			name: "Shashank Mishra",
			url: "https://www.linkedin.com/in/souhardya-bose/details/recommendations",
			review: "I had a great experience working with Souhardya, he is very passionate and innovative with community building skills. His presence always made me comfortable in large scale events. Keep it up Souhardya!!",
		},
		{
			img: testimonial2,
			name: "Jaideep Prasad",
			url: "https://www.linkedin.com/in/souhardya-bose/details/recommendations",
			review: "He is a very dedicated team player with skils to match with it. Souhardya will be a great fit to any organization and help in its growth. Wish him all the best!",
		},
		{
			img: testimonial3,
			name: "Abhishek Mitra",
			url: "https://www.linkedin.com/in/souhardya-bose/details/recommendations",
			review: "Out of the box thinker and a team player to have in the team. Young chap like him who is matured and professional which is really good to see. Wish him a very bright future ahead. All the best. ",
		},
	];

	return (
		<div className="t-wrapper" id="testimonial">
			<div className="t-heading">
				<span>Empowering Words:</span>
				<span> Testimonials from Leaders </span>
				<span>and Learners</span>
				<div
					className="blur t-blur1"
					style={{ background: "var(--purple)" }}
				></div>
				<div
					className="blur t-blur2"
					style={{ background: "skyblue" }}
				></div>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{clients.map((client, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="testimonial">
								<a href={client.url}>
									<img src={client.img} alt="" />
								</a>
								<span>{client.name}</span>
								<span>{client.review}</span>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Testimonial;
