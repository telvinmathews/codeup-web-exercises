(function() {
    "use strict";

    /**
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = new Object();
    person.firstName = 'Rick';
    person.lastName = 'Sanchez';

    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from " + person.firstName + " " + person.lastName;
    }
    console.log(person.sayHello());

    /**
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    //shoppers array of objects

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // write a discount function

    function discount() {
        // loop through shoppers array
        // check if each shopper spent > 200
        shoppers.forEach(function (shopper) {
            // if shoppers amount > 200
            // log the amount they spent
            // log they get 12% discount >>> I can make a variable with logic to calculate the discount
            // log the amount after discount >> use .toFixed to round
            if (shopper.amount > 200) {
                console.log(shopper.name + ' ' + 'amount spent $ ' + shopper.amount.toFixed(2));
                console.log('You get a 12% discount!')
                console.log('amount after discount $ ' + (shopper.amount - shopper.amount * .12).toFixed(2));
            }
            if (shopper.amount < 200) {
                console.log('You need to spend $ ' + (200 - shopper.amount).toFixed(2) + " to get a discount!");
            }
        });
    }
    //run program

    discount();


    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // declare books array variable
    //nest an obj inside the array

    var books = [
            {title: 'How To Read A Book' , author: {
            firstName:'Mortimer', lastName: 'Adler'}
            },
            {title: 'The Alchemist' , author: {
            firstName:'Paulo', lastName: 'Coelho'}
            },
            {title: 'How To Win Friends & influence people' , author: {
            firstName:'Dale', lastName: 'Carnegie'}
            },
            {title: 'Word Power Made Easy' , author: {
            firstName:'Norman', lastName: 'Lewis'}
            },
            {title: 'On Writing Well' , author: {
            firstName:'William', lastName: 'Zinsser'}
            }
        ]
    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)


    /**
     *
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // make a for loop to loop through book array

    for (let i = 0; i < books.length; i++) {
        // log book #
        console.log('Book # ' + [i + 1]); // add one to i because the index starts at 0
        // log book title
        console.log('Title: ' + books[i].title);
        // log book Author
        console.log('Author: ' + books[i].author);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // function createBook(title, authorName) {
    //
    //     let books = {title: title, authorName: authorName};
    //     return title + " " + books[0].author.firstName + ", " + books[0].author.lastName;
    // }
    // // Run function
    // //log out put
    // console.log(createBook())

})();