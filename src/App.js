import React from 'react';
import './App.css';
import DateTile from './Components/DateTile';
import workoutData from './WorkoutData';

const App = () => {
	const randomIndex = Math.floor(Math.random() * workoutData.length);
	const randomWorkout = workoutData[randomIndex].description;

	return (
		<div className="container d-flex flex-column justify-content-center">
			<div className="card workout-card d-flex align-items-center">
				<h1>Workout Of The Day</h1>
				<DateTile />
				<p className="workout-description">{randomWorkout}</p>
			</div>
			<p className="text-white align-self-center copyright">&copy; Bryan Herrera | Fullstack Web Developer</p>
		</div>
	);
};

export default App;
