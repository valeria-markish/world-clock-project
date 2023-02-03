function update() {
  let lisbon = document.querySelector("#lisbon");
  if (lisbon) {
    let lisbonDate = lisbon.querySelector(".date");
    let lisbonTime = lisbon.querySelector(".time");

    lisbonDate.innerHTML = moment.tz("Europe/Lisbon").format("MMMM Do YYYY");
    lisbonTime.innerHTML = moment
      .tz("Europe/Lisbon")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let barcelona = document.querySelector("#barcelona");
  if (barcelona) {
    let barcelonaDate = barcelona.querySelector(".date");
    let barcelonaTime = barcelona.querySelector(".time");

    barcelonaDate.innerHTML = moment.tz("Europe/Madrid").format("MMMM Do YYYY");
    barcelonaTime.innerHTML = moment
      .tz("Europe/Madrid")
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
