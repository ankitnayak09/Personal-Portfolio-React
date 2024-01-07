import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { useMenuContext } from "../../context/contextAPI";

export default function Navbar() {
	const { isOpen, setIsOpen } = useMenuContext();
	return (
		<>
			<div className="n-wrapper hidden md:flex" id="Navbar">
				{/* left */}
				<div className="n-left">
					<div className="n-name">Souhardya Bose</div>
					<Toggle />
				</div>
				{/* right */}
				<div className="n-right">
					<div className="n-list">
						<ul style={{ listStyleType: "none" }}>
							<li>
								<Link
									activeClass="active"
									to="Navbar"
									spy={true}
									smooth={true}
								>
									Home
								</Link>
							</li>
							<li>
								<Link to="About" spy={true} smooth={true}>
									About
								</Link>
							</li>
							<li>
								<Link to="services" spy={true} smooth={true}>
									Serivces
								</Link>
							</li>
							<li>
								<Link to="gallery" spy={true} smooth={true}>
									Gallery
								</Link>
							</li>
							<li>
								<Link to="portfolio" spy={true} smooth={true}>
									Protfolio
								</Link>
							</li>
							<li>
								<Link to="testimonial" spy={true} smooth={true}>
									Testimonial
								</Link>
							</li>
						</ul>
					</div>
					<Link to="contact" spy={true} smooth={true}>
						<button className="button n-button">Contact</button>
					</Link>
				</div>
			</div>
			<div className="md:hidden flex justify-between items-center mt-4">
				<div className="n-left">
					<div className="n-name">Souhardya Bose</div>
					<Toggle />
				</div>

				<CiMenuFries
					size={30}
					className="cursor-pointer hover:scale-110 transition-all active:scale-90"
					onClick={() => setIsOpen(!isOpen)}
				/>
			</div>
		</>
	);
}
