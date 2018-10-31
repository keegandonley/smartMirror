import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
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
