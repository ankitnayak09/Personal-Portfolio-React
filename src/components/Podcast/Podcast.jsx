import { YouTubeEmbed } from "react-social-media-embed";

export default function Podcast() {
	// url: "https://youtu.be/za9I5owsUEs",
	// url: "https://youtu.be/de7qGcxXFc8",
	return (
		<div className="my-10">
			<h2 className="text-4xl text-center font-bold">
				Dive into Captivating Podcast Episodes
			</h2>
			<div className="flex justify-center gap-10 my-10">
				<YouTubeEmbed url="https://youtu.be/za9I5owsUEs"></YouTubeEmbed>
				<YouTubeEmbed url="https://youtu.be/de7qGcxXFc8"></YouTubeEmbed>
			</div>
		</div>
	);
}
