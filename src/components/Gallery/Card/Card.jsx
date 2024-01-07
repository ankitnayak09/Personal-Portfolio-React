import { motion } from "framer-motion";
import "./Card.css";

function Card({ img }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="img-card"
		>
			<img src={img.src} />
			<p>{img.caption}</p>
		</motion.div>
	);
}

export default Card;
