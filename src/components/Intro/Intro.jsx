import React, { useContext, useRef } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import hero_img from "../../img/hero_img.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
	// Transition
	const transition = { duration: 2, type: "spring" };

	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	const IntroRef = useRef();

	return (
		<div className="Intro" id="Intro" ref={IntroRef}>
			{/* left name side */}
			<div className="i-left">
				<div className="i-name">
					{/* yahan change hy darkmode ka */}
					<motion.div
						initial={{ left: "-100%" }}
						whileInView={{ left: "0%" }}
						className="relative"
						style={{ color: darkMode ? "white" : "" }}
					>
						Hi! I Am
					</motion.div>
					<motion.div
						initial={{ left: "-100%" }}
						whileInView={{ left: "0%" }}
						className="relative"
					>
						Souhardya Bose
					</motion.div>
					<motion.div
						initial={{ left: "-100%" }}
						whileInView={{ left: "0%" }}
						transition={{ delay: 0.5 }}
						className="relative"
						style={{
							fontSize: "1.5rem",
							fontWeight: "bold",
							margin: "5px 0",
						}}
					>
						Bridging the Gap Between Technology and Communities
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1 }}
						className="relative tracking-wider italic"
						style={{
							fontSize: "1.2rem",
							margin: "5px 0",
						}}
					>
						Empowering Individuals, Building Strong Communities, and
						Creating a Positive Impact Together.
					</motion.div>
				</div>
				<Link to="contact" smooth={true} spy={true}>
					<button className="button i-button">Connect With Me</button>
				</Link>
				{/* social icons */}
				<div className="i-icons">
					<a href="https://github.com/bose07" target="_blank">
						<img src={Github} alt="" />
					</a>
					<a
						href="https://www.linkedin.com/in/souhardya-bose/"
						target="_blank"
					>
						<img src={LinkedIn} alt="" />
					</a>
				</div>
			</div>
			{/* right image side */}
			<div className="i-right hidden md:block">
				<img src={Vector1} alt="" className="select-none" />
				<img src={Vector2} alt="" className="select-none" />
				<img src={hero_img} alt="" className="select-none" />
				{/* animation */}
				<motion.img
					initial={{ left: "-36%" }}
					whileInView={{ left: "-24%" }}
					transition={transition}
					src={glassesimoji}
					drag
					dragConstraints={IntroRef}
					alt=""
				/>

				<motion.div
					initial={{ top: "-4%", left: "74%" }}
					whileInView={{ top: "20%", left: "68%" }}
					transition={transition}
					className="floating-div"
				>
					<FloatinDiv img={crown} text1="Community" text2="Builder" />
				</motion.div>

				{/* animation */}
				<motion.div
					initial={{ left: "9rem", top: "18rem" }}
					whileInView={{ left: "0rem" }}
					transition={transition}
					className="floating-div"
				>
					{/* floatinDiv mein change hy dark mode ka */}
					<FloatinDiv
						img={thumbup}
						text1="Empowering"
						text2="People"
					/>
				</motion.div>

				<div
					className="blur"
					style={{ background: "rgb(238 210 255)" }}
				></div>
				<div
					className="blur"
					style={{
						background: "#C1F5FF",
						top: "17rem",
						width: "21rem",
						height: "11rem",
						left: "-9rem",
					}}
				></div>
			</div>
		</div>
	);
};

export default Intro;
