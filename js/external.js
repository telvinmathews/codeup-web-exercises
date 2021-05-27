"use strict";

alert('Welcome to my Website!');
var userFavColor = prompt("What is your favorite color?");
alert(userFavColor + " is my favorite color too!");

var movieCostPerDay = 3;
var userMovies = Number(prompt("How many movies did you rent?"));
var userRent = Number(prompt("How many many days total do you want to rent the movies?"));
var receipt = alert("You owe: $" + userMovies * userRent + " Dollars!");

var googleHourlyRate = 400;
var amazonHourlyRate = 380;
var faceBookHourlyRate = 350;
var googleWorkedHr = 6;
var fbWorkedHr = 10;
var amazonWorkedHr = 4;
var gPay = googleHourlyRate * googleWorkedHr;
var fbPay = faceBookHourlyRate * fbWorkedHr;
var amazonPay = amazonHourlyRate * amazonWorkedHr;

var totalPay = alert("You will receive: " + (gPay + fbPay + amazonPay) + " this week!");

var classFull = prompt("Is the class full? yes or no")
var currentSchedule = prompt("Is your schedule full? yes or no");

if (classFull === "no" && currentSchedule === "no") {
    alert("Great! Student is enrolled!");
} else {
    alert("student is not enrolled!");
}
var userResponse = prompt("Are you a premium member? yes or no");
var items = Number (prompt("How many items do you want to buy?"));
var offerExpired = true;
var productOffer = true;

if (userResponse === "yes" || items > 2 && productOffer === !offerExpired) {
    alert("Great You have an offer!");
} else {
    alert("You need to buy more items or become an premium member to get an offer!");
}
