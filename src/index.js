function update() {
  let cities = [
    { name: "honolulu", tz: "Pacific/Honolulu" },
    { name: "havana", tz: "America/Havana" },
    { name: "reykjavik", tz: "Atlantic/Reykjavik" },
    { name: "dubai", tz: "Asia/Dubai" },
    { name: "tokyo", tz: "Asia/Tokyo" },
  ];
  let citiesDiv = document.querySelector("#cities");
  let citiesElements = ``;
  cities.forEach(function (city) {
    let nameCity = city.name;
    nameCity = nameCity.charAt(0).toUpperCase() + nameCity.slice(1);
    citiesElements += `<div class="city" id="${city.name}">
          <div class="header">
            <h2>${nameCity}</h2>
            <p class="date"></p>
          </div>
          <p class="time"></p>
        </div>`;
  });
  citiesDiv.innerHTML = citiesElements;
  cities.forEach(function (data) {
    let cityElement = document.querySelector(`#${data.name}`);
    if (cityElement) {
      let date = cityElement.querySelector(".date");
      let time = cityElement.querySelector(".time");
      date.innerHTML = moment.tz(data.tz).format("MMMM Do YYYY");
      time.innerHTML = moment
        .tz(data.tz)
        .format("h:mm:ss [<small>]A[</small>]");
    }
  });
}

function changeClock(event) {
  clearInterval(updateInterval);
  if (event.target.value.length > 0) {
    let cityName = event.target.value;
    if (cityName === "My_Location") {
      cityName = moment.tz.guess();
    }
    let cityNameTitle = cityName.replace("_", " ").split("/")[1];
    let cities = document.querySelector("#cities");
    cities.innerHTML = `<div class="city">
        <div class="header">
          <h2>${cityNameTitle}</h2>
          <p class="date">${moment.tz(cityName).format("MMMM Do YYYY")}</p>
        </div>
        <p class="time">${moment
          .tz(cityName)
          .format("h:mm:ss [<small>]A[</small>]")}</p>
      </div>
      <div class="go-back"><a href="/">🔙 to cities</a></div>`;
  }
  setInterval(function () {
    let cityName = event.target.value;
    if (cityName === "My_Location") {
      cityName = moment.tz.guess();
    }
    let cityDate = document.querySelector(".date");
    let cityTime = document.querySelector(".time");
    cityDate.innerHTML = moment.tz(cityName).format("MMMM Do YYYY");
    cityTime.innerHTML = moment
      .tz(cityName)
      .format("h:mm:ss [<small>]A[</small>]");
  }, 1000);
}

update();
let exists = document.querySelector("#honolulu");
if ((exists = true)) {
  updateInterval = setInterval(update, 1000);
}

let city = document.querySelector("#city");
city.addEventListener("change", changeClock);
