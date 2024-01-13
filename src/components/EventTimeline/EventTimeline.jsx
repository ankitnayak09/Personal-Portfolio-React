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
			<div className="grid grid-cols-3 place-items-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden"
				>
					<img
						src={amanDhattarwal}
						className="object-cover aspect-square group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Excepturi, aspernatur.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden"
				>
					<img
						src={getPlaced}
						className="object-cover aspect-square group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Excepturi, aspernatur.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden"
				>
					<img
						src={sourabhDwivedi}
						className="object-cover aspect-square group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Excepturi, aspernatur.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden"
				>
					<img
						src={sourabhDwivedi}
						className="object-cover aspect-square group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Excepturi, aspernatur.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden"
				>
					<img
						src={sourabhDwivedi}
						className="object-cover aspect-square group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Excepturi, aspernatur.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden"
				>
					<img
						src={sourabhDwivedi}
						className="object-cover aspect-square group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Excepturi, aspernatur.
					</p>
				</motion.div>
			</div>
		</>
	);
}
