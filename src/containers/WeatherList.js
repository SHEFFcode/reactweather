import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;  // same as cityData.city.coord.lon && cityData.city.coord.lat

    console.log(temps);
    return (
      <tr key={ cityData.city.name }>
        <td><Map lon={ lon } lat={ lat } /></td>
        <td><Chart data={ temps } color="orange" units="C"/></td>
        <td><Chart data={ pressures } color="green" units="hPa"/></td>
        <td><Chart data={ humidities } color="black" units="%"/></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather.bind(this)) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) { //param.weather
  return { weather }; // { weather } = { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);

