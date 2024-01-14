import {
	InstagramEmbed,
	LinkedInEmbed,
	YouTubeEmbed,
} from "react-social-media-embed";
import "./Style.css";
import { links } from "./Links";

export default function SocialMediaAppearance() {
	return (
		<section className="social-media-gallery" id="social-media-gallery">
			<h2 className="text-3xl font-bold text-center mt-8 mb-4">
				Social Media Appearances
			</h2>
			<div class="row">
				<div class="column">
					{links["column1"]?.map((link) => {
						if (link.type === "instagram")
							return (
								<div>
									<InstagramEmbed
										url={link.url}
										key={link.url}
									/>
								</div>
							);
						else if (link.type === "linkedin") {
							return (
								<div>
									<LinkedInEmbed
										url={link.url}
										key={link.url}
									/>
								</div>
							);
						} else if (link.type === "youtube") {
							return (
								<div>
									<YouTubeEmbed
										url={link.url}
										key={link.url}
										width={"100%"}
										height={220}
									/>
								</div>
							);
						} else return null;
					})}
				</div>
				<div class="column">
					{links["column2"]?.map((link) => {
						if (link.type === "instagram")
							return (
								<div>
									<InstagramEmbed
										url={link.url}
										key={link.url}
									/>
								</div>
							);
						else if (link.type === "linkedin") {
							return (
								<div>
									<LinkedInEmbed
										url={link.url}
										key={link.url}
									/>
								</div>
							);
						} else if (link.type === "youtube") {
							return (
								<div>
									<YouTubeEmbed
										url={link.url}
										key={link.url}
										width={"100%"}
										height={220}
									/>
								</div>
							);
						} else return null;
					})}
				</div>
				<div class="column">
					{links["column3"]?.map((link) => {
						if (link.type === "instagram")
							return (
								<div>
									<InstagramEmbed
										url={link.url}
										key={link.url}
									/>
								</div>
							);
						else if (link.type === "linkedin") {
							return (
								<div>
									<LinkedInEmbed
										url={link.url}
										key={link.url}
									/>
								</div>
							);
						} else if (link.type === "youtube") {
							return (
								<div>
									<YouTubeEmbed
										url={link.url}
										key={link.url}
										width={"100%"}
										height={220}
									/>
								</div>
							);
						} else return null;
					})}
				</div>
			</div>
		</section>
	);
}
