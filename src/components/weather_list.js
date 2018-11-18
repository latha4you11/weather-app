import React, { Component } from 'react'
import axios from 'axios';
import '../App.css'

import Chart from './line_chart';

const API_KEY = '635e9f7bb3f132fec3f741a2248a528a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export class WeatherList extends Component {

    getWeatherReport = (city) => {
        const url = `${ROOT_URL}&q=${city},us`;
        const cityData = axios.get(url)
        .then((response) => {
            return response.data
        }).catch(e => {console.log(e)})
        console.log("citydtaa", cityData)
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log("temps", temps)
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        console.log("jjasbkn")
        return(
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td><Chart data={temps} color="red" units="K"/></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
        )
        
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (Kelvin)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.city ?
                        
                        this.props.city.map((cityname) => this.getWeatherReport(cityname)):
                        console.log("dhjj")
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WeatherList


// const WeatherList = (props) => {
//     const Items = props.city.map((city) => {
//         const url = `${ROOT_URL}&q=${city},us`;
//         const cityData = axios.get(url).then((response) => {
//             return response.data;            
//         }).catch((e) => {console.log(e)})
//         console.log("data", cityData)
//         debugger
//         return (
//             <WeatherListItem 
//                 key={cityData.city.id}
//                 value={cityData} />
//         )

//     })

//     return (
//         <div>
//                  <table className="table table-hover">
//                      <thead>
//                          <tr>
//                              <th>City</th>
//                              <th>Temperature (Kelvin)</th>
//                              <th>Pressure (hPa)</th>
//                              <th>Humidity (%)</th>
//                          </tr>
//                      </thead>
//                      <tbody>
//                          {Items}
//                     </tbody>
//                 </table>
//             </div>
//     )
// }

// export default WeatherList;