import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import StackExperience from '../components/StackExperience';
const Projects = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading="PROJECTS."
				text="Some of my most recent work"
			/>
			<StackExperience />
			<Footer />
		</div>
	);
};

export default Projects;
