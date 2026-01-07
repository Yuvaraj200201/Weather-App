import humidity from "../../assets/humidity.png";
import nature from "../../assets/nature.png";
import eye from "../../assets/eye.png";
import hot from "../../assets/hot.png";

const WeatherDetails = ({ weatherData }) => {
  // oneFoot = 0.3048 meters, oneKm = 1000 meters
  const feetToKm = 0.3048 / 1000;

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      <div className="WD">
        <img className="WDImg" src={humidity} />
        <div>
          <h2 className="WD-h2">Humidity</h2>
          <h3 className="WD-h3">
            {weatherData ? weatherData.main?.humidity : ""} %
          </h3>
        </div>
      </div>

      <div className="WD">
        <img className="WDImg" src={nature} />
        <div>
          <h2 className="WD-h2">Wind Speed</h2>
          <h3 className="WD-h3">
            {weatherData ? weatherData.wind?.speed : ""} km/h
          </h3>
        </div>
      </div>

      <div className="WD">
        <img className="WDImg" src={eye} />
        <div>
          <h2 className="WD-h2">Visibility</h2>
          <h3
           className="WD-h3">
            {weatherData ? (weatherData.visibility * feetToKm).toFixed(3) : ""}
            km
          </h3>
        </div>
      </div>

      <div className="WD">
        <img className="WDImg" src={hot} />
        <div>
          <h2 className="WD-h2">Feels Like</h2>
          <h3 className="WD-h3">
            {weatherData ? weatherData.main?.feels_like : ""}°
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
