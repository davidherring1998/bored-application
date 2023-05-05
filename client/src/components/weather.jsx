import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

function Weather() {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      setLong(position.coords.latitude);
      setLat(position.coords.longitude);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c6e868e79bd98cae1acee3ad146ee1cc`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setWeatherData(data);
        });
    }
    getUserLocation();
  }, []);

  return (
    <>
      <div className="weather-container">
        <h5 className="temp">{}</h5>
      </div>
    </>
  );
}
export default Weather;
