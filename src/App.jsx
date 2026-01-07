import { useEffect } from "react";
import "./App.css";
import { WeatherProvider } from "./Context/WeatherContext";
import Home from "./Pages/Home";

function App() {
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    if(isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;
