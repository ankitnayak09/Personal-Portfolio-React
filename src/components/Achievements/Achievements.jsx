import React from "react";
import pic1 from "../../img/NEP/IMG_20231102_222246.jpg";
import pic3 from "../../img/NEP/With Chairpeson of UGC.png";

export default function () {
	return (
		<div>
			<h2 className="text-4xl font-bold text-center my-4 text-[#242D49]">
				Achievements
			</h2>
			<ul className="list-disc md:w-2/3 mx-auto">
				<li>
					Appointed as{" "}
					<span className="font-bold">
						NEP SAARTHI govt of India , UGC , Ministry of Education
					</span>{" "}
					Got selected among 40k students and represented the India's
					biggest University to chairman of UGC
				</li>
				<li>
					Elected as{" "}
					<span className="font-bold">Chair person of IEEE</span> LPU
				</li>

				<li>
					Invited by <span className="font-bold">VIT Vellore</span> as
					a guest speaker in a podcast 2020 oct
				</li>
				<li>
					Mentored and guided Google solutions challenge 2020, 2021
				</li>
				<li>
					Completed Industrial research training at IIT Kanpur under
					Dr. Aman HOD CSE
				</li>
				<li>
					Hosted and organised several workshop, seminar, podcast for
					Google developer students club community
				</li>
			</ul>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				<img src={pic1} alt="" />
				<img src={pic3} alt="" />
			</div>
		</div>
	);
}
