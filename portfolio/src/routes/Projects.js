import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import Work from '../components/Work';
const Projects = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading="PROJECTS."
				text="Some of my most recent work"
			/>
			<Work />
			<Footer />
		</div>
	);
};

export default Projects;
