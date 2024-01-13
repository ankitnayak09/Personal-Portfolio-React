import "./About.css";
import profile_pic from "../../img/profile-pic.png";
import laptop_png from "../../img/laptop_png.jpg";
import { motion } from "framer-motion";

export default function About() {
	return (
		<section
			id="About"
			className="mt-8 flex flex-col justify-between overflow-hidden"
		>
			<motion.h2
				initial={{ opacity: 0, y: "-100" }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="text-2xl md:text-4xl font-bold text-center mb-4  mt-4 drop-shadow-lg uppercase text-black font-outline-2 font-mono"
			>
				A Journey Fueled by Community and Technology
				{/* About Me */}
			</motion.h2>
			<div className="About flex flex-col md:flex-row items-center mb-10 gap-5">
				<div
					className="blur"
					style={{ background: "rgb(238 210 255)" }}
				></div>
				<div className="left flex-1 ml-10 basis-1/3">
					<motion.img
						src={profile_pic}
						alt=""
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{ delay: 0.3 }}
					/>
				</div>
				<div className="right flex-1 basis-2/3 text-white font-semibold text-2xl">
					<p className="tracking-wide">
						I'm Souhardya Bose, a dynamic community builder with a
						proven track record. My leadership has significantly
						scaled community growth, improved communication skills,
						and boosted students' confidence in real-world
						scenarios.
					</p>
					<p className="my-2 tracking-wide">
						As the founder of technical entities like Developers
						Students Club and Google Developers Students Clubs, I've
						mentored Microsoft Learn Student Ambassadors and served
						as the Chairperson of IEEE LPU. I've also been appointed
						as NEP SAARTHI by the Government of India, UGC, Ministry
						of Education, representing India's largest university at
						the UGC Chairman.
					</p>
					<p className="tracking-wide">
						I've hosted various workshops, seminars, and podcasts
						for the Google Developer Students Club community. With a
						Microsoft Technical Associate certification in Java,
						I've completed industrial research training at IIT
						Kanpur under Dr. Aman Karkey, HOD CSE. My ongoing
						research focuses on AI, deep fake, and ML.
					</p>
					{/* <p className="tracking-wide">
						My story starts with a simple belief:{" "}
						<span className="font-bold italic">
							people are stronger together{" "}
						</span>
						. From a young age, I witnessed the power of communities
						to support, inspire, and empower individuals. This
						belief has shaped my life's journey, leading me down a
						path of community building, technology, and
						organizational development.
					</p>
					<br />
					<p>
						My early experiences in event management and technical
						product specialization instilled in me a deep
						understanding of how to bring people together and create
						engaging experiences. Witnessing the positive impact of
						these events further fueled my passion for fostering
						vibrant communities.
					</p>
					<br />
					<p>
						My journey has been one of continuous learning and
						growth. I am passionate about the power of communities
						to make a positive difference in the world. I am
						committed to using my skills and expertise to help
						individuals and organizations build stronger, more
						connected communities.
					</p> */}
				</div>
			</div>
			{/* <div className="flex justify-center items-center">
				<div className="video-container">
					<iframe
						src="https://www.youtube.com/embed/Iqp9DeqrqYI"
						title="Our Guiding Light: A Tribute to Bose Bhaiya, Founder of Student Organization Oasis"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
						className="w-4/5 h-[305px] md:h-[430px] relative left-[2.8rem] md:left-[4.1rem] top-4 md:top-6 "
					></iframe>
				</div>
			</div> */}
		</section>
	);
}
