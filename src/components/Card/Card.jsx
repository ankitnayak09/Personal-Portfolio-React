import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, details, color }) => {
	return (
		<div className="card" style={{ borderColor: { color } }}>
			<img src={emoji} alt="" />
			<span className="heading">{heading}</span>
			<ul>
				{details.split(", ").map((detail) => (
					<li>{detail}</li>
				))}
			</ul>
			<button className="c-button">LEARN MORE</button>
		</div>
	);
};

export default Card;
