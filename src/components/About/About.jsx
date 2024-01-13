import "./About.css";
import profile_pic from "../../img/profile-pic.png";
import laptop_png from "../../img/laptop_png.jpg";

export default function About() {
	return (
		<section id="About">
			<h2 className="text-2xl md:text-4xl font-bold text-center mt-24 mb-4">
				A Journey Fueled by Community and Technology
			</h2>
			<div className="About flex flex-col md:flex-row items-center">
				<div
					className="blur"
					style={{ background: "rgb(238 210 255)" }}
				></div>
				<div className="left flex-1">
					<img src={profile_pic} alt="" />
				</div>
				<div className="right flex-1">
					<p>
						My story starts with a simple belief:{" "}
						<strong>people are stronger together </strong>. From a
						young age, I witnessed the power of communities to
						support, inspire, and empower individuals. This belief
						has shaped my life's journey, leading me down a path of
						community building, technology, and organizational
						development.
					</p>
					<p>
						My early experiences in event management and technical
						product specialization instilled in me a deep
						understanding of how to bring people together and create
						engaging experiences. Witnessing the positive impact of
						these events further fueled my passion for fostering
						vibrant communities.
					</p>
					<p>
						My journey has been one of continuous learning and
						growth. I am passionate about the power of communities
						to make a positive difference in the world. I am
						committed to using my skills and expertise to help
						individuals and organizations build stronger, more
						connected communities.
					</p>
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
