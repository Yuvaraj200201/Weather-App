import mountain  from "../../assets/mountain.png";
import seaLevel  from "../../assets/sea-level.png";

const SeaGnd = ({ weatherData }) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-2 md:mt-4">
      <div className="WD">
        <img className="WDImg" src={mountain} />
        <div>
          <h2 className="WD-h2">Ground Level</h2>
          <h3 className="WD-h3">
            {weatherData ? weatherData.main?.grnd_level : ""} hPa
          </h3>
        </div>
      </div>

      <div className="WD">
        <img className="WDImg" src={seaLevel} />
        <div>
          <h2 className="WD-h2">Sea Level</h2>
          <h3 className="WD-h3">
            {weatherData ? weatherData.main?.sea_level : ""} hPa
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SeaGnd;
