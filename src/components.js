import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	align-items: center;
`;

export const Greeting = styled.div`
	padding: 20px;
	font-size: 3.2em;
`;

export const TimeWrapper = styled.div`
	margin-left: auto;
	padding: 20px;
	font-size: 3em;
`;

export const DayGlance = styled.div`
	display: flex;
	margin: 10px 20px 0 20px;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	align-items: center;
`;

export const CurrentDate = styled.div`
	padding: 20px 0;
	font-size: 3em;
`;

function getProgress(seconds) {
	if (seconds >= 45) {
		return 'white white white white';
	} else if (seconds >= 30) {
		return 'white white white transparent';
	} else if (seconds >= 15) {
		return 'white white transparent transparent';
	} else if (seconds > 0) {
		return 'white transparent transparent transparent';
	} else {
		return 'transparent transparent transparent transparent';
	}
}

export const Seconds = styled.div`
	display: inline-block;
	background: transparent;
	border: 2px solid black; /* color not required, may show device fail */
	border-color: ${props => getProgress(props.seconds)};
	transition: border-color 10s;
	height: 20px;
	width: 20px;
	border-radius: 50%; /* more than 50, shape-size adjustment irrelevant */
	transform: rotate(45deg); /* transform optional */
	margin-left: 10px;
`;

export const CurrentWeather = styled.div`
	margin-left: auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	
	& > svg {
		font-size: 6em;
		margin-left: auto;
	}
`;

export const Stats = styled.div`
	text-align: center;
	font-size: 3.5em;
	font-weight: 300;
	display: flex;
	align-items: center;

	& > svg {
		font-size: 0.8em;
		margin-right: 10px;
	}

	& > svg:not(:first-child) {
		padding-left: 20px;
	}
`;

export const WeatherSummary = styled.div`
	font-size: 0.85em;
	padding-left: 7px;
`
