import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import { AboutSection } from '../components/AboutSection';
const About = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading="ABOUT"
			/>
			<AboutSection/>
			<Footer />
		</div>
	);
};

export default About;
