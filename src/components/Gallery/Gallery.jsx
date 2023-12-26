import React from "react";
import "./Gallery.css";
import { images } from "./images";
import Card from "./Card/Card";

export default function Gallery() {
	return (
		<section className="Gallery" id="gallery">
			<h2>Captivating Connections: A Gallery of Community Impact</h2>
			<div class="row">
				<div class="column">
					{images["column1"].map((img) => (
						<Card img={img} />
					))}
				</div>
				<div class="column">
					{images["column1"].map((img) => (
						<Card img={img} />
					))}
				</div>
				<div class="column">
					{images["column1"].map((img) => (
						<Card img={img} />
					))}
				</div>
			</div>
		</section>
	);
}
