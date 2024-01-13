import { motion } from "framer-motion";
import "./EventTimeline.css";
import sourabhDwivedi from "../../img/new/5.JPG";
import amanDhattarwal from "../../img/new/amanDhattarwalEvent.jpg";
import getPlaced from "../../img/new/6 (copy).jpg";

export default function EventTimeline() {
	const transition = { duration: 2, type: "spring" };

	return (
		<>
			<h2 className="text-4xl font-bold text-center my-4 text-[#242D49]">
				A Journey in Community Building: Major Events
			</h2>
			<div className="grid grid-cols-3 place-items-center gap-5 gap-y-16">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative"
				>
					<img
						src={amanDhattarwal}
						className="absolute w-full rounded-md object-cover "
						alt=""
					/>
					<div className="absolute top-full font-bold bg-[#242D49] bg-opacity-60 w-full text-center rounded-md">
						Sukoon-Youthfest
						<p className="text-sm">
							Guest Speaker - Aman Dhattarwal
						</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative"
				>
					Tech Talk
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative "
				>
					<img
						src={getPlaced}
						className="absolute w-full rounded-md aspect-square object-cover"
						alt=""
					/>
					<div className="absolute top-full font-bold bg-[#242D49] bg-opacity-60 w-full text-center rounded-md">
						Get Placed
						<p className="text-sm">
							Guest Speaker - Nishant Chahar and Subhesh Kumar
						</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative"
				>
					<img
						src={sourabhDwivedi}
						className="absolute w-full rounded-md aspect-square object-cover"
						alt=""
					/>
					<div className="absolute top-full font-bold bg-[#242D49] bg-opacity-60 w-full text-center rounded-md">
						Convergence 2.0
						<p className="text-sm">
							Guest Speaker - Sourabh Dwivedi
						</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1.1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative"
				>
					Talk Show
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 0.9 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative"
				>
					DIGIFEST 2023
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative"
				>
					Something
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black"
				>
					Something
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black"
				>
					Something
				</motion.div>
			</div>
		</>
	);
}
