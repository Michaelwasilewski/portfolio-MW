import './FooterStyles.css';

import React from 'react';

import {
	FaFacebook,
	FaMailBulk,
	FaPhone,
	FaHome,
	FaLinkedin,
	FaGithub,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome
							size={20}
							style={{ color: '#fff', marginRight: '2rem' }}
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
									color: '#fff',
									marginRight: '2rem',
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
									color: '#fff',
									marginRight: '2rem',
								}}
							/>
							Michael_grimestad94@hotmail.com
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>About me</h4>
					<p>
						I'm a 28 year old student at Noroff, looking to
						find a junior developer position at a company !
						I enjoy discussing new project and design
						challenges. Feel free to contant me any time.
					</p>
					<div className="social">
						<FaFacebook
							size={30}
							style={{
								color: '#fff',
								marginRight: '1rem',
							}}
						/>
						<FaGithub
							size={30}
							style={{
								color: '#fff',
								marginRight: '1rem',
							}}
						/>
						<FaLinkedin
							size={30}
							style={{
								color: '#fff',
								marginRight: '1rem',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
