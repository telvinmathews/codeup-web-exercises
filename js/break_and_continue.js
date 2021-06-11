"use strict";


let user_number;
    while (true) {
        user_number = Number(prompt("Pick an odd number between 1 and 50: "));
        if((user_number <= 1) && (user_number >= 50)) {
            if (user_number % 2 === 0) {
                console.log("Invalid input!: " + user_number);
            }
        }
    }


//
// if (user_number % 2 !== 0) {
//     for (let i = 0; i < 49; i += 2) {
//         if (user_number === i) {
//             console.log('Opps skip this #' + i[user_number] + " \n")
//             continue;
//         }
//         if (user_number % 2 !== 0) {
//             console.log('Here is an odd number #' + i + " \n");
//         }
//     }
// }
