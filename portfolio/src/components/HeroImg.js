import './HeroImgStyles.css';

import React from 'react';

import IntroImg from '../assets/hero-img.jpg';

import { Link } from 'react-router-dom';

const HeroImg = () => {
	return (
		<div className="hero">
			<div className="mask">
				<img
					className="intro-img"
					src={IntroImg}
					alt="IntroImg"
				/>
			</div>
			<div className="content">
				<p>Hi, I'm Michael</p>
				<h1>Junior Frontend Developer</h1>
				<div>
					<Link to="/projects" className="btn">
						Projects
					</Link>
					<Link to="/about" className="btn btn-light">
						About
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;
