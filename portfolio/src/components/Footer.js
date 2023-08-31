import "./FooterStyles.css";

import React from "react";

import {
	FaFacebook,
	FaMailBulk,
	FaPhone,
	FaHome,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome
							size={20}
							style={{
								color: "#fff",
								marginRight: "2rem",
							}}
						/>
						<div>
							<p>Located in Oslo.</p>
							<p>Norway.</p>
						</div>
					</div>
					<div className="phone">
						<h4>
							<FaPhone
								size={20}
								style={{
									color: "#fff",
									marginRight: "2rem",
								}}
							/>
							+ 47 941 01 190
						</h4>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk
								size={20}
								style={{
									color: "#fff",
									marginRight: "2rem",
								}}
							/>
							Michaelwasilewski9412@gmail.com
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>About me</h4>
					<p>
						I'm a 29 year old junior developer,
						looking to find a position at a
						company ! I enjoy discussing new
						project and design challenges. Feel
						free to contact me any time.
					</p>
					<div className="social">
						<a
							href="https://www.facebook.com/Wasiu1243"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								marginRight: "1rem",
							}}
						>
							<FaFacebook
								size={30}
								style={{
									color: "#fff",
								}}
							/>
						</a>

						<a
							href="https://github.com/Michaelwasilewski"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								marginRight: "1rem",
							}}
						>
							<FaGithub
								size={30}
								style={{
									color: "#fff",
								}}
							/>
						</a>

						<a
							href="https://www.linkedin.com/in/michal-wasilewski-751b8921a/"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								marginRight: "1rem",
							}}
						>
							<FaLinkedin
								size={30}
								style={{
									color: "#fff",
								}}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
