"use strict";
//loop
//if first value is == to value at the given index
// remove index
//if second value is == to value at the given index
// remove index
//if second value is == to value at the given index
// remove index//

function removeDuplicates(arrayOfStrings) {
    for (let i = 1; i < arrayOfStrings.length; i++) {
        for (let j = 1; j < arrayOfStrings.length; j++) {
            if (arrayOfStrings[0] == arrayOfStrings[j]) {
                arrayOfStrings.splice(0, 1);
            } else if (arrayOfStrings[0] == arrayOfStrings[j]) {
                arrayOfStrings.splice(0, 1);
            }
        }
    }


    // if (arrayOfStrings[0] == arrayOfStrings[j]) {
    //     arrayOfStrings.splice(0, 1);
    // }
    // if (arrayOfStrings[0] == arrayOfStrings[3]) {
    //     arrayOfStrings.splice(0, 1);
    // }
    // if (arrayOfStrings[0] == arrayOfStrings[4]) {
    //     arrayOfStrings.splice(0, 1);
    // }
    // if (arrayOfStrings[0] == arrayOfStrings[5]) {
    //     arrayOfStrings.splice(0, 1);
    // }
    return arrayOfStrings;
}

console.log(removeDuplicates(["bob", "squid", "samantha", "bob"]))


// removeDuplicates(["tilda","tilda"]);
//
//
// removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]);

