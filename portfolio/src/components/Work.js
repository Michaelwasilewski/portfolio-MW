import React from 'react';
import './MyProjectsStyles.css';
import WorkCard from './MyProjects';
import WorkCardData from './WorkCardData';

const Work = () => {
	return (
		<div className="work-container">
			<h1 className="project-heading">Projects</h1>
			<div className="project-container">
				{WorkCardData.map((val, ind) => {
					return (
						<WorkCard
							key={ind}
							imgsrc={val.imgscr}
							title={val.title}
							text={val.text}
							view={val.view}
							source={val.source}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Work;
