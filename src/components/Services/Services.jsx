import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	const transition = {
		duration: 1,
		type: "spring",
	};

	return (
		<div className="services" id="services">
			{/* left side */}
			<div className="awesome">
				{/* dark mode */}
				<span style={{ color: darkMode ? "white" : "" }}>
					My Awesome
				</span>
				<span>Capabilities and Impact</span>
				<span></span>
				{/* <a href={#} download className="w-max rounded-3xl my-4">
					<button className="button s-button my-4">
						Download CV
					</button>
				</a> */}
				<div
					className="blur s-blur1"
					style={{ background: "#ABF1FF94" }}
				></div>
			</div>
			{/* right */}
			<div className="cards grid grid-cols-1 lg:grid-cols-3 gap-2 place-items-center">
				{/* first card */}
				<motion.div
				// initial={{ left: "25rem" }}
				// whileInView={{ left: "14rem" }}
				// transition={transition}
				>
					<Card
						emoji={HeartEmoji}
						heading={"Event Organizer"}
						details={
							"I excel in crafting unforgettable experiences with meticulous planning and creative flair. Trust me to exceed expectations and leave lasting impressions."
						}
						btnText={"Visit Events"}
						btnLink={"/events"}
					/>
				</motion.div>
				{/* second card */}
				<motion.div
				// initial={{ left: "-11rem", top: "12rem" }}
				// whileInView={{ left: "-4rem" }}
				// transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Software Development"}
						details={
							"Experienced software developer crafting efficient, innovative solutions through clean coding and cutting-edge technologies for successful, scalable applications."
						}
						btnText={"Work History"}
						btnLink={"/tech"}
					/>
				</motion.div>
				{/* 3rd */}
				{/* <motion.div
				// initial={{ top: "20rem", left: "40rem" }}
				// whileInView={{ left: "32rem" }}
				// transition={transition}
				>
					<Card
						emoji={Humble}
						heading={"Work"}
						details={
							"Consulting services for businesses and organizations, Workshops and training programs, Mentorship and coaching"
						}
						btnText={"Visit Events"}
						color="rgba(252, 166, 31, 0.45)"
					/>
				</motion.div> */}
				<div
					className="blur s-blur2"
					style={{ background: "var(--purple)" }}
				></div>
			</div>
		</div>
	);
};

export default Services;
