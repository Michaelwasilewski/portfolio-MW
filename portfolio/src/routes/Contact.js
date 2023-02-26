import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
const Contact = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading="CONTACT."
				text="Lets have a chat"
			/>
			<Footer />
		</div>
	);
};

export default Contact;
