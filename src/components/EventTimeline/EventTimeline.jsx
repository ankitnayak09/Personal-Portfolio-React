import { motion } from "framer-motion";
import "./EventTimeline.css";
import sourabhDwivedi from "../../img/new/5.JPG";
import amanDhattarwal from "../../img/new/amanDhattarwalEvent.jpg";
import getPlaced from "../../img/new/getplaced.jpeg";
import technocean from "../../img/new/technocean.jpeg";
import rahul from "../../img/new/rahul_maheshwari.jpg";
import anubhav from "../../img/new/chaiSuttaBar.jpeg";

export default function EventTimeline() {
	const transition = { duration: 2, type: "spring" };

	return (
		<>
			<h2 className="text-4xl font-bold text-center my-4 text-[#242D49]">
				A Journey in Community Building: Major Events
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden self-end"
				>
					<img
						src={amanDhattarwal}
						className="object-cover  group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden tracking-wide group-hover:flex absolute top-0 left-0 w-full h-full flex-col justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg text-xs md:text-sm">
						<span className="text-lg font-bold">
							Sukoon - Youthfest
						</span>
						15-day themed fest, #HopeToLive, by Team OASIS, blending
						cultural and technical fun for past days filled with
						amusement. In a challenging era, the reminder was clear
						– hope comes from within. The fest infused lives with
						great fun, enthusiasm, and unlimited entertainment.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden"
				>
					<img
						src={technocean}
						className="object-cover  group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex-col justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg text-xs md:text-sm">
						<span className="text-2xl font-bold">TechnOcean</span>
						Biggest tech fest of LPU organised with our Respected
						Pro Vice Chancellor, Dr. Lovi Raj Gupta Sir and
						Respected Vice Chancellor, Dr. Preeti Bajaj Madam, along
						with our benevolent faculties Dr. Prateek Agrawal Sir
						and Mrs. Harjeet Kaur Ma'am.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden self-end"
				>
					<img
						src={sourabhDwivedi}
						className="object-cover  group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex-col justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg text-xs md:text-sm">
						<span className="text-2xl font-bold">XPRESSIONS</span>
						Biggest media fest of LPU. School of Journalism, Film
						and Creative Arts, Organised by Student Organisation
						OASIS, under the aegis of Division of Youth Affairs,
						Student Welfare Wing.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden self-start"
				>
					<img
						src={getPlaced}
						className="object-cover  group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex-col justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg text-xs md:text-sm">
						<span className="text-2xl font-bold">GET PLACED</span>
						Introduction to the IT sector & corporate world by the
						placement experts Mr. Nishant Chahar(SDE Microsoft) and
						Mr. Subhesh Kumar (SDE Amazon,Berlin).
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden self-start"
				>
					<img
						src={rahul}
						className="object-cover  group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg text-xs md:text-sm">
						Podcast Session with Mr Rahul Maheshwari,
						Ex-Adobe,Ex-Google,Founder - LinuxSocials,90k+ followers
						on linkedin
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="relative group overflow-hidden self-start"
				>
					<img
						src={anubhav}
						className="object-cover  group-hover:scale-110 transition-all"
						alt=""
					/>
					<p className="hidden group-hover:flex absolute top-0 left-0 w-full h-full flex:col justify-center items-center bg-[rgba(0,0,0,0.8)]  text-white px-2 font-bold drop-shadow-lg text-xs md:text-sm">
						<span className="italic">
							"Chai ka Anubhav - A tale from nothing to an Empire
							of Chai"
						</span>
						,a inspirational session with Mr. Anubhav Dubey, Founder
						of Chai Sutta Bar.
					</p>
				</motion.div>
			</div>
		</>
	);
}
