const apiKey = "5a505036665655cfdb0fdcb4b68c809e";
const city = "Kyiv";
const weatherWidget = document.getElementById("weather");

function updateWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "temp"
      ).textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById(
        "desc"
      ).textContent = `Description: ${data.weather[0].description}`;
      document.getElementById(
        "humidity"
      ).textContent = `Humidity: ${data.main.humidity}%`;
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
}

document.getElementById("btn").addEventListener("click", (event) => {
  updateWeather();
});
