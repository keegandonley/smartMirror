import React, { Component } from 'react';
import { Header, Greeting, DayGlance, CurrentDate, CurrentWeather, Stats, WeatherSummary } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faThermometerEmpty, faThermometerQuarter, faThermometerHalf, faThermometerThreeQuarters, faThermometerFull, faTint, faSun, faMoon, faSnowflake, faWind, faCloud, faCloudMoon, faSpinner } from '@fortawesome/pro-light-svg-icons';
import { name } from './config-public';
import Clock from './clock';
import Axios from 'axios';
import { darkSkyUrl } from './config-private';

function getGreeting(hour) {
  switch(hour) {
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 0:
    case 1:
    case 2:
      return 'evening';
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return 'morning';
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      return 'afternoon';
    default:
      return 'day';
  }
}

function day(time) {
  switch(time.getDay()) {
    case 0: return 'Sunday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
    default:
      return 'Doomsday';
  }
}

function month(time) {
  switch(time.getMonth()) {
    case 0: return 'January';
    case 1: return 'February';
    case 2: return 'March';
    case 3: return 'April';
    case 4: return 'May';
    case 5: return 'June';
    case 6: return 'July';
    case 7: return 'August';
    case 8: return 'September';
    case 9: return 'October';
    case 10: return 'November';
    case 11: return 'December';
    default: return '';
  }
}

function getTherm(temp) {
  if (temp > 90) {
    return faThermometerFull;
  } else if (temp > 75) {
    return faThermometerThreeQuarters;
  } else if (temp > 60) {
    return faThermometerHalf;
  } else if (temp > 50) {
    return faThermometerQuarter;
  }
  return faThermometerEmpty
}

function getWeatherIcon(icon) {
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
  } else if (icon === 'partly-cloudy-night') {
    return faCloudMoon;
  }
}
class App extends Component {
  state = {
    weather: null,
    loading: true,
  }

  async getWeather() {
    const res = await Axios.get(darkSkyUrl);
    console.log(res.data);
    this.setState({ weather: res.data, loading: false })
  }
  componentDidMount() {
    this.getWeather();
    this._weatherRefresh = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60 * 3); // 3 hours
  }

  componentWillUnmount() {
    clearInterval(this._weatherRefresh);
  }

  render() {
    const { loading, weather } = this.state;
    const time = new Date();
    const hour = time.getHours();
    return (
      <div className="App">
        <Header>
          <Greeting>Good {getGreeting(hour)}, {name}!</Greeting>
          <Clock />
        </Header>
        <DayGlance>
          <CurrentDate>
            Today is <strong>{day(time)} {month(time)} {time.getDate()}</strong>
            <br />
            {!loading && weather.hourly && (
              <WeatherSummary>
                It will be {weather.hourly.summary.toLowerCase()}
              </WeatherSummary>
            )}
          </CurrentDate>
          <CurrentWeather>
            <FontAwesomeIcon spin={loading} icon={!loading ? getWeatherIcon(weather.currently.icon) : faSpinner} />
            {
              !loading && weather.currently && (
                <Stats>
                  <FontAwesomeIcon icon={getTherm(weather.currently.temperature)} />{Math.round(weather.currently.temperature)}°F <FontAwesomeIcon icon={faTint} />{weather.currently.precipIntensity}%
                </Stats>
              )
            }
          </CurrentWeather>
        </DayGlance>
      </div>
    );
  }
}

export default App;
