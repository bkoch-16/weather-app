const key = "3VVAK74BCLNUZZTA5ZLDJUJHB";

async function getWeather(location = "losangeles") {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      ("?key=" + key),
    { mode: "cors" }
  );
  const weatherData = await response.json();
  const myWeather = parseWeather(weatherData);
  displayWeather(myWeather);
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
  getWeather(location);
});

function displayWeather(myWeather) {
  const locationDataDisplay = document.querySelector("#location-data");
  const conditionsDataDisplay = document.querySelector("#conditions-data");
  const tempDataDisplay = document.querySelector("#temp-data");
  const feelslikeDataDisplay = document.querySelector("#feelslike-data");
  const humidityDataDisplay = document.querySelector("#humidity-data");
  const precipDataDisplay = document.querySelector("#precip-data");
  const uvindexDataDisplay = document.querySelector("#uvindex-data");

  locationDataDisplay.textContent = myWeather.location;
  conditionsDataDisplay.textContent = myWeather.conditions;
  tempDataDisplay.textContent = myWeather.temp;
  feelslikeDataDisplay.textContent = myWeather.feelslike;
  humidityDataDisplay.textContent = myWeather.humidity;
  precipDataDisplay.textContent = myWeather.precip;
  uvindexDataDisplay.textContent = myWeather.uvindex;
}
