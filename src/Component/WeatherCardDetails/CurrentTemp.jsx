import { SunMoon } from "lucide-react";
import cold from "../../assets/current temp/cold.svg";
import cool from "../../assets/current temp/cool.svg";
import hot from "../../assets/current temp/hot.svg";
import mild from "../../assets/current temp/mild.svg";
import veryCold from "../../assets/current temp/very cold.svg";
import warm from "../../assets/current temp/warm.svg";


const CurrentTemp = ({ weatherData }) => {
  const CurrentTemp = weatherData?.main?.temp;
  const currentWeather = weatherData?.weather[0].main;
  let tempIcon = null;
  if (CurrentTemp < 0) {
    tempIcon = veryCold;
  } else if (CurrentTemp <= 10) {
    tempIcon = cold;
  } else if (CurrentTemp <= 18) {
    tempIcon = cool;
  } else if (CurrentTemp <= 25) {
    tempIcon = mild;
  } else if (CurrentTemp <= 30) {
    tempIcon = warm;
  } else {
    tempIcon = hot;
  }

  return (
    <div className="text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start mb-4">
        <img className="h-20 w-20 text-white" src={tempIcon} />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {weatherData ? `${CurrentTemp}` : ""}°-
        {weatherData ? `${currentWeather}` : ""}
      </div>
      <div className="text-white text-xl opacity-90"></div>
    </div>
  );
};

export default CurrentTemp;
