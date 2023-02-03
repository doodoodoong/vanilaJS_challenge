const API_KEY = "0c341a13cfa4e941d041b2672f699816";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather");
      const cityName = data.name;
      const weatherData = data.weather[0].description;
      const cityWeather = `${cityName}, ${weatherData}`;
      weather.innerText = cityWeather;
    });
}

function geoError() {
  alert("TT. Ooops, I can't find you.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
