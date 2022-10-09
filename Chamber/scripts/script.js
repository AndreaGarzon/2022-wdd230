
let last_update = new Date(document.lastModified);

document.getElementById("last_update").innerHTML = `Last Updated: ${last_update}`

let year = new Date().getFullYear();

document.getElementById("year").innerHTML = year

let months = Array("January", "February", "March", "April", "June", "July","August", "September", "October", "November", "December")
let weekdays = Array("sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

let today = new Date();

let weekday = weekdays[today.getDay()];
let day = today.getDate();
let month = months[today.getMonth()];

document.getElementById("today").innerHTML = `${weekday} , ${day} ${month} ${year}`

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation")
const naveg = document.querySelector(".nav-space");

hambutton.addEventListener('click', () => {mainnav.classList.toggle("responsive")}, false);
hambutton.addEventListener('click', () => {naveg.classList.toggle("wider")}, false);

