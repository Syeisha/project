let now = new Date();

let h2 = document.querySelector("h2");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  console.log(city);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = city;

  let apiKey = "f7275ce1588d99afa5d8da3ea460c7c7";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial";
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
}
