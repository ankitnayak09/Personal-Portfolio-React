import React from "react";
import { Link } from "react-router-dom";

const Card = ({ emoji, heading, details, btnText, btnLink }) => {
	return (
		<div className="card bg-[#ffffff42] flex flex-col items-center text-center border border-[#fca61f73] border-[7px] rounded-2xl px-6 py-8">
			<img src={emoji} alt="" />
			<span className="font-bold text-xl">{heading}</span>
			{/* <ul>
				{details.split(", ").map((detail) => (
					<li>{detail}</li>
				))}
			</ul> */}
			<p className="my-2">{details}</p>
			<Link to={btnLink}>
				<button className="bg-[#fca61f73] px-2 py-1 rounded-md shadow-md active:scale-95 hover:scale-105 transition-all">
					{btnText}
				</button>
			</Link>
		</div>
	);
};

export default Card;
