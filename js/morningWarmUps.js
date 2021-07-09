//
// // function countSpaces(str) {
// //     var spaces = 0;
// //
// //     if (typeof str !== 'string') {
// //         return false;
// //     }
// //     for (let i = 0; i < str.length; i++) {
// //         if (str[i] === " ") {
// //             spaces++;
// //         }
// //     }
// //     return spaces;
// // }
// // var result = countSpaces(' hakvbh njl  jalbxd');
// // var result2 = countSpaces(' bkha bjd');
// // var result3 = countSpaces('');
// // var result4 = countSpaces(' hjhb bjb jbj ');
// // console.log(result);
// // console.log(result2);
// // console.log(result3);
// // console.log(result4);
//
//
// // July 6th 2021
// // // TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// // // Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
// // function capitalizeAllNames(arrayOfStrings) {
// //     for (let i = 0; i < arrayOfStrings.length; i++) {
// //        arrayOfStrings = arrayOfStrings[i].toUpperCase();
// //     }
// //     console.log(arrayOfStrings);
// // }
// // capitalizeAllNames(['bill','bob', 'jack']);
// //
// // // TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
// // //  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// // // Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
// //
// // function capitalizeFirstLetter(arrayOfStrings) {
// //     arrayOfStrings.forEach(string)
// //
// // }
//
// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65,
}
personOne.getFullName = function () {
    return this.firstName + " " + this.lastName;
}
console.log(personOne.getFullName());
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}
personTwo.getNicelyFormattedFullName = function (firstName, lastName) {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase()
}
console.log(personTwo.getNicelyFormattedFullName());

// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}
personThree.intro = function () {
    return "Hello, My name is " + this.firstName + ' ' + this.lastName + " and I am 25 years old ";
}
console.log(personThree.intro());

// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
function stringsToObj(arrayOfStrings) {
    var input = new Object();
    input.originalString = arrayOfStrings[0];
    input.countOfLetters = arrayOfStrings[1];
    return [input];
}
console.log(stringsToObj(['mat','3']));
console.log(stringsToObj(['cam','3']));
console.log(stringsToObj(['happy','4']));
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]
// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
function objToString(st) {

}
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//
function getTallUsers(arrayOfObjects) {
    if (people) {

    }
}

console.log(getTallUsers(people));