import React from 'react';

const DateTile = () => {
	const d = new Date();
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	const month = months[d.getMonth()];
	const weekday = weekdays[d.getDay()];
	const date = d.getDate();
	return (
		<div className="card date-tile d-flex flex-column align-items-center justify-content-between">
			<span className="month">{month}</span>
			<span className="date">{date}</span>
			<span className="weekday">{weekday}</span>
		</div>
	);
};

export default DateTile;
