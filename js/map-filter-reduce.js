"use strict";
// alert('js linked!');

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.log(users.filter(function (user) {
    return user.languages.length >= 3;
}));

console.log(users.map(function (user) {
    return user.email;
}));

console.log(users.reduce(function (average, user) {
    return average += user.yearsOfExperience / users.length
},0));

console.log(users.reduce(function (longestEmail, user) {
    let currentEmail = user.email
    if (currentEmail.length > longestEmail.length) {
        return currentEmail;
    } else {
        return longestEmail;
    }
}, users[0].email));

console.log(users.reduce(function (singleString, userName) {
    if (singleString === ` `) {
        return userName.name
    } else {
        return singleString + ' ' + userName.name;
    }
}, ` `));

