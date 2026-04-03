import { useEffect, useState } from "react";

type WeatherData = {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
};

const weather_api = {
  key: import.meta.env.VITE_API_KEY,
  url: "https://api.openweathermap.org/data/2.5/weather",
};

const geo_api = {
  key: import.meta.env.VITE_API_KEY,
  url: "http://api.openweathermap.org/geo/1.0/direct",
};

export default function Card() {
  const [Location, setLocation] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const getLocation = async () => {
    if (!Location) {
      return;
    }
    const response = await fetch(
      `${geo_api.url}?q=${Location}&limit=1&appid=${geo_api.key}`,
    );
    const data = await response.json();
    if (data.length > 0) {
      setCity(data[0].name);
      setCountry(data[0].country);
      setLat(data[0].lat);
      setLon(data[0].lon);
    }
  };

  useEffect(() => {
    const search = async () => {
      if (!lat || !lon) {
        return;
      }

      const response = await fetch(
        `${weather_api.url}?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${weather_api.key}`,
      );

      try {
        if (!response.ok) {
          throw new Error(response.statusText + " : API request failed");
        }
        const result = await response.json();
        setWeather(result);
        console.log("Weather data:", result);
      } catch (err) {
        console.log(err);
      }
    };
    search();
  }, [lat, lon]);

  return (
    <div className="card">
      <h2>Weather Simple</h2>
      <div>
        <input
          type="text"
          id="location"
          placeholder="Enter Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={getLocation}>Search</button>
      </div>
      <div className="weather-info">
        {City && Country && (
          <h3 className="location">
            {City}, {Country}
          </h3>
        )}
        {weather?.main && (
          <div>
            <p style={{ fontStyle: "italic", fontSize: "0.9em", color: "grey" }}>"{weather.weather[0].description}"</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>
              Wind Speed: {weather.wind.speed} m/s {weather.wind.deg}°
            </p>
            <p>Pressure: {weather.main.pressure} hPa</p>
            <p>Visibility: {weather.visibility / 1000} km</p>
            <p>Cloudiness: {weather.clouds.all}%</p>
            <div className="sun">
              <p>
                Sunrise:{" "}
                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
              </p>
              <p>
                Sunset:{" "}
                {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
            <p style={{ color: "grey", fontSize: "0.9em" }}>Date: {new Date().toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
