import React, { Component } from 'react';
import { Header, Greeting, DayGlance, CurrentDate } from './components';
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
class App extends Component {

  async getWeather() {
    // const res = await Axios.get(darkSkyUrl);
    // console.log(res);
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
            Today is <strong>{day(time)} {month(time)} {time.getDate()}</strong>, {time.getFullYear()}
          </CurrentDate>

        </DayGlance>
      </div>
    );
  }
}

export default App;
