import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

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
				<span>
					Lorem ispum is simpley dummy text of printing of printing
					Lorem
					<br />
					ispum is simpley dummy text of printing
				</span>
				<a href={Resume} download>
					<button className="button s-button">Download CV</button>
				</a>
				<div
					className="blur s-blur1"
					style={{ background: "#ABF1FF94" }}
				></div>
			</div>
			{/* right */}
			<div className="cards">
				{/* first card */}
				<motion.div
					initial={{ left: "25rem" }}
					whileInView={{ left: "14rem" }}
					transition={transition}
				>
					<Card
						emoji={HeartEmoji}
						heading={"Organization"}
						details={
							"Facilitation and collaboration skills, Team building and leadership development, Strategic planning and implementation"
						}
					/>
				</motion.div>
				{/* second card */}
				<motion.div
					initial={{ left: "-11rem", top: "12rem" }}
					whileInView={{ left: "-4rem" }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Tech"}
						details={
							"Online community creation and management, Social media strategy and engagement, Content creation and marketing, Event planning and execution"
						}
					/>
				</motion.div>
				{/* 3rd */}
				<motion.div
					initial={{ top: "20rem", left: "40rem" }}
					whileInView={{ left: "32rem" }}
					transition={transition}
				>
					<Card
						emoji={Humble}
						heading={"Work"}
						details={
							"Consulting services for businesses and organizations, Workshops and training programs, Mentorship and coaching"
						}
						color="rgba(252, 166, 31, 0.45)"
					/>
				</motion.div>
				<div
					className="blur s-blur2"
					style={{ background: "var(--purple)" }}
				></div>
			</div>
		</div>
	);
};

export default Services;
