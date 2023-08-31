import profileImage from '../assets/michael-cv.jpg';
import './AboutSection.css';

export function AboutSection() {
    return (
        <div className="about-section">
             <div className="about-image">
             <img src={profileImage} alt="Michael" />
            </div>
            <div className='about-text'>
                <p>
                    I am a 29-year-old frontend developer, proudly graduated from the Noroff School of Digital Media and Technology. While I wasn't originally born in Norway, I have been calling this beautiful country my home since I was 10. My journey has taught me the value of adaptability and the importance of continuous learning. Driven by a passion for knowledge, I am always eager to explore new technologies and methodologies in frontend development.
                </p>
                <p>
                    I truly excel in a team environment. Collaborating with others, sharing ideas, and achieving goals as a united front brings me great satisfaction. Along with this comes a desire to take on responsibility and lead when the situation calls for it. Engaged, eager to learn, and responsible are just a few of the qualities I bring to the table.
                </p>
            </div>
        </div>
    );
}
