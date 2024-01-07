import "./About.css";
import profile_pic from "../../img/profile-pic.png";
import laptop_png from "../../img/laptop_png.jpg";

export default function About() {
	return (
		<>
			<h2>A Journey Fueled by Community and Technology</h2>
			<section className="About" id="About">
				<div
					className="blur"
					style={{ background: "rgb(238 210 255)" }}
				></div>
				<div className="left">
					<img src={profile_pic} alt="" />
				</div>
				<div className="right">
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
			</section>
			<div className="flex justify-center items-center">
				<div className="video-container">
					<img src={laptop_png} alt="" className="" />
					<iframe
						src="https://www.youtube.com/embed/Iqp9DeqrqYI"
						title="Our Guiding Light: A Tribute to Bose Bhaiya, Founder of Student Organization Oasis"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</>
	);
}
