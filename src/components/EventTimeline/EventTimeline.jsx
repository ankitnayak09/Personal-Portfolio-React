import { motion } from "framer-motion";
import "./EventTimeline.css";
export default function EventTimeline() {
	const transition = { duration: 2, type: "spring" };

	return (
		<>
			<h2>A Journey in Community Building: Major Events</h2>
			<div className="grid grid-cols-3 place-items-center gap-5">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative left-24"
				>
					Sukoon-Youthfest
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black row-span-2 relative -left-10"
				>
					Tech Talk
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative right-20"
				>
					Get Placed
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black"
				>
					Technocean
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1.1 }}
					transition={{ duration: 0.5 }}
					className="circle-black scale-110"
				>
					Talk Show
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 0.9 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative left-40 scale-90"
				>
					DIGIFEST 2023
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="circle-black relative bottom-20 left-20"
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
