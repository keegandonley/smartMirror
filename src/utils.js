import { faCloudSun, faSun, faMoon, faSnowflake, faWind, faCloud, faCloudMoon, faTint } from '@fortawesome/pro-light-svg-icons';

export function getWeatherIcon(icon) {
	if (icon === 'clear-day') {
	  return faSun;
	} else if (icon === 'clear-night') {
	  return faMoon;
	} else if (icon === 'rain') {
	  return faTint;
	} else if (icon === 'snow') {
	  return faSnowflake;
	} else if (icon === 'sleet') {
	  return faSnowflake;
	} else if (icon === 'wind') {
	  return faWind;
	} else if (icon === 'fog') {
	  return faCloud;
	} else if (icon === 'cloudy') {
	  return faCloud;
	} else if (icon === 'partly-cloudy') {
	  return faCloudSun;
	} else if (icon === 'partly-cloudy-day') {
		return faCloudSun;
	} else if (icon === 'partly-cloudy-night') {
	  return faCloudMoon;
	}
  }