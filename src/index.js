function update() {
  let honolulu = document.querySelector("#honolulu");
  if (honolulu) {
    let honoluluDate = honolulu.querySelector(".date");
    let honoluluTime = honolulu.querySelector(".time");
    honoluluDate.innerHTML = moment
      .tz("Pacific/Honolulu")
      .format("MMMM Do YYYY");
    honoluluTime.innerHTML = moment
      .tz("Pacific/Honolulu")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let havana = document.querySelector("#havana");
  if (havana) {
    let havanaDate = havana.querySelector(".date");
    let havanaTime = havana.querySelector(".time");
    havanaDate.innerHTML = moment.tz("America/Havana").format("MMMM Do YYYY");
    havanaTime.innerHTML = moment
      .tz("America/Havana")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let reykjavik = document.querySelector("#reykjavik");
  if (reykjavik) {
    let reykjavikDate = reykjavik.querySelector(".date");
    let reykjavikTime = reykjavik.querySelector(".time");
    reykjavikDate.innerHTML = moment
      .tz("Atlantic/Reykjavik")
      .format("MMMM Do YYYY");
    reykjavikTime.innerHTML = moment
      .tz("Atlantic/Reykjavik")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let dubai = document.querySelector("#dubai");
  if (dubai) {
    let dubaiDate = dubai.querySelector(".date");
    let dubaiTime = dubai.querySelector(".time");
    dubaiDate.innerHTML = moment.tz("Asia/Dubai").format("MMMM Do YYYY");
    dubaiTime.innerHTML = moment
      .tz("Asia/Dubai")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoDate = tokyo.querySelector(".date");
    let tokyoTime = tokyo.querySelector(".time");
    tokyoDate.innerHTML = moment.tz("Asia/Tokyo").format("MMMM Do YYYY");
    tokyoTime.innerHTML = moment
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function changeClock(event) {
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
setInterval(update, 1000);

let city = document.querySelector("#city");
city.addEventListener("change", changeClock);
