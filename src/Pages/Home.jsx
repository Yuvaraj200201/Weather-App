import { Search } from "lucide-react";
import WeatherCard from "../Component/WeatherCard";
import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

const Home = () => {
  const { fetchWeather, data, searchQuery, setSearchQuery } =
    useContext(WeatherContext);
  const weatherData = data;

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim() !== "") {
      fetchWeather({ city: searchQuery.trim() });
    } else {
      alert("Please enter city name");
    }
  };
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 
    to-red-400 bg-opacity-10 font-serif dark:bg-[url('/src/assets/darkBg.avif')]"
    >
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-white mb-4">
          Weather
        </h1>

        {/* Searchbar */}
        <div className="max-w-md mx-auto pb-2">
          <form className="relative" onClick={handleSearch}>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search for city..."
              className="search"
            />
            <Search className="search-icon" />
            <button className="search-btn">
              <Search className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </button>
          </form>
          <div className="mt-5 mx-2 md:mt-10">
            <WeatherCard weatherData={weatherData} />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Home;
