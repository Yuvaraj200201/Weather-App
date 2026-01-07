import CurrentTemp from "./WeatherCardDetails/CurrentTemp";
import WeatherDetails from "./WeatherCardDetails/WeatherDetails";
import SeaGnd from "./WeatherCardDetails/SeaGnd";
import mapIn from "../assets/location.png"

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="WC-container">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img className="w-5 h-5 sm:w-10 sm:h-10 text-red-600 mr-2" src={mapIn}/>
          <span className="text-white font-semibold text-lg">{weatherData ? weatherData.name : ""}</span>
        </div>
        <div className="text-right">
          <div className="text-blue-600 dark:text-red-600">
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
      <div>
        <CurrentTemp weatherData={weatherData} />
        <WeatherDetails weatherData={weatherData} />
        <SeaGnd weatherData={weatherData} />
      </div>
    </div>
  );
};

export default WeatherCard;
