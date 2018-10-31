import React, { useEffect, useState } from 'react';
import { TimeWrapper, Seconds } from "./components";

function getMins(time) {
	const minutes = String(time.getMinutes());
	if (minutes.length === 1) {
		return `0${minutes}`;
	}
	return minutes;
}

function getHours(time) {
	const hours = time.getHours();
	return {
		t: hours % 12,
		a: hours >= 12 ? 'pm' : 'am'
	}
}

function Time () {
	const [time, setTime] = useState(new Date());
	
	useEffect(() => {
		setTimeout(() => {
			setTime(new Date());
		}, 1000)
	});

	
	
	return (
		<TimeWrapper>
			{getHours(time).t}:{getMins(time)} {getHours(time).a}<Seconds seconds={time.getSeconds()}/>
		</TimeWrapper>
	)
}

export default Time;