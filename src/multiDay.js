import React from 'react';
import { MultiDayWrapper, DayWrapper } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeatherIcon } from './utils';

export default (props) => {
	const { weather } = props;
	return (
		<MultiDayWrapper>
			{
				weather.map((elem) => {
					return (
						<DayWrapper key={elem.date.toString()}>
						<div>
							<FontAwesomeIcon icon={getWeatherIcon(elem.icon)} />
						</div>
						<div>
							{Math.ceil(elem.temperatureHigh)}°F
							<br />
							{Math.ceil(elem.temperatureLow)}°F
							<br />
							{Math.ceil(elem.precipIntensity)}%
						</div>
						</DayWrapper>
					)
				})
			}
		</MultiDayWrapper>
	);
}