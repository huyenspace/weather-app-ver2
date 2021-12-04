import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <div className="row mt-5">
            <div className="col-4">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Cloudy"
              />
            </div>
            <div className="col-8">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">
                °<a href="/">C</a> | <a href="/">F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h1>New York</h1>
          <ul className="currentWeather">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col-4 inforAdd mt-5">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
