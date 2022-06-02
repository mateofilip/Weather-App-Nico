import './Body.scss';
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  FaTint,
  FaWind,
} from 'react-icons/fa';

export default function Body(props) {
  return (
    <div className="Body animate__animated animate__fadeInUp">
      <div className="main-container">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${props.weather.img}@2x.png`}
            alt="icon"
          />
        </div>
        <div>
          <h1>{props.weather.temp}&deg;C</h1>
          <h2>
            {props.weather.city} · {props.weather.weather}
          </h2>
        </div>
      </div>

      <div className="details-container">
        <h2>Details</h2>
        <h3>Current Weather</h3>

        <div className="other-container">
          <div className="detail">
            <div className="icon">
              <FaTemperatureLow />
            </div>

            <div>
              <h4>
                {props.weather.maxTemp}&deg; | {props.weather.minTemp}&deg;
              </h4>
              <p>Temperature</p>
            </div>
          </div>

          <div className="detail">
            <div className="icon">
              <FaTemperatureHigh />
            </div>

            <div>
              <h4>{props.weather.feelsLike}&deg;</h4>
              <p>Thermal Sensation</p>
            </div>
          </div>

          <div className="detail">
            <div className="icon">
              <FaTint />
            </div>

            <div>
              <h4>{props.weather.humidity}%</h4>
              <p>Humidity</p>
            </div>
          </div>

          <div className="detail">
            <div className="icon">
              <FaWind />
            </div>

            <div>
              <h4>{props.weather.windSpeed} km/h</h4>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
