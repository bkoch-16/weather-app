const key = "3VVAK74BCLNUZZTA5ZLDJUJHB";

async function getWeather(location = "losangeles") {
  const response = await fetch(
    ("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location) &
      ("?key=" + key),
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeather();
