
// function countSpaces(str) {
//     var spaces = 0;
//
//     if (typeof str !== 'string') {
//         return false;
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             spaces++;
//         }
//     }
//     return spaces;
// }
// var result = countSpaces(' hakvbh njl  jalbxd');
// var result2 = countSpaces(' bkha bjd');
// var result3 = countSpaces('');
// var result4 = countSpaces(' hjhb bjb jbj ');
// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);


// July 6th 2021
// // TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// // Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
// function capitalizeAllNames(arrayOfStrings) {
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//        arrayOfStrings = arrayOfStrings[i].toUpperCase();
//     }
//     console.log(arrayOfStrings);
// }
// capitalizeAllNames(['bill','bob', 'jack']);
//
// // TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
// //  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// // Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
//
// function capitalizeFirstLetter(arrayOfStrings) {
//     arrayOfStrings.forEach(string)
//
// }

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
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}
personOne.getNicelyFormattedFullName = function () {

}
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}
personThree.intro = function () {
    return console.log('Hello, My name is ${} ');
}