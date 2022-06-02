import './Body.scss';

export default function Body(props) {
  return (
    <div className="Body">
      <h1>
        {props.weather.city} - {props.weather.weather}
      </h1>
      <h2>{props.weather.temp}&deg;C</h2>
      <h3>
        {props.weather.maxTemp}&deg;C | {props.weather.minTemp}&deg;C
      </h3>
      <h4>Feels Like {props.weather.feelsLike}&deg;C</h4>
    </div>
  );
}
