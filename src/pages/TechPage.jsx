import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import mentroLogo from "../img/mentro_official_logo.jpeg";
import nervesXLogo from "../img/nervesx_logo.jpeg";
import icssLogo from "../img/icss_logo.jpeg";
import youthfestLogo from "../img/youthvibelpu_logo.jpeg";
import oasisLogo from "../img/oasis_logo.jpeg";
import gdscLogo from "../img/gdsclpu_logo.jpeg";
import girlScriptLogo from "../img/girlscriptsoc_logo.jpeg";

export default function TechPage() {
	return (
		<div className="techpage">
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					date="2021 - present"
					iconStyle={{ background: "#242D49", color: "#fff" }}
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Founding Board Member | Product & Strategy
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://mentro.tech/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={mentroLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://mentro.tech/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							Mentro
						</a>
					</h4>
					<p>
						Dare to be Better. Download the app now!
						<br /> ✅ 20,000+ Hustlers daring for a better career
						<br /> ✅ 5,000+ Mentorship sessions started by mentees
						<br /> ✅ Recognized as Top 10% in the world by YC
						(Y-Combinator).
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					date="March 2021 - August 2021"
					iconStyle={{ background: "#242D49", color: "#fff" }}
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Management & Strategic Lead
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://www.linkedin.com/company/gdsclpu/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={gdscLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://www.linkedin.com/company/gdsclpu/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							Developers Student Club - LPU
						</a>
					</h4>
					<p>
						✔ Guided Students to work with the latest Google
						Technologies
						<br /> ✔ Made Real-Live Projects using Google
						Technologies To Help Local Coomunities
						<br /> ✔ Build and Managed 2000+ active members
						<br /> ✔ Mentored Core Team, Content Team, Marketing &
						Sponsorship Team, Coordinators
						<br /> ✔ Hosted and Organised 10+ live Events <br />✔
						Helped to build the Community from Scratch
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					date="Aug 2020 - Jul 2021"
					iconStyle={{ background: "#242D49", color: "#fff" }}
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Member
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://www.linkedin.com/company/gdgjalandhar/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={gdscLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://www.linkedin.com/company/gdgjalandhar/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							GDG Jalandhar
						</a>
					</h4>
					<p>Apprenticeship</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					date="June 2020 - present"
					iconStyle={{ background: "#242D49", color: "#fff" }}
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Co-Founder & Chief Advisor
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://oasislpu.in/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={oasisLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://oasislpu.in/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							Student Organization Oasis LPU
						</a>
					</h4>
					<p>
						✔ Organized 30+ LIve webinars
						<br /> ✔ Helped 10k+ Learners Through Live workshops{" "}
						<br />✔ Managed a team of 100+ Active Learners <br />✔
						Mentored The Core Team <br />✔ Collaborated with Top
						Industry Professional
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					date="Feb 2021 - Jul 2021"
					iconStyle={{ background: "#242D49", color: "#fff" }}
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Open Source Contributor
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://www.linkedin.com/company/girlscriptsoc/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={girlScriptLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://www.linkedin.com/company/girlscriptsoc/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							GirlScript Summer of Code
						</a>
					</h4>
					<p></p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					date="Oct 2020 - Jan 2021"
					iconStyle={{ background: "#242D49", color: "#fff" }}
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Community Organiser
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://www.linkedin.com/company/gdsclpu/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={gdscLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://www.linkedin.com/company/gdsclpu/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							Developers Student Clubs - LPU
						</a>
					</h4>
					<p></p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					date="Sep 2020 - Oct 2020"
					iconStyle={{ background: "#242D49", color: "#fff" }}
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Associate Head of Operations
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://www.linkedin.com/company/gdsclpu/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={gdscLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://www.linkedin.com/company/gdsclpu/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							Developers Student Clubs - LPU
						</a>
					</h4>
					<p></p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Apr 2020 - Present"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					iconStyle={{ background: "#242D49", color: "#fff" }}

					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Head of Events
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://nervesx.com/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={nervesXLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://nervesx.com/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							NervesX
						</a>
					</h4>
					<p>
						✔ Taken Live Seminars
						<br /> ✔ Live Talks
						<br /> ✔ Community Moderation
						<br /> ✔ Worked With some Amazing Minds
						<br /> ✔ Managed & Designed Events
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="April 2020 - Present"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					iconStyle={{ background: "#242D49", color: "#fff" }}

					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						All-India Community Lead & Program Manger
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://www.linkedin.com/company/indian-cyber-security-solutions/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={icssLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://www.linkedin.com/company/indian-cyber-security-solutions/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							Indian Cyber Security Solutions
						</a>
					</h4>
					<p>
						🥉Managing a team of interns (300+ Campus
						Representatives) across the country as contributing to
						the success and growth of the company.
						<br /> ✔- Organizing and Mentoring in events to build
						community and boost brand awareness.
						<br /> ✔- Conducting and hosting events like Technical
						webinar, Ethical hacking workshops, Business conclaves
						<br /> ✔- Analyzing and identifying areas for
						improvement and develop improvement plans to achieve
						desired results.
						<br /> ✔- Strategizing new programs to aware students
						regarding cyber security across the community
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Feb 2020 - Present"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					iconStyle={{ background: "#242D49", color: "#fff" }}

					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Event Organizer of Mega Technical Workshops
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://www.linkedin.com/company/youthvibelpu/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={youthfestLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://www.linkedin.com/company/youthvibelpu/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							YouthVibe: LPU's Open Global Fest
						</a>
					</h4>
					<p>
						YouthVibe is a vibrant and dynamic annual cultural
						festival hosted by Lovely Professional University (LPU),
						one of India's premier universities. The festival brings
						together thousands of young people from across India and
						beyond to showcase their talents and compete in a
						variety of events ranging from dance, music, theatre,
						and fine arts to sports, literature, and technology.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Aug 2019 - Aug 2020"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					iconStyle={{ background: "#242D49", color: "#fff" }}

					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Asst. Head Of Marketing and sponsorship
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						Department of Youth Capital
					</h4>
					<p></p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Aug 2019 - Present"
					contentStyle={{
						// background: "rgb(33, 150, 243)",
						background: "#242D49",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  #242D49",
					}}
					iconStyle={{ background: "#242D49", color: "#fff" }}

					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title font-bold">
						Technical Product Specialist
					</h3>
					<h4 className="vertical-timeline-element-subtitle flex items-center gap-2">
						<a
							href="https://nervesx.com/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							<img src={nervesXLogo} alt="" className="w-10" />
						</a>
						<a
							href="https://mentro.tech/"
							target="_blank"
							className="hover:scale-105 transition-all"
						>
							NervesX
						</a>
					</h4>
					<p></p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					iconStyle={{
						background: "rgb(16, 204, 82)",
						color: "#fff",
					}}
					// icon={<StarIcon />}
				/>
			</VerticalTimeline>
		</div>
	);
}
