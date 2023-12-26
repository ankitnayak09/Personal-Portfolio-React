import "./Card.css";

function Card({ img }) {
	return (
		<div className="img-card">
			<img src={img.src} />
			<p>{img.caption}</p>
		</div>
	);
}

export default Card;
