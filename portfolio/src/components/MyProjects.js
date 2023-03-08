import React from 'react';
import './MyProjectsStyles.css';
import { NavLink } from 'react-router-dom';

const MyProjects = (props) => {
	return (
		<div className="project-card">
			<img src={props.imgsrc} alt="First Project" />
			<h2 className="project-title">{props.title}</h2>
			<div className="project-details">
				<p>{props.text}</p>
				<div className="project-btns">
					<NavLink to={props.view} className="btn">
						View
					</NavLink>
					<NavLink to={props.source} className="btn">
						Source
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
