import profileImage from "../assets/michael-cv.jpg";
import "./AboutSection.css";

export function AboutSection() {
	return (
		<div className="about-section">
			<div className="about-image">
				<img src={profileImage} alt="Michael" />
                <p className="name">Michael Wasilewski</p>
			</div>
			<div className="about-text">
				<h2>About Me</h2>
				<p>
					I am a 29-year-old frontend developer
					that graduated from the Noroff School of
					Digital Media and Technology in 2023.
					After working twelve years in various
					customer service jobs I wanted more
					challenges and started my education to
					become a developer. This career change
					has proven to be the best decision I
					ever made, where I feel challenged but
					also highly motivated to excel in
					developing. Driven by a passion for
					knowledge, I am always eager to explore
					new technologies and methodologies. I
					work well alone, but truly excel in a
					team environment. Collaborating with
					others, sharing ideas, and achieving
					goals as a united front brings me great
					satisfaction, and I truly believe in
					playing each other good. Along with this
					comes a desire to take on responsibility
					and lead when the situation calls for
					it. I was born I Poland, but have lived
					some years in England and most of my
					life in Norway. Because of this I am
					fluent in Norwegian, English and Polish.
					My immigration journey has taught me the
					value of adaptability, hard work and the
					importance of continuous learning. I am
					an loyal person and will work hard so
					that I and the company where I work can
					excel, innovate and reach new heights.{" "}
				</p>
				<p>
					Here you can see a summary of my ever
					evolving developer knowledge: HTML5,
					CSS3, JavaScript, graphic design, color
					theory, UX/UI design principals,
					wireframing and prototyping, agile work
					methods as Scrum and Kanban,
					interaction- and responsive design,
					manual-,unit- and end-to-end testing,
					Jest and Cypress, machine learning,
					DevOps, MySQL, MongoDB, Supabase,
					Netlify and Vercel. CSS-frameworks as
					Bootstrap, SASS, TailWind and PostCSS.
					JavaScript ES6-spesialisations as
					API-integration, Rest, Postman,
					HTTPS-requests and JWT. My stack also
					includes React, JSX, SASS,
					Styled-components, Redux, Redux Toolkit,
					Git, VITE, GitHub Desktop, SourceTree,
					NodeJS and Visual Studio Code.{" "}
				</p>
			</div>
		</div>
	);
}
