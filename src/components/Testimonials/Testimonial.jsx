import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import testimonial1 from "../../img/testimonial1.jpeg";
import testimonial2 from "../../img/testimonial2.jpeg";
import testimonial3 from "../../img/testimonial3.webp";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
	const clients = [
		{
			img: testimonial1,
			name: "Shashank Mishra",
			bio: "Data Engineer - III @ Expedia",
			url: "https://www.linkedin.com/in/souhardya-bose/details/recommendations",
			review: "I had a great experience working with Souhardya, he is very passionate and innovative with community building skills. His presence always made me comfortable in large scale events. Keep it up Souhardya!!",
		},
		{
			img: testimonial2,
			name: "Jaideep Prasad",
			bio: "Founder @ Mentro",
			url: "https://www.linkedin.com/in/souhardya-bose/details/recommendations",
			review: "He is a very dedicated team player with skils to match with it. Souhardya will be a great fit to any organization and help in its growth. Wish him all the best!",
		},
		{
			img: testimonial3,
			name: "Abhishek Mitra",
			bio: "CEO & Managing Director at Indian Cyber Security Solutions(GreenFellow IT Security Solutions Pvt Ltd)",
			url: "https://www.linkedin.com/in/souhardya-bose/details/recommendations",
			review: "Out of the box thinker and a team player to have in the team. Young chap like him who is matured and professional which is really good to see. Wish him a very bright future ahead. All the best. ",
		},
	];

	return (
		<>
			<div className="t-wrapper mt-10" id="testimonial">
				<div className="t-heading text-center">
					<span className="text-lg md:text-4xl font-bold">
						Empowering Words:
					</span>
					<span className="text-lg md:text-4xl font-bold">
						{" "}
						Testimonials from Leaders{" "}
					</span>
					<span className="text-lg md:text-4xl font-bold">
						and Learners
					</span>
					<div
						className="blur t-blur1"
						style={{ background: "var(--purple)" }}
					></div>
					<div
						className="blur t-blur2"
						style={{ background: "skyblue" }}
					></div>
				</div>
			</div>
			<Marquee style={{ height: "100%" }}>
				{clients.map((client, index) => {
					return (
						<div className="testimonial-card w-[calc(min(100vw,500px))] bg-white mx-5 border-2 border-[#eee] rounded-xl px-2 py-1">
							<div className="flex gap-1 items-center">
								<img src={client.img} alt="" />
								<div>
									<div className="client-name">
										{client.name}
									</div>
									<div className="client-bio">
										{client.bio}
									</div>
								</div>
							</div>
							<div>{client.review}</div>
						</div>
					);
				})}
			</Marquee>
		</>
	);
};

export default Testimonial;
