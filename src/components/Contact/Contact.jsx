import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	const [done, setDone] = useState(false);

	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();
	const handleSubmit = (e) => {
		fetch("https://formsubmit.co/your@email.com", {
			Method: "POST",
			Headers: {
				Accept: "application.json",
				"Content-Type": "application/json",
			},
			Body: body,
			Cache: "default",
		});
	};

	return (
		<div className="contact-form" id="contact">
			{/* left side copy and paste from work section */}
			<div className="w-left">
				<div className="awesome">
					{/* darkMode */}
					<span style={{ color: darkMode ? "white" : "" }}>
						Get in Touch
					</span>
					<span>Contact me</span>
					<div
						className="blur s-blur1"
						style={{ background: "#ABF1FF94" }}
					></div>
				</div>
			</div>
			{/* right side form */}
			<div className="c-right">
				<form
					action="https://formsubmit.co/souhardya.bose@ieee.org"
					method="POST"
				>
					<input
						type="text"
						name="user_name"
						className="user"
						placeholder="Name"
					/>
					<input
						type="email"
						name="user_email"
						className="user"
						placeholder="Email"
					/>
					<textarea
						name="message"
						className="user"
						placeholder="Message"
					/>
					<input type="submit" value="Send" className="button" />
					<span>{done && "Thanks for Contacting me"}</span>
					<div
						className="blur c-blur1"
						style={{ background: "var(--purple)" }}
					></div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
