const key = "3VVAK74BCLNUZZTA5ZLDJUJHB";

async function getWeather(location = "losangeles") {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      ("?key=" + key),
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  const myWeather = parseWeather(weatherData);
  console.log(myWeather);
  return myWeather;
}

function parseWeather(weatherData) {
  const myWeather = {
    location: weatherData.resolvedAddress,
    conditions: weatherData.currentConditions.conditions,
    temp: weatherData.currentConditions.temp,
    feelslike: weatherData.currentConditions.feelslike,
    humidity: weatherData.currentConditions.humidity,
    precip: weatherData.currentConditions.precipprob,
    uvindex: weatherData.currentConditions.uvindex,
  };
  return myWeather;
}

const weatherForm = document.querySelector("#location-form");
weatherForm.addEventListener("submit", () => {
  event.preventDefault();
  const location = document.querySelector("#location-input").value;
  myWeather = getWeather(location);
});
