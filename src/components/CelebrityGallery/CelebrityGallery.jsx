import React from "react";
import "./CelebrityGallery.css";
import { celebrityImages } from "../Gallery/images";
import Card from "./Card/Card";

export default function CelebrityGallery() {
	return (
		<section className="Gallery" id="gallery">
			<h2>Captivating Connections: A Gallery of Community Impact</h2>
			<div class="row">
				<div class="column">
					{celebrityImages["column1"].map((img) => (
						<Card img={img} />
					))}
				</div>
				<div class="column">
					{celebrityImages["column2"].map((img) => (
						<Card img={img} />
					))}
				</div>
				<div class="column">
					{celebrityImages["column3"].map((img) => (
						<Card img={img} />
					))}
				</div>
			</div>
		</section>
	);
}
