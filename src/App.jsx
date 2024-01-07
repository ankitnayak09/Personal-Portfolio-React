import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import About from "./components/About/About";
import GallerySection from "./components/Gallery/Gallery";
import SocialMediaAppearance from "./components/SocialMediaAppearance/SocialMediaAppearance";
import EventTimeline from "./components/EventTimeline/EventTimeline";
import TechTimeline from "./components/TechTimeline/TechTimeline";
import CelebrityGallery from "./components/CelebrityGallery/CelebrityGallery";
function App() {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div
			className="App"
			style={{
				background: darkMode ? "black" : "",
				color: darkMode ? "white" : "",
			}}
		>
			<Navbar />
			<Intro />
			<About />
			<Services />
			<Experience />
			{/* <Works /> */}
			{/* <Portfolio /> */}
			<TechTimeline />
			<EventTimeline />
			<GallerySection />
			<CelebrityGallery />
			<Testimonial />
			<SocialMediaAppearance />
			<Contact />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
