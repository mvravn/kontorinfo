var today = new Date().getTime().toString();
// console.log(today.slice(0, 10)); // Sekunder siden 1/1-1970
var dayms = 24 * 60 * 60 * 1000;
console.log(dayms);
console.log(today);
// var d = new Date(2018, 11, 24, 10, 33, 30, 0).getTime(); // måned er 0-indekseret. År, måned, dato, timer, minutter, sekunder, ms https://www.w3schools.com/js/js_dates.asp
var d = new Date(2020, 08, 21, 0, 0, 0, 0).getTime();
console.log(d);
