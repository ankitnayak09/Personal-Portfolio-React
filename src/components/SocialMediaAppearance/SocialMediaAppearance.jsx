import { InstagramEmbed, LinkedInEmbed } from "react-social-media-embed";
import "./Style.css";
import { links } from "./Links";

export default function SocialMediaAppearance() {
	return (
		<section className="social-media-gallery" id="social-media-gallery">
			<h2>Captivating Connections: A Gallery of Community Impact</h2>
			<div class="row">
				<div class="column">
					{links["column1"]?.map((link) => {
						return link.type === "instagram" ? (
							<InstagramEmbed url={link.url} key={link.url} />
						) : (
							<LinkedInEmbed url={link.url} key={link.url} />
						);
					})}
				</div>
				<div class="column">
					{links["column2"]?.map((link) => {
						return link.type === "instagram" ? (
							<InstagramEmbed url={link.url} key={link.url} />
						) : (
							<LinkedInEmbed url={link.url} key={link.url} />
						);
					})}
				</div>
				<div class="column">
					{links["column3"]?.map((link) => {
						return link.type === "instagram" ? (
							<InstagramEmbed url={link.url} key={link.url} />
						) : (
							<LinkedInEmbed url={link.url} key={link.url} />
						);
					})}
				</div>
			</div>
		</section>
	);
}
