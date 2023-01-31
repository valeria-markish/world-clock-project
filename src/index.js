function update() {
  let lisbon = document.querySelector("#lisbon");
  let lisbonDate = lisbon.querySelector(".date");
  let lisbonTime = lisbon.querySelector(".time");

  lisbonDate.innerHTML = moment.tz("Europe/Lisbon").format("MMMM Do YYYY");
  lisbonTime.innerHTML = moment
    .tz("Europe/Lisbon")
    .format("h:mm:ss [<small>]A[</small>]");

  let barcelona = document.querySelector("#barcelona");
  let barcelonaDate = barcelona.querySelector(".date");
  let barcelonaTime = barcelona.querySelector(".time");

  barcelonaDate.innerHTML = moment.tz("Europe/Madrid").format("MMMM Do YYYY");
  barcelonaTime.innerHTML = moment
    .tz("Europe/Madrid")
    .format("h:mm:ss [<small>]A[</small>]");
}
update();
setInterval(update, 1000);
