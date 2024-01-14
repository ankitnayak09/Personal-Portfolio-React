import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div
			className="experience mt-10 flex items-center justify-center gap-5 md:gap-20 text-custom-black"
			id="experience"
		>
			<div className="achievement">
				{/* darkMode */}
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					5000+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>
					Students{" "}
				</span>
				<span>Mentored</span>
			</div>
			<div className="achievement">
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					150+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>Seminar </span>
				<span>Delivered</span>
			</div>
			<div className="achievement">
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					10+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>
					TedTalks{" "}
				</span>
				<span>Speaker</span>
			</div>
			<div className="achievement">
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					15+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>Podcast </span>
				<span>Guest</span>
			</div>
		</div>
	);
};

export default Experience;
