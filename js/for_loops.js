"use strict";

function showMultiplicationTable(number) {
for (var i = 1; i <= 10; i++) {
    console.log(number + ' * ' + i + ' = ' + (i * number));
    }
}
console.log(showMultiplicationTable(7));
// console.log(showMultiplicationTable(8));
// console.log(showMultiplicationTable(9));
// console.log(showMultiplicationTable(10));

//Math.random()

for (var i = 1; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 200)
    if (randomNumber % 2 !== 0) {
        console.log(randomNumber + " is odd");
    }
    else {
       console.log(randomNumber + " is even");
    }
}

