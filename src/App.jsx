import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import About from "./components/About/About";
import GallerySection from "./components/Gallery/Gallery";
import SocialMediaAppearance from "./components/SocialMediaAppearance/SocialMediaAppearance";
import EventTimeline from "./components/EventTimeline/EventTimeline";
import Sidebar from "./components/Sidebar/Sidebar";
import { useMenuContext } from "./context/contextAPI";
import CelebGallery from "./components/CelebGallery/CelebGallery";
import CollegeGallery from "./components/CollegeGallery/CollegeGallery";
import Podcast from "./components/Podcast/Podcast";
import Achievements from "./components/Achievements/Achievements";

function App() {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	const { isOpen } = useMenuContext();
	return (
		<div
			className={
				"App px-[1.5rem] py-[0.5rem] " +
				(isOpen ? "overflow-hidden h-screen" : "")
			}
			style={{
				background: darkMode ? "black" : "",
				color: darkMode ? "white" : "",
			}}
		>
			<Navbar />
			<Sidebar />
			<Intro />
			<About />
			<Podcast />
			<Services />
			<Experience />
			<Achievements />
			<EventTimeline />
			<CelebGallery />
			<CollegeGallery />
			<GallerySection />
			<Testimonial />
			<SocialMediaAppearance />
			<Contact />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
