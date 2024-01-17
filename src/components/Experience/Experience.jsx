import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div
			className="experience mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-5 text-white"
			id="experience"
		>
			<div className="achievement grid grid-cols-12 my-5">
				{/* darkMode */}
				<div className="col-span-4 md:col-span-3 text-center flex flex-col justify-center">
					<div
						className="circle mb-2 mx-auto text-custom-black"
						style={{ color: darkMode ? "var(--orange)" : "" }}
					>
						5000+
					</div>
					<span style={{ color: darkMode ? "white" : "" }}>
						Students{" "}
					</span>
					<span>Mentored</span>
				</div>
				<p className="col-span-8 md:col-span-9 ">
					Positively impacted the lives of students through
					mentorship, guiding them towards success.
				</p>
			</div>
			<div className="achievement grid grid-cols-12 my-5">
				<div className="col-span-4 md:col-span-3 text-center flex flex-col justify-center">
					<div
						className="circle mx-auto mb-2 text-custom-black"
						style={{ color: darkMode ? "var(--orange)" : "" }}
					>
						150+
					</div>
					<span style={{ color: darkMode ? "white" : "" }}>
						Seminar{" "}
					</span>
					<span>Delivered</span>
				</div>

				<p className="col-span-8 md:col-span-9">
					<span className="font-bold italic">A seasoned speaker</span>
					, has delivered over 150 seminars, captivating audiences
					with insightful discussions and thought-provoking ideas.
				</p>
			</div>
			<div className="achievement grid grid-cols-12 my-5">
				<div className="col-span-4 md:col-span-3 text-center flex flex-col justify-center">
					<div
						className="circle mx-auto mb-2 text-custom-black"
						style={{ color: darkMode ? "var(--orange)" : "" }}
					>
						10+
					</div>
					<span style={{ color: darkMode ? "white" : "" }}>
						TedTalks{" "}
					</span>
					<span>Speaker</span>
				</div>
				<p className="col-span-8 md:col-span-9">
					Featured as a speaker at more than 10 TEDTalks events,
					captivating audiences with their ability to convey profound
					ideas in an accessible and inspiring manner.
				</p>
			</div>
			<div className="achievement grid grid-cols-12 my-5">
				<div className="col-span-4 md:col-span-3 text-center flex flex-col justify-center">
					<div
						className="circle mx-auto mb-2 text-custom-black"
						style={{ color: darkMode ? "var(--orange)" : "" }}
					>
						15+
					</div>
					<span style={{ color: darkMode ? "white" : "" }}>
						Podcast{" "}
					</span>
					<span>Guest</span>
				</div>

				<p className="col-span-8 md:col-span-9">
					Beyond stages and screens, shared expertise on over 15
					podcasts, contributing unique insights and engaging in
					meaningful conversations.
				</p>
			</div>
		</div>
	);
};

export default Experience;
