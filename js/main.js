// when click on hamge it show in slider
let images = document.querySelectorAll(".slider-img");
let carousles = document.querySelectorAll(".carousel-item");
images.forEach((img) => {
  img.addEventListener("click", function () {
    for (let i = 0; i < carousles.length; i++) {
      carousles[i].classList.remove("active");
      if (this.src == carousles[i].children[0].src) {
        carousles[i].classList.add("active");
      }
    }
  });
});
const d = new Date();
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".date").innerHTML =
  weekday[d.getDay()] +
  " ," +
  month[d.getMonth()] +
  " " +
  d.getDate() +
  "," +
  d.getFullYear();

// make navbar as accordion for smaller screens
if ($(window).width() < 768) {
  $(".dropdown-menu a").click(function (e) {
    e.preventDefault();
    if ($(this).next(".submenu").length) {
      $(this).next(".submenu").toggle();
    }
    $(".dropdown").on("hide.bs.dropdown", function () {
      $(this).find(".submenu").hide();
    });
  });
  document.querySelector(".fabtn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".submenu").classList.toggle("show");
  });
}
